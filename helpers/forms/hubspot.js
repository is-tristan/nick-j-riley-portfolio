const allowedFormIds = [
    "6c85505f-8f36-4de2-8618-47a73caf8144",
    "3db08222-428e-47e7-895d-8a82a8c99686",
    "fefdfc04-baf0-4832-881b-ff5a47ce4a99",
];

const skippedFields = new Set([
    "hubspot-form-id",
    "terms",
    "name",
    "hutk",
    "pageUri",
    "pageName",
]);

const hubspotFormsApiBaseUrl = "https://api.hsforms.com";
const privacyConsentText = "I have read and agree to your privacy policy.";
const fallbackSubmitError = "There was an error submitting your request. Please try again.";

const fieldLabels = {
    firstname: "First name",
    lastname: "Last name",
    email: "Work email",
    phone: "Work phone",
    company: "Company",
    notes: "Message",
    message: "Message",
    product_interest: "Topic",
    hs_role: "Role",
    no__of_locations: "Number of sites",
};

const errorTypeMessages = {
    REQUIRED_FIELD: (fieldLabel) => `${fieldLabel} is required.`,
    INVALID_EMAIL: () => "Please enter a valid work email address.",
    BLOCKED_EMAIL: () => "That email address cannot be used. Please try a different work email.",
    INVALID_NUMBER: (fieldLabel) => `${fieldLabel} must be a valid number.`,
    NUMBER_OUT_OF_RANGE: (fieldLabel) => `${fieldLabel} is outside the allowed range.`,
    INPUT_TOO_LARGE: (fieldLabel) => `${fieldLabel} is too long. Please shorten it and try again.`,
    INVALID_PHONE_NUMBER: () => "Please enter a valid phone number.",
    VALUE_NOT_IN_FIELD_DEFINITION: (fieldLabel) => `Please choose a valid option for ${fieldLabel.toLowerCase()}.`,
    FIELD_NOT_IN_FORM_DEFINITION: (fieldLabel) => `${fieldLabel} is not accepted on this form.`,
};

function parseFieldName(name) {
    if (name.includes("/")) {
        const [objectTypeId, propertyName] = name.split("/");

        return {
            objectTypeId,
            name: propertyName,
        };
    }

    return {
        objectTypeId: "0-1",
        name,
    };
}

function getFieldLabel(fieldName) {
    if (!fieldName) {
        return "This field";
    }

    const propertyName = String(fieldName).includes("/")
        ? String(fieldName).split("/").pop()
        : String(fieldName);

    return fieldLabels[propertyName] || propertyName.replaceAll("_", " ");
}

function buildFields(formData) {
    const fieldsByName = new Map();

    for (const [rawName, value] of formData.entries()) {
        if (skippedFields.has(rawName) || value === "" || value == null) {
            continue;
        }

        const { objectTypeId, name } = parseFieldName(rawName);
        const fieldKey = `${objectTypeId}/${name}`;

        fieldsByName.set(fieldKey, {
            objectTypeId,
            name,
            value: String(value),
        });
    }

    fieldsByName.set("0-1/channel_source", {
        objectTypeId: "0-1",
        name: "channel_source",
        value: "Organic - Website",
    });

    const utmSource = formData.get("utm_source");

    if (utmSource) {
        fieldsByName.set("0-1/channel_source_detail", {
            objectTypeId: "0-1",
            name: "channel_source_detail",
            value: String(utmSource),
        });
    }

    return Array.from(fieldsByName.values());
}

function buildContext(formData, request) {
    const context = {};
    const hutk = formData.get("hutk");
    const pageUri = formData.get("pageUri");
    const pageName = formData.get("pageName");
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ipAddress = forwardedFor ? forwardedFor.split(",")[0].trim() : null;

    if (hutk) {
        context.hutk = String(hutk);
    }

    if (pageUri) {
        context.pageUri = String(pageUri);
    }

    if (pageName) {
        context.pageName = String(pageName);
    }

    if (ipAddress) {
        context.ipAddress = ipAddress;
    }

    return context;
}

function formatHubspotError(error) {
    if (!error || typeof error !== "object") {
        return null;
    }

    const fieldLabel = getFieldLabel(error.name);
    const errorType = error.errorType;
    const typedMessage = errorTypeMessages[errorType];

    if (typeof typedMessage === "function") {
        return typedMessage(fieldLabel);
    }

    if (typeof error.message === "string" && error.message.trim()) {
        return error.message.trim();
    }

    return null;
}

export function getHubspotSubmitErrorMessage(hubspotData, status) {
    if (hubspotData && Array.isArray(hubspotData.errors) && hubspotData.errors.length > 0) {
        const messages = hubspotData.errors
            .map(formatHubspotError)
            .filter(Boolean);

        if (messages.length > 0) {
            return [...new Set(messages)].join(" ");
        }
    }

    if (hubspotData && typeof hubspotData.message === "string" && hubspotData.message.trim()) {
        const message = hubspotData.message.trim();

        if (!/^error$/i.test(message) && !/not valid/i.test(message)) {
            return message;
        }
    }

    if (status === 429) {
        return "Too many submissions right now. Please wait a moment and try again.";
    }

    if (status >= 500) {
        return "The form service is temporarily unavailable. Please try again shortly.";
    }

    return fallbackSubmitError;
}

export async function POST(request) {
    const hubspotApiKey = process.env.HUBSPOT_API_KEY;
    const hubspotPortalId = process.env.HUBSPOT_PORTAL_ID;

    if (!hubspotApiKey || !hubspotPortalId) {
        return Response.json(
            { success: false, message: "Form submissions are temporarily unavailable. Please try again later." },
            { status: 500 },
        );
    }

    let formData;

    try {
        formData = await request.formData();
    } catch {
        return Response.json(
            { success: false, message: "The form data could not be read. Please refresh and try again." },
            { status: 400 },
        );
    }

    const formGuid = formData.get("hubspot-form-id");

    if (!formGuid || !allowedFormIds.includes(String(formGuid))) {
        return Response.json(
            { success: false, message: "This form is not available. Please refresh the page and try again." },
            { status: 400 },
        );
    }

    const fields = buildFields(formData);
    const hasEmail = fields.some((field) => field.name === "email");
    const hasName = fields.some(
        (field) => field.name === "firstname" || field.name === "lastname",
    );

    if (!hasEmail && !hasName) {
        return Response.json(
            { success: false, message: "Please provide a contact email or name before submitting." },
            { status: 400 },
        );
    }

    const payload = {
        fields,
        context: buildContext(formData, request),
    };

    if (formData.get("terms")) {
        payload.legalConsentOptions = {
            consent: {
                consentToProcess: true,
                text: privacyConsentText,
            },
        };
    }

    let hubspotResponse;

    try {
        hubspotResponse = await fetch(
            `${hubspotFormsApiBaseUrl}/submissions/v3/integration/secure/submit/${hubspotPortalId}/${formGuid}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${hubspotApiKey}`,
                },
                body: JSON.stringify(payload),
            },
        );
    } catch {
        return Response.json(
            {
                success: false,
                message: "We could not reach the form service. Please check your connection and try again.",
            },
            { status: 502 },
        );
    }

    let hubspotData = null;

    try {
        hubspotData = await hubspotResponse.json();
    } catch {
        hubspotData = null;
    }

    if (!hubspotResponse.ok) {
        return Response.json(
            {
                success: false,
                message: getHubspotSubmitErrorMessage(hubspotData, hubspotResponse.status),
                errors: hubspotData || null,
            },
            { status: hubspotResponse.status },
        );
    }

    return Response.json({
        success: true,
        ...hubspotData,
    });
}
