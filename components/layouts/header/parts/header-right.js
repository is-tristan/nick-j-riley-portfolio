// Components
import Button from "@/components/handlers/buttons"

// Styles
import styles from "@/styles/components/layouts/header/header.module.scss"

export default function HeaderRight() {

    return (

        <div className={`${styles.headerRight}`}>

            <div className={`${styles.headerButtons}`}>

                <Button text="Hire Me" href="#hire-me" className={`primary`} hasAnimation={false} icon={null} />

            </div>

        </div>

    )

}
