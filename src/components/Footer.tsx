import { Download, ArrowRight, Zap, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Download', href: 'https://github.com/ShashankBhutiya/project/releases' },
        { name: 'Features', href: '#features' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Demo', href: '#demo' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Documentation', href: 'https://github.com/ShashankBhutiya/project#readme' },
        { name: 'GitHub Issues', href: 'https://github.com/ShashankBhutiya/project/issues' },
        { name: 'Contact Support', href: 'mailto:contact@jarvistype.com' },
        { name: 'Report Bug', href: 'https://github.com/ShashankBhutiya/project/issues/new?template=bug_report.md' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: 'https://github.com/ShashankBhutiya' },
        { name: 'GitHub', href: 'https://github.com/ShashankBhutiya' },
        { name: 'LinkedIn', href: 'https://linkedin.com/in/shashankbhutiya' },
        { name: 'Email', href: 'mailto:contact@jarvistype.com' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'License', href: 'https://github.com/ShashankBhutiya/project/blob/main/LICENSE' },
        { name: 'Contribute', href: 'https://github.com/ShashankBhutiya/project/blob/main/CONTRIBUTING.md' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, name: 'GitHub', href: 'https://github.com/ShashankBhutiya' },
    { icon: <Linkedin className="w-5 h-5" />, name: 'LinkedIn', href: 'https://linkedin.com/in/shashankbhutiya' },
    { icon: <Mail className="w-5 h-5" />, name: 'Email', href: 'mailto:hello@jarvistype.com' },
  ];

  return (
    <footer className="relative bg-gray-900 border-t border-gray-800/50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-gradient-radial from-blue-500/5 to-transparent opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Final CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-gray-700/50 rounded-2xl p-8 mb-16 backdrop-blur-sm text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Transform Your Workflow?</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Join thousands who've already made typing effortless with AI assistance everywhere.
          </p>
          <a
            href="https://github.com/ShashankBhutiya/project/releases/download/Install/JarvisType.exe"
            download="JarvisType.exe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <Download className="w-5 h-5 mr-2" />
            Install in 10 Seconds
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                JarvisType
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              AI at your cursor, anywhere you type. The fastest way to get AI assistance without leaving your workflow.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="p-2.5 bg-gray-800/50 rounded-xl text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold text-lg mb-6">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-start group"
                    >
                      <span className="group-hover:text-blue-400 transition-colors duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} JarvisType. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;