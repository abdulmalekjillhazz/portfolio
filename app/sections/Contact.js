import RevealOnScroll from '../../components/RevealOnScroll';

export default function Contact() {
  return (
    <section id="contact" className="py-20 pb-12 text-center">
      <RevealOnScroll>
        <h2 className="mb-4 text-3xl font-bold after:mx-auto after:mb-6 after:mt-2 after:block after:h-[3px] after:w-12 after:bg-[var(--accent)] after:content-['']">Get In Touch</h2>
        <p className="mx-auto mb-8 max-w-[500px] text-[var(--text-muted)]">
          I’m currently open to new opportunities and collaborations.
          Whether you have a project idea or just want to say hi, feel free to reach out!
        </p>
        <a href="mailto:abdulmalek67343367@gmail.com" className="mb-8 inline-block border-b-2 border-dashed border-[var(--accent)] text-[1.3rem] font-semibold text-[var(--accent)]">
          abdulmalek67343367@gmail.com
        </a>
        <div className="mb-12 flex flex-wrap justify-center gap-8">
          <a href="/resume.pdf" target="_blank" className="font-medium text-[var(--text-muted)] transition-[color,transform] duration-200 hover:-translate-y-0.5 hover:text-[var(--accent)]">
            📄 Resume
          </a>
          <a href="https://github.com/abdulmalekjillhazz/" target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--text-muted)] transition-[color,transform] duration-200 hover:-translate-y-0.5 hover:text-[var(--accent)]">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/abdul-malek-877351395/" target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--text-muted)] transition-[color,transform] duration-200 hover:-translate-y-0.5 hover:text-[var(--accent)]">
            LinkedIn
          </a>
        </div>
        <footer className="border-t border-[var(--border)] pt-6 text-[0.9rem] text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} Abdul Malek. All rights reserved.</p>
        </footer>
      </RevealOnScroll>
    </section>
  );
}
