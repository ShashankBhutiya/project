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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        
        {/* Demo Video Section */}
        <section id="demo" className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                See JarvisType in Action
              </h2>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-200"></div>
                <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl bg-black">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/4WX_SJe8q3Y?autoplay=1&mute=1&controls=0&loop=1&playlist=4WX_SJe8q3Y&start=0&rel=0&modestbranding=1&playsinline=1&playbackRate=0.75&disablekb=1&fs=0&iv_load_policy=3&showinfo=0"
                    title="JarvisType Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder="0"
                    style={{
                      border: 'none',
                      pointerEvents: 'none'
                    }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Features />
        
        {/* AdSense Banner Ad - Top of Content */}
        <div className="container mx-auto px-4 py-8">
          <AdSense 
            adSlot="5109235686" // firstAd
            style={{ display: 'block' }}
            format="auto"
            layoutKey="-gw-1+2a-9x+5c"
          />
        </div>
        
        <HowItWorks />
        
        {/* AdSense Banner Ad - Bottom of Content */}
        <div className="container mx-auto px-4 py-8">
          <AdSense 
            adSlot="8659282662" // 2ndAd
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