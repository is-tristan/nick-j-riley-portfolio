// Next
import Link from "next/link";

// Icons
import { logo } from "@/utils/icons";

// Styles
import styles from "@/styles/components/layouts/header/header.module.scss";

export default function HeaderLogo() {

    return (

        <Link href="/" className={styles.logo} aria-label="Nick Riley — home" dangerouslySetInnerHTML={{ __html: logo }} />

    )

}