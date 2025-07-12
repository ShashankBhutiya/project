import React from 'react';
import { Download, Chrome, Siren as Firefox, Bookmark, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './HowItWorks.css';

const HowItWorks: React.FC = () => {
  const installOptions = [
    {
      icon: <Download className="w-8 h-8" />,
      title: 'Windows App',
      description: 'One-click install, works everywhere',
      link: 'https://github.com/ShashankBhutiya/project/releases/download/Install/JarvisType.exe',
      buttonText: 'Download .exe',
      primary: true
    },
    {
      icon: <Chrome className="w-8 h-8" />,
      title: 'Chrome Extension',
      description: 'For web-based workflows',
      link: '#',
      buttonText: 'Add to Chrome',
      primary: false
    },
    {
      icon: <Firefox className="w-8 h-8" />,
      title: 'Firefox Add-on',
      description: 'Firefox browser support',
      link: '#',
      buttonText: 'Add to Firefox',
      primary: false
    },
    {
      icon: <Bookmark className="w-8 h-8" />,
      title: 'Bookmarklet',
      description: 'Works in any browser',
      link: '#',
      buttonText: 'Get Bookmarklet',
      primary: false
    }
  ];

  return (
    <section className="relative py-24 bg-gray-900/50" id="download">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Get Started in 10 Seconds
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose your platform and start using AI everywhere you type.
          </p>
        </motion.div>

        {/* Install Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {installOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gray-800/50 backdrop-blur-sm border rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl ${
                option.primary 
                  ? 'border-blue-500/50 hover:border-blue-400/70 hover:shadow-blue-500/20' 
                  : 'border-gray-700/50 hover:border-gray-600/50'
              }`}
            >
              <div className={`inline-flex p-4 rounded-xl mb-4 ${
                option.primary 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                  : 'bg-gray-700/50'
              }`}>
                {option.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
              <p className="text-gray-400 mb-6 text-sm">{option.description}</p>
              <a
                href={option.link}
                download={option.title === 'Windows App' ? 'JarvisType.exe' : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center w-full px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  option.primary
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white'
                }`}
              >
                {option.buttonText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Need Enterprise Features?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Custom AI models, team management, SSO integration, and dedicated support for organizations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              See Pricing
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="mailto:sales@jarvistype.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300"
            >
              Contact Sales
            </a>
          </div>
        </motion.div>

        {/* Quick Start Guide */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-6">After Installation</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
              <div className="text-3xl mb-4">1️⃣</div>
              <h4 className="font-semibold text-white mb-2">Open any app</h4>
              <p className="text-gray-400 text-sm">Gmail, Slack, Word, WhatsApp—anywhere with text</p>
            </div>
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
              <div className="text-3xl mb-4">2️⃣</div>
              <h4 className="font-semibold text-white mb-2">Type "jarvis"</h4>
              <p className="text-gray-400 text-sm">Followed by your request or question</p>
            </div>
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
              <div className="text-3xl mb-4">3️⃣</div>
              <h4 className="font-semibold text-white mb-2">Get instant AI</h4>
              <p className="text-gray-400 text-sm">Perfect response appears at your cursor</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;