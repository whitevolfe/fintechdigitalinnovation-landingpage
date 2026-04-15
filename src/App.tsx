import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { TrustSection } from './components/TrustSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { OfferSection } from './components/OfferSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FinalCTASection } from './components/FinalCTASection';
import { WhatsAppFloat } from './components/WhatsAppFloat';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ProblemSolutionSection />
      <OfferSection />
      <PortfolioSection />
      <ProcessSection />
      <GuaranteeSection />
      <FinalCTASection />
    </>
  );
}

export default App;