import { FaBriefcase, FaBookOpen } from 'react-icons/fa';

interface Experience {
  position: string;
  company: string;
  responsibilities: string[];
}

interface Course {
  title: string;
  institution: string;
  year: string;
}

export default function ExperienceCoursesSection() {
  const experiences: Experience[] = [
    {
      position: 'Cashier, Team Member',
      company: 'Latte Ceylon (Self-Employed)',
      responsibilities: [
        'Reviewed and monitored billing activities to ensure accuracy and timeliness',
        'Worked closely with management to ensure accuracy of orders and adhere to all policies',
      ],
    },
  ];

  const courses: Course[] = [
    {
      title: 'English Diploma',
      institution: 'BAE Institute Puwakpitiya',
      year: '2021',
    },
    {
      title: 'Barista',
      institution: 'Colombo Bar Tender and Barista School',
      year: '2024',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center mb-8">
              <FaBriefcase className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-secondary to-teal-50 rounded-lg p-8 border-l-4 border-primary hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">{exp.company}</p>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li
                        key={respIndex}
                        className="flex items-start space-x-3 text-gray-700"
                      >
                        <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <div className="flex items-center mb-8">
              <FaBookOpen className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Courses</h2>
            </div>

            <div className="space-y-4">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {course.title}
                      </h3>
                      <p className="text-gray-600">{course.institution}</p>
                    </div>
                    <span className="inline-block px-3 py-1 bg-secondary text-primary rounded-full text-sm font-semibold whitespace-nowrap ml-4">
                      {course.year}
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
