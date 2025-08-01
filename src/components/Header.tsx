import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Send } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              JarvisType
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/#features" className="text-gray-600 hover:text-gray-900 font-medium">Features</Link>
            <Link to="/how-it-works" className="text-gray-600 hover:text-gray-900 font-medium">How it works</Link>
            <Link to="/#demo" className="text-gray-600 hover:text-gray-900 font-medium">Demo</Link>
            <Link to="/#contact" className="text-gray-600 hover:text-gray-900 font-medium">Contact</Link>
            <a 
              href="https://github.com/ShashankBhutiya/project/releases/download/Install/JarvisType_T.exe"
              download="JarvisType.exe"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium flex items-center space-x-1"
            >
              <Send className="w-4 h-4" />
              <span>Download</span>
            </a>
          </nav>

          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <nav className="flex flex-col space-y-4 p-4">
              <Link to="/#features" className="text-gray-600 hover:text-gray-900 font-medium" onClick={() => setIsMenuOpen(false)}>Features</Link>
              <Link to="/how-it-works" className="text-gray-600 hover:text-gray-900 font-medium" onClick={() => setIsMenuOpen(false)}>How it works</Link>
              <Link to="/#demo" className="text-gray-600 hover:text-gray-900 font-medium" onClick={() => setIsMenuOpen(false)}>Demo</Link>
              <Link to="/#contact" className="text-gray-600 hover:text-gray-900 font-medium" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <a 
                href="https://github.com/ShashankBhutiya/project/releases/download/Install/JarvisType_T.exe"
                download="JarvisType.exe"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium text-center flex items-center justify-center space-x-1"
              >
                <Send className="w-4 h-4" />
                <span>Download</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;