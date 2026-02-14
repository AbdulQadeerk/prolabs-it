"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import BrandCarousel from "@/components/BrandCarousel";
import ServicesShowcase from "@/components/ServicesShowcase";
import LeadershipBand from "@/components/LeadershipBand";
import BenefitsSplit from "@/components/BenefitsSplit";
import CaseStudy from "@/components/CaseStudy";
import StackSection from "@/components/StackSection";
import Features from "@/components/Features";
import ResourcesSection from "@/components/ResourcesSection";
import StandardsSection from "@/components/StandardsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <BrandCarousel />
        <ServicesShowcase />
        <LeadershipBand />
        <BenefitsSplit />
        <CaseStudy />
        <StackSection />
        <Features />
        <TrustBar />
        <ResourcesSection />
        <StandardsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
