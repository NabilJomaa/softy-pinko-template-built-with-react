import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faDribbble } from "@fortawesome/free-brands-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";

import styles from "./footer.module.css";


function Footer(props) {
    return (
        <div className={styles.footer}>
            <div className={styles.links}>
                <ul>
                    <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faWifi} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faDribbble} /></a></li>
                </ul>
            </div>
            <div className={styles.copyRight}>
                <p>Copyright © 2025 Softy Pinko Company - Designed by: Nabil Jomaa</p>
            </div>
        </div>
    );
}

export default Footer;