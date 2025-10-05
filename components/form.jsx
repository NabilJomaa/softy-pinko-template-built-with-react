import styles from "./form.module.css";

function Form(props) {
    return (
        <form method="get">
            <div className={styles.form}>
                <div className={styles.inField}>
                    <fieldset>
                        <input type="text" name="name" placeholder="Full Name" required />
                    </fieldset>
                </div>
                <div className={styles.inField}>
                    <fieldset>
                        <input type="email" name="email" id="email" placeholder="E-Mail Address" required />
                    </fieldset>
                </div>
                <div className={styles.areaField}>
                    <fieldset>
                        <textarea name="message" placeholder="Your Message" required />
                    </fieldset>
                </div>
                <div className={styles.btnField}>
                    <fieldset>
                        <button type="submit">Send Message</button>
                    </fieldset>
                </div>
            </div>
        </form>
    );
}

export default Form;