// Components
import HeaderClient from "@/components/layouts/header/parts/header-client"

// Styles
import styles from "@/styles/components/layouts/header/header.module.scss"

export default function Header() {

    return (

        <header id="header" className={`${styles.header}`} role="banner">

            <HeaderClient />

        </header>

    )

}
