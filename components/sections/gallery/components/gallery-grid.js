"use client";

// Imports
import { useRef } from "react";
import { useInView } from "motion/react";

// Components
import GalleryItem from "./gallery-item";

// Styles
import styles from "@/styles/components/sections/gallery/gallery-section.module.scss"

// Data
import { gallery } from "@/data/gallery-data";

export default function GalleryGrid() {

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true, amount: 0.25 });

    return (

        <div className={`${styles.galleryGrid}`} ref={ref}>

            {gallery.map((image, index) => (

                <GalleryItem key={image.id} image={image} isInView={isInView} delay={0.1 + index * 0.05} />

            ))}

        </div>

    )

}
