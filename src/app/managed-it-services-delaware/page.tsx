import type { Metadata } from "next";
import HeroDelaware from "@/components/delaware/Hero";
import ServicesShowcaseDelaware from "@/components/delaware/ServicesShowcase";
import LeadershipBandDelaware from "@/components/delaware/LeadershipBand";
import BenefitsSplitDelaware from "@/components/delaware/BenefitsSplit";
import CaseStudyDelaware from "@/components/delaware/CaseStudy";
import TrustBarDelaware from "@/components/delaware/TrustBar";
import StackSectionDelaware from "@/components/delaware/StackSection";
import FeaturesDelaware from "@/components/delaware/Features";
import ResourcesSectionDelaware from "@/components/delaware/ResourcesSection";
import StandardsSectionDelaware from "@/components/delaware/StandardsSection";
import CTASectionDelaware from "@/components/delaware/CTASection";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Managed IT Services in Delaware | Cybersecurity & IT Support - Professional Labs",
  description:
    "Professional Labs delivers managed IT services in Delaware including cybersecurity, SOC monitoring, cloud security, and IT support for growing businesses.",
  openGraph: {
    title: "Managed IT Services in Delaware | Cybersecurity & IT Support - Professional Labs",
    description:
      "Professional Labs delivers managed IT services in Delaware including cybersecurity, SOC monitoring, cloud security, and IT support for growing businesses.",
    type: "website",
    url: "https://prolabsit.com/managed-it-services-delaware",
    siteName: "Professional Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Managed IT Services in Delaware | Cybersecurity & IT Support - Professional Labs",
    description:
      "Professional Labs delivers managed IT services in Delaware including cybersecurity, SOC monitoring, cloud security, and IT support for growing businesses.",
  },
  alternates: {
    canonical: "https://prolabsit.com/managed-it-services-delaware",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are managed IT services in Delaware?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Managed IT services in Delaware involve outsourcing IT infrastructure management, cybersecurity, monitoring, and support to a provider that ensures systems run efficiently and securely."
      }
    },
    {
      "@type": "Question",
      "name": "What does a Managed SOC do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Managed Security Operations Center monitors IT environments, detects threats in real time, and responds to cyber incidents to protect Delaware businesses from security risks."
      }
    },
    {
      "@type": "Question",
      "name": "Why do Delaware businesses need cybersecurity services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cybersecurity services help Delaware businesses prevent data breaches, protect sensitive information, maintain compliance, and ensure business continuity."
      }
    },
    {
      "@type": "Question",
      "name": "What industries use managed IT services in Delaware?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Industries such as healthcare, finance, legal, manufacturing, and technology in Delaware rely on managed IT services for secure and reliable infrastructure."
      }
    },
    {
      "@type": "Question",
      "name": "How do managed IT services improve productivity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Managed IT services reduce downtime, improve system performance, strengthen cybersecurity, and provide reliable support so Delaware businesses can focus on growth."
      }
    }
  ]
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Professional Labs",
  url: "https://prolabsit.com/managed-it-services-delaware",
  logo: "https://prolabsit.com/prolabs_logo.svg",
  foundingDate: "1997",
  description:
    "Professional Labs delivers managed IT services in Delaware including cybersecurity, SOC monitoring, cloud security, and IT support for growing businesses.",
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

export default function ManagedITServicesDelaware() {
  return (
    <main>
      <Script
        id="faq-schema-delaware"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="org-schema-delaware"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* 1. Hero with brand logos at bottom */}
      <HeroDelaware />

      {/* 2. Core Services Showcase */}
      <ServicesShowcaseDelaware />

      {/* 3. Industry Recognition Band */}
      <LeadershipBandDelaware />

      {/* 4. Company Overview — Global IT & Cybersecurity Experts */}
      <BenefitsSplitDelaware />

      {/* 5. Client Testimonial */}
      <CaseStudyDelaware />
      <TrustBarDelaware />

      {/* 6. Technology Ecosystem — Strategic Partnerships */}
      <StackSectionDelaware />

      {/* 7. Proprietary Tools */}
      <FeaturesDelaware />

      {/* 8. Resources / Insights */}
      <ResourcesSectionDelaware />

      {/* 9. Compliance & Security Standards */}
      <StandardsSectionDelaware />

      {/* 10. Final CTA */}
      <CTASectionDelaware />
    </main>
  );
}
