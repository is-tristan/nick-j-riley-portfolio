"use client";

// Imports
import { useRef } from "react";
import { useInView } from "motion/react";

// Components
import TitleItem from "./title-item";

// Styles
import styles from "@/styles/components/sections/titles/titles-section.module.scss"

// Data
import { titlesData } from "@/data/titles-data";

export default function TitleGrid() {

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true, amount: 0.25 });

    return (

        <div className={`borderLeft ${styles.titleGrid}`} ref={ref}>

            {titlesData.map((title, index) => (

                <TitleItem key={title.id} title={title} isInView={isInView} delay={0.1 + index * 0.025} />

            ))}

        </div>

    )

}
