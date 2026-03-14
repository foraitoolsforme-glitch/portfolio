import { FaCheckCircle } from 'react-icons/fa';

interface OutcomeCardProps {
  title: string;
  items: string[];
  icon?: React.ReactNode;
}

export default function OutcomeCard({ title, items, icon }: OutcomeCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
      <div className="flex items-start space-x-4 mb-6">
        {icon && <div className="flex-shrink-0 text-primary">{icon}</div>}
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start space-x-3">
            <FaCheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
