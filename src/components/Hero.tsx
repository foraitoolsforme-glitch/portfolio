import { FaBookOpen, FaChartLine, FaUsers } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-secondary to-teal-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Unit Learning Outcomes
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
                Comprehensive guide to mastering modern marketing strategies, consumer behavior analysis, and professional business practices
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-primary rounded-full opacity-10 animate-pulse"></div>
                <img 
                  src="/student-hero.jpg" 
                  alt="Student Portrait" 
                  className="rounded-full object-cover w-full h-full border-8 border-white shadow-2xl relative z-10"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'; // Fallback if local image is missing
                  }}
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-t-primary">
              <FaBookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Core Concepts</h3>
              <p className="text-gray-600">Master fundamental marketing and strategic business principles</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-t-accent">
              <FaChartLine className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Analysis</h3>
              <p className="text-gray-600">Build data-driven strategies using advanced analytic tools</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-t-primary">
              <FaUsers className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consumer Behavior</h3>
              <p className="text-gray-600">Design and implement efficient market outreach and branding</p>
            </div>
          </div>
      </div>
    </section>
  );
}
