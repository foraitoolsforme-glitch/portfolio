import { FaChartBar, FaShareAlt, FaUsers, FaRegComments, FaCalculator } from 'react-icons/fa';
import OutcomeCard from './OutcomeCard';
import { learningOutcomes } from '../data/outcomes';

const icons = {
  marketingStrategy: <FaChartBar className="h-8 w-8" />,
  digitalMarketing: <FaShareAlt className="h-8 w-8" />,
  professionalLeadership: <FaUsers className="h-8 w-8" />,
  businessCommunications: <FaRegComments className="h-8 w-8" />,
  commerceFundamentals: <FaCalculator className="h-8 w-8" />
};

export default function OutcomesSection() {
  return (
    <section id="outcomes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Learning Outcomes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive skills and knowledge you'll gain throughout this program
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(learningOutcomes).map(([key, outcome]) => (
            <OutcomeCard
              key={key}
              title={outcome.title}
              items={outcome.items}
              icon={icons[key as keyof typeof icons]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
