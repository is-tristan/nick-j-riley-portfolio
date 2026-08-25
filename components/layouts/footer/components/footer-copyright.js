// Next
import Link from "next/link";

// Styles
import styles from "@/styles/components/layouts/footer/footer-copyright.module.scss";

// Data
import { footerPolicyItems } from "../items/footer-items-data";

export default function FooterCopyright() {

    return (

        <div className={styles.footerCopyright}>

            <div className={styles.footerCopyrightText}>Copyright &copy; 2026 | Serve First | All Rights Reserved.</div>

            <div className={styles.footerPolicyLinks}>

                {footerPolicyItems.map((item) => (

                    <Link href={item.href} key={item.label}>{item.label}</Link>

                ))}

            </div>

        </div>

    )

}