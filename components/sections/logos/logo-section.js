"use client";

// Imports
import { useRef } from "react";
import { useInView } from "motion/react";

// Components
import LogoItem from "./components/logo-item";
import Eyebrow from "@/components/decoration/eyebrow";

// Styles
import styles from "@/styles/components/sections/logos/logo-section.module.scss"

// Data
import { logos } from "@/data/logo-data";

export default function LogoSection() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.25 });

    return (

        <section id="logos" className={`row borderBottom ${styles.logoSection}`} ref={ref}>

            <div className={`container`}>

                <div className={`contentContainer`} data-alignment="centered">

                    <Eyebrow text="Brands I've Worked With" type={"large"} />

                </div>

                <div className={`${styles.logoGrid}`}>

                    {logos.map((logo, index) => (

                        <LogoItem key={logo.id} logo={logo} isInView={isInView} delay={0.1 + index * 0.05} />

                    ))}

                </div>

            </div>

        </section>

    )

}
