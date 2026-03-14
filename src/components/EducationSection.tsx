import { FaGraduationCap } from 'react-icons/fa';

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

export default function EducationSection() {
  const education: EducationItem[] = [
    {
      degree: 'Bachelor of Commerce',
      institution: 'Edith Cowan University',
      year: 'Present',
    },
    {
      degree: 'Diploma of Commerce',
      institution: 'Edith Cowan University',
      year: '2024',
    },
    {
      degree: 'Foundation of Commerce',
      institution: 'Australian College of Business and Technology',
      year: '2023',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-12">
          <FaGraduationCap className="h-8 w-8 text-primary mr-3" />
          <h2 className="text-4xl font-bold text-gray-900">Education</h2>
        </div>

        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-secondary to-teal-50 rounded-lg p-8 border-l-4 border-primary hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-lg text-gray-700">{item.institution}</p>
                </div>
                <span className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold">
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
