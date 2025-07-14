import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Demo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how JarvisType transforms your workflow in seconds
          </p>
        </div>
        
        <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl bg-black max-w-4xl mx-auto mb-12">
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/4WX_SJe8q3Y?autoplay=0&mute=1&controls=1&rel=0&modestbranding=1&playsinline=1"
            title="JarvisType Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <div className="text-center">
          <Link
            to="/demo"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            View Detailed Demo
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Demo;
