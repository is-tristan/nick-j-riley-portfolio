// Next
import Link from "next/link";

// Components
import FooterLogo from "./footer-logo";
import FooterContactItems from "./footer-contact-items";
import FooterSocialItems from "./footer-social-items";

// Styles
import styles from "@/styles/components/layouts/footer/footer.module.scss";

// Data
import { company, solutions, products, explore } from "../items/footer-items-data";

export default function FooterItems() {

    const footerItems = [company, solutions, products, explore];

    return (

        <div className={styles.footerCols}>

            <FooterLogo />

            {
                footerItems.map((item, index) => (

                    <div className={`${styles.footerCol} ${styles[`footerCol-${index + 1}`]}`} key={item.title}>

                        <span className={styles.footerColTitle}>{item.title}</span>

                        <div className={styles.footerColItems}>

                            {item.items.map((item) => (

                                <Link href={item.href} key={item.label}>{item.label}</Link>

                            ))}

                        </div>

                    </div>
                ))
            }

            <div className={`${styles.footerCol} ${styles.footerColContact}`}>

                <span className={styles.footerColTitle}>Contact Us</span>

                <FooterContactItems />

                <FooterSocialItems />

            </div>

        </div>

    )

}