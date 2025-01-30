import {getImageUrl} from "../../utils.js";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/email.png")} alt="email icon"/>
                    <a href="mailto:johanrouyer2@gmail.com">johanrouyer2@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedin.png")} alt="linkedin icon"/>
                    <a href="https://www.linkedin.com/in/johan-rouyer-710686293/">linkedin.com/JohanRouyer</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/github.png")} alt="github icon"/>
                    <a href="https://github.com/JohanRouyer">github.com/JohanRouyer</a>
                </li>
            </ul>
        </footer>
    )
}
