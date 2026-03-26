import { useEffect, useState, lazy, Suspense } from 'react';
import { useMediaQuery } from './hooks/useMediaQuery';
import { ReactLenis } from 'lenis/react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load sections for performance (lower priority)
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Marquee = lazy(() => import('./components/Marquee'));
const Services = lazy(() => import('./components/Services'));
const Experience = lazy(() => import('./components/Experience'));
const SocialSidebar = lazy(() => import('./components/SocialSidebar'));

function App() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  return (
    <ReactLenis root options={{ 
      lerp: 0.1, 
      duration: 1.5, 
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      normalizeWheel: true
    }}>
      {/* Universal Scroll Progress Bar (Premium Glowing) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 origin-left z-[9999] shadow-[0_0_15px_rgba(14,165,233,0.8)]"
        style={{ scaleX: scrollYProgress }}
      />

      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <main className="bg-[#030303] min-h-screen text-white selection:bg-sky-500/30 selection:text-white lg:cursor-none relative overflow-x-hidden w-full flex flex-col">
        {isDesktop && <div className="noise-overlay pointer-events-none"></div>}
        <Cursor />
        <Navbar />
        <Hero />
        <ErrorBoundary>
          <Suspense fallback={<div className="h-screen bg-[#030303]" />}>
            <SocialSidebar />
            <Marquee />
            <About />
            <Services />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </main>
    </ReactLenis>
  );
}

export default App;
