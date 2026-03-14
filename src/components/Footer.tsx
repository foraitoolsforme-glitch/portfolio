import { FaGraduationCap, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaGraduationCap className="h-8 w-8 text-secondary" />
              <span className="text-xl font-bold text-white">Learning Outcomes</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering students with comprehensive marketing and strategic business skills for the modern commercial landscape.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#overview" className="hover:text-secondary transition-colors">Overview</a></li>
              <li><a href="#outcomes" className="hover:text-secondary transition-colors">Learning Outcomes</a></li>
              <li><a href="#skills" className="hover:text-secondary transition-colors">Technical Skills</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <FaEnvelope className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Learning Outcomes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
