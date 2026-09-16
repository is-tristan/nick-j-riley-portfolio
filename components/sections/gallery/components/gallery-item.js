"use client";

// Imports
import { motion } from "motion/react";

// Utils
import { fadeUpHidden, fadeUpVisible } from "@/utils/fade-up";

// Next
import Image from "next/image"

// Styles
import styles from "@/styles/components/sections/gallery/gallery-section.module.scss"

export default function GalleryItem({ image, isInView, delay = 0.1 }) {

    return (

        <motion.div
            className={`${styles.galleryItem}`}
            animate={isInView ? fadeUpVisible : fadeUpHidden}
            initial={fadeUpHidden}
            transition={{ duration: 0.5, delay: delay }}
        >

            <Image src={image.image} alt={image.alt} width={384} height={683} loading="lazy" />

        </motion.div>

    )
}
