import React from 'react';
import { Check, Crown, Zap, Star, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for trying out Jarvis AI',
      features: [
        '50 AI responses per month',
        'Basic AI model (GPT-3.5)',
        'Text insertion anywhere',
        'Email support',
        'Basic privacy protection'
      ],
      limitations: [
        'Limited to 50 responses/month',
        'Basic AI model only',
        'Standard response speed'
      ],
      buttonText: 'Start Free',
      buttonClass: 'bg-gray-600 hover:bg-gray-700 text-white',
      popular: false
    },
    {
      name: 'Premium',
      price: '$19',
      period: '/month',
      description: 'For professionals and power users',
      features: [
        'Unlimited AI responses',
        'Premium AI models (GPT-4, Claude)',
        'Custom AI training',
        'Priority support',
        'Advanced privacy controls',
        'Team collaboration features',
        'API access',
        'Custom shortcuts'
      ],
      buttonText: 'Start Premium Trial',
      buttonClass: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white',
      popular: true,
      savings: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For teams and organizations',
      features: [
        'Everything in Premium',
        'Unlimited team members',
        'Custom AI model deployment',
        'SSO integration',
        'Advanced analytics',
        'Dedicated support manager',
        'Custom integrations',
        'On-premise deployment option'
      ],
      buttonText: 'Contact Sales',
      buttonClass: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white',
      popular: false,
      enterprise: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Start free and upgrade as you grow. All plans include our core AI features.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mt-8 mb-8">
            <span className="text-gray-400">Monthly</span>
            <div className="relative">
              <input type="checkbox" className="sr-only" />
              <div className="w-14 h-8 bg-gray-600 rounded-full p-1 cursor-pointer">
                <div className="w-6 h-6 bg-white rounded-full shadow-md transform transition-transform"></div>
              </div>
            </div>
            <span className="text-white">Annual</span>
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">Save 20%</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={index} className={`relative ${plan.popular ? 'transform scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>{plan.savings}</span>
                  </div>
                </div>
              )}
              
              <div className={`bg-gray-900/50 backdrop-blur-lg border ${plan.popular ? 'border-blue-500/50' : 'border-gray-700'} rounded-xl p-8 h-full relative overflow-hidden`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full transform translate-x-16 -translate-y-16"></div>
                )}
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    {plan.enterprise && <Crown className="w-6 h-6 text-yellow-400" />}
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-4xl md:text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 mb-8 ${plan.buttonClass}`}>
                    {plan.buttonText}
                  </button>
                  
                  <div className="space-y-4">
                    <div className="text-sm font-semibold text-white mb-3">What's included:</div>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.limitations && (
                      <div className="mt-6 pt-6 border-t border-gray-700">
                        <div className="text-sm font-semibold text-gray-400 mb-3">Limitations:</div>
                        {plan.limitations.map((limitation, limitIndex) => (
                          <div key={limitIndex} className="flex items-start space-x-3">
                            <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                              <div className="w-3 h-3 bg-gray-500 rounded-full mx-auto mt-1"></div>
                            </div>
                            <span className="text-gray-400 text-sm">{limitation}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mb-12">
          <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="w-6 h-6 text-green-400" />
              <span className="text-lg font-semibold text-white">30-Day Money-Back Guarantee</span>
            </div>
            <p className="text-gray-300">
              Not satisfied? Get a full refund within 30 days, no questions asked.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-lg border border-blue-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Writing?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of professionals who save hours every day with Jarvis AI. Start your free trial now.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="text-gray-300 hover:text-white transition-colors">
              Schedule a Demo →
            </button>
          </div>
        </div>

        {/* Google Ad */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 max-w-4xl mx-auto">
            <div className="text-xs text-gray-500 mb-4">Advertisement</div>
            <div className="h-32 bg-gradient-to-r from-gray-700 to-gray-600 rounded flex items-center justify-center">
              <span className="text-gray-400">Leaderboard Ad Space (728x90)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;