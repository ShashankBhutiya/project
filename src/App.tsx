import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

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
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        
        {/* Demo Video Section */}
        <section id="demo" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                See JarvisType in Action
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/4WX_SJe8q3Y?autoplay=1&mute=1&controls=1&loop=1&playlist=4WX_SJe8q3Y&start=0&rel=0&modestbranding=1&playsinline=1"
                  title="JarvisType Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <Features />
        <HowItWorks />
      </main>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;