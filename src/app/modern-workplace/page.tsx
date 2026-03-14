import { Metadata } from "next";
import Script from "next/script";
import ModernWorkplaceClient from "./ModernWorkplaceClient";

export const metadata: Metadata = {
  title:
    "Modern Workplace Solutions | Digital Workplace & Hybrid Work Strategy | Professional Labs",
  description:
    "Build a secure and productive digital workplace with Professional Labs. Our modern workplace solutions enable hybrid work, collaboration, secure productivity, and employee experience optimization.",
  alternates: {
    canonical: "https://prolabsit.com/modern-workplace",
  },
  openGraph: {
    title:
      "Modern Workplace Solutions | Digital Workplace & Hybrid Work Strategy | Professional Labs",
    description:
      "Build a secure and productive digital workplace with Professional Labs. Our modern workplace solutions enable hybrid work, collaboration, secure productivity, and employee experience optimization.",
    url: "https://prolabsit.com/modern-workplace",
    siteName: "Professional Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Modern Workplace Solutions | Digital Workplace & Hybrid Work Strategy",
    description:
      "Build a secure and productive digital workplace with Professional Labs modern workplace solutions.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Modern Workplace?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A modern workplace is a digital environment that combines cloud platforms, collaboration tools, and secure access technologies to help employees work productively from any location or device.",
      },
    },
    {
      "@type": "Question",
      name: "How can a Modern Workplace benefit an organization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Modern workplace solutions improve collaboration, increase employee productivity, support hybrid work, and provide secure access to applications and data.",
      },
    },
    {
      "@type": "Question",
      name: "What services are included in a Modern Workplace solution?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Modern workplace services typically include digital workplace strategy, collaboration platforms, enterprise intranet development, productivity applications, and managed support services.",
      },
    },
    {
      "@type": "Question",
      name: "How can a Modern Workplace help employees work more effectively?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A modern workplace enables employees to access tools, data, and communication platforms securely from any device, improving efficiency and collaboration.",
      },
    },
    {
      "@type": "Question",
      name: "How can organizations implement a Modern Workplace solution?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Organizations can implement a modern workplace by assessing their digital readiness, defining a transformation strategy, deploying collaboration tools, and integrating cloud and identity platforms.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="modern-workplace-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ModernWorkplaceClient />
    </>
  );
}
