import { Metadata } from "next";
import Script from "next/script";
import AzureConsultingClient from "./AzureConsultingClient";

export const metadata: Metadata = {
  title:
    "Azure Consulting Services | Microsoft Azure Cloud Consulting & Migration | Professional Labs",
  description:
    "Professional Azure consulting services to help businesses design, migrate, and optimize cloud environments. Expert Microsoft Azure architects for cloud strategy, migration, security, and managed services.",
  alternates: {
    canonical: "https://prolabsit.com/azure-consulting-services",
  },
  openGraph: {
    title:
      "Azure Consulting Services | Microsoft Azure Cloud Consulting & Migration | Professional Labs",
    description:
      "Professional Azure consulting services to help businesses design, migrate, and optimize cloud environments. Expert Microsoft Azure architects for cloud strategy, migration, security, and managed services.",
    url: "https://prolabsit.com/azure-consulting-services",
    siteName: "Professional Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Azure Consulting Services | Microsoft Azure Cloud Consulting & Migration",
    description:
      "Professional Azure consulting services to help businesses design, migrate, and optimize cloud environments.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are Azure Consulting Services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Azure consulting services provide expert guidance for planning, designing, migrating, and managing cloud environments using Microsoft Azure.",
      },
    },
    {
      "@type": "Question",
      name: "Why do businesses need an Azure Solutions Partner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Azure solutions partners provide technical expertise, architecture design, and implementation support to ensure successful cloud adoption and optimization.",
      },
    },
    {
      "@type": "Question",
      name: "What are the benefits of using Microsoft Azure consultants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Azure consultants help organizations accelerate cloud adoption, improve security, reduce operational costs, and optimize cloud infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose the right Azure consulting company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose a consulting firm with certified Azure professionals, strong cloud migration experience, and proven expertise in enterprise cloud deployments.",
      },
    },
    {
      "@type": "Question",
      name: "What services are included in Azure consulting engagements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Azure consulting engagements typically include cloud architecture design, migration planning, DevOps implementation, infrastructure optimization, and managed services.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="azure-consulting-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AzureConsultingClient />
    </>
  );
}
