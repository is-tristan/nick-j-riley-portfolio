// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";
import Button from "@/components/handlers/buttons";

// Styles
import styles from "@/styles/components/sections/content/content.module.scss"

export default function Content({
    eyebrow = "About",
    title = "<span class=`fw300`>About</span>Nick",
    description = "<p>Fusce quis libero nulla. Aliquam eu dapibus neque. Sed vulputate dapibus odio at fermentum. Nulla eget ornare justo, sed interdum nisl. Donec laoreet non diam sed pulvinar. Maecenas non eros et felis bibendum dignissim vitae vel enim. Duis non eros sed mauris molestie consequat. Morbi porta augue purus, ut venenatis libero iaculis sed. Morbi sed mollis nisi. Vestibulum et eleifend nulla, vitae porttitor purus. Vivamus sit amet ipsum erat.</p>"
}) {

    return (

        <section id="content" className={`row borderBottom ${styles.content}`} role="main">

            <div className={`container dualCols`}>

                <div className={`contentCol contentBorderContainer ${styles.contentCol} ${styles.hasBorder}`}>

                    <div className={`innerContent`}>

                        <Eyebrow text={eyebrow} />

                        <Text
                            title={title}
                            description={null}
                        />

                    </div>

                </div>

                <div className={`contentCol contentBorderContainer ${styles.contentCol} ${styles.hasBorder}`}>

                    <div className={`innerContent`}>

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