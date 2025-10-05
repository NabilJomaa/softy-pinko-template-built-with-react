import MiniBox from "./mini-box.jsx";
import styles from "./work-process.module.css";
import SectionText from "./section-text.jsx";

function WorkProcess(props) {
    return (
        <div className={styles.workProcess}>
            <div className={styles.info}>
                <h1>Work Process</h1>
                <p>Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex. Donec ante diam</p>
            </div>
            <div className={styles.boxes}>
            <MiniBox strong="Get Ideas" span="Godard pabst prism fam cliche." />
            <MiniBox strong="Sketch Up" span="Godard pabst prism fam cliche." />
            <MiniBox strong="Discuss" span="Godard pabst prism fam cliche." />
            <MiniBox strong="Revise" span="Godard pabst prism fam cliche." />
            <MiniBox strong="Approve" span="Godard pabst prism fam cliche." />
            <MiniBox strong="Launch" span="Godard pabst prism fam cliche." />
            </div>
        </div>
    );
}

export default WorkProcess;
