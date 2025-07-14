import { Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorksPage = () => {
  const steps = [
    {
      number: '1',
      title: 'Type "jarvis [your request]"',
      description: 'In any input field, anywhere on your computer'
    },
    {
      number: '2',
      title: 'AI processes instantly',
      description: 'Your words are understood in real-time'
    },
    {
      number: '3',
      title: 'Response auto-pasted',
      description: 'Perfect content appears at your cursor'
    }
  ];

  const customization = {
    starting: [
      { phrase: '##', style: 'Simple' },
      { phrase: 'Yo Jarvis', style: 'Fun' },
      { phrase: 'Dear Assistant,', style: 'Professional' }
    ],
    ending: [
      { phrase: '—Over and out,', style: 'Fun' },
      { phrase: '—Regards,', style: 'Professional' },
      { phrase: '##', style: 'Simple' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How JarvisType Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your typing experience with AI-powered assistance that works everywhere
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 mb-16 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Customize Your Experience</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Personalize your interaction with customizable trigger phrases that match your style and workflow
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Starting Phrases</h3>
              <div className="space-y-4">
                {customization.starting.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 flex justify-between items-center border border-gray-200">
                    <span className="text-blue-600 font-mono text-lg">{item.phrase}</span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {item.style}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Ending Phrases</h3>
              <div className="space-y-4">
                {customization.ending.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 flex justify-between items-center border border-gray-200">
                    <span className="text-green-600 font-mono text-lg">{item.phrase}</span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      {item.style}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-10 shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Typing?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Download now and experience the future of typing with AI assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/ShashankBhutiya/project/releases/download/Install/JarvisType_T.exe"
                download="JarvisType.exe"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download for Windows
              </a>
              <Link
                to="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors text-lg"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
