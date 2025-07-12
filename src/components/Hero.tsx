import { useMemo } from 'react';
import { Sparkles, Download, ArrowRight, Play } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  // Generate random particles
  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${2 + Math.random() * 2}s`
    }));
  }, []);

  return (
    <div>
      <section className="hero-section">
        <div className="gradient-bg" />
        
        <div className="particles-container">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle"
              style={{
                left: particle.left,
                top: particle.top,
                width: `${Math.random() * 12 + 4}px`,
                height: `${Math.random() * 12 + 4}px`,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            />
          ))}
        </div>

        <div className="hero-content">
          <div className="hero-header">
            <div className="badge">
              <Sparkles className="sparkle-icon" size={16} />
              <span>AI at Your Cursor</span>
            </div>
            
            <h1 className="hero-title">Type "jarvis" anywhere, get AI instantly</h1>
            
            <p className="hero-subtitle">
              Works in Gmail, Slack, Word, WhatsApp—any text box on your computer gets AI superpowers.
            </p>
            
            <div className="cta-buttons">
              <a 
                href="https://github.com/ShashankBhutiya/project/releases/download/Install/JarvisType.exe" 
                className="cta-button cta-primary"
                download="JarvisType.exe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={18} className="mr-2" />
                Install in 10 Seconds
              </a>
              <a href="#demo" className="cta-button cta-secondary">
                <Play size={18} className="mr-2" />
                See It Work
              </a>
            </div>
          </div>
          
          <div className="terminal-container">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="terminal-button close"></span>
                <span className="terminal-button minimize"></span>
                <span className="terminal-button maximize"></span>
              </div>
              <div className="terminal-title">Any App • Anywhere</div>
            </div>
            <div className="terminal-content">
              <div className="terminal-line">
                <span className="prompt">Gmail:</span> jarvis write apology email to boss
              </div>
              <div className="terminal-line output">
                <span className="prompt">✨</span> Subject: Sincere Apologies for Missing Today's Meeting...
              </div>
              <div className="terminal-line" style={{ marginTop: '1rem' }}>
                <span className="prompt">Slack:</span> jarvis explain quantum computing simply
              </div>
              <div className="terminal-line output">
                <span className="prompt">✨</span> Quantum computing uses quantum bits that can be 0, 1, or both...
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
    </div>
  );
};

export default Hero;