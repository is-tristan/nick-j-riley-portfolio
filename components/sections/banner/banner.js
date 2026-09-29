// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";

// Styles
import styles from "@/styles/components/sections/banner/banner.module.scss";

export default function Banner({
    eyebrow = null,
    title = "<span class='fw300'>Aerial</span> <br> Cinematography",
    description = "<p>Cape Town · Film & Advertising Production · Available for Freelance Hire</p>",
    video = "/videos/banner/banner-video.webm",
    videoPoster = "/videos/banner/banner-video-poster.avif"
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

                        <div className={`innerContent`}>

                            <h1 className={`pageTitle`} dangerouslySetInnerHTML={{ __html: title }} />

                            <p className={`extraLarge colorLight`} dangerouslySetInnerHTML={{ __html: description }} />

                        </div>

                    </div>

                </div>

                <div className={styles.bannerVideoContainer}>

                    <video
                        src={video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className={styles.bannerVideo}
                        preload="none"
                        poster={videoPoster}
                        aria-label="Aerial cinematography showreel by Nick Riley"
                    />

                </div>

            </div>

        </section>

    );

}