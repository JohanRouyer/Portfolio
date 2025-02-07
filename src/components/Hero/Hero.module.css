@import "../../vars.css";

/* Section hero en pleine page avec fond dégradé */
.heroSection {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(135deg, rgba(88, 106, 171, 0.3), rgba(222, 117, 226, 0.3), rgba(77, 208, 210, 0.3));
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Image de fond en arrière-plan */
.backgroundImageWrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.backgroundImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.3;
    filter: blur(3px);
}

/* Overlay sombre pour améliorer le contraste */
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
}

/* Contenu textuel centré */
.content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: #fff;
    max-width: 800px;
    padding: 0 20px;
    animation: fadeInUp 1s ease-out;
}

.title {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.description {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    line-height: 1.5;
}

.ctaButton {
    padding: 0.8rem 2rem;
    border: 2px solid #fff;
    background: transparent;
    color: #fff;
    font-size: 1rem;
    text-decoration: none;
    border-radius: 30px;
    transition: background 0.3s, transform 0.3s;
}

.ctaButton:hover {
    background: #fff;
    color: #333;
    transform: scale(1.05);
}

/* Bouton de scroll positionné en bas, centré horizontalement */
.scrollButton {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    background: none;
    border: none;
    cursor: pointer;
    z-index: 2;
    padding: 0;
}

/* Icône en forme de flèche vers le bas */
.scrollIcon {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-left: 3px solid #fff;
    border-bottom: 3px solid #fff;
    transform: rotate(-45deg);
    animation: bounce 2s infinite;
}

/* Animation de rebond pour l'icône */
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0) rotate(-45deg);
    }
    40% {
        transform: translateY(-10px) rotate(-45deg);
    }
    60% {
        transform: translateY(-5px) rotate(-45deg);
    }
}

/* Animation d'apparition du contenu */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .title {
        font-size: 2.5rem;
    }

    .description {
        font-size: 1rem;
    }

    .ctaButton {
        font-size: 0.9rem;
    }
}
