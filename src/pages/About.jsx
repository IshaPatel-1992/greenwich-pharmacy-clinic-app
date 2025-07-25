import React from 'react';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <TeamSection showFull />
    </>
  );
}
