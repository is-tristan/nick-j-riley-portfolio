// Components
import FooterItems from "./components/footer-items";;
import FooterCopyright from "./components/footer-copyright";
import FooterBottom from "./components/footer-bottom";

// Styles
import styles from "@/styles/components/layouts/footer/footer.module.scss";

export default function Footer() {

    return (

        <footer id="footer" className={`${styles.footer} bgLightAlt`} role="contentinfo">

            <div className={`container ${styles.footerContainer}`}>

                <FooterItems />

                <FooterCopyright />

                <FooterBottom />

            </div>


        </footer>

    );

}