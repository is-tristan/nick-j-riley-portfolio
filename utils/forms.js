export function getCookie(name) {
    if (typeof document === "undefined") {
        return "";
    }

    const cookieEntry = document.cookie
        .split("; ")
        .find((entry) => entry.startsWith(`${name}=`));

    if (!cookieEntry) {
        return "";
    }

    return decodeURIComponent(cookieEntry.slice(name.length + 1));
}

export function appendHubspotContext(formData) {
    formData.set("pageUri", window.location.href);
    formData.set("pageName", document.title);

    const hutk = getCookie("hubspotutk");

    if (hutk) {
        formData.set("hutk", hutk);
    }

    return formData;
}

const fallbackFormError = "There was an error submitting your request. Please try again.";

export function getFormSubmitErrorMessage(data) {
    if (data && typeof data.message === "string" && data.message.trim()) {
        return data.message.trim();
    }

    if (data && Array.isArray(data.errors) && data.errors.length > 0) {
        const messages = data.errors
            .map((error) => {
                if (typeof error === "string") {
                    return error.trim();
                }

                if (error && typeof error.message === "string") {
                    return error.message.trim();
                }

                return "";
            })
            .filter(Boolean);

        if (messages.length > 0) {
            return [...new Set(messages)].join(" ");
        }
    }

    return fallbackFormError;
}

export async function submitHubspotForm(formData) {
    let response;

    try {
        response = await fetch("/api/forms/hubspot", {
            method: "POST",
            body: formData,
        });
    } catch {
        return {
            success: false,
            message: "We could not connect to the server. Please check your connection and try again.",
        };
    }

    let data = null;

    try {
        data = await response.json();
    } catch {
        return {
            success: false,
            message: "We received an unexpected response from the server. Please try again.",
        };
    }

    if (data?.success) {
        return {
            success: true,
            data,
        };
    }

    return {
        success: false,
        message: getFormSubmitErrorMessage(data),
        data,
    };
}
