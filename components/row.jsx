import Image from "next/image";
import styles from "./row.module.css";

function Row(props) {

    const className = `${styles.row} ${props.isFirst?styles.firstRow:""}`
    return (
        <div className={className}>
            <div className={styles.text}>
                <h2>{props.h2}</h2>
                <p>{props.paragraph}</p>
            </div>
            <div className={styles.image}>
                <Image
                    src={props.image}
                    alt="section image"
                    priority
                />
            </div>
        </div>
    );
}

export default Row;