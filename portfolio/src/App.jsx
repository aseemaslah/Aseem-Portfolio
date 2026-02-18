
import { useEffect } from 'react';
import { ReactLenis } from 'lenis/react'; // Correct import for v1+ which might be installed now
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Marquee from './components/Marquee'; // Assuming Marquee component created

function App() {
  return (
    <ReactLenis root>
      <main className="bg-black min-h-screen text-white selection:bg-white selection:text-black lg:cursor-none">
        <div className="noise-overlay"></div>
        <Cursor />
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </ReactLenis>
  );
}

export default App;
