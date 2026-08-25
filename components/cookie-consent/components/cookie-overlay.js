"use client";

// React
import { useEffect, useRef, useState } from "react";

// Styles
import styles from "@/styles/components/cookie-consent/cookie-preferences.module.scss";

// Icons
import { closeIcon } from "@/utils/icons";

// Utils
import { defaultCookiePreferences } from "@/utils/cookie-consent";

export default function CookieOverlay({ isOpen, onClose, onConsentSave }) {

    const dialogRef = useRef(null);

    const [preferences, setPreferences] = useState(defaultCookiePreferences);

    useEffect(() => {

        const dialog = dialogRef.current;

        if (!dialog) {

            return;

        }

        if (isOpen && !dialog.open) {

            setPreferences(defaultCookiePreferences);

            dialog.showModal();

            return;

        }

        if (!isOpen && dialog.open) {

            dialog.close();

        }

    }, [isOpen]);

    const handleToggle = (name) => {

        if (name === "necessary") {

            return;

        }

        setPreferences((currentPreferences) => ({
            ...currentPreferences,
            [name]: !currentPreferences[name],
        }));

    };

    const handleSavePreferences = () => {

        onConsentSave(preferences);

        onClose();

    };

    const handleRejectAll = () => {

        onConsentSave({
            necessary: true,
            measurement: false,
            marketing: false,
        });

        onClose();

    };

    return (

        <dialog
            ref={dialogRef}
            className={styles.cookiePreferences}
            onClose={onClose}
        >

            <div className={styles.cookiePreferencesContainer}>

                <div className={styles.cookiePreferencesHeader}>

                    <h2>Cookie Preferences</h2>

                    <button
                        type="button"
                        className={styles.cookiePreferencesClose}
                        dangerouslySetInnerHTML={{ __html: closeIcon }}
                        onClick={onClose}
                        aria-label="Close cookie preferences"
                    />

                </div>

                <div className={styles.cookieItemContent}>

                    <div className={styles.cookieItem} data-name="necessary">

                        <h3>Necessary</h3>

                        <p>These cookies are essential in order to use the website and use its features.</p>

                        <div className={styles.cookieItemToggle}>

                            <input
                                type="checkbox"
                                name="necessary"
                                id="necessary"
                                checked
                                disabled
                                readOnly
                            />

                        </div>

                    </div>

                    <div className={styles.cookieItem} data-name="measurement">

                        <h3>Measurement</h3>

                        <p>These cookies are used to measure the performance of the website and help us improve it.</p>

                        <div className={styles.cookieItemToggle}>

                            <input
                                type="checkbox"
                                name="measurement"
                                id="measurement"
                                checked={preferences.measurement}
                                onChange={() => handleToggle("measurement")}
                            />

                        </div>

                    </div>

                    <div className={styles.cookieItem} data-name="marketing">

                        <h3>Marketing</h3>

                        <p>These cookies are used to track your activity on the website and to personalize the content and ads you see.</p>

                        <div className={styles.cookieItemToggle}>

                            <input
                                type="checkbox"
                                name="marketing"
                                id="marketing"
                                checked={preferences.marketing}
                                onChange={() => handleToggle("marketing")}
                            />

                        </div>

                    </div>

                </div>

                <div className={styles.cookieItemFooter}>

                    <div className="buttons">

                        <button
                            type="button"
                            className={`btn primary ${styles.save}`}
                            onClick={handleSavePreferences}
                        >

                            Save preferences

                        </button>

                        <button
                            type="button"
                            className={`btn textLink ${styles.manage}`}
                            onClick={handleRejectAll}
                        >

                            Reject all

                        </button>

                    </div>

                </div>

            </div>

        </dialog>

    );

}
