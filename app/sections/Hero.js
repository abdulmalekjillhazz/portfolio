import styles from './Hero.module.css';
import RevealOnScroll from '../../components/RevealOnScroll';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <RevealOnScroll>
        <p className={styles.greeting}>Hi, my name is</p>
        <h1 className={styles.name}>Abdul Malek</h1>
        <h2 className={styles.tagline}>I build fast, accessible web apps with the MERN stack.</h2>
        <p className={styles.description}>
          I’m a full‑stack developer focused on crafting performant, pixel‑perfect interfaces and robust APIs.
          Currently, I enjoy turning complex problems into intuitive digital experiences.
        </p>
        <div className={styles.ctas}>
          <a href="#projects" className={`${styles.btn} ${styles.primary}`}>
            See my work
          </a>
          <a href="#contact" className={`${styles.btn} ${styles.outline}`}>
            Get in touch
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
}
