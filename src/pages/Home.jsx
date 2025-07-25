import React from "react";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <main className="pt-20">
      {/* pt-20 adds padding so content is below fixed navbar */}
      <HeroSection />
    </main>
  );
}
