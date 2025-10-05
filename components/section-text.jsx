import styles from "./section-text.module.css";

function SectionText(props) {
    return (
        <div className={styles.sectionText}>
            <h2>{props.h2}</h2>
            <p>{props.paragraph}</p>
        </div>
    )
}

export default SectionText;