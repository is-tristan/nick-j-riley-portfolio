"use client";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Utils
import { fadeUpHidden, fadeUpVisible } from "@/utils/fade-up";

// Styles
import styles from "@/styles/components/decoration/eyebrow.module.scss";

export default function Eyebrow({
    hasAnimation = true,
    delay = 0.125,
    type = "primary",
    textColor = "primary",
    hasSlash = true,
    text }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.25 });

    return (

        <motion.div className={styles.eyebrow} data-type={type} data-text-color={textColor} ref={ref} animate={hasAnimation ? (isInView ? fadeUpVisible : fadeUpHidden) : fadeUpVisible} initial={hasAnimation ? fadeUpHidden : fadeUpVisible} transition={{ duration: 0.5, delay: delay }}>

            {text && (

                <span className={`${styles.text}`}>

                    {hasSlash ? (

                        <>

                            <span className={styles.slash}>//</span> {text}

                        </>

                    ) : (

                        text

                    )}


                </span>

            )}

        </motion.div>
    )
}