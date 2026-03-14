import { Metadata } from "next";
import Script from "next/script";
import NetworkSecurityClient from "./NetworkSecurityClient";

export const metadata: Metadata = {
  title:
    "Network & Security Services | Firewall, Encryption & Intrusion Protection | Professional Labs",
  description:
    "Professional Labs provides enterprise-grade Network & Security Services including firewall implementation, intrusion detection, encryption, and secure remote access. Protect your business with 24/7 monitored cybersecurity solutions.",
  alternates: {
    canonical: "https://prolabsit.com/network-and-security-services",
  },
  openGraph: {
    title:
      "Network & Security Services | Firewall, Encryption & Intrusion Protection | Professional Labs",
    description:
      "Professional Labs provides enterprise-grade Network & Security Services including firewall implementation, intrusion detection, encryption, and secure remote access. Protect your business with 24/7 monitored cybersecurity solutions.",
    url: "https://prolabsit.com/network-and-security-services",
    siteName: "Professional Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Network & Security Services | Firewall, Encryption & Intrusion Protection",
    description:
      "Professional Labs provides enterprise-grade Network & Security Services including firewall implementation, intrusion detection, encryption, and secure remote access.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How essential is regular network assessment and auditing for businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Regular network assessments help identify vulnerabilities, improve performance, and ensure compliance with cybersecurity regulations. Professional Labs recommends performing security audits at least quarterly or after major infrastructure changes.",
      },
    },
    {
      "@type": "Question",
      name: "Who needs firewall implementation services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any organization connected to the internet requires firewall protection. Firewalls act as the first line of defense against unauthorized access, malware, and network-based attacks.",
      },
    },
    {
      "@type": "Question",
      name: "What is the role of intrusion detection and prevention systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Intrusion detection and prevention systems monitor network traffic for suspicious activity and automatically block or alert security teams about potential cyber threats.",
      },
    },
    {
      "@type": "Question",
      name: "Should small businesses invest in data encryption?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Data encryption protects sensitive information such as financial data, customer records, and internal communications from unauthorized access.",
      },
    },
    {
      "@type": "Question",
      name: "Can Professional Labs support remote access for distributed teams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional Labs provides secure remote access solutions including VPNs, multi-factor authentication, and identity-based access controls to ensure safe remote connectivity.",
      },
    },
    {
      "@type": "Question",
      name: "How does security training benefit employees and organizations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cybersecurity training helps employees recognize threats like phishing and social engineering, reducing the risk of security breaches and improving overall organizational security.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="network-security-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <NetworkSecurityClient />
    </>
  );
}
