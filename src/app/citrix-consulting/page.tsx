import { Metadata } from "next";
import Script from "next/script";
import CitrixClient from "./CitrixClient";

export const metadata: Metadata = {
  title:
    "Citrix Consulting Services | Citrix Virtualization & Managed Services | Professional Labs",
  description:
    "Expert Citrix consulting services for secure desktop virtualization, application delivery, and digital workspace solutions. Deploy, optimize, and manage Citrix environments with certified specialists.",
  alternates: {
    canonical: "https://prolabsit.com/citrix-consulting",
  },
  openGraph: {
    title:
      "Citrix Consulting Services | Citrix Virtualization & Managed Services | Professional Labs",
    description:
      "Expert Citrix consulting services for secure desktop virtualization, application delivery, and digital workspace solutions. Deploy, optimize, and manage Citrix environments with certified specialists.",
    url: "https://prolabsit.com/citrix-consulting",
    siteName: "Professional Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Citrix Consulting Services | Citrix Virtualization & Managed Services",
    description:
      "Expert Citrix consulting services for secure desktop virtualization, application delivery, and digital workspace solutions.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Citrix Consulting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Citrix consulting services help organizations design, deploy, configure, and optimize Citrix virtualization environments including infrastructure setup, application delivery, monitoring, and security management.",
      },
    },
    {
      "@type": "Question",
      name: "What is Citrix managed services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Citrix managed services provide ongoing monitoring, maintenance, and support for Citrix environments to ensure optimal performance, security, and reliability.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in Citrix consulting services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Citrix consulting services typically include virtualization architecture design, Citrix deployment, infrastructure optimization, performance monitoring, application delivery setup, and user environment management.",
      },
    },
    {
      "@type": "Question",
      name: "Is Citrix an MSP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Citrix is a virtualization technology provider. Managed service providers use Citrix platforms to deliver virtual desktops, applications, and digital workspace services to organizations.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="citrix-consulting-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CitrixClient />
    </>
  );
}
