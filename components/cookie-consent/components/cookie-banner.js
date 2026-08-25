"use client";

// React
import { useState } from "react";

// Components
import CookieOverlay from "./cookie-overlay";

// Styles
import styles from "@/styles/components/cookie-consent/cookie-banner.module.scss";

export default function CookieBanner({ onConsentSave }) {

    const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

    const handleAcceptAll = () => {

        onConsentSave({
            necessary: true,
            measurement: true,
            marketing: true,
        });

    };

    return (

        <>

            <div className={styles.cookieBanner}>

                <div className={styles.cookieBannerContainer}>

                    <p>We use cookies to ensure you get the best experience on our website. By clicking "Accept all", you agree to the use of cookies.</p>

                    <div className={`buttons ${styles.cookieOverlayButtons}`}>

                        <button
                            type="button"
                            className={`btn primary ${styles.btnAccept}`}
                            onClick={handleAcceptAll}
                        >

                            Accept all

                        </button>

                        <button
                            type="button"
                            className={`btn ${styles.btnManage}`}
                            onClick={() => setIsPreferencesOpen(true)}
                        >

                            Manage preferences

                        </button>

                    </div>

                </div>

            </div>

            <CookieOverlay
                isOpen={isPreferencesOpen}
                onClose={() => setIsPreferencesOpen(false)}
                onConsentSave={onConsentSave}
            />

        </>

    );

}
