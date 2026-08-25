// Next
import Link from "next/link";

// Styles
import styles from "@/styles/components/layouts/footer/footer-contact-items.module.scss";

// Data
import { footerContactItems } from "../items/footer-items-data";

export default function FooterContactItems() {

    const contactItems = Object.values(footerContactItems);

    return (

        <>

            {contactItems.length > 0 && (

                <div className={styles.footerContactItems}>

                    {contactItems.map((item, index) => (

                        <Link
                            key={index}
                            href={item.href ?? "#"}
                            className={styles.footerContactItem}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ pointerEvents: item.href ? "auto" : "none", cursor: item.href ? "pointer" : "default" }}
                        >

                            <div className={styles.footerContactItemIcon} dangerouslySetInnerHTML={{ __html: item.icon }} />

                            <div className={styles.footerContactItemText}>

                                <span className={styles.footerContactItemTextLabel}>{item.label}</span>

                                <span className={styles.footerContactItemTextValue}>{item.text}</span>

                            </div>

                        </Link>

                    ))}

                </div>

            )}

        </>
    )

}