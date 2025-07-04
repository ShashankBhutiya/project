import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Zap, Crown } from 'lucide-react';
import AdSense from './AdSense';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'jarvis answer this- What is the future of AI?';
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typedText.length < fullText.length) {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [typedText, fullText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">AI-Powered Writing Assistant</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Meet Your
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Writing Companion
            </span>
          </h1>
          
          {/* Hero Ad Unit */}
          <div className="max-w-4xl mx-auto mb-8 p-4 bg-black/20 rounded-lg">
            <AdSense 
              adSlot="4462368423"
              style={{ display: 'block' }}
              format="auto"
              layoutKey="-gw-1+2a-9x+5c"
            />
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Type "jarvis answer this-" anywhere and watch as AI instantly provides intelligent responses directly at your cursor
          </p>
        </div>

        {/* Demo typing interface */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-6">
            <div className="text-left">
              <div className="text-sm text-gray-400 mb-2">Demo: Try typing anywhere</div>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-green-400">
                {typedText}
                <span className="animate-pulse">|</span>
              </div>
              {typedText.includes('jarvis answer this-') && (
                <div className="mt-4 p-4 bg-blue-900/30 border border-blue-500/50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-blue-300">Jarvis AI Response</span>
                  </div>
                  <p className="text-gray-300">
                    The future of AI lies in seamless integration with human workflows, 
                    enabling instant access to intelligence wherever you need it...
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
          <button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105">
            <span>Start Free Trial</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center space-x-2 border border-white/20">
            <Crown className="w-5 h-5 text-yellow-400" />
            <span>View Premium Plans</span>
          </button>
        </div>

        {/* Google Ad Placeholder */}
        <div className="mb-8">
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 max-w-md mx-auto">
            <div className="text-xs text-gray-500 mb-2">Advertisement</div>
            <div className="h-16 bg-gradient-to-r from-gray-700 to-gray-600 rounded flex items-center justify-center">
              <span className="text-gray-400 text-sm">Google Ad Space</span>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-400">
          Join 50,000+ professionals • No credit card required • Start in 30 seconds
        </div>
      </div>
    </section>
  );
};

export default Hero;