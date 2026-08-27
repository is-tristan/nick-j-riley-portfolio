"use client";

// Imports
import { useRef } from "react";
import { useInView } from "motion/react";

// Components
import LogoItem from "./logo-item";

// Styles
import styles from "@/styles/components/sections/logos/logo-section.module.scss"

// Data
import { logos } from "@/data/logo-data";

export default function LogoGrid() {

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true, amount: 0.25 });

    return (

        <div className={`${styles.logoGrid}`} ref={ref}>

            {logos.map((logo, index) => (

                <LogoItem key={logo.id} logo={logo} isInView={isInView} delay={0.1 + index * 0.05} />

            ))}

        </div>

    )

}
