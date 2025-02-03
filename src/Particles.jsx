import { useEffect } from 'react';
import styles from './Particles.module.css';

const Particles = () => {
    useEffect(() => {
        const particleContainer = document.querySelector(`.${styles.particleContainer}`);
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.classList.add(styles.particle);
            particleContainer.appendChild(particle);
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            particle.style.top = `${top}%`;
            particle.style.left = `${left}%`;
            particle.style.animationDelay = `${Math.random() * 2}s`;
        }
    }, []);

    return <div className={styles.particleContainer}></div>;
};

export default Particles;
