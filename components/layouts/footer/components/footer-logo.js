// Next
import Link from "next/link";

// Styles
import styles from "@/styles/components/layouts/footer/footer.module.scss";

// Icons
import { logo } from "@/utils/icons";

export default function FooterLogo() {

    return (

        <div className={`${styles.footerCol} ${styles.footerColLogo}`}>

            <Link href="/" className={styles.footerLogo} aria-label="Home" dangerouslySetInnerHTML={{ __html: logo }} />

        </div>

    )

}