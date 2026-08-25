"use client";

// Imports
import { motion } from "motion/react";

// Next
import Image from "next/image"

// Styles
import styles from "@/styles/components/sections/logos/logo-section.module.scss"

export default function LogoItem({ logo, isInView, delay = 0.1 }) {

    return (

        <motion.div
            className={`${styles.logoItem}`}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: delay }}
        >

            <Image src={logo.image} alt={logo.name} width={128} height={128} />

        </motion.div>

    )
}
