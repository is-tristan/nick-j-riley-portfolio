"use client";

// React
import { useEffect, useState } from "react";

// SEO
import AnalyticsTracking from "@/seo/analytics-tracking";

// Components
import CookieBanner from "./components/cookie-banner";

// Utils
import {
    getCookieConsent,
    hasAnalyticsConsent,
    setCookieConsent,
} from "@/utils/cookie-consent";

export default function CookieConsent() {

    const [preferences, setPreferences] = useState(null);

    const [hasCheckedConsent, setHasCheckedConsent] = useState(false);

    useEffect(() => {

        setPreferences(getCookieConsent());

        setHasCheckedConsent(true);

    }, []);

    const handleConsentSave = (nextPreferences) => {

        const savedPreferences = {
            necessary: true,
            measurement: Boolean(nextPreferences.measurement),
            marketing: Boolean(nextPreferences.marketing),
        };

        setCookieConsent(savedPreferences);

        setPreferences(savedPreferences);

    };

    if (!hasCheckedConsent) {

        return null;

    }

    return (

        <>

            {hasAnalyticsConsent(preferences) ? <AnalyticsTracking /> : null}

            {!preferences ? <CookieBanner onConsentSave={handleConsentSave} /> : null}

        </>

    );

}
