import { Metadata } from "next";
import Script from "next/script";
import ManagedSOCClient from "./ManagedSOCClient";

export const metadata: Metadata = {
  title:
    "Managed SOC Services | 24/7 Security Operations Center Monitoring | Professional Labs",
  description:
    "Professional Labs provides 24/7 Managed SOC services including threat detection, incident response, MDR, and XDR monitoring to protect businesses from cyber threats.",
  alternates: {
    canonical: "https://prolabsit.com/managed-soc-services",
  },
  openGraph: {
    title:
      "Managed SOC Services | 24/7 Security Operations Center Monitoring | Professional Labs",
    description:
      "Professional Labs provides 24/7 Managed SOC services including threat detection, incident response, MDR, and XDR monitoring to protect businesses from cyber threats.",
    url: "https://prolabsit.com/managed-soc-services",
    siteName: "Professional Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Managed SOC Services | 24/7 Security Operations Center Monitoring",
    description:
      "Professional Labs provides 24/7 Managed SOC services including threat detection, incident response, MDR, and XDR monitoring to protect businesses from cyber threats.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a managed SOC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Managed Security Operations Center (SOC) is a cybersecurity service that continuously monitors IT systems, detects security threats, and responds to cyber incidents to protect business infrastructure and sensitive data.",
      },
    },
    {
      "@type": "Question",
      name: "What services are included in a SOC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SOC services typically include threat monitoring, security event analysis, incident response, vulnerability management, log monitoring, and threat intelligence integration to protect IT environments from cyber threats.",
      },
    },
    {
      "@type": "Question",
      name: "How does a SOC improve cybersecurity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A SOC improves cybersecurity by providing continuous monitoring, early threat detection, rapid incident response, and proactive security management to reduce the risk of cyber attacks and data breaches.",
      },
    },
    {
      "@type": "Question",
      name: "What is the role of a SOC manager?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A SOC manager oversees security operations, manages incident response processes, coordinates cybersecurity analysts, and ensures the organization's security monitoring systems operate effectively.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a SOC and an MSP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A SOC focuses on cybersecurity monitoring and threat detection, while a Managed Service Provider (MSP) manages broader IT services including infrastructure management, cloud services, and technical support.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="managed-soc-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ManagedSOCClient />
    </>
  );
}
