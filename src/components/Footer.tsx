import { Zap, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">JarvisType</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              AI at your cursor, anywhere you type. The fastest way to get AI assistance without leaving your workflow.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ShashankBhutiya"
                className="text-gray-400 hover:text-gray-600"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@jarvistype.com"
                className="text-gray-400 hover:text-gray-600"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-600 hover:text-gray-900">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it works</a></li>
              <li><a href="#demo" className="text-gray-600 hover:text-gray-900">Demo</a></li>
              <li><a href="https://github.com/ShashankBhutiya/project/releases" className="text-gray-600 hover:text-gray-900">Download</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="https://github.com/ShashankBhutiya/project#readme" className="text-gray-600 hover:text-gray-900">Documentation</a></li>
              <li><a href="https://github.com/ShashankBhutiya/project/issues" className="text-gray-600 hover:text-gray-900">GitHub Issues</a></li>
              <li><a href="mailto:contact@jarvistype.com" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} JarvisType. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;