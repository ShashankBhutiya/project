import { Zap, Globe, Shield, Rocket } from 'lucide-react';

const Features = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Zero Context Switch',
      description: 'Stay in your workflow—no copy-paste needed',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Works in Any Text Box',
      description: 'Gmail, Slack, Word, WhatsApp—everywhere you type',
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Blazingly Fast',
      description: 'Responses appear instantly at your cursor',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Privacy First',
      description: 'Your data stays on your device',
    }
  ];

  const useCases = [
    {
      title: 'Executive Email',
      prompt: 'jarvis, write resignation to my boss Shanmuga',
      result: 'Subject: Resignation Notice - [Your Name]\n\nDear Shanmuga,\n\nI am writing to formally notify you of my resignation from my position at [Company]. My last day will be [Date].\n\nI appreciate the opportunities for growth and development during my time here...'
    },
    {
      title: 'Hinglish WhatsApp',
      prompt: 'jarvis, type in Hinglish and make me sound interested: "kal ka plan kya hai?"',
      result: 'Hey yaar, kal ka plan kya hai? Chalo movie dekhne chalte hain! Bahut time se kuch kiya nahi. Weekend mein kuch exciting karte hain! 🎬✨'
    },
    {
      title: 'Birthday Invitation',
      prompt: 'jarvis, write complete invitation for son\'s birthday party make it sound fun and exciting',
      result: '🎉 You\'re Invited to [Son\'s Name]\'s Birthday Bash! 🎂\n\nJoin us for an EPIC celebration filled with games, cake, and tons of fun! Date: [Date] | Time: [Time] | Venue: [Address]\n\nCome ready to party! 🎈🎁'
    },
    {
      title: 'Concept Explanation',
      prompt: 'jarvis, explain the concept of Resolve in 10 lines',
      result: '1. Resolve is a mental commitment to achieve a specific goal\n2. It involves unwavering determination despite obstacles\n3. Requires clear intention and focused action\n4. Builds through consistent practice and discipline\n5. Strengthens with each challenge overcome\n6. Essential for long-term success in any endeavor\n7. Differs from mere wishful thinking or hope\n8. Can be developed through mindfulness and reflection\n9. Often tested during moments of difficulty\n10. Ultimately transforms intentions into reality'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Key Benefits */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why JarvisType Changes Everything
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="inline-flex p-3 rounded-lg bg-blue-100 text-blue-600 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See It in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real examples of how JarvisType works across different scenarios and apps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{useCase.title}</h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-blue-600 text-sm font-medium mb-2">You type:</div>
                  <code className="text-gray-700 text-sm">{useCase.prompt}</code>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <div className="text-green-600 text-sm font-medium mb-2">AI writes:</div>
                  <div className="text-gray-700 text-sm whitespace-pre-line font-mono leading-relaxed">
                    {useCase.result}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;