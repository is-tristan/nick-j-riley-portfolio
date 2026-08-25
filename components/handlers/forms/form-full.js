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

export default function FormFull({
    formName = "Full Form",
    theme = "primary",
    hasDemoLink = true,
    formBtnText = "Send message",
    hasAnimation = true,
    formId = "3db08222-428e-47e7-895d-8a82a8c99686",
    utmMedium = "Get a demo",
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

            <form className={`${styles.form}`} data-theme={theme} data-hs-do-not-collect="true" onSubmit={onSubmit}>

                <input type="hidden" name="hubspot-form-id" value={formId} />

                <input type="hidden" name="utm_source" value={`${process.env.NEXT_PUBLIC_SITE_URL}${pathname} | Sales Inquiry`} />

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

                <fieldset className={`${styles.fieldset} ${styles.half}`} data-name="phone">

                    <legend className={styles.legend}>Work Phone (optional)</legend>

                    <div className={styles.field}>

                        <input type="tel" name="phone" autoComplete="tel" placeholder="Only if you would prefer a call." />

                    </div>

                </fieldset>

                <fieldset className={`${styles.fieldset} ${styles.half}`} data-name="company">

                    <legend className={styles.legend}>Company <span className={styles.required}>*</span></legend>

                    <div className={styles.field}>

                        <input type="text" name="company" required autoComplete="company" placeholder="The business or group you run." aria-required="true" />

                    </div>

                </fieldset>

                <fieldset className={`${styles.fieldset} ${styles.half}`} data-name="product_interest">

                    <legend className={styles.legend}>What is this about? <span className={styles.required}>*</span></legend>

                    <div className={styles.field}>

                        <select name="product_interest" required defaultValue="" aria-required="true" aria-label="What is this about?">

                            <option value="" disabled>Select a topic</option>

                            <option value="Audits">Audits</option>

                            <option value="feedback_solutions">Feedback Solutions</option>

                            <option value="Client connect">Client Connect</option>

                            <option value="martyns_law_app">Martyn's Law App</option>

                            <option value="mystery_shopping_b2b">Mystery Shopping B2B</option>

                            <option value="Becoming a mystery shopper">Customer Satisfaction Surveys</option>

                            <option value="Tablet">Tablet</option>

                            <option value="Bundle">Bundle</option>

                            <option value="Other">Other</option>

                        </select>

                    </div>

                </fieldset>

                <fieldset className={`${styles.fieldset} ${styles.half}`} data-name="hs_role">

                    <legend className={styles.legend}>Your role <span className={styles.required}>*</span></legend>

                    <div className={styles.field}>

                        <select name="hs_role" required defaultValue="" aria-required="true" aria-label="Your role">

                            <option value="" disabled>Select a role</option>

                            <option value="accounting">Accounting</option>

                            <option value="administrative">Administrative</option>

                            <option value="business_development">Business Development</option>

                            <option value="communications">Communications</option>

                            <option value="consulting">Consulting</option>

                            <option value="customer_service">Customer Service</option>

                            <option value="design">Design</option>

                            <option value="education">Education</option>

                            <option value="engineering">Engineering</option>

                            <option value="entrepreneurship">Entrepreneurship</option>

                            <option value="finance">Finance</option>

                            <option value="health_professional">Health Professional</option>

                            <option value="human_resources">Human Resources</option>

                            <option value="information_technology">Information Technology</option>

                            <option value="legal">Legal</option>

                            <option value="marketing">Marketing</option>

                            <option value="operations">Operations</option>

                            <option value="product">Product</option>

                            <option value="project_management">Project Management</option>

                            <option value="public_relations">Public Relations</option>

                            <option value="quality_assurance">Quality Assurance</option>

                            <option value="real_estate">Real Estate</option>

                            <option value="recruiting">Recruiting</option>

                            <option value="research">Research</option>

                            <option value="retired">Retired</option>

                            <option value="sales">Sales</option>

                            <option value="support">Support</option>

                        </select>

                    </div>

                </fieldset>

                <fieldset className={`${styles.fieldset} ${styles.half}`} data-name="no__of_locations">

                    <legend className={styles.legend}>Number of sites <span className={styles.required}>*</span></legend>

                    <div className={styles.field}>

                        <input type="number" min="1" name="0-2/no__of_locations" required autoComplete="false" placeholder="How many locations you operate." aria-required="true" />

                    </div>

                </fieldset>

                <fieldset className={styles.fieldset} data-name="message">

                    <legend className={styles.legend}>Your message <span className={styles.required}>*</span></legend>

                    <div className={styles.field}>

                        <textarea name="message" required placeholder="A line or two on how we can help." aria-required="true" />

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

                        <span style={{ color: theme === "primary" ? "var(--light)" : "var(--dark)" }}>No obligation. We will not pass your details on.</span>

                    </div>

                    <div className={styles.result}>

                        <span>{result}</span>

                    </div>

                </div>

            </form>

        </motion.div>

    );

}
