import { Metadata } from "next";
import Script from "next/script";
import DefenderIdentityClient from "./DefenderIdentityClient";

export const metadata: Metadata = {
  title:
    "Microsoft Defender for Identity Services | Active Directory Threat Detection | Professional Labs",
  description:
    "Protect Active Directory from identity attacks with Microsoft Defender for Identity. Detect credential theft, lateral movement, and insider threats with AI-powered monitoring and security analytics.",
  alternates: {
    canonical: "https://prolabsit.com/microsoft-defender-for-identity",
  },
  openGraph: {
    title:
      "Microsoft Defender for Identity Services | Active Directory Threat Detection | Professional Labs",
    description:
      "Protect Active Directory from identity attacks with Microsoft Defender for Identity. Detect credential theft, lateral movement, and insider threats with AI-powered monitoring and security analytics.",
    url: "https://prolabsit.com/microsoft-defender-for-identity",
    siteName: "Professional Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Microsoft Defender for Identity Services | Active Directory Threat Detection",
    description:
      "Protect Active Directory from identity attacks with Microsoft Defender for Identity. Detect credential theft, lateral movement, and insider threats.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Microsoft Defender for Identity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft Defender for Identity is a cloud-based identity security solution that analyzes signals from Active Directory to detect cyber threats, compromised credentials, and insider attacks across hybrid environments.",
      },
    },
    {
      "@type": "Question",
      name: "How do I enable Microsoft Defender for Identity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft Defender for Identity can be enabled by installing sensors on Active Directory domain controllers and connecting identity signals to the Microsoft security platform for monitoring and threat detection.",
      },
    },
    {
      "@type": "Question",
      name: "What are the benefits of Microsoft Defender for Identity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft Defender for Identity helps detect credential theft, insider threats, abnormal authentication activity, and advanced cyber attacks targeting Active Directory environments.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Defender for Identity and Azure AD Identity Protection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Defender for Identity protects on-premises Active Directory environments, while Azure AD Identity Protection focuses on protecting cloud-based identities in Azure Active Directory.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="defender-identity-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DefenderIdentityClient />
    </>
  );
}
