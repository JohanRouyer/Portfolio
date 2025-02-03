import styles from './App.module.css'
import {Navbar} from "./components/Navbar/Navbar.jsx";
import {Hero} from "./components/Hero/Hero.jsx";
import {About} from "./components/About/About.jsx";
import {Experience} from "./components/Experience/Experience.jsx";
import {Projects} from "./components/Projects/Projects.jsx";
import {Contact} from "./components/Contact/Contact.jsx";
import Particles from "./Particles.jsx";

function App() {
    return (
        <div>
            <Particles />
            <div className={styles.App}>
                <Navbar />
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
            </div>
        </div>
    );
}

export default App
