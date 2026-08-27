"use client";

// Imports
import { useRef } from "react";
import { useInView } from "motion/react";

// Components
import DroneItem from "./drone-item";

// Data
import { dronesData } from "@/data/drones-data";

// Styles
import styles from "@/styles/components/sections/drones/drones-section.module.scss";

export default function DroneGrid() {

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true, amount: 0.25 });

    return (

        <div className={`${styles.droneGrid}`} ref={ref}>

            {dronesData.map((item, index) => (

                <DroneItem key={item.id} data={item} isInView={isInView} index={index} />

            ))}

        </div>

    )

}
