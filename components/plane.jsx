import styles from "./plane.module.css";


function Plane(props) {
    return (
        <div className={styles.plane}>
            <div className={styles.planeHeader}>
                <h3>{props.h3}</h3>
            </div>
            <section className={styles.price}>
                <span>{props.price}</span>
                <span>monthly</span>
            </section>
            <ul>
                <li>250 GB space</li>
                <li>5000 GB transfer</li>
                <li>Pro Design Panel</li>
                <li>15-minute support</li>
                <li>Unlimited Emails</li>
                <li>24/7 Security </li>
            </ul>
            <a href="#pricing-tables"><button>Purchase Now</button></a>
        </div>
    );
}

export default Plane;