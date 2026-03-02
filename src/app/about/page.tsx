"use client";

import AboutHero from "@/components/AboutHero";
import BrandCarousel from "@/components/BrandCarousel";
import AboutMission from "@/components/AboutMission";
import AboutStats from "@/components/AboutStats";
import AboutDifferentiators from "@/components/AboutDifferentiators";
import AboutLeader from "@/components/AboutLeader";
import ResourcesSection from "@/components/ResourcesSection";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
    return (
            <main>
                {/* Hero Section - Matching NinjaOne style */}
                <AboutHero />

                {/* Brand Logos Bar */}
                <div className="bg-white py-12 border-b border-gray-100">
                    <BrandCarousel />
                </div>

                {/* Mission Statement */}
                <AboutMission />

                {/* In-depth Stats */}
                <AboutStats />

                {/* Key Differentiators - Carousel */}
                <AboutDifferentiators />

                {/* Industry Recognition Section */}
                <AboutLeader />

                {/* News & Resources */}
                <ResourcesSection />

                {/* Final CTA Section */}
                <CTASection />
            </main>
    );
}
