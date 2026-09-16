"use client";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Utils
import { fadeUpHidden, fadeUpVisible } from "@/utils/fade-up";

// Components
import Button from "../handlers/buttons";

export default function Heading({
    hasAnimation = true,
    className = undefined,
    titleClass = undefined,
    contentClass = undefined,
    alignment = "default",
    title = null,
    titleTag = "h2",
    descriptionTag = "p",
    description = null,
    descriptionClass = undefined,
    htmlDescription = null,
    btnTextPrimary,
    btnLinkPrimary = "#",
    btnClassPrimary = "primary",
    btnTargetPrimary = "_self",
    btnTextSecondary,
    btnLinkSecondary = "#",
    btnClassSecondary = "transparentDark",
    btnTargetSecondary = "_self"
}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const normalizedDescription = typeof description === "string"
        ? description.trim()
        : "";
    const descriptionContent = (() => {
        if (!normalizedDescription) {
            return normalizedDescription;
        }

        if (descriptionTag === "p") {
            return normalizedDescription.replace(/^<p[^>]*>/i, "").replace(/<\/p>$/i, "").trim();
        }

        if (descriptionTag === "ul") {
            return normalizedDescription.replace(/^<ul[^>]*>/i, "").replace(/<\/ul>$/i, "").trim();
        }

        return normalizedDescription;
    })();

    return (

        <div ref={ref} className={`innerContent ${className}`} data-alignment={alignment}>

            {title && (

                <motion.div
                    animate={hasAnimation ? (isInView ? fadeUpVisible : fadeUpHidden) : fadeUpVisible}
                    initial={hasAnimation ? fadeUpHidden : fadeUpVisible}
                    transition={hasAnimation ? { duration: 0.5, delay: 0.5 } : undefined}
                    className={`heading`}
                >

                    {(() => {
                        switch (titleTag) {
                            case "h1":
                                return <h1 className={titleClass} dangerouslySetInnerHTML={{ __html: title }} />;
                            case "h2":
                                return <h2 className={titleClass} dangerouslySetInnerHTML={{ __html: title }} />;
                            case "h3":
                                return <h3 className={titleClass} dangerouslySetInnerHTML={{ __html: title }} />;
                            case "h4":
                                return <h4 className={titleClass} dangerouslySetInnerHTML={{ __html: title }} />;
                            case "h5":
                                return <h5 className={titleClass} dangerouslySetInnerHTML={{ __html: title }} />;
                            case "h6":
                                return <h6 className={titleClass} dangerouslySetInnerHTML={{ __html: title }} />;
                            default:
                                return null;
                        }
                    })()}

                </motion.div>

            )}

            {(description || htmlDescription) && (

                <motion.div
                    animate={hasAnimation ? (isInView ? fadeUpVisible : fadeUpHidden) : fadeUpVisible}
                    initial={hasAnimation ? fadeUpHidden : fadeUpVisible}
                    transition={hasAnimation ? { duration: 0.5, delay: 0.66 } : undefined}
                    className={contentClass}
                >

                    {description && (() => {
                        switch (descriptionTag) {
                            case "p":
                                return <p className={descriptionClass} dangerouslySetInnerHTML={{ __html: descriptionContent }} />;
                            case "ul":
                                return <ul className={descriptionClass} dangerouslySetInnerHTML={{ __html: descriptionContent }} />;
                            default:
                                return null;
                        }

                    })()}

                    {htmlDescription && (<div className={descriptionClass} dangerouslySetInnerHTML={{ __html: htmlDescription }} />)}

                </motion.div>

            )}

            {btnTextPrimary || btnTextSecondary && (

                <motion.div
                    className="buttons"
                    animate={isInView ? fadeUpVisible : fadeUpHidden}
                    initial={fadeUpHidden}
                    transition={{ duration: 0.5, delay: description || htmlDescription ? 0.5 : 0.25 }}
                >

                    {btnTextPrimary && (<Button text={btnTextPrimary} href={btnLinkPrimary} target={btnTargetPrimary} className={btnClassPrimary} />)}

                    {btnTextSecondary && (<Button text={btnTextSecondary} href={btnLinkSecondary} target={btnTargetSecondary} className={btnClassSecondary} />)}

                </motion.div>

            )}

        </div>

    )

}