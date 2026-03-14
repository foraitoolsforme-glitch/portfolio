export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">Portfolio</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#overview" className="text-gray-700 hover:text-primary transition-colors">Overview</a>
            <a href="#outcomes" className="text-gray-700 hover:text-primary transition-colors">Outcomes</a>
            <a href="#skills" className="text-gray-700 hover:text-primary transition-colors">Skills</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
