import styles from './Experience.module.css';
import RevealOnScroll from '../../components/RevealOnScroll';

const jobs = [
  {
    title: 'MERN Stack Developer',
    company: 'Personal Projects',
    period: '2025 – Present',
    description:
      'Building modern full-stack web applications using MongoDB, Express.js, React, and Node.js. Focusing on clean architecture, responsive design, and real-world development experience.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Next.js'],
  },
  {
    title: 'Frontend Developer',
    company: 'Self Learning',
    period: '2024 – Present',
    description:
      'Developing responsive and interactive user interfaces with React and Next.js. Building portfolio projects while improving performance, accessibility, and UI/UX skills.',
    tags: ['React', 'Next.js', 'JavaScript', 'CSS', 'HTML'],
  },
  {
    title: 'Backend Developer',
    company: 'Personal Learning',
    period: '2025 – Present',
    description:
      'Learning backend development by creating REST APIs, implementing authentication with JWT, managing databases with MongoDB, and building scalable server-side applications using Node.js and Express.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API'],
  },

];

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <RevealOnScroll>
        <h2 className={styles.heading}>Experience</h2>
        <div className={styles.timeline}>
          {jobs.map((job, idx) => (
            <div key={idx} className={styles.item}>
              <div className={styles.marker} />
              <div className={styles.card}>
                <h3>{job.title}</h3>
                <p className={styles.company}>
                  {job.company} <span>| {job.period}</span>
                </p>
                <p className={styles.description}>{job.description}</p>
                <div className={styles.tags}>
                  {job.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
