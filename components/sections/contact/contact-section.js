"use client";

// Imports
import { useRef } from "react";
import { useInView } from "motion/react";

// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";
import Form from "@/components/handlers/forms/form";
import ProfilePicture from "./components/profile-picture";

// Styles
import styles from "@/styles/components/sections/contact/contact-section.module.scss";

export default function ContactSection() {

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true, amount: 0.25 });

    return (

        <section id="contact" className={`row borderBottom ${styles.contactSection}`} ref={ref}>

            <div className={`container dualCols`}>

                <div className="contentCol borderRight borderLeft noPaddingBottomMobile">

                    <div className={`contentContainer ${styles.titleContainer}`}>

                        <ProfilePicture isInView={isInView} />

                        <Eyebrow text="Contact" hasDash={true} />

                        <Text
                            titleClass={`sectionTitle`}
                            titleTag="h2"
                            title={"<span class='fw300'>Hire</span> Nick"}
                        />

                    </div>

                </div>

                <div className="contentCol borderRight">

                    <div className="contentContainer">

                        <Form isInView={isInView} />

                    </div>

                </div>

            </div>

        </section>

    )

}
