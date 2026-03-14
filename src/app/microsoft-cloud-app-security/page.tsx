import { Metadata } from "next";
import Script from "next/script";
import CloudAppSecurityClient from "./CloudAppSecurityClient";

export const metadata: Metadata = {
  title:
    "Microsoft Cloud App Security Services | Defender for Cloud Apps Protection | Professional Labs",
  description:
    "Secure your SaaS applications with Microsoft Cloud App Security (Defender for Cloud Apps). Detect shadow IT, control access, prevent data leaks, and protect cloud environments with Professional Labs security experts.",
  alternates: {
    canonical: "https://prolabsit.com/microsoft-cloud-app-security",
  },
  openGraph: {
    title:
      "Microsoft Cloud App Security Services | Defender for Cloud Apps Protection | Professional Labs",
    description:
      "Secure your SaaS applications with Microsoft Cloud App Security (Defender for Cloud Apps). Detect shadow IT, control access, prevent data leaks, and protect cloud environments with Professional Labs security experts.",
    url: "https://prolabsit.com/microsoft-cloud-app-security",
    siteName: "Professional Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Microsoft Cloud App Security Services | Defender for Cloud Apps Protection",
    description:
      "Secure your SaaS applications with Microsoft Cloud App Security. Detect shadow IT, control access, prevent data leaks, and protect cloud environments.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Microsoft Cloud App Security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft Cloud App Security, now known as Microsoft Defender for Cloud Apps, is a Cloud Access Security Broker (CASB) that helps organizations protect data, detect cyber threats, and control access across cloud applications and SaaS environments.",
      },
    },
    {
      "@type": "Question",
      name: "Are Microsoft apps secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft cloud applications include built-in security features such as identity protection, threat detection, and compliance controls. Many organizations enhance protection using Microsoft Defender for Cloud Apps for advanced monitoring and policy enforcement.",
      },
    },
    {
      "@type": "Question",
      name: "How do I set up Microsoft Cloud App Security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft Cloud App Security can be configured by connecting SaaS applications, enabling activity monitoring, creating security policies, and integrating with identity platforms such as Azure Active Directory.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Defender for Cloud and Cloud App Security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft Defender for Cloud protects cloud infrastructure and workloads, while Microsoft Defender for Cloud Apps focuses on SaaS application security, monitoring user behavior, and enforcing data protection policies.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="cloud-app-security-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CloudAppSecurityClient />
    </>
  );
}
