"use client";

// Imports
import { motion } from "motion/react";

// Next
import Image from "next/image"

// Styles
import styles from "@/styles/components/sections/titles/titles-section.module.scss"

export default function TitleItem({ title, isInView, delay = 0.1 }) {

    return (

        <motion.div
            className={`${styles.titleItem}`}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: delay }}
            title={title.title}
        >

            <Image src={title.cover} alt={title.title} width={512} height={768} loading="lazy" />

        </motion.div>

    )
}
