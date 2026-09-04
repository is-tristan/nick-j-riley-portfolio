// Components
import TitleGrid from "./components/title-grid";
import Text from "@/components/content/text";
import Eyebrow from "@/components/decoration/eyebrow";

// Styles
import styles from "@/styles/components/sections/titles/titles-section.module.scss"

export default function TitlesSection() {

    return (

        <section id="titles" className={`row borderBottom ${styles.titlesSection}`}>

            <div className={`borderLeft borderRight container`}>

                <div className={`contentContainer`} data-alignment="centered">

                    <Eyebrow text="Film & TV series" />

                    <Text
                        hasAnimation={false}
                        titleClass={`sectionTitle`}
                        titleTag="h2"
                        title={"<span class='fw300'>Titles</span> I've Worked On"}
                    />

                </div>

            </div>

            <div className={`container`}>

                <TitleGrid />

            </div>

        </section>

    )

}
