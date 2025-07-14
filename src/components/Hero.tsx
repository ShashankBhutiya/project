import { Download, Play, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState<string>('AI');
  const textOptions: string[] = ['AI', 'LLM', 'GPT'];
  const [textIndex, setTextIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 2000); // Change text every 2 seconds

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
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Jarvis Type
            </div>

            {/* Headline with animated text */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="inline-flex items-baseline">
                <span className="text-blue-600 transition-all duration-300 ease-in-out">
                  {currentText}
                </span>
                <span className="text-gray-900"> on Cursor</span>
                <span className="animate-blink text-gray-900 ml-1">|</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Type 'jarvis' anywhere and get AI instantly. Works in Gmail, Slack, Word, WhatsApp—any text box on your computer gets AI superpowers with zero setup.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="https://github.com/ShashankBhutiya/project/releases/download/Install/JarvisType_T.exe"
                download="JarvisType.exe"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                <Download className="w-5 h-5 mr-2" />
                Install in 10 Seconds
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-700 border-2 border-gray-300 rounded-lg hover:border-gray-400 font-semibold text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                See It Work
              </a>
            </div>

            {/* Demo Terminal */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
                <div className="flex items-center px-6 py-4 bg-gray-800">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-gray-400 text-sm font-mono">Any App • Anywhere</div>
                </div>
                <div className="p-6 font-mono text-sm">
                  <div className="mb-4">
                    <div className="text-blue-400">Gmail:</div>
                    <div className="text-gray-300 ml-4">jarvis write apology email to boss</div>
                    <div className="text-green-400 ml-4 mt-1">✨ Subject: Sincere Apologies for Missing Today's Meeting...</div>
                  </div>
                  <div>
                    <div className="text-blue-400">Slack:</div>
                    <div className="text-gray-300 ml-4">jarvis explain quantum computing simply</div>
                    <div className="text-green-400 ml-4 mt-1">✨ Quantum computing uses quantum bits that can be 0, 1, or both...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;