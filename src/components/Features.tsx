import React, { useEffect } from 'react';
import { Zap, Globe, Shield, Rocket, ArrowRight, MessageSquare, Mail, FileText } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const benefits = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Zero Context Switch',
    description: 'Stay in your workflow—no copy-paste needed',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Works in Any Text Box',
    description: 'Gmail, Slack, Word, WhatsApp—everywhere you type',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Blazingly Fast',
    description: 'Responses appear instantly at your cursor',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Privacy First',
    description: 'Your data stays on your device',
    gradient: 'from-orange-500 to-red-500',
  }
];

const useCases = [
  {
    icon: <Mail className="w-8 h-8" />,
    title: 'Executive Apology Email',
    prompt: 'jarvis, write a resignation to my boss Shanmuga',
    result: 'Subject: Resignation Notice - [Your Name]\n\nDear Shanmuga,\n\nI am writing to formally notify you of my resignation from my position at [Company]. My last day will be [Date].\n\nI appreciate the opportunities for growth and development during my time here...',
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Hinglish WhatsApp Chat',
    prompt: 'jarvis, type in Hinglish and make me sound interested: "kal ka plan kya hai?"',
    result: 'Hey yaar, kal ka plan kya hai? Chalo movie dekhne chalte hain! Bahut time se kuch kiya nahi. Weekend mein kuch exciting karte hain! 🎬✨',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'Birthday Party Invitation',
    prompt: 'jarvis, write complete invitation for son\'s birthday party make it sound fun and exciting',
    result: '🎉 You\'re Invited to [Son\'s Name]\'s Birthday Bash! 🎂\n\nJoin us for an EPIC celebration filled with games, cake, and tons of fun! Date: [Date] | Time: [Time] | Venue: [Address]\n\nCome ready to party! 🎈🎁',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'Concept Explanation',
    prompt: 'jarvis, explain the concept of Resolve in 10 lines',
    result: '1. Resolve is a mental commitment to achieve a specific goal\n2. It involves unwavering determination despite obstacles\n3. Requires clear intention and focused action\n4. Builds through consistent practice and discipline\n5. Strengthens with each challenge overcome\n6. Essential for long-term success in any endeavor\n7. Differs from mere wishful thinking or hope\n8. Can be developed through mindfulness and reflection\n9. Often tested during moments of difficulty\n10. Ultimately transforms intentions into reality',
    gradient: 'from-indigo-500 to-blue-500'
  }
];

const BenefitCard = ({ benefit, index }: { benefit: typeof benefits[0], index: number }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1]
        }
      });
    }
  }, [controls, inView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      animate={controls}
      className="h-full"
    >
      <div className="h-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 hover:border-gray-600/50 hover:shadow-xl hover:shadow-blue-500/10 group">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${benefit.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
          {benefit.icon}
        </div>
        <h3 className="text-lg font-bold text-white mb-2">
          {benefit.title}
        </h3>
        <p className="text-gray-400 text-sm">{benefit.description}</p>
      </div>
    </motion.div>
  );
};

const UseCaseCard = ({ useCase, index }: { useCase: typeof useCases[0], index: number }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: index * 0.2,
          ease: [0.16, 1, 0.3, 1]
        }
      });
    }
  }, [controls, inView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      animate={controls}
      className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300"
    >
      <div className="flex items-start space-x-4 mb-4">
        <div className={`p-3 rounded-xl bg-gradient-to-r ${useCase.gradient} flex-shrink-0`}>
          {useCase.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/30">
          <div className="text-blue-400 text-sm font-medium mb-2">You type:</div>
          <code className="text-gray-300 text-sm">{useCase.prompt}</code>
        </div>
        
        <div className="bg-gray-900/50 rounded-lg p-4 border border-green-500/30">
          <div className="text-green-400 text-sm font-medium mb-2">AI writes:</div>
          <div className="text-gray-300 text-sm whitespace-pre-line font-mono leading-relaxed">
            {useCase.result}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 -right-20 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Key Benefits */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Why JarvisType Changes Everything
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>

        {/* Use Cases */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            See It in Action
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Real examples of how JarvisType works across different scenarios and apps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} useCase={useCase} index={index} />
          ))}
        </div>

        {/* How It Works */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Type "jarvis [your request]"</h3>
              <p className="text-gray-400">In any input field, anywhere on your computer</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI processes instantly</h3>
              <p className="text-gray-400">Your words are understood in real-time</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Response auto-pasted</h3>
              <p className="text-gray-400">Perfect content appears at your cursor</p>
            </div>
          </div>
        </motion.div>

        {/* Customization */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-20"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Make It Yours</h3>
          <p className="text-gray-400 text-center mb-8">Customize your trigger phrases to match your style</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Starting Phrases</h4>
              <div className="space-y-3">
                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700/30">
                  <span className="text-blue-400 font-mono">##</span>
                  <span className="text-gray-400 ml-2">Simple</span>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700/30">
                  <span className="text-blue-400 font-mono">Yo Jarvis</span>
                  <span className="text-gray-400 ml-2">Fun</span>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700/30">
                  <span className="text-blue-400 font-mono">Dear Assistant,</span>
                  <span className="text-gray-400 ml-2">Professional</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Ending Phrases</h4>
              <div className="space-y-3">
                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700/30">
                  <span className="text-green-400 font-mono">—Over and out,</span>
                  <span className="text-gray-400 ml-2">Fun</span>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700/30">
                  <span className="text-green-400 font-mono">—Regards,</span>
                  <span className="text-gray-400 ml-2">Professional</span>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700/30">
                  <span className="text-green-400 font-mono">##</span>
                  <span className="text-gray-400 ml-2">Simple</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-gray-700/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Get Started in 10 Seconds</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Download once, use everywhere. No setup, no configuration—just instant AI assistance.
            </p>
            <a
              href="https://github.com/ShashankBhutiya/project/releases/download/Install/JarvisType.exe"
              download="JarvisType.exe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Download className="w-5 h-5 mr-2" />
              Install for Windows
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;