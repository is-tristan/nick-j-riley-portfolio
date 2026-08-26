"use client";

// Imports
import { useRef } from "react";
import { useInView } from "motion/react";

// Components
import GalleryItem from "./components/gallery-item";

// Styles
import styles from "@/styles/components/sections/gallery/gallery-section.module.scss"

// Data
import { gallery } from "@/data/gallery-data";

export default function GallerySection() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.25 });

    return (

        <section id="gallery" className={`row borderBottom ${styles.gallerySection}`} ref={ref}>

            <div className={`container`}>

                <div className={`${styles.galleryGrid}`}>

                    {gallery.map((image, index) => (

                        <GalleryItem key={image.id} image={image} isInView={isInView} delay={0.1 + index * 0.05} />

                    ))}

                </div>

            </div>

        </section>

    )

}
