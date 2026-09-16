"use client";

// React
import { useEffect } from "react";

// Next
import Link from "next/link";

// Lenis
import { useLenis } from "lenis/react";

// Styles
import styles from "@/styles/components/layouts/header/header-menu.module.scss";

// Data
import { menuItemsData as data } from "@/components/layouts/header/items/menu-items-data";

// Icons
import { logo, closeIcon } from "@/utils/icons";

export default function HeaderMenu({ isOpen = false, onClose }) {

    const lenis = useLenis();

    const handleLinkClick = (event, href) => {

        event.preventDefault();

        onClose();

        if (!href.startsWith("#")) {

            return;

        }

        const scrollToTarget = () => {

            if (lenis) {

                lenis.scrollTo(href, { offset: -80 });

                return;

            }

            const target = document.querySelector(href);

            if (target) {

                target.scrollIntoView({ behavior: "smooth" });

            }

        };

        window.setTimeout(scrollToTarget, 150);

    };

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

    return (

        <>

            <div className={`${styles.menu}`} data-toggled={isOpen} role="navigation" data-name="menu" aria-hidden={!isOpen}>

                <div className={styles.menuHeader}>

                    <Link href="/" className={styles.menuLogo} aria-label="Nick Riley — home" dangerouslySetInnerHTML={{ __html: logo }} />

                    <button type="button" className={`${styles.menuToggle} ${styles.menuClose}`} onClick={onClose} aria-label="Close menu" dangerouslySetInnerHTML={{ __html: closeIcon }} />

                </div>

                <nav className={styles.menuItems}>

                    {data.map((item) => (

                        <a
                            key={item.label}
                            href={item.href}
                            className={styles.menuItemLink}
                            onClick={(event) => handleLinkClick(event, item.href)}
                        >

                            {item.label}

                        </a>

                    ))}

                </nav>

            </div>

            <div className={styles.menuBackdrop} onClick={onClose} data-toggled={isOpen} aria-hidden={!isOpen} />

        </>

    )

}
