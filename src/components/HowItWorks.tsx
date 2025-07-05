import React from 'react';
import { Type, MessageSquare, Zap, CheckCircle, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './HowItWorks.css';

/**
 * Represents the color theme keys used for the step items
 */
type ColorKey = 'blue' | 'purple' | 'green' | 'cyan';

/**
 * Represents a single step in the How It Works section
 */
interface Step {
  /** Icon component to display for the step */
  icon: React.ReactNode;
  /** Title of the step */
  title: string;
  /** Description of what happens in this step */
  description: string;
  /** Example text or content for the step */
  example: string;
  /** Color theme for the step */
  color: ColorKey;
  /** Animation delay in seconds */
  delay: number;
}

/**
 * HowItWorks Component
 * 
 * Displays an animated step-by-step guide showing how the application works.
 * Each step includes an icon, title, description, and example.
 * 
 * @returns {JSX.Element} The rendered HowItWorks component
 */
const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      icon: <Type />,
      title: 'Type the Magic Words',
      description: 'In any application, type "jarvis" followed by your question or request',
      example: 'jarvis Explain quantum computing',
      color: 'blue',
      delay: 0.1
    },
    {
      icon: <MessageSquare />,
      title: 'AI Processes Your Request',
      description: 'Our advanced AI analyzes your question and generates a comprehensive response',
      example: 'Processing with GPT-4 and custom models...',
      color: 'purple',
      delay: 0.2
    },
    {
      icon: <Zap />,
      title: 'Instant Response',
      description: 'The AI response appears instantly at your cursor',
      example: 'Response inserted seamlessly into your workflow',
      color: 'green',
      delay: 0.3
    },
    {
      icon: <CheckCircle />,
      title: 'Continue Working',
      description: 'Keep typing or use the response as-is',
      example: 'Seamless integration with your workflow',
      color: 'cyan',
      delay: 0.4
    }
  ];

  const colorConfig: Record<ColorKey, { from: string; to: string; border: string }> = {
    blue: {
      from: '#3b82f6',
      to: '#0ea5e9',
      border: 'rgba(96, 165, 250, 0.5)'
    },
    purple: {
      from: '#8b5cf6',
      to: '#a855f7',
      border: 'rgba(168, 85, 247, 0.5)'
    },
    green: {
      from: '#10b981',
      to: '#14b8a6',
      border: 'rgba(16, 185, 129, 0.5)'
    },
    cyan: {
      from: '#06b6d4',
      to: '#0ea5e9',
      border: 'rgba(6, 182, 212, 0.5)'
    }
  };

  /** Animation variants for the container element */
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  /** Animation variants for individual step items */
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <section className="how-it-works" id="how-it-works">
      {/* Background elements */}
      <div className="background-elements">
        <div className="background-blob purple" />
        <div className="background-blob cyan" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="header-container"
        >
          <div className="badge">
            <span className="badge-dot" />
            How It Works
          </div>
          <h2 className="heading">
            Simple Steps to
            <span>AI-Powered Productivity</span>
          </h2>
          <p className="subtitle">
            Get started in seconds and experience the power of AI assistance across all your applications.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="timeline-container"
        >
          <div className="timeline-line" />
          
          {steps.map((step, index) => {
            const colors = colorConfig[step.color];
            const isEven = index % 2 === 0;
            
            return (
              <motion.div 
                key={index}
                variants={item}
                custom={index}
                className={`step ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                style={{
                  '--icon-from': colors.from,
                  '--icon-to': colors.to,
                  '--border-color': colors.border
                } as React.CSSProperties}
              >
                <div className={`step-content ${isEven ? '' : 'left'}`}>
                  <div className="step-icon">
                    {React.cloneElement(step.icon as React.ReactElement, { className: 'w-6 h-6' })}
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
                
                <div className="step-number">
                  <div className="step-number-inner">
                    {index + 1}
                  </div>
                </div>
                
                <div className={`step-content ${isEven ? 'text-left' : 'text-right'}`}>
                  <div className="step-example">
                    <code>{step.example}</code>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="cta-container"
        >
          <div className="cta-card">
            <h3 className="cta-title">Ready to Boost Your Productivity?</h3>
            <p className="cta-description">
              Join thousands of professionals who are already saving hours every day with our AI assistant.
            </p>
            <div className="cta-buttons">
              <a
                href="#download"
                className="primary-button"
              >
                Download Now
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="#features"
                className="secondary-button"
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;