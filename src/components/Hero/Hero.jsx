import {getImageUrl} from "../../utils.js";
import styles from "./Hero.module.css";
export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, I’m Johan
                </h1>
                <p className={styles.description}>
                    I’m a third year student web developer.
                    Reach out if you’d like to learn more!
                </p>
                <a href="mailto:johanrouyer2@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img
                src={getImageUrl("hero/heroImage.png")}
                alt="hero image ROUYER Johan"
                className={styles.heroImg}
            />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    )
}
