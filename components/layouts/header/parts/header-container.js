// Components
import HeaderLeft from "@/components/layouts/header/parts/header-left"
import HeaderLogo from "@/components/layouts/header/parts/header-logo"
import HeaderRight from "@/components/layouts/header/parts/header-right"

// Styles
import styles from "@/styles/components/layouts/header/header.module.scss"

export default function HeaderContainer({ toggleMenu }) {

    return (

        <div className={`container ${styles.headerContainer}`}>

            <HeaderLeft toggleMenu={toggleMenu} />

            <HeaderLogo />

            <HeaderRight />

        </div>


    )

}
