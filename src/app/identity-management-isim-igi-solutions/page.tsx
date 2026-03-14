import { Metadata } from "next";
import Script from "next/script";
import IAMClient from "./IAMClient";

export const metadata: Metadata = {
  title:
    "Identity & Access Management Services | IBM ISIM & IGI Solutions | Professional Labs",
  description:
    "Professional Labs provides enterprise Identity and Access Management services including IBM ISIM and IGI solutions for identity governance, automated access control, and regulatory compliance.",
  alternates: {
    canonical:
      "https://prolabsit.com/identity-management-isim-igi-solutions",
  },
  openGraph: {
    title:
      "Identity & Access Management Services | IBM ISIM & IGI Solutions | Professional Labs",
    description:
      "Professional Labs provides enterprise Identity and Access Management services including IBM ISIM and IGI solutions for identity governance, automated access control, and regulatory compliance.",
    url: "https://prolabsit.com/identity-management-isim-igi-solutions",
    siteName: "Professional Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Identity & Access Management Services | IBM ISIM & IGI Solutions",
    description:
      "Professional Labs provides enterprise Identity and Access Management services including IBM ISIM and IGI solutions for identity governance, automated access control, and regulatory compliance.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is IBM Security Identity Manager (ISIM)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IBM Security Identity Manager is an identity management platform that automates provisioning, access control, and identity lifecycle management across enterprise IT systems.",
      },
    },
    {
      "@type": "Question",
      name: "What are the main benefits of implementing ISIM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ISIM helps organizations automate identity provisioning, enforce security policies, reduce access risks, and maintain regulatory compliance.",
      },
    },
    {
      "@type": "Question",
      name: "What are the four parts of IAM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The four parts of Identity and Access Management include identity lifecycle management, authentication, authorization, and identity governance.",
      },
    },
    {
      "@type": "Question",
      name: "Is IAM part of cybersecurity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. IAM is a core cybersecurity discipline that ensures only authorized users can access enterprise systems, applications, and sensitive data.",
      },
    },
    {
      "@type": "Question",
      name: "What are the four pillars of IAM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The four pillars of IAM are authentication, authorization, identity governance, and lifecycle management.",
      },
    },
    {
      "@type": "Question",
      name: "What is IBM IGI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IBM Identity Governance and Intelligence is a platform used to analyze user access risks, enforce governance policies, and maintain compliance across enterprise applications.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="iam-isim-igi-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <IAMClient />
    </>
  );
}
