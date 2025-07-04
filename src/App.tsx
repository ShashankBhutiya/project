import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import AdSense from './components/AdSense.tsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
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
        <Pricing />
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