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
    {
    title: 'Custom Eommerce store',
    description: 'A custom e-commerce store built with Next.js and Tailwind CSS.',
    tags: ['Next.js', 'CSS', 'JavaScript'],
    live: 'https://ecommerce-next-abdul-malek.vercel.app/',
    code: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <RevealOnScroll>
        <h2 className="relative mb-8 text-3xl font-bold after:mt-2 after:block after:h-[3px] after:w-12 after:bg-[var(--accent)] after:content-['']">Projects</h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8">
          {projects.map((project) => (
            <article key={project.title} className="group relative overflow-hidden rounded-lg bg-[var(--card-bg)] shadow-[4px_4px_0_var(--card-shadow)] transition-[box-shadow,transform] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[6px_6px_0_var(--card-shadow)]">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,var(--accent-glow),transparent_70%)] opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100" />
              <div className="relative z-[1] flex h-full flex-col p-6">
                <h3>{project.title}</h3>
                <p className="mb-4 flex-1 text-[var(--text-muted)]">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-[0.4rem]">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-secondary)] px-[0.7rem] py-[0.2rem] text-[0.75rem]">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a className="font-semibold text-[var(--accent)] underline underline-offset-2 transition-colors duration-200 hover:text-[var(--text)]" href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
                  <a className="font-semibold text-[var(--accent)] underline underline-offset-2 transition-colors duration-200 hover:text-[var(--text)]" href={project.code} target="_blank" rel="noopener noreferrer">Code</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
