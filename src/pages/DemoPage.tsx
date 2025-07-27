import { Play, Zap, Code, MessageSquare, Command, Download } from 'lucide-react';

const DemoPage = () => {
  const features = [
    {
      icon: <Command className="h-8 w-8 text-indigo-600" />,
      title: 'Quick Commands',
      description: 'Type simple commands to get instant AI assistance anywhere.',
      examples: [
        'jarvis write a professional email',
        'jarvis explain quantum computing',
        'jarvis summarize this article'
      ]
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-purple-600" />,
      title: 'Natural Language',
      description: 'No need to learn complex commands. Just type naturally.',
      examples: [
        'jarvis make this sound more professional',
        'jarvis translate to Spanish',
        'jarvis make this shorter'
      ]
    },
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: 'Code Generation',
      description: 'Get instant help with programming and debugging.',
      examples: [
        'jarvis write a python function to sort a list',
        'jarvis explain this code',
        'jarvis fix this error'
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-indigo-50 to-white pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            JarvisType in Action
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            See how JarvisType can transform your workflow with AI-powered text generation
          </p>
          
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black max-w-5xl mx-auto mb-12">
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/4WX_SJe8q3Y?autoplay=1&mute=1&controls=0&loop=1&playlist=4WX_SJe8q3Y&modestbranding=1&rel=0&showinfo=0&disablekb=1&iv_load_policy=3"
                title="JarvisType Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-3 px-6 text-center">
              <p className="text-white text-sm font-medium">Watch how JarvisType works in any application</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Features at Your Fingertips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how JarvisType can enhance your productivity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {feature.description}
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">TRY IT:</h4>
                  <ul className="space-y-2">
                    {feature.examples.map((example, i) => (
                      <li key={i} className="bg-gray-50 p-3 rounded-md text-sm font-mono text-gray-800">
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to boost your productivity?
          </h2>
          <p className="mt-4 text-xl text-indigo-100">
            Get started with JarvisType today and experience the power of AI at your fingertips.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="https://github.com/ShashankBhutiya/project/releases/download/Install/JarvisType_T.exe"
              download="JarvisType.exe"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-colors duration-200"
            >
              <Download className="-ml-1 mr-3 h-6 w-6" />
              Download Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
