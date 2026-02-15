import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import MouseGradient from './components/MouseGradient';
import HeroSection from './sections/HeroSection';
import ProblemSection from './sections/ProblemSection';
import SolutionSection from './sections/SolutionSection';
import HowItWorksSection from './sections/HowItWorksSection';
import DashboardPreviewSection from './sections/DashboardPreviewSection';
import SecuritySection from './sections/SecuritySection';
import CTASection from './sections/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-white relative">
      <MouseGradient />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <DashboardPreviewSection />
        <SecuritySection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
