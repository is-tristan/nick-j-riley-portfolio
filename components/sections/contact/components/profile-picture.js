"use client";

// Motion
import { motion } from "motion/react";

// Next
import Image from "next/image";

// Styles
import styles from "@/styles/components/sections/contact/contact-section.module.scss";

// Image
const profilePicture = "/profile-picture/nick-profile-image.png";

export default function ProfilePicture({ isInView }) {

    return (

        <motion.div
            className={styles.profilePicture}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >

            <Image src={profilePicture} alt="An image of Nick Riley flying a drone" width={128} height={128} />

        </motion.div>

    )

}