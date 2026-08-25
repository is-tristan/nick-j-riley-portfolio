// Components
import TopbarLayout from "@/components/layouts/topbar/components/topbar-layout";

// Icons
import { arrowRightShort } from "@/utils/icons";

export default function Topbar({
    href = "https://mysteryshopping.servefirst.ai/",
    text = "Become a Mystery Shopper",
    target = "_blank",
    type = "default",
    icon = arrowRightShort,
    fullLink = false,
}) {

    return (

        <TopbarLayout
            fullLink={fullLink}
            href={href}
            text={text}
            target={target}
            type={type}
            icon={icon}
        />

    )

}
