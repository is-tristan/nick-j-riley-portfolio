"use client";

// React
import { useState } from "react";

// Motion
import { motion } from "motion/react";

// Styles
import styles from "@/styles/components/handlers/form.module.scss";

export default function Form({ isInView }) {

    const [result, setResult] = useState("");

    const [preferredContact, setPreferredContact] = useState("email");

    const onSubmit = async (event) => {

        event.preventDefault();

        setResult("Sending...");

        const formData = new FormData(event.target);

        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        formData.append("subject", "New enquiry from Nick Riley portfolio");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {

            setResult("Your message has been sent. Nick will get back to you soon.");

            event.target.reset();

            setPreferredContact("email");

        } else {

            setResult("There was an error submitting your request. Please try again.");

        }

    };

    return (

        <motion.div
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`${styles.formContainer}`}
        >

            <form className={`${styles.form}`} onSubmit={onSubmit}>

                <input type="checkbox" name="botcheck" className={styles.botcheck} tabIndex={-1} autoComplete="off" />

                <fieldset className={`${styles.fieldset}`} data-name="name">

                    <legend className={styles.legend}>Full name <span className={styles.required}>*</span></legend>

                    <div className={styles.field}>

                        <input type="text" name="name" required autoComplete="name" placeholder="Full name" aria-required="true" />

                    </div>

                </fieldset>

                <fieldset className={`${styles.fieldset}`} data-name="preferredContact">

                    <legend className={styles.legend}>Preferred contact method <span className={styles.required}>*</span></legend>

                    <div className={styles.radioGroup}>

                        <label className={styles.radioOption}>

                            <input
                                type="radio"
                                name="preferredContact"
                                value="email"
                                checked={preferredContact === "email"}
                                onChange={() => setPreferredContact("email")}
                            />

                            <span>Email</span>

                        </label>

                        <label className={styles.radioOption}>

                            <input
                                type="radio"
                                name="preferredContact"
                                value="phone"
                                checked={preferredContact === "phone"}
                                onChange={() => setPreferredContact("phone")}
                            />

                            <span>Phone</span>

                        </label>

                        <label className={styles.radioOption}>

                            <input
                                type="radio"
                                name="preferredContact"
                                value="whatsapp"
                                checked={preferredContact === "whatsapp"}
                                onChange={() => setPreferredContact("whatsapp")}
                            />

                            <span>WhatsApp</span>

                        </label>

                    </div>

                </fieldset>

                {preferredContact === "email" && (

                    <fieldset className={`${styles.fieldset}`} data-name="email">

                        <legend className={styles.legend}>Email <span className={styles.required}>*</span></legend>

                        <div className={styles.field}>

                            <input type="email" name="email" required autoComplete="email" placeholder="Email" aria-required="true" />

                        </div>

                    </fieldset>

                )}

                {preferredContact === "phone" && (

                    <fieldset className={`${styles.fieldset}`} data-name="phone">

                        <legend className={styles.legend}>Phone <span className={styles.required}>*</span></legend>

                        <div className={styles.field}>

                            <input type="tel" name="phone" required autoComplete="tel" placeholder="Phone" aria-required="true" />

                        </div>

                    </fieldset>

                )}

                {preferredContact === "whatsapp" && (

                    <fieldset className={`${styles.fieldset}`} data-name="whatsapp">

                        <legend className={styles.legend}>WhatsApp <span className={styles.required}>*</span></legend>

                        <div className={styles.field}>

                            <input type="tel" name="whatsapp" required autoComplete="tel" placeholder="WhatsApp number" aria-required="true" />

                        </div>

                    </fieldset>

                )}

                <fieldset className={`${styles.fieldset}`} data-name="projectType">

                    <legend className={styles.legend}>Project type <span className={styles.required}>*</span></legend>

                    <div className={styles.field}>

                        <select name="projectType" required defaultValue="" aria-required="true" aria-label="Project type">

                            <option value="" disabled>Project type</option>

                            <option value="Advertisement">Advertisement</option>

                            <option value="TV Series">TV Series</option>

                            <option value="Film">Film</option>

                            <option value="Music Video">Music Video</option>

                            <option value="Documentary">Documentary</option>

                            <option value="Corporate">Corporate</option>

                            <option value="Other">Other</option>

                        </select>

                    </div>

                </fieldset>

                <fieldset className={styles.fieldset} data-name="message">

                    <legend className={styles.legend}>Message <span className={styles.required}>*</span></legend>

                    <div className={styles.field}>

                        <textarea name="message" required placeholder="Message" aria-required="true" />

                    </div>

                </fieldset>

                <div className={styles.formFooter}>

                    <div className={`buttons`}>

                        <button className={styles.submit} type="submit" style={{ width: "100%" }}>Send message</button>

                    </div>

                    <div className={styles.result}>

                        <span>{result}</span>

                    </div>

                </div>

            </form>

        </motion.div>

    );

}
