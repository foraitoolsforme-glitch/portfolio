import { FaLinkedin, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProfessionalBio() {
  const bioData = {
    name: 'Dhananjana Sarachchandra',
    email: 'dhananjana068@gmail.com',
    linkedinUrl: 'https://www.linkedin.com/in/dhananjana-sarachchandra-6224182a3',
    photoUrl: '/1.png', // Add your photo URL here
    primaryDegree: 'Bachelor of Commerce (Marketing)',
    university: 'Edith Cowan University',
    status: 'Present',
    bio: 'I am an undergraduate student studying Bachelor of Commerce, majoring in Marketing. I am passionate about marketing, business strategy, and understanding customer behavior. I am eager to develop my knowledge and gain practical experience in the marketing field while contributing to the success of an organization.',
  };

  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {bioData.photoUrl && (
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-2xl transform -rotate-6"></div>
                <img
                  src={bioData.photoUrl}
                  alt={bioData.name}
                  className="relative w-80 h-80 rounded-2xl object-cover shadow-2xl"
                />
              </div>
            </div>
          )}

          <div className={`space-y-6 ${!bioData.photoUrl ? 'md:col-span-2' : ''}`}>
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-2">{bioData.name}</h1>
              <p className="text-xl text-primary font-semibold">{bioData.primaryDegree}</p>
              <p className="text-gray-600 mt-1">{bioData.university} • {bioData.status}</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Professional Summary</h3>
              <p className="text-gray-700 leading-relaxed">
                {bioData.bio}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={`mailto:${bioData.email}`}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-accent text-white rounded-lg hover:brightness-110 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <FaEnvelope className="h-5 w-5" />
                <span className="font-semibold">Email</span>
              </a>

              <a
                href={bioData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-lg hover:brightness-110 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <FaLinkedin className="h-5 w-5" />
                <span className="font-semibold">LinkedIn</span>
                <FaExternalLinkAlt className="h-4 w-4 mx-1" />
              </a>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                📍 Passionate about marketing, business strategy, and customer behavior analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
