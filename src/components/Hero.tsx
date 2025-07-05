import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Zap, Crown, Download } from 'lucide-react';
import AdSense from './AdSense';
import './Hero.css';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'jarvis answer this- What is the future of AI?';
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typedText.length < fullText.length) {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [typedText, fullText]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      setGradientPos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate random particles
  const particles = React.useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${2 + Math.random() * 2}s`
    }));
  }, []);

  return (
    <section className="hero-section">
      <div 
        className="gradient-bg"
        style={{
          background: `radial-gradient(
            circle at ${gradientPos.x}% ${gradientPos.y}%,
            rgba(56, 182, 255, 0.1) 0%,
            rgba(124, 58, 237, 0.1) 40%,
            rgba(17, 24, 39, 1) 70%
          )`,
        }}
      />

      <div className="particles-container">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-header">
          <div className="badge">
            <Sparkles className="sparkle-icon" />
            <span>AI-Powered Writing Assistant</span>
          </div>
          
          <h1>
            Meet Your
            <br className="break-line" />
            <span className="title-highlight">
              <span className="title-text">AI Writing Companion</span>
              <span className="title-gradient">AI Writing Companion</span>
            </span>
          </h1>

          <p className="subtitle">
            Transform your writing with our AI-powered assistant. Create compelling content in seconds.
          </p>

          <div className="cta-buttons">
            <a href="#download" className="primary-button">
              <Download className="button-icon" />
              <span>Download Now</span>
              <span className="button-overlay"></span>
            </a>
            <a href="#features" className="secondary-button">
              Learn More
              <ArrowRight className="button-icon" />
            </a>
          </div>

          <div className="ad-container">
            <AdSense 
              adSlot="4462368423"
              style={{ display: 'block' }}
              format="auto"
              layoutKey="-gw-1+2a-9x+5c"
            />
          </div>

          <div className="terminal-container">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="window-controls">
                  <span className="control-dot red"></span>
                  <span className="control-dot yellow"></span>
                  <span className="control-dot green"></span>
                </div>
                <span className="terminal-title">terminal</span>
              </div>
              <div className="terminal-content">
                <p className="command-line">
                  $ {typedText}<span className="cursor">|</span>
                </p>
                {typedText.length === fullText.length && (
                  <p className="command-output">
                    &gt; The future of AI is a collaborative partnership between humans and intelligent systems...
                  </p>
                )}
              </div>
            </div>
            
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;