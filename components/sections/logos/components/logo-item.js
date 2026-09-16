"use client";

// Imports
import { motion } from "motion/react";

// Utils
import { fadeUpHidden, fadeUpVisible } from "@/utils/fade-up";

// Next
import Image from "next/image"

// Styles
import styles from "@/styles/components/sections/logos/logo-section.module.scss"

export default function LogoItem({ logo, isInView, delay = 0.1 }) {

    return (

        <motion.div
            className={`${styles.logoItem}`}
            animate={isInView ? fadeUpVisible : fadeUpHidden}
            initial={fadeUpHidden}
            transition={{ duration: 0.5, delay: delay }}
            title={logo.name}
        >

            <Image src={logo.image} alt={logo.name} width={128} height={128} loading="lazy" />

        </motion.div>

    )
}
