import { FaCompass, FaClock, FaMap } from 'react-icons/fa';
import ImageCarousel from './ImageCarousel';

export default function CareerTestsSection() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Career Test Evidence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Standardized assessments mapping my professional traits and aligning my purpose with high-impact career paths.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 border border-gray-100 border-t-4 border-t-primary flex flex-col">
            <div className="flex items-center mb-4">
              <FaCompass className="h-10 w-10 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Claremont Purpose Test</h3>
            </div>
            <ImageCarousel 
              images={[
                '/Claremont/1.jpeg',
                '/Claremont/2.jpeg',
                '/Claremont/3.jpeg',
                '/Claremont/4.jpeg'
              ]}
              altText="Claremont Purpose Test"
            />
            <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
              Identified strong alignments with purpose-driven organizational leadership, confirming an innate drive to orchestrate meaningful brand narratives and deliver value-centric marketing at scale.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 border border-gray-100 border-t-4 border-t-primary flex flex-col">
            <div className="flex items-center mb-4">
              <FaClock className="h-10 w-10 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">80,000 Hours</h3>
            </div>
            <ImageCarousel 
              images={[
                '/80,000 Hours/1.png',
                '/80,000 Hours/2.png',
                '/80,000 Hours/3.png',
                '/80,000 Hours/4.png',
                '/80,000 Hours/5.png',
                '/80,000 Hours/6.png',
                '/80,000 Hours/8.png',
                '/80,000 Hours/9.png'
              ]}
              altText="80,000 Hours Framework"
            />
            <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
              Evaluated career capital and long-term societal contribution. The framework highlights leveraging top-tier marketing skills as an effective strategy to advocate for high-priority global solutions.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 border border-gray-100 border-t-4 border-t-primary flex flex-col">
            <div className="flex items-center mb-4">
              <FaMap className="h-10 w-10 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Career Aptitude Test</h3>
            </div>
            <ImageCarousel 
              images={[
                '/CareerAptitude/1.jpeg',
                '/CareerAptitude/2.jpeg',
                '/CareerAptitude/3.jpeg',
                '/CareerAptitude/4.jpeg',
                '/CareerAptitude/5.jpeg',
                '/CareerAptitude/6.jpeg',
              ]}
              altText="Career Aptitude Test"
            />
            <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
              Demonstrated strong competencies in strategic thinking, persuasive communication, and analytical problem-solving. This confirms a natural fit for roles in marketing management and business strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
