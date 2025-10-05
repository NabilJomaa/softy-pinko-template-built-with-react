import Image from "next/image";
import workProcessItem from "../assets/images/work-process-item-01.png";
import styles from "./mini-box.module.css";


function MiniBox(props) {
    return (
        <div className={styles.miniBox}>
            <Image
                src={workProcessItem}
                alt="rocet icon"
                priority
            />
            <strong>{props.strong}</strong>
            <span>{props.span}</span>
        </div>

    );
}

export default MiniBox;