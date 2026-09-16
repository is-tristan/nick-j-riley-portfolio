// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";

// Styles
import styles from "@/styles/components/sections/banner/banner.module.scss";

export default function Banner({
    eyebrow = null,
    title = "<span class='fw300'>Aerial</span> <br> Cinematography",
    description = "<p>Cape Town · Film & Advertising Production · Available for Freelance Hire</p>",
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

                <div className={styles.bannerVideoContainer}>

                    <video
                        src="/videos/banner/xp-01-banner-video-02.webm"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className={styles.bannerVideo}
                        preload="none"
                        poster="/videos/banner/xp-01-banner-video-poster.webp"
                        aria-label="Aerial cinematography showreel by Nick Riley"
                    />

                </div>

            </div>

        </section>

    );

}