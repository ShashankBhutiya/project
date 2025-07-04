import React from 'react';
import { Zap, Twitter, Github, Linkedin, Mail } from 'lucide-react';
import AdSense from './AdSense';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Jarvis AI
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              The future of AI-powered writing assistance. Instant, intelligent, everywhere.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>

        {/* Google Ad */}
        <div className="mb-8">
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
            <div className="text-xs text-gray-500 mb-2 text-center">Advertisement</div>
            <div className="h-20 bg-gradient-to-r from-gray-700 to-gray-600 rounded flex items-center justify-center">
              <span className="text-gray-400 text-sm">Footer Ad Space</span>
            </div>
          </div>
        </div>

        {/* AdSense Ad Block - Added above the copyright */}
        <div className="py-6 border-t border-gray-800 mt-8 mb-6">
          <div className="flex justify-center">
            <AdSense 
              adSlot="2483072340" // Replace with your footer ad slot ID
              style={{ display: 'block' }}
              format="auto"
              layoutKey="-gw-1+2a-9x+5c"
            />
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Jarvis AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;