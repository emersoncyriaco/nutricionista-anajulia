import React from 'react';
import { UrgencyPill } from './components/UrgencyPill';
import { HeroSection } from './components/HeroSection';
import { PainSection } from './components/PainSection';
import { SolutionSection } from './components/SolutionSection';
import { SocialProofSection } from './components/SocialProofSection';
import { OfferDetailsSection } from './components/OfferDetailsSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { PricingSection } from './components/PricingSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <UrgencyPill />
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <SocialProofSection />
      <OfferDetailsSection />
      <PricingSection />
      <GuaranteeSection />
    </div>
  );
}

export default App;