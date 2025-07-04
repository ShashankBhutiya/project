import React from 'react';
import { Type, MessageSquare, Zap, CheckCircle, Download } from 'lucide-react';
import AdSense from './AdSense';

type ColorKey = 'blue' | 'purple' | 'green' | 'cyan';

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
  example: string;
  color: ColorKey;
}

const HowItWorks = () => {
  const steps: Step[] = [
    {
      icon: <Type className="w-12 h-12" />,
      title: 'Type the Magic Words',
      description: 'In any application, type "jarvis" followed by your question or request',
      example: 'jarvis Explain quantum computing',
      color: 'blue'
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: 'AI Processes Your Request',
      description: 'Our advanced AI analyzes your question and generates a comprehensive response',
      example: 'Processing with GPT-4 and custom models...',
      color: 'purple'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Instant Response',
      description: 'The AI response appears instantly at your cursor, ready to use or edit',
      example: 'Response inserted seamlessly into your workflow',
      color: 'green'
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: 'Continue Working',
      description: 'Keep typing, editing, or use the response as-is. Jarvis stays out of your way',
      example: 'Seamless integration with your workflow',
      color: 'cyan'
    }
  ];

  const colorClasses: Record<ColorKey, string> = {
    blue: 'from-blue-500 to-cyan-500',
    purple: 'from-purple-500 to-pink-500',
    green: 'from-green-500 to-emerald-500',
    cyan: 'from-cyan-500 to-blue-500'
  };

  return (
    <section id="how-it-works" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            How Jarvis Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the magic of AI-powered assistance in just four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-gray-600 to-transparent z-0 transform translate-x-4"></div>
              )}
              
              <div className="relative z-10 bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-6 text-center hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center mb-6">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${colorClasses[step.color]} text-white`}>
                    {step.icon}
                  </div>
                </div>
                
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 mb-4">{step.description}</p>
                
                <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm text-green-400">
                  {step.example}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Download Section */}
        <div className="text-center mt-16 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Download Jarvis now and experience AI-powered assistance directly in your workflow
          </p>
          <a 
            href="/jarvis-setup.exe" // Update this path to match your actual file name
            download
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Jarvis
          </a>
          <p className="text-sm text-gray-400 mt-4">Windows 10/11 • Version 1.0.0</p>
        </div>

        {/* HowItWorks Ad Unit */}
        <div className="max-w-4xl mx-auto my-12 p-4 bg-gray-800/50 rounded-lg">
          <AdSense 
            adSlot="1908357270"
            style={{ display: 'block' }}
            format="auto"
            layoutKey="-gw-1+2a-9x+5c"
          />
        </div>

        {/* Live Demo Section */}
        <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">See It In Action</h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-xl p-6 mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 ml-4 text-sm">Document Editor</span>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300">
                  I'm writing a blog post about sustainable technology.{' '}
                  <span className="bg-blue-900/30 px-2 py-1 rounded text-blue-300">
                    jarvis answer this- What are the latest trends in green technology?
                  </span>
                </p>
                
                <div className="border-l-4 border-green-500 pl-4 bg-green-900/20 p-4 rounded-r-lg">
                  <p className="text-gray-300">
                    <span className="text-green-400 font-semibold">Jarvis Response:</span>{' '}
                    The latest trends in green technology include advanced solar panel efficiency improvements, 
                    AI-optimized energy grids, carbon capture innovations, and sustainable computing solutions. 
                    These technologies are driving significant environmental impact while maintaining economic viability...
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Try Jarvis Free for 7 Days
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;