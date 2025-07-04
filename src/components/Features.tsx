import React from 'react';
import { Zap, Brain, Shield, Rocket, Crown, Star } from 'lucide-react';
import AdSense from './AdSense';

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Instant AI Responses',
      description: 'Type "jarvis answer this-" anywhere and get intelligent responses in milliseconds',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Context-Aware Intelligence',
      description: 'Advanced AI understands context and provides relevant, accurate answers',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Privacy Protected',
      description: 'Your data stays secure with enterprise-grade encryption and privacy controls',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Universal Integration',
      description: 'Works seamlessly across all applications, browsers, and text editors',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Revolutionary AI Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the future of AI-powered writing assistance with cutting-edge features designed for modern professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-6 h-full hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient} mb-4`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Ad Unit */}
        <div className="max-w-4xl mx-auto my-12 p-4 bg-gray-800/50 rounded-lg">
          <AdSense 
            adSlot="4728325251"
            style={{ display: 'block' }}
            format="auto"
            layoutKey="-gw-1+2a-9x+5c"
          />
        </div>

        {/* Premium Feature Highlight */}
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Crown className="w-6 h-6 text-yellow-400" />
            <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wide">Premium Exclusive</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Advanced AI Models & Custom Training</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Access GPT-4, Claude, and other premium AI models. Train Jarvis on your specific writing style and domain knowledge.
          </p>
          <div className="flex items-center justify-center space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
            <span className="text-gray-300 ml-2">Rated 4.9/5 by premium users</span>
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
            Upgrade to Premium
          </button>
        </div>

        {/* Google Ad Placement */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="text-xs text-gray-500 mb-4">Sponsored Content</div>
            <div className="h-24 bg-gradient-to-r from-gray-700 to-gray-600 rounded flex items-center justify-center">
              <span className="text-gray-400">728x90 Google Ad Space</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;