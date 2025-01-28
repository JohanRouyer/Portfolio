import {getImageUrl} from "../../utils.js";
import styles from "./About.module.css";

export const About = () => {
    return (<section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="photo about" className={styles.aboutImg}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/le-curseur.png")} alt="icon curseur" className={styles.aboutItemImg}/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                            I’m a front-end developer with experience
                            in building responsive and optimised sites.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/backend.png")} alt="icon backend" className={styles.aboutItemImg}/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            I have experience developing fast and
                            optimised back-end systems and APIs.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/ui.png")} alt="icon ui" className={styles.aboutItemImg}/>
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>
                            I have designed multiple landing pages and
                            have created design systems as well.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>);
}