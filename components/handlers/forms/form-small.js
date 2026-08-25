"use client";

// React
import { useState, useRef } from "react";

// Motion
import { motion, useInView } from "motion/react";

// Next
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

// Styles
import styles from "@/styles/components/handlers/form.module.scss";

// Icons
import { shieldTick } from "@/utils/icons";

// Utils
import { appendHubspotContext, submitHubspotForm } from "@/utils/forms";

export default function FormSmall({
    theme = "primary",
    hasDemoLink = true,
    formBtnText = "Send message",
    formTitle = null,
    formSmallText = "No obligation. We will not pass your details on.",
    hasAnimation = true,
    formId = "6c85505f-8f36-4de2-8618-47a73caf8144",
    utmMedium = "Contact Us",
}) {
    const [result, setResult] = useState("");
    const pathname = usePathname();
    const router = useRouter();

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        appendHubspotContext(formData);

        const submission = await submitHubspotForm(formData);

        if (submission.success) {
            router.push("/thank-you");
            return;
        }

        setResult(submission.message);
    };

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.33 });

    return (

        <motion.div
            ref={ref}
            animate={hasAnimation ? (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }) : { opacity: 1, y: 0 }}
            initial={hasAnimation ? { opacity: 0, y: 16 } : { opacity: 1, y: 0 }}
            transition={hasAnimation ? { duration: 0.5, delay: 0.5 } : undefined}
            className={`${styles.formContainer}`}
        >

            {formTitle && (<span className={styles.formTitle}>{formTitle}</span>)}

            <form className={`${styles.form}`} data-theme={theme} data-hs-do-not-collect="true" onSubmit={onSubmit}>

                <input type="hidden" name="hubspot-form-id" value={formId} />

                <input type="hidden" name="utm_source" value={`${process.env.NEXT_PUBLIC_SITE_URL}${pathname} | New LP Forms`} />

                <input type="hidden" name="utm_medium" value={utmMedium} />

                <fieldset className={`${styles.fieldset} ${styles.half}`} data-name="firstname">

                    <legend className={styles.legend}>First Name <span className={styles.required}>*</span></legend>

                    <div className={styles.field}>

                        <input type="text" name="firstname" required autoComplete="given-name" placeholder="Your first name." aria-required="true" />

                    </div>

                </fieldset>

                <fieldset className={`${styles.fieldset} ${styles.half}`} data-name="lastname">

                    <legend className={styles.legend}>Last Name <span className={styles.required}>*</span></legend>

                    <div className={styles.field}>

                        <input type="text" name="lastname" required autoComplete="family-name" placeholder="Your last name." aria-required="true" />

                    </div>

                </fieldset>

                <fieldset className={`${styles.fieldset} ${styles.half}`} data-name="email">

                    <legend className={styles.legend}>Work Email <span className={styles.required}>*</span></legend>

                    <div className={styles.field}>

                        <input type="email" name="email" required autoComplete="email" placeholder="Where we will send our reply." aria-required="true" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />

                    </div>

                </fieldset>

                <fieldset className={`${styles.fieldset} ${styles.half}`} data-name="company">

                    <legend className={styles.legend}>Company <span className={styles.required}>*</span></legend>

                    <div className={styles.field}>

                        <input type="text" name="company" required autoComplete="company" placeholder="The business or group you run." aria-required="true" />

                    </div>

                </fieldset>

                <fieldset className={`${styles.fieldset}`} data-name="notes">

                    <legend className={styles.legend}>What is this about? <span className={styles.required}>*</span></legend>

                    <div className={styles.field}>

                        <select name="notes" required defaultValue="" aria-required="true" aria-label="What is this about?">

                            <option value="" disabled>Select a topic</option>

                            <option value="Demo">Demo</option>

                            <option value="Sales">Sales</option>

                            <option value="Support">Support</option>

                            <option value="Something else">Something else</option>

                        </select>

                    </div>

                </fieldset>

                <fieldset className={styles.fieldset} data-name="notes">

                    <legend className={styles.legend}>Your message <span className={styles.required}>*</span></legend>

                    <div className={styles.field}>

                        <textarea name="notes" required placeholder="A line or two on how we can help." aria-required="true" />

                    </div>

                </fieldset>

                <fieldset className={`${styles.fieldset} ${styles.consent}`} data-name="terms">

                    <legend className={styles.legend}>Consent <span className={styles.required}>*</span></legend>

                    <div className={styles.field}>

                        <input type="checkbox" name="terms" id="terms" required aria-required="true" />

                        <label htmlFor="terms" style={{ color: theme === "primary" ? "var(--light)" : "var(--dark)" }}>I have read and agree to your <Link href="/legal/privacy-policy" target="_blank" className={theme === "primary" ? "colorSecondary" : "colorPrimaryAlt"} style={{ textDecoration: "underline" }}>privacy policy</Link>.</label>

                    </div>

                </fieldset>

                <div className={styles.formFooter}>

                    <div className={`buttons`} style={{ gap: "1rem" }}>

                        <button style={{ width: hasDemoLink ? "auto" : "100%" }} className={styles.submit} type="submit">{formBtnText}</button>

                        {hasDemoLink && (<Link href="/get-a-demo" className={`textLink ${styles.demoLink}`}>Or, book a demo</Link>)}

                    </div>

                    <div className={styles.formFooterText}>

                        <div style={{ color: theme === "primary" ? "var(--light)" : "var(--primaryAlt)" }} className={styles.formFooterTextIcon} dangerouslySetInnerHTML={{ __html: shieldTick }} />

                        {formSmallText && <span style={{ color: theme === "primary" ? "var(--light)" : "var(--dark)" }}>{formSmallText}</span>}

                    </div>

                    <div className={styles.result}>

                        <span>{result}</span>

                    </div>

                </div>

            </form>

        </motion.div>

    );

}
