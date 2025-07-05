import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import AdSense from './components/AdSense';

function App() {
  // Add smooth scrolling for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        {/* AdSense Banner Ad - Top of Content */}
        <div className="container mx-auto px-4 py-8">
          <AdSense 
            adSlot="5109235686" // Replace with your ad slot ID
            style={{ display: 'block' }}
            format="auto"
            layoutKey="-gw-1+2a-9x+5c"
          />
        </div>
        <Features />
        <HowItWorks />
        {/* AdSense Banner Ad - Bottom of Content */}
        <div className="container mx-auto px-4 py-8">
          <AdSense 
            adSlot="8659282662" // Replace with your ad slot ID
            style={{ display: 'block' }}
            format="auto"
            layoutKey="-gw-1+2a-9x+5c"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;