// Components
import LogoGrid from "./components/logo-grid";
import Text from "@/components/content/text";
import Eyebrow from "@/components/decoration/eyebrow";

// Styles
import styles from "@/styles/components/sections/logos/logo-section.module.scss"

export default function LogoSection() {

    return (

        <section id="logos" className={`row borderBottom ${styles.logoSection}`}>

            <div className={`container`}>

                <div className={`contentContainer`} data-alignment="centered">

                    <Eyebrow text="Brands I've Worked With" />

                    <Text
                        hasAnimation={false}
                        titleClass={`sectionTitle`}
                        titleTag="h2"
                        title={"<span class='fw300'>Previous</span> Clients"}
                    />

                </div>

                <LogoGrid />

            </div>

        </section>

    )

}
