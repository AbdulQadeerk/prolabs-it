import { Metadata } from "next";
import Script from "next/script";
import CRMServicesClient from "./CRMServicesClient";

export const metadata: Metadata = {
  title:
    "CRM Solutions & CRM Implementation Services | Professional Labs",
  description:
    "Professional Labs provides CRM solutions including CRM implementation, sales automation, customer management, and CRM integrations to help businesses improve relationships and accelerate revenue growth.",
  alternates: {
    canonical:
      "https://prolabsit.com/crm-customer-relationship-management-services",
  },
  openGraph: {
    title:
      "CRM Solutions & CRM Implementation Services | Professional Labs",
    description:
      "CRM solutions including implementation, sales automation, customer management, and integrations for revenue growth.",
    url: "https://prolabsit.com/crm-customer-relationship-management-services",
    siteName: "Professional Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "CRM Solutions & CRM Implementation Services | Professional Labs",
    description:
      "Professional Labs provides CRM solutions to help businesses improve relationships and accelerate revenue growth.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a CRM and why do businesses need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CRM software helps businesses manage interactions with prospects and customers by organizing contact data, tracking communication history, managing sales pipelines, and automating repetitive tasks.",
      },
    },
    {
      "@type": "Question",
      name: "How does Professional Labs CRM differ from standard CRM solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional Labs provides customized CRM implementation and integration services designed to match your business workflows and sales processes.",
      },
    },
    {
      "@type": "Question",
      name: "Which industries benefit from CRM solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CRM systems are widely used in industries such as retail, manufacturing, healthcare, real estate, education, and financial services.",
      },
    },
    {
      "@type": "Question",
      name: "Can your CRM integrate with existing tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. CRM solutions can integrate with email platforms, marketing automation tools, ERP systems, and other business software.",
      },
    },
    {
      "@type": "Question",
      name: "How long does CRM implementation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CRM implementation timelines vary depending on customization and integrations but typically range from a few weeks to several months.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="crm-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CRMServicesClient />
    </>
  );
}
