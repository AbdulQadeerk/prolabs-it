import { Metadata } from "next";
import Script from "next/script";
import EmailSecurityClient from "./EmailSecurityClient";

export const metadata: Metadata = {
  title:
    "Email Security Services | Phishing Protection & Email Threat Defense | Professional Labs",
  description:
    "Protect your business from phishing, ransomware, and email fraud with Professional Labs Email Security. Advanced AI threat detection, encryption, and 24/7 monitoring for Microsoft 365 and enterprise email systems.",
  alternates: {
    canonical: "https://prolabsit.com/email-security",
  },
  openGraph: {
    title:
      "Email Security Services | Phishing Protection & Email Threat Defense | Professional Labs",
    description:
      "Protect your business from phishing, ransomware, and email fraud with Professional Labs Email Security. Advanced AI threat detection, encryption, and 24/7 monitoring for Microsoft 365 and enterprise email systems.",
    url: "https://prolabsit.com/email-security",
    siteName: "Professional Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Email Security Services | Phishing Protection & Email Threat Defense",
    description:
      "Protect your business from phishing, ransomware, and email fraud with Professional Labs Email Security. Advanced AI threat detection, encryption, and 24/7 monitoring.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best email security service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best email security service protects organizations from phishing, malware, ransomware, and email fraud using advanced threat detection, encryption, and monitoring technologies.",
      },
    },
    {
      "@type": "Question",
      name: "What are the different types of email security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Email security includes technologies such as spam filtering, phishing protection, malware detection, data loss prevention, encryption, and authentication protocols like SPF, DKIM, and DMARC.",
      },
    },
    {
      "@type": "Question",
      name: "How much does email security cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Email security pricing depends on the number of users, deployment model, and security features required. Managed email security services typically include monitoring, threat detection, and incident response.",
      },
    },
    {
      "@type": "Question",
      name: "Does Office 365 have email security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft 365 includes built-in email security features such as spam filtering and basic protection. Many organizations implement advanced email security solutions for enhanced protection against phishing and ransomware.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="email-security-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <EmailSecurityClient />
    </>
  );
}
