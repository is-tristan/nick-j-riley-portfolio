// Components
import GalleryGrid from "./components/gallery-grid";

// Styles
import styles from "@/styles/components/sections/gallery/gallery-section.module.scss"

export default function GallerySection() {

    return (

        <section id="gallery" className={`row borderBottom ${styles.gallerySection}`} aria-label="Photo gallery of Nick Riley on production">

            <div className={`container`}>

                <GalleryGrid />

            </div>

        </section>

    )

}
