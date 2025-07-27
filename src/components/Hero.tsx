import { Download, Play, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const textOptions: string[] = ['AI', 'LLM', 'GPT'];
  const [currentText, setCurrentText] = useState<string>(textOptions[0]);
  const [textIndex, setTextIndex] = useState<number>(0);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
        setIsFlipping(false);
      }, 500); // Fade out duration
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [textOptions.length]);

  useEffect(() => {
    setCurrentText(textOptions[textIndex]);
  }, [textIndex, textOptions]);

  return (
    <>
      <section id="hero" className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-medium mb-8 border border-indigo-200 shadow-sm">
              <span className="w-2.5 h-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-2 animate-pulse"></span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold">
                AI on Your Text Cursor
              </span>
            </div>

            {/* Headline with animated text */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="inline-flex items-baseline">
                <div className="relative inline-flex items-center">
                  <span className={`fade-text ${isFlipping ? 'fade-out' : 'fade-in'}`}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 font-extrabold">
                      {textOptions[textIndex]}
                    </span>
                  </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900 ml-2">on Cursor</span>
                  <span className="text-cursor"></span>
                </div>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Type <span className="font-bold text-indigo-600">'jarvis'</span> anywhere and get AI instantly. Works in Gmail, Slack, Word, WhatsApp—any text box on your computer gets AI superpowers with zero setup.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="https://github.com/ShashankBhutiya/project/releases/download/Install/JarvisType_T.exe"
                download="JarvisType.exe"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                <span>Install in Seconds</span>
              </a>
              <a
                href="#see-it-in-action"
                className="group inline-flex items-center px-8 py-4 bg-white text-gray-800 border-2 border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-gray-50 font-semibold text-lg transition-colors duration-300"
              >
                <Play className="w-5 h-5 mr-2 text-indigo-600 group-hover:scale-110 transition-transform" />
                <span>See It In Action</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes cursorBlink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes fadeIn {
          0% { 
            opacity: 0;
            transform: translateY(10px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOut {
          0% { 
            opacity: 1;
            transform: translateY(0);
          }
          100% { 
            opacity: 0;
            transform: translateY(-10px);
          }
        }
        
        .text-cursor {
          display: inline-block;
          width: 2px;
          height: 1em;
          background-color: #6b7280;
          animation: cursorBlink 1s infinite;
          margin-left: 2px;
          vertical-align: middle;
        }

        .fade-text {
          display: inline-block;
          vertical-align: middle;
        }

        .fade-in {
          animation: fadeIn 1s ease-in-out forwards;
        }

        .fade-out {
          animation: fadeOut 1s ease-in-out forwards;
        }
      `}</style>
    </>
  );
};

export default Hero;  