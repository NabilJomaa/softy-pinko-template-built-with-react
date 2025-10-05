import SectionText from "./section-text.jsx";
import Plane from "./plane.jsx";
import styles from "./pricing-tables.module.css";

function Pricing(props) {
    return (
    <div className={styles.pricingTables}>
        <div>
        <SectionText
            h2="Pricing Plans"
            paragraph="Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat."
        />
        </div>
        <div className={styles.plans}>
            <div className={styles.first}><Plane h3="Starter" price="$14.50" /></div>
            <div className={styles.second}><Plane h3="Premium" price="$21.50" /></div>
            <div className={styles.third}><Plane h3="Advanced" price="$42.00" /></div>
        </div>
    </div>
    );
}

export default Pricing;
