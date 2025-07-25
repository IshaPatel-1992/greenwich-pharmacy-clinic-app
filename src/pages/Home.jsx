import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutPreview from '../components/AboutPreview';
import ServiceOverview from '../components/ServiceOverview';
import PromoBanner from '../components/PromoBanner';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutPreview />
      <ServiceOverview />
      <PromoBanner />
      <TeamSection />
      <ContactSection />
    </div>
  );
}
