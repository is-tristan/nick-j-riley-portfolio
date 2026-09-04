// Next
import Link from "next/link";

// Styles
import styles from "@/styles/components/layouts/footer/footer.module.scss";

// Icons
import { logo, instagramIcon } from "@/utils/icons";

export default function Footer() {

    return (

        <footer id="footer" className={styles.footer} role="contentinfo">

            <div className={`container ${styles.footerContainer}`}>

                <Link href="/" className={styles.footerLogo} aria-label="Home" dangerouslySetInnerHTML={{ __html: logo }} />

                <a
                    href="https://www.instagram.com/nickjriley/"
                    className={styles.footerInstagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >

                    <span className={styles.footerInstagramIcon} dangerouslySetInnerHTML={{ __html: instagramIcon }} />

                    <span>Instagram</span>

                </a>

            </div>

        </footer>

    )

}
