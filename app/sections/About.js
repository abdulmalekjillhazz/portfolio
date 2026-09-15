import Image from "next/image";
import RevealOnScroll from "../../components/RevealOnScroll";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1100px] px-8 py-24">
      <RevealOnScroll>
        <h2 className="relative mb-10 inline-block text-[2.2rem] font-bold after:absolute after:-bottom-2.5 after:left-0 after:h-1 after:w-[60px] after:rounded-sm after:bg-[linear-gradient(90deg,#6367FF,#8494FF)] after:content-['']">About Me</h2>

        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div className="text-[1rem] leading-[1.8] text-[var(--text-muted)] [&_p]:mb-[1.2rem] [&_strong]:text-[#6367FF]">
            <p>
              Hello! I'm <strong>Abdul Malek</strong>, a passionate Full Stack
              Web Developer from Bangladesh. I enjoy turning ideas into modern,
              responsive, and high-performance websites that provide an
              excellent user experience.
            </p>

            <p>
              I specialize in building web applications using the MERN Stack,
              including React, Next.js, Node.js, Express.js, and MongoDB. I
              also have experience developing professional WordPress websites
              for businesses and personal brands.
            </p>

            <p>
              As a lifelong learner, I continuously improve my development
              skills by building real-world projects, exploring modern web
              technologies, and writing clean, maintainable code. My goal is to
              become a professional Full Stack Developer and help businesses
              build powerful digital products.
            </p>

            <ul className="mt-6 grid list-none grid-cols-1 gap-3 p-0 text-[0.88rem] font-medium text-[var(--text)] md:grid-cols-2 [&>li]:rounded-[10px] [&>li]:border [&>li]:border-[rgba(99,103,255,0.2)] [&>li]:bg-[rgba(99,103,255,0.08)] [&>li]:px-[0.9rem] [&>li]:py-[0.6rem] [&>li]:transition-[background-color,border-color,transform] [&>li]:duration-[250ms] [&>li:hover]:-translate-y-0.5 [&>li:hover]:border-[#6367FF] [&>li:hover]:bg-[rgba(99,103,255,0.15)]">
              <li>💻 Full Stack Web Developer (MERN)</li>
              <li>⚛️ React & Next.js Developer</li>
              <li>🟢 Node.js & Express.js Enthusiast</li>
              <li>🗄️ MongoDB Database Developer</li>
              <li>📱 Responsive & Mobile-First Design</li>
              <li>🚀 Always Learning New Technologies</li>
              <li>🎯 Goal: Build Fast, Modern & Scalable Web Applications</li>
            </ul>
          </div>

          <div className="relative order-first mb-4 flex justify-center md:order-none md:mb-0">
            <div aria-hidden="true" className="absolute z-0 size-80 rounded-full bg-[linear-gradient(135deg,#6367FF,#C9BEFF,#FFDBFD)] opacity-35 blur-[40px]" />
            <Image
              src="/images/abdul-malek.png"
              alt="Abdul Malek"
              width={350}
              height={350}
              className="relative z-[1] rounded-3xl border-4 border-white/10 object-cover shadow-[0_20px_40px_rgba(99,103,255,0.25)] transition-transform duration-[400ms] hover:scale-[1.03] hover:-rotate-1"
              priority
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
