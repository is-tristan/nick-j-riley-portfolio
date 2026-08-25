// Next
import Link from "next/link";

// Styles
import styles from "@/styles/components/layouts/footer/footer-social-items.module.scss";

// Data
import { footerSocialItems } from "../items/footer-items-data";

export default function FooterSocialItems() {

    const socialItems = Object.values(footerSocialItems);

    return (

        <>

            {socialItems.length > 0 && (

                <div className={styles.footerSocialItems}>

                    {socialItems.map((item, index) => (

                        <Link
                            key={index}
                            href={item.href}
                            className={styles.footerSocialItem}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={item.label}
                            dangerouslySetInnerHTML={{ __html: item.icon }}
                        />

                    ))}

                </div>

            )}

        </>

    )
    
}