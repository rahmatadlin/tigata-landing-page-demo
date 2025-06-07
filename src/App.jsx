import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;