import Image from "next/image";
import featured from "../assets/images/featured-item-01.png";
import styles from "./feature.module.css";

function Feature(props) {
    return (
        <div className={styles.featureItem}>
            <div className={styles.icon}>
                <Image
                    src={featured}
                    alt="featured"
                    priority
                />
            </div>
            <h5>{props.h5}</h5>
            <p>{props.paragraph}</p>
        </div>
    );
}

export default Feature;