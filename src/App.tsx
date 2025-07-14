import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Demo from './components/Demo';
import Features from './components/Features';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { default as DemoPage } from './pages/DemoPage';
import HowItWorksPage from './pages/HowItWorksPage';

function Home() {
  const location = useLocation();

  // Add smooth scrolling for anchor links
  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Demo />
        <Features />
      </main>
      <ContactUs />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/how-it-works" element={
        <div className="min-h-screen bg-white">
          <Header />
          <HowItWorksPage />
          <Footer />
        </div>
      } />
      <Route path="/demo" element={
        <div className="min-h-screen bg-white">
          <Header />
          <DemoPage />
          <Footer />
        </div>
      } />
    </Routes>
  );
}

export default App;