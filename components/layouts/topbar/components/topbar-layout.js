// Components
import Button from "@/components/handlers/buttons";

// Next
import Link from "next/link";

// Styles
import styles from "@/styles/components/layouts/topbar/topbar.module.scss";

export default function Topbar({
    href,
    text,
    target,
    icon,
    type,
    fullLink = false,
}) {

    return (

        <div className={`row ${styles.topbar}`} data-type={type}>

            <div className={`container ${styles.topbarContainer}`}>

                <Button
                    href={href}
                    text={text}
                    target={target}
                    className="textLink colorPrimaryAlt"
                    hasAnimation={false}
                    icon={icon}
                />

            </div>

            {fullLink && (

                <Link href={href} target={target} className={`colLink`} />

            )}

        </div>

    )

}
