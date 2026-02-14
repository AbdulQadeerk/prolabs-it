"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandCarousel from "@/components/BrandCarousel";
import ServicesShowcase from "@/components/ServicesShowcase";
import LeadershipBand from "@/components/LeadershipBand";
import BenefitsSplit from "@/components/BenefitsSplit";
import CaseStudy from "@/components/CaseStudy";
import StackSection from "@/components/StackSection";
import Features from "@/components/Features";
import TrustBar from "@/components/TrustBar";
import ResourcesSection from "@/components/ResourcesSection";
import StandardsSection from "@/components/StandardsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero with brand logos at bottom — matches NinjaOne hero */}
        <Hero />

        {/* 2. Unified IT Operations Platform — tabbed services like NinjaOne */}
        <ServicesShowcase />

        {/* 3. Leadership/Announcement Band — NinjaOne news ticker area */}
        <LeadershipBand />

        {/* 4. Trusted by IT teams — For IT / For MSPs split cards */}
        <BenefitsSplit />

        {/* 5. Client Testimonial / Case Study */}
        <CaseStudy />
        <TrustBar />

        {/* 6. Built for your IT Stack — integrations */}
        <StackSection />

        {/* 7. Proprietary Tools grid */}
        <Features />

        {/* 8. Trust stats bar */}


        {/* 9. Events, Updates & Resources */}
        <ResourcesSection />

        {/* 10. Security Standards */}
        <StandardsSection />

        {/* 11. Final CTA */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
