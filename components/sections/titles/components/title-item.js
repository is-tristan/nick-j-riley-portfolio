"use client";

// Imports
import { motion } from "motion/react";

// Utils
import { fadeUpHidden, fadeUpVisible } from "@/utils/fade-up";

// Next
import Image from "next/image"

// Styles
import styles from "@/styles/components/sections/titles/titles-section.module.scss"

export default function TitleItem({ title, isInView, delay = 0.1 }) {

    const titleName = title.title.trim();

    return (

        <motion.figure
            className={`${styles.titleItem}`}
            animate={isInView ? fadeUpVisible : fadeUpHidden}
            initial={fadeUpHidden}
            transition={{ duration: 0.5, delay: delay }}
        >

            <Image src={title.cover} alt={`${titleName} ${title.type} cover — aerial cinematography by Nick Riley`} width={512} height={768} loading="lazy" />

            <figcaption className={styles.titleCaption}>

                <span className={styles.titleName}>{titleName}</span>

                <span className={styles.titleType}>{title.type}</span>

            </figcaption>

        </motion.figure>

    )
}
