import React from 'react';
import QuoteHero from '../components/pricing/QuoteHero';
import ConsultationScheduler from '../components/pricing/ConsultationScheduler';
import QuoteRequestForm from '../components/pricing/QuoteRequestForm';
import PricingFAQ from '../components/pricing/PricingFAQ';
import TrustIndicators from '../components/shared/TrustIndicators';

export default function Pricing() {
  return (
    <div className="pt-16">
      <QuoteHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <QuoteRequestForm />
          <ConsultationScheduler />
        </div>
        <TrustIndicators />
        <PricingFAQ />
      </div>
    </div>
  );
}