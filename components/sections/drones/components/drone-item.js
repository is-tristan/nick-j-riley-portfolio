// Next
import Image from "next/image";

// Motion
import { motion } from "motion/react";

// Styles
import styles from "@/styles/components/sections/drones/drones-section.module.scss";

export default function DroneItem({ isInView, index, data }) {

    return (

        <motion.div
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
            className={styles.droneItem}
        >

            <div className={styles.droneItemImage}>

                <Image src={data.image} alt={data.title} width={192} height={192} loading="lazy" />

            </div>

            <div className={styles.droneItemContent}>

                <h3 className={styles.droneItemTitle}>{data.title}</h3>

                <div className={styles.droneItemMetaItems}>

                    <div className={styles.droneItemMetaItem}>

                        <span className={styles.droneItemMetaLabel}>Flight Time</span>

                        <p className={styles.droneItemMetaValue}>{data.time}</p>

                    </div>

                    <div className={styles.droneItemMetaItem}>

                        <span className={styles.droneItemMetaLabel}>Number of Cycles</span>

                        <p className={styles.droneItemMetaValue}>{data.cycles}</p>

                    </div>

                </div>

            </div>

        </motion.div>


    )

}