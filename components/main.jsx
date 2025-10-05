
import styles from "./main.module.css"


function Main(props) {
    return (
        <div className={styles.home} id="home">
            <div className={styles.welcomeText}>
                <h1 className={styles.h1}>{props.header1}</h1>
                <p>{props.pargraph}</p>
                <a href="#about"><button>Discover More</button></a>
            </div>
        </div>
    );
}

export default Main;