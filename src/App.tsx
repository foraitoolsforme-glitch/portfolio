import Header from './components/Header';
import ProfessionalBio from './components/ProfessionalBio';
import EducationSection from './components/EducationSection';
import SkillsLanguagesSection from './components/SkillsLanguagesSection';
import ExperienceCoursesSection from './components/ExperienceCoursesSection';
import OverviewSection from './components/OverviewSection';
import OutcomesSection from './components/OutcomesSection';
import SkillsSection from './components/SkillsSection';
import CareerTestsSection from './components/CareerTestsSection';
import Footer from './components/Footer';
import VideoSection from './components/VideoSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ProfessionalBio />
        <VideoSection />
        <EducationSection />
        <SkillsLanguagesSection />
        <ExperienceCoursesSection />
        {/* <Hero /> */}
        <OverviewSection />
        <OutcomesSection />
        <SkillsSection />
        <CareerTestsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
