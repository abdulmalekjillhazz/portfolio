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
    <section id="experience" className="py-20">
      <RevealOnScroll>
        <h2 className="relative mb-12 text-3xl font-bold after:mt-2 after:block after:h-[3px] after:w-12 after:bg-[var(--accent)] after:content-['']">Experience</h2>
        <div className="relative border-l-2 border-[var(--border)] pl-8">
          {jobs.map((job, idx) => (
            <div key={idx} className="relative mb-12">
              <div className="absolute -left-[2.55rem] top-2 size-3.5 rounded-full border-[3px] border-[var(--bg)] bg-[var(--accent)] shadow-[0_0_0_2px_var(--border)]" />
              <div className="rounded-lg bg-[var(--card-bg)] p-6 shadow-[3px_3px_0_var(--card-shadow)] transition-shadow duration-200 hover:shadow-[5px_5px_0_var(--card-shadow)]">
                <h3>{job.title}</h3>
                <p className="mb-2 font-medium text-[var(--accent)]">
                  {job.company} <span className="font-normal text-[var(--text-muted)]">| {job.period}</span>
                </p>
                <p className="mb-4 text-[var(--text-muted)]">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span key={tag} className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-secondary)] px-3 py-[0.3rem] text-[0.8rem] font-medium text-[var(--text-muted)]">{tag}</span>
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
