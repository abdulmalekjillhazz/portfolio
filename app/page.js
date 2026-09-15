import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import PortfolioAgent from '../components/PortfolioAgent';
import Contact from './sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <PortfolioAgent />
      <Contact />
    </>
  );
}
