import SectionText from "./section-text.jsx";
import TeamContent from "./team-content.jsx";
import styles from "./testimonials.module.css";

function Testimonials(props) {
    return (
    <div className={styles.testimonials}>
        <SectionText
        h2="What do they say?"
        paragraph="Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit eros a turpis. Ut sagittis lectus libero."
        />
        <div className={styles.teamContents}>
        <TeamContent
            pargraph="Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio."
            h3="Catherine Soft"
            span="Managing Director"
        />
        <TeamContent
            pargraph="Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie."
            h3="Kelvin Wood"
            span="Digital Marketer"
        />
        <TeamContent
            pargraph="Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam."
            h3=" David Martin"
            span="Website Manager"
        />
        </div>
    </div>
    );
}

export default Testimonials;
