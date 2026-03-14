import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServicesShowcase from "@/components/ServicesShowcase";
import LeadershipBand from "@/components/LeadershipBand";
import BenefitsSplit from "@/components/BenefitsSplit";
import CaseStudy from "@/components/CaseStudy";
import TrustBar from "@/components/TrustBar";
import StackSection from "@/components/StackSection";
import Features from "@/components/Features";
import ResourcesSection from "@/components/ResourcesSection";
import StandardsSection from "@/components/StandardsSection";
import CTASection from "@/components/CTASection";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Managed IT Services & Cybersecurity Solutions | Professional Labs",
  description:
    "Professional Labs delivers managed IT services, cybersecurity, SOC monitoring, cloud security, and IT support for global businesses. Trusted across 35+ countries since 1997.",
  openGraph: {
    title: "Managed IT Services & Cybersecurity Solutions | Professional Labs",
    description:
      "Professional Labs delivers managed IT services, cybersecurity, SOC monitoring, cloud security, and IT support for global businesses. Trusted across 35+ countries since 1997.",
    type: "website",
    url: "https://prolabsit.com/",
    siteName: "Professional Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Managed IT Services & Cybersecurity Solutions | Professional Labs",
    description:
      "Professional Labs delivers managed IT services, cybersecurity, SOC monitoring, cloud security, and IT support for global businesses. Trusted across 35+ countries since 1997.",
  },
  alternates: {
    canonical: "https://prolabsit.com/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are managed IT services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Managed IT services involve outsourcing IT operations, infrastructure monitoring, cybersecurity, and technical support to a specialized provider that proactively manages and maintains technology systems.",
      },
    },
    {
      "@type": "Question",
      name: "What does a Managed SOC do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Managed Security Operations Center continuously monitors IT environments for threats, analyzes security events, and responds to potential cyber incidents to protect business systems and sensitive data.",
      },
    },
    {
      "@type": "Question",
      name: "Why do businesses need cybersecurity services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cybersecurity services help organizations prevent data breaches, protect sensitive information, maintain regulatory compliance, and ensure business continuity by monitoring and securing digital systems.",
      },
    },
    {
      "@type": "Question",
      name: "What industries use managed IT services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Managed IT services are used by many industries including finance, healthcare, legal, manufacturing, technology, and professional services that rely on secure and reliable IT infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "How do managed IT services improve business productivity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Managed IT services improve productivity by reducing downtime, improving system performance, strengthening cybersecurity, and providing reliable IT support so businesses can focus on core operations.",
      },
    },
  ],
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Professional Labs",
  url: "https://prolabsit.com",
  logo: "https://prolabsit.com/prolabs_logo.svg",
  foundingDate: "1997",
  description:
    "Professional Labs delivers managed IT services, cybersecurity, SOC monitoring, cloud security, and IT support for global businesses. Trusted across 35+ countries since 1997.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "English",
  },
};

export default function Home() {
  return (
    <main>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="org-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* 1. Hero with brand logos at bottom */}
      <Hero />

      {/* 2. Core Services Showcase */}
      <ServicesShowcase />

      {/* 3. Industry Recognition Band */}
      <LeadershipBand />

      {/* 4. Company Overview — Global IT & Cybersecurity Experts */}
      <BenefitsSplit />

      {/* 5. Client Testimonial */}
      <CaseStudy />
      <TrustBar />

      {/* 6. Technology Ecosystem — Strategic Partnerships */}
      <StackSection />

      {/* 7. Proprietary Tools */}
      <Features />

      {/* 8. Resources / Insights */}
      <ResourcesSection />

      {/* 9. Compliance & Security Standards */}
      <StandardsSection />

      {/* 10. Final CTA */}
      <CTASection />
    </main>
  );
}
