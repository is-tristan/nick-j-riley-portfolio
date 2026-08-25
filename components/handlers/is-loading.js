// Styles
import styles from "@/styles/components/handlers/is-loading.module.scss";

export default function IsLoading() {

    return (

        <div className={styles.isLoading}>

            <div className={styles.isLoadingRing}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </div>

    );

}