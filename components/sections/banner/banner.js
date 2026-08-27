// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";

// Styles
import styles from "@/styles/components/sections/banner/banner.module.scss";

export default function Banner({
    eyebrow = null,
    title = "<span class='fw300'>Aerial</span> <br> Photography",
    description = "<p>Cape Town · Western Cape · Available for Direct & Production Hire</p>",
}) {

    return (

        <section
            id="banner"
            className={`row borderBottom ${styles.banner} ${styles.className}`}
            data-name="banner"
        >

            <div className={`container hasBorders ${styles.bannerContainer}`}>

                <div className={`contentCol ${styles.contentCol}`}>

                    <div className="contentContainer">

                        {eyebrow && (<Eyebrow text={eyebrow} hasDash={true} hasAnimation={false} />)}

                        <Text
                            hasAnimation={false}
                            titleClass={`pageTitle`}
                            titleTag="h1"
                            title={title}
                            description={description}
                            descriptionClass={`extraLarge colorLight`}
                        />

                    </div>

                </div>

                <video
                    src="/videos/banner/temp-banner-video.webm"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={styles.bannerVideo}
                />

            </div>

        </section>

    );

}