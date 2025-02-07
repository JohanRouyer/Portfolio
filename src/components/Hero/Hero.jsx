import { getImageUrl } from "../../utils.js";
import styles from "./Hero.module.css";

export const Hero = () => {
    const handleScrollToNext = () => {
        const nextSection = document.getElementById("about");
        if (nextSection) {
            const offset = 80;
            const sectionPosition = nextSection.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: sectionPosition, behavior: "smooth" });
        }
    };

    return (
        <section className={styles.heroSection}>
            <div className={styles.backgroundImageWrapper}>
                <img
                    src={getImageUrl("hero/heroImage.png")}
                    alt="Johan Hero"
                    className={styles.backgroundImage}
                />
            </div>

            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I’m Johan</h1>
                <p className={styles.description}>
                    I’m a third year student web developer. Reach out if you’d like to learn more!
                </p>
                <a href="mailto:johanrouyer2@gmail.com" className={styles.ctaButton}>
                    Contact Me
                </a>
            </div>

            <button className={styles.scrollButton} onClick={handleScrollToNext}>
                <span className={styles.scrollIcon}></span>
            </button>
        </section>
    );
};
