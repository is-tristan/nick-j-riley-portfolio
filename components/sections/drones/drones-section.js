// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";
import DroneGrid from "./components/drones-grid";

// Styles
import styles from "@/styles/components/sections/drones/drones-section.module.scss";

export default function DronesSection() {

    return (

        <section className={`row ${styles.previousWork}`}>

            <div className={`borderLeft borderRight container noPaddingBottom`}>

                <div className="contentContainer" data-alignment="centered">

                    <Eyebrow text="Drones I've Worked With" hasDash={true} hasAnimation={false} />

                    <Text
                        hasAnimation={false}
                        titleClass={`sectionTitle`}
                        titleTag="h2"
                        title={"<span class='fw300'>Flight</span> Log"}
                    />

                </div>

            </div>

            <div className={`container borderTop borderLeft noPaddingTop`}>

                <DroneGrid />

            </div>

        </section>

    )

}
