import { useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Experience from './components/Experience';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  return (
    <ReactLenis root>
      {/* Universal Scroll Progress Bar (Premium Glowing) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 origin-left z-[9999] shadow-[0_0_15px_rgba(14,165,233,0.8)]"
        style={{ scaleX: scrollYProgress }}
      />

      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <main className="bg-[#030303] min-h-screen text-white selection:bg-sky-500/30 selection:text-white lg:cursor-none relative">
        <div className="noise-overlay pointer-events-none"></div>
        <Cursor />
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </ReactLenis>
  );
}

export default App;
