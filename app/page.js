// Components
import Banner from "@/components/sections/banner/banner"
import LogoSection from "@/components/sections/logos/logo-section"
import ContentSection from "@/components/sections/content/content"
import GallerySection from "@/components/sections/gallery/gallery-section"
import PreviousWork from "@/components/sections/previous-work/previous-work"
import DronesSection from "@/components/sections/drones/drones-section"

export default function Home() {

    return (

        <>

            <Banner />

            <ContentSection />

            <GallerySection />

            <PreviousWork />

            <LogoSection />

            <DronesSection />

        </>

    )

}