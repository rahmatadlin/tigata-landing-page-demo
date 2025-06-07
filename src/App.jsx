import { useEffect } from 'react';
import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Services from './components/Services';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      {/* <Hero />
      <About />
      <Services />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;