// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";
import PreviousWorkGrid from "./components/previous-work-grid";

// Styles
import styles from "@/styles/components/sections/previous-work/previous-work-section.module.scss";

export default function PreviousWork() {

    return (

        <section id="previous-work" className={`row ${styles.previousWork}`}>

            <div className={`borderLeft borderRight container noPaddingBottom`}>

                <div className="contentContainer" data-alignment="centered">

                    <Eyebrow text="Portfolio" hasDash={true} hasAnimation={false} />

                    <Text
                        hasAnimation={false}
                        titleClass={`sectionTitle`}
                        titleTag="h2"
                        title={"<span class='fw300'>Previous</span> Work"}
                    />

                </div>

            </div>

            <div className={`container borderLeft noPaddingTop`}>

                <PreviousWorkGrid />

            </div>

        </section>

    )

}
