import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils.js";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const offset = 80;
            const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: sectionPosition, behavior: "smooth" });
        }
    };

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <a className={styles.title} href="/">Portfolio</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn}
                     src={menuOpen
                         ? getImageUrl("nav/closeIcon.png")
                         : getImageUrl("nav/menuIcon.png")}
                     alt="hamburger menu"
                     onClick={() => setMenuOpen(!menuOpen)} />

                <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}>
                    <li><a onClick={() => scrollToSection("about")}>About</a></li>
                    <li><a onClick={() => scrollToSection("experience")}>Experience</a></li>
                    <li><a onClick={() => scrollToSection("projects")}>Projects</a></li>
                    <li><a onClick={() => scrollToSection("contact")}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};
