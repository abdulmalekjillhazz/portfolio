import Image from "next/image";
import styles from "./About.module.css";
import RevealOnScroll from "../../components/RevealOnScroll";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <RevealOnScroll>
        <h2 className={styles.heading}>About Me</h2>

        <div className={styles.content}>
          {/* Left Side */}
          <div className={styles.text}>
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

            <ul className={styles.highlights}>
              <li>💻 Full Stack Web Developer (MERN)</li>
              <li>⚛️ React & Next.js Developer</li>
              <li>🟢 Node.js & Express.js Enthusiast</li>
              <li>🗄️ MongoDB Database Developer</li>
              <li>📱 Responsive & Mobile-First Design</li>
              <li>🚀 Always Learning New Technologies</li>
              <li>🎯 Goal: Build Fast, Modern & Scalable Web Applications</li>
            </ul>
          </div>

          {/* Right Side */}
          <div className={styles.image}>
            <Image
              src="/images/abdul-malek.png"
              alt="Abdul Malek"
              width={200}
              height={200}
              className={styles.profileImage}
              priority
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}