import { Metadata } from "next";
import Script from "next/script";
import AzureSecurityClient from "./AzureSecurityClient";

export const metadata: Metadata = {
  title:
    "Azure Security Services | Azure Cloud Security & Compliance Solutions | Professional Labs",
  description:
    "Protect your cloud infrastructure with Azure Security Services from Professional Labs. Secure workloads, identities, applications, and data with advanced Microsoft Azure security solutions.",
  alternates: {
    canonical: "https://prolabsit.com/azure-security-service",
  },
  openGraph: {
    title:
      "Azure Security Services | Azure Cloud Security & Compliance Solutions | Professional Labs",
    description:
      "Protect your cloud infrastructure with Azure Security Services from Professional Labs. Secure workloads, identities, applications, and data with advanced Microsoft Azure security solutions.",
    url: "https://prolabsit.com/azure-security-service",
    siteName: "Professional Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Azure Security Services | Azure Cloud Security & Compliance Solutions",
    description:
      "Protect your cloud infrastructure with Azure Security Services from Professional Labs. Secure workloads, identities, applications, and data with advanced Microsoft Azure security solutions.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Azure Security Service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Azure Security Services are cloud security solutions provided by Microsoft Azure that protect applications, data, and cloud infrastructure using tools such as Azure Security Center, Azure Active Directory, and Azure Key Vault.",
      },
    },
    {
      "@type": "Question",
      name: "How does Azure Security Service help protect against cyber threats?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Azure security tools provide continuous monitoring, threat detection, identity protection, and automated security controls that help organizations detect suspicious activity and prevent cyber attacks.",
      },
    },
    {
      "@type": "Question",
      name: "How does Azure Security Service help with compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Azure security solutions support compliance with industry standards such as ISO 27001, HIPAA, and GDPR through built-in security controls, monitoring tools, and compliance reporting.",
      },
    },
    {
      "@type": "Question",
      name: "How can Azure Security Service benefit businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Azure security services protect cloud workloads, improve data protection, reduce cyber risks, and ensure regulatory compliance for organizations operating in cloud environments.",
      },
    },
    {
      "@type": "Question",
      name: "Is Azure Security Service suitable for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Azure Security Services are scalable and suitable for businesses of all sizes, allowing small and medium organizations to implement enterprise-grade cloud security.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="azure-security-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AzureSecurityClient />
    </>
  );
}
