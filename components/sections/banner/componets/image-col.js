"use client";

// Imports  
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Components
import Image from "next/image";

// Styles
import styles from "@/styles/components/sections/banner.module.scss";

export default function ImageCol({ image, imageSizing, title }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.25 });
    const normalizedImageSizing = imageSizing?.toLowerCase() === "contain" ? "contain" : "cover";
    const imageSizeClassName = normalizedImageSizing === "contain" ? "Contain" : "Fill";

    return (

        <motion.div
            className={`hidden-s hidden-m hidden-l image${imageSizeClassName} ${styles.imageCol}`}
            ref={ref}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
            initial={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.5, delay: 0.25 }}
        >

            <Image className={styles.bannerImage} src={image} alt={title} width={768} height={768} loading="eager" quality={90} sizes="(max-width: 1279px) 100vw, min(50vw, 768px)" style={{ objectFit: normalizedImageSizing }} priority />

        </motion.div>

    )
}