"use client";

// Imports
import { useRef } from "react";
import { useInView } from "motion/react";

// Components
import PreviousWorkItem from "./previous-work-item";

// Data
import { previousWorkData } from "@/data/previous-work-data";

// Styles
import styles from "@/styles/components/sections/previous-work/previous-work-section.module.scss";

export default function PreviousWorkGrid() {

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true, amount: 0.25 });

    return (

        <div className={`${styles.previousWorkGrid}`} ref={ref}>

            {previousWorkData.map((item, index) => (

                <PreviousWorkItem key={item.id} data={item} isInView={isInView} index={index} />

            ))}

        </div>

    )

}
