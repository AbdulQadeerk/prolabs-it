import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import PartnershipClient from "./PartnershipClient";

export const metadata: Metadata = {
  title: "CSP Partner Program for Azure & Microsoft Cloud | Professional Labs",
  description:
    "Join the Professional Labs CSP Partner Program to accelerate Azure revenue with white-labeled cloud services, Azure experts, and 24/7 cloud support for Microsoft partners.",
  alternates: {
    canonical: "https://prolabsit.com/partnership",
  },
  openGraph: {
    title:
      "CSP Partner Program for Azure & Microsoft Cloud | Professional Labs",
    description:
      "Join the Professional Labs CSP Partner Program to accelerate Azure revenue with white-labeled cloud services, Azure experts, and 24/7 cloud support for Microsoft partners.",
    url: "https://prolabsit.com/partnership",
    siteName: "Professional Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "CSP Partner Program for Azure & Microsoft Cloud | Professional Labs",
    description:
      "Join the Professional Labs CSP Partner Program to accelerate Azure revenue with white-labeled cloud services and 24/7 cloud support.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the CSP Partner Program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Cloud Solution Provider program allows businesses to sell Microsoft cloud services such as Azure and Microsoft 365 while delivering billing, support, and value-added services to customers.",
      },
    },
    {
      "@type": "Question",
      name: "How does Professional Labs support CSP partners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional Labs supports CSP partners with Azure architecture, migrations, white-labeled services, cloud security, and 24/7 technical support.",
      },
    },
    {
      "@type": "Question",
      name: "Can Professional Labs provide white-labeled cloud services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Professional Labs offers white-labeled Azure services that allow partners to deliver cloud solutions under their own brand.",
      },
    },
    {
      "@type": "Question",
      name: "What services can CSP partners offer with Professional Labs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Partners can offer Azure cloud infrastructure, cloud security, migration services, managed IT services, virtual desktops, and hybrid cloud solutions.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide technical support for Azure deployments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Professional Labs provides 24/7 support, cloud architecture consulting, and deployment assistance for Azure and Microsoft cloud solutions.",
      },
    },
  ],
};

export default function PartnershipPage() {
  return (
    <>
      <Script
        id="partnership-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PartnershipClient />
    </>
  );
}
