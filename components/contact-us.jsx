import SectionText from "./section-text.jsx";
import Form from "./form.jsx"
import styles from "./contact-us.module.css";

function ContactUs(props) {
    return (
        <div className={styles.contactSection}>
                <SectionText
                    h2="Talk To Us"
                    paragraph="Maecenas pellentesque ante faucibus lectus vulputate sollicitudin. Cras feugiat hendrerit semper."
                />
            <div className={styles.contactUs}>
                <div className={styles.keep}>
                    <div>
                        <h4>Keep in touch</h4>
                    </div>
                    <div className={styles.contactText}>
                        <p>110-220 Quisque diam odio, maximus ac consectetur eu, 10260auctor non lorem</p>
                        <p>You are NOT allowed to re-distribute Softy Pinko template on any template collection websites. Thank you.</p>
                    </div>
                </div>
                <div>
                    <Form/>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
