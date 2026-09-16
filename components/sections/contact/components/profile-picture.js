"use client";

// Motion
import { motion } from "motion/react";

// Utils
import { fadeUpHidden, fadeUpVisible } from "@/utils/fade-up";

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
            animate={isInView ? fadeUpVisible : fadeUpHidden}
            initial={fadeUpHidden}
            transition={{ duration: 0.5, delay: 0.075 }}
        >

            <Image src={profilePicture} alt="An image of Nick Riley flying a drone" width={128} height={128} />

        </motion.div>

    )

}