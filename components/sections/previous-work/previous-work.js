"use client";

// Imports
import { useRef } from "react";
import { useInView } from "motion/react";

// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";
import PreviousWorkItem from "./components/previous-work-item";

// Data
import { previousWorkData } from "@/data/previous-work-data";

// Styles
import styles from "@/styles/components/sections/previous-work/previous-work-section.module.scss";

export default function PreviousWork() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (

    <section className={`row ${styles.previousWork}`} ref={ref}>

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

        <div className={`${styles.previousWorkGrid}`}>

          {previousWorkData.map((item, index) => (

            <PreviousWorkItem key={item.id} data={item} isInView={isInView} index={index} />

          ))}

        </div>

      </div>

    </section>

  );

}