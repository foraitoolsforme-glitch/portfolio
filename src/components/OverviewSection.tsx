import { FaBullseye, FaAward, FaChartLine } from 'react-icons/fa';

export default function OverviewSection() {
  return (
    <section id="overview" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Overview</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive curriculum designed to transform you into a proficient marketing professional and business strategist.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-white rounded-xl border-[1px]">
            <FaBullseye className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Goal-Oriented</h3>
            <p className="text-gray-700 leading-relaxed">
              Clear, measurable learning objectives designed to build practical skills that employers value
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-xl border-[1px]">
            <FaAward className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Industry-Aligned</h3>
            <p className="text-gray-700 leading-relaxed">
              Curriculum based on current industry standards and best practices used by leading tech companies
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-xl border-[1px]">
            <FaChartLine className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Progressive Learning</h3>
            <p className="text-gray-700 leading-relaxed">
              Structured path from fundamentals to advanced topics, building knowledge incrementally
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">What You'll Achieve</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Develop Integrated Marketing Campaigns</h4>
                <p className="text-gray-600">Create data-driven strategies from market research to consumer execution.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Master Marketing Technologies</h4>
                <p className="text-gray-600">Utilize industry-standard CRM, SEO, and Social Media Analytics tools.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Execute Social Media Strategies</h4>
                <p className="text-gray-600">Launch high-impact digital campaigns across global platforms.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Apply Ethical Business Standards</h4>
                <p className="text-gray-600">Implement transparent and consumer-focused practices following industry regulations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
