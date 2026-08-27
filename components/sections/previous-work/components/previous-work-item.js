"use client";

// React
import { useEffect, useRef, useState } from "react";

// Next
import Image from "next/image";

// Imports
import { motion } from "motion/react";
import { useLenis } from "lenis/react";

// Styles
import styles from "@/styles/components/sections/previous-work/previous-work-section.module.scss";

// Icons
import { playIcon } from "@/utils/icons";

export default function PreviousWorkItem({ data, isInView, index }) {

    const [isOpen, setIsOpen] = useState(false);

    const videoRef = useRef(null);

    const dialogRef = useRef(null);

    const lenis = useLenis();

    useEffect(() => {

        const dialog = dialogRef.current;

        if (!dialog) {

            return;

        }

        if (isOpen && !dialog.open) {

            dialog.showModal();

            return;

        }

        if (!isOpen && dialog.open) {

            dialog.close();

        }

    }, [isOpen]);

    useEffect(() => {

        if (!isOpen) {

            return;

        }

        document.body.style.overflow = "hidden";

        lenis?.stop();

        return () => {

            document.body.style.overflow = "";

            lenis?.start();

        };

    }, [isOpen, lenis]);

    const handleClose = () => {

        const video = videoRef.current;

        if (video) {

            video.pause();

            video.currentTime = 0;

        }

        setIsOpen(false);

    };

    return (

        <>

            <motion.article
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                initial={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                key={data.id}
                className={styles.previousWorkItem}
                onClick={() => setIsOpen(true)}
                aria-label={data.title}
            >

                <div className={styles.previousWorkItemImage}>

                    <Image src={data.poster} alt={data.title} fill sizes="100%" />

                    <button className={`${styles.previousWorkItemPlayButton} colorLight`} dangerouslySetInnerHTML={{ __html: playIcon }} aria-label={`Play ${data.title} video`} />

                </div>

            </motion.article>

            <dialog
                ref={dialogRef}
                className={`dialog ${styles.previousWorkDialog}`}
                onClose={handleClose}
                aria-label={`${data.title} video modal`}
            >

                <div className={`dialogContainer ${styles.previousWorkDialogContainer}`}>

                    <div className={`dialogHeader`}>

                        <button type="button" className={`dialogClose`} onClick={handleClose} aria-label={`Close ${data.title} video modal`} />

                    </div>

                    <div className={`dialogContent ${styles.previousWorkDialogContent}`}>

                        <div className={`dialogVideoContainer`} data-aspect-ratio="16 / 9">

                            <video
                                ref={videoRef}
                                src={data.video}
                                poster={data.poster}
                                playsInline
                                controls
                                preload="none"
                            />

                        </div>

                    </div>

                </div>

                <div className={`dialogBackground`} onClick={handleClose} aria-label={`Close ${data.title} video modal`} />

            </dialog>

        </>

    )
}
