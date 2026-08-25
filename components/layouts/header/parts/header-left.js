"use client"

// Styles
import styles from "@/styles/components/layouts/header/header.module.scss"
import stylesMenu from "@/styles/components/layouts/header/header-menu.module.scss"

export default function HeaderLeft({ toggleMenu }) {

    return (

        <div className={styles.headerLeft}>

            <div className={`${stylesMenu.menuToggle}`} onClick={toggleMenu} data-name="menuToggle">

                <span className={stylesMenu.menuToggleItem} />

                <span className={stylesMenu.menuToggleItem} />

            </div>

        </div>

    )

}
