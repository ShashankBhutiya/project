import { Download, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
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
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How It Works */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Customization */}
        <div className="bg-white rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Customize Your Style</h3>
          <p className="text-gray-600 text-center mb-8">Personalize your trigger phrases to match your tone</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Starting Phrases</h4>
              <div className="space-y-3">
                {customization.starting.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3 flex justify-between items-center">
                    <span className="text-blue-600 font-mono">{item.phrase}</span>
                    <span className="text-gray-500 text-sm">{item.style}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Ending Phrases</h4>
              <div className="space-y-3">
                {customization.ending.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3 flex justify-between items-center">
                    <span className="text-green-600 font-mono">{item.phrase}</span>
                    <span className="text-gray-500 text-sm">{item.style}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="text-center">
          <div className="bg-blue-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Get Started in 10 Seconds</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Download once, use everywhere. No setup, no configuration—just instant AI assistance.
            </p>
            <a
              href="https://github.com/ShashankBhutiya/project/releases/download/Install/JarvisType.exe"
              download="JarvisType.exe"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Install for Windows
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;