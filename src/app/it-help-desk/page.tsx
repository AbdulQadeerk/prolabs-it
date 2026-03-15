import { Metadata } from "next";
import Script from "next/script";
import ITHelpDeskClient from "./ITHelpDeskClient";

export const metadata: Metadata = {
  title:
    "IT Help Desk Services & Managed IT Support | 24/7 IT Service Desk | Professional Labs",
  description:
    "Professional Labs provides 24/7 IT help desk services including remote IT support, managed IT services, and technical support to keep your IT infrastructure running efficiently.",
  alternates: {
    canonical: "https://prolabsit.com/it-help-desk",
  },
  openGraph: {
    title:
      "IT Help Desk Services & Managed IT Support | 24/7 IT Service Desk | Professional Labs",
    description:
      "24/7 IT help desk services including remote IT support, managed IT services, and technical support.",
    url: "https://prolabsit.com/it-help-desk",
    siteName: "Professional Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "IT Help Desk Services & Managed IT Support | Professional Labs",
    description:
      "Professional Labs provides 24/7 IT help desk services to keep your IT infrastructure running efficiently.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is IT help desk support service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IT help desk support is a centralized service that assists users with technical issues related to hardware, software, and IT systems. It provides troubleshooting, incident management, and technical guidance to maintain smooth business operations.",
      },
    },
    {
      "@type": "Question",
      name: "What does an IT help desk technician do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An IT help desk technician provides technical support to users by diagnosing and resolving issues related to computers, applications, network connectivity, and IT infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a help desk and IT support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A help desk focuses on resolving end-user technical issues and service requests, while broader IT support may include infrastructure management, system administration, and long-term IT strategy.",
      },
    },
    {
      "@type": "Question",
      name: "What skills are required for IT help desk professionals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IT help desk professionals require troubleshooting skills, networking knowledge, operating system expertise, communication abilities, and familiarity with IT service management tools.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="it-helpdesk-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ITHelpDeskClient />
    </>
  );
}
