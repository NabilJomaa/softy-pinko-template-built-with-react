import Image from "next/image";
import testimonials from "../assets/images/testimonial-icon.png";
import styles from "./team-content.module.css"

function TeamContent(props) {
    return (
        <div className={styles.teamContent}>
            <Image
                src={testimonials}
                alt="testimonials"
                priority
            />
            <p>{props.pargraph}</p>
            <div className={styles.teamInfo}>
                <h3>{props.h3}</h3>
                <span>{props.span}</span>
            </div>
        </div>
    );
}

export default TeamContent;