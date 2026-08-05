import styles from './Projects.module.css';
import RevealOnScroll from '../../components/RevealOnScroll';

const projects = [
{
    title: 'Ai simple agent',
    description: 'A simple AI agent built with Next.js and Javascript.',
    tags: ['Next.js', 'React', 'Javascript'],
    live: '#',
    code: '#'
  },
  {
    title: 'Daily Routine Tracker',
    description: 'A simple app to track and manage your daily routines.',
    tags: ['Next.js', 'CSS', 'JavaScript'],
    live: 'https://smart-routine-seven.vercel.app/',
    code: '#',
  },
  {
    title: 'Typing speed tracker',
    description: 'A simple app to track and improve your typing speed.',
    tags: ['Next.js', 'CSS', 'JavaScript'],
    live: 'https://bengali-english-typing-test.vercel.app/',
    code: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <RevealOnScroll>
        <h2 className={styles.heading}>Projects</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.card}>
              <div className={styles.cardInner}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
                  <a href={project.code} target="_blank" rel="noopener noreferrer">Code</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
