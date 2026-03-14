import { Metadata } from "next";
import Script from "next/script";
import VaptClient from "./VaptClient";

export const metadata: Metadata = {
  title:
    "Vulnerability Assessment & Penetration Testing (VAPT) Services | Professional Labs",
  description:
    "Enterprise VAPT services to identify security vulnerabilities before attackers do. Network, cloud, application and Active Directory penetration testing with certified ethical hackers.",
  alternates: {
    canonical: "https://prolabsit.com/vapt",
  },
  openGraph: {
    title:
      "Vulnerability Assessment & Penetration Testing (VAPT) Services | Professional Labs",
    description:
      "Enterprise VAPT services to identify security vulnerabilities before attackers do. Network, cloud, application and Active Directory penetration testing with certified ethical hackers.",
    url: "https://prolabsit.com/vapt",
    siteName: "Professional Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "VAPT Services | Vulnerability Assessment & Penetration Testing",
    description:
      "Enterprise VAPT services to identify security vulnerabilities before attackers do. Network, cloud, application and Active Directory penetration testing.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between Vulnerability Assessment and Penetration Testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vulnerability Assessment identifies security weaknesses through scanning and analysis, while Penetration Testing actively exploits those vulnerabilities to determine real-world impact and business risk.",
      },
    },
    {
      "@type": "Question",
      name: "How often should VAPT be conducted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Organizations typically perform VAPT assessments at least once or twice per year or after major infrastructure updates, new deployments, or compliance audits.",
      },
    },
    {
      "@type": "Question",
      name: "Is data security maintained during the VAPT process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Professional Labs follows strict confidentiality agreements, secure testing practices, and NDA-protected engagements to ensure client systems and data remain protected.",
      },
    },
    {
      "@type": "Question",
      name: "Can VAPT be customized for cloud and web applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. VAPT services can be tailored to test cloud environments, web applications, APIs, and hybrid infrastructures based on the organization's environment and risk profile.",
      },
    },
    {
      "@type": "Question",
      name: "Is VAPT required for ISO 27001 or SOC 2 compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Vulnerability assessments and penetration testing are commonly required to demonstrate compliance with security frameworks such as ISO 27001, SOC 2, and PCI-DSS.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="vapt-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <VaptClient />
    </>
  );
}
