"use client";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Utils
import { fadeUpHidden, fadeUpVisible } from "@/utils/fade-up";

// Next
import Link from "next/link";

// Icons
import { arrowRightShort } from "@/utils/icons";

export default function Button({
    text,
    href = "#",
    target = "_self",
    className = "primary",
    hasAnimation = true,
    icon = arrowRightShort,
    dataName = undefined,
    delay = 0.25
}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (

        <motion.div ref={ref} animate={hasAnimation ? (isInView ? fadeUpVisible : fadeUpHidden) : fadeUpVisible} initial={hasAnimation ? fadeUpHidden : fadeUpVisible} transition={{ duration: 0.5, delay: delay }}>

            <Link href={href} target={target} className={`btn ${className}`} data-name={dataName}>

                <span>{text}</span>

                {icon && (<div className={"icon"} dangerouslySetInnerHTML={{ __html: icon }} />)}

            </Link>

        </motion.div>

    )

}