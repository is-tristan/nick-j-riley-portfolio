// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";

// Styles
import styles from "@/styles/components/sections/content/content.module.scss"

export default function Content({
    eyebrow = "About",
    title = "<span class='fw300'>About</span> Nick",
    description = "<p>Nick Riley is an experienced drone pilot with six years of production experience flying for some of the biggest names in South African film and advertising. He has worked with numerous major brands, consistently delivering above expectation on commercials and film productions. Available for freelance hire, Nick works with production companies and agencies on aerial cinematography across Cape Town and South Africa.</p>"
}) {

    return (

        <section id="content" className={`row borderBottom ${styles.content}`} aria-label="About Nick Riley">

            <div className={`container dualCols`}>

                <div className={`contentCol borderRight borderLeft`}>

                    <div className={`contentContainer mobileNoPaddingBottom`}>

                        <Eyebrow text={eyebrow} />

                        <Text
                            titleClass="sectionTitle"
                            title={title}
                            description={null}
                        />

                    </div>

                </div>

                <div className={`contentCol borderRight`}>

                    <div className={`contentContainer mobileNoPaddingTop`}>

                        <Text
                            title={null}
                            description={description}
                        />

                    </div>

                </div>

            </div>

        </section>

    )

}