import { Metadata } from "next";
import Script from "next/script";
import ActiveDirectoryClient from "./ActiveDirectoryClient";

export const metadata: Metadata = {
  title:
    "Active Directory Consulting Services | AD Infrastructure & Hybrid Identity | Professional Labs",
  description:
    "Expert Active Directory consulting services for secure identity management, hybrid AD environments, and enterprise network optimization. Design, deploy, and manage AD infrastructure.",
  alternates: {
    canonical: "https://prolabsit.com/active-directory-consulting",
  },
  openGraph: {
    title:
      "Active Directory Consulting Services | AD Infrastructure & Hybrid Identity | Professional Labs",
    description:
      "Expert Active Directory consulting services for secure identity management, hybrid AD environments, and enterprise network optimization. Design, deploy, and manage AD infrastructure.",
    url: "https://prolabsit.com/active-directory-consulting",
    siteName: "Professional Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Active Directory Consulting Services | AD Infrastructure & Hybrid Identity",
    description:
      "Expert Active Directory consulting services for secure identity management and hybrid AD environments.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Active Directory and why do organizations need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Active Directory is a Microsoft directory service that manages users, devices, and network resources while providing centralized authentication and identity management for organizations.",
      },
    },
    {
      "@type": "Question",
      name: "What are the benefits of Active Directory consulting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Active Directory consulting helps organizations optimize directory infrastructure, strengthen security, implement hybrid identity solutions, and improve overall network performance.",
      },
    },
    {
      "@type": "Question",
      name: "What types of organizations benefit from Active Directory services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Organizations across industries such as finance, healthcare, government, and technology use Active Directory to manage identity access and centralized network authentication.",
      },
    },
    {
      "@type": "Question",
      name: "How long does an Active Directory consulting project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Active Directory consulting projects can range from a few days for optimization tasks to several weeks for migrations or hybrid identity deployments depending on infrastructure complexity.",
      },
    },
    {
      "@type": "Question",
      name: "What qualifications should an Active Directory consultant have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Active Directory consultants typically have expertise in Microsoft AD infrastructure, identity and access management, network security, and hybrid cloud identity integration.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="active-directory-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ActiveDirectoryClient />
    </>
  );
}
