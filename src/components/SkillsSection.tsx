import { skillCategories } from '../data/outcomes';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Expertise & Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive set of marketing, leadership, and operational skills developed through academic study and practical experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-secondary to-teal-50 rounded-xl p-6 border border-secondary hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.category}</h3>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white text-primary rounded-full text-sm font-medium shadow-sm border border-teal-200"
                    >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
