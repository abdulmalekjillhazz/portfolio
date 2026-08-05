import styles from './Contact.module.css';
import RevealOnScroll from '../../components/RevealOnScroll';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <RevealOnScroll>
        <h2 className={styles.heading}>Get In Touch</h2>
        <p className={styles.text}>
          I’m currently open to new opportunities and collaborations.
          Whether you have a project idea or just want to say hi, feel free to reach out!
        </p>
        <a href="mailto:abdulmalek67343367@gmail.com" className={styles.email}>
          abdulmalek67343367@gmail.com
        </a>
        <div className={styles.links}>
          <a href="/resume.pdf" target="_blank" className={styles.resume}>
            📄 Resume
          </a>
          <a href="https://github.com/abdulmalekjillhazz/" target="_blank" rel="noopener noreferrer" className={styles.social}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/abdul-malek-877351395/" target="_blank" rel="noopener noreferrer" className={styles.social}>
            LinkedIn
          </a>
        </div>
        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Abdul Malek. All rights reserved.</p>
        </footer>
      </RevealOnScroll>
    </section>
  );
}
