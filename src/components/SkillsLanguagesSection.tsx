import { FaBolt, FaGlobe } from 'react-icons/fa';

interface Skill {
  name: string;
  level: string;
}

interface Language {
  name: string;
  proficiency: string;
}

export default function SkillsLanguagesSection() {
  const skills: Skill[] = [
    { name: 'Teamwork', level: 'Expert' },
    { name: 'Leadership', level: 'Expert' },
    { name: 'Social Media Marketing', level: 'Expert' },
    { name: 'Digital Marketing', level: 'Expert' },
    { name: 'Work under Pressure', level: 'Expert' },
  ];

  const languages: Language[] = [
    { name: 'English', proficiency: 'Native Speaker' },
    { name: 'Sinhala', proficiency: 'Native Speaker' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills */}
          <div>
            <div className="flex items-center mb-8">
              <FaBolt className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
            </div>

            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">
                      {skill.name}
                    </span>
                    <span className="px-3 py-1 bg-secondary text-primary rounded-full text-sm font-semibold">
                      {skill.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <div className="flex items-center mb-8">
              <FaGlobe className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Languages</h2>
            </div>

            <div className="space-y-4">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">
                      {language.name}
                    </span>
                    <span className="px-3 py-1 bg-secondary text-primary rounded-full text-sm font-semibold">
                      {language.proficiency}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
