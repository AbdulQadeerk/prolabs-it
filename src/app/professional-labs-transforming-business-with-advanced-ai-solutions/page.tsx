import { Metadata } from "next";
import Script from "next/script";
import AIClient from "./AIClient";

export const metadata: Metadata = {
  title:
    "Advanced AI Solutions | AI Consulting, Machine Learning & NLP Services | Professional Labs",
  description:
    "Transform your business with advanced AI solutions. Professional Labs delivers AI consulting, machine learning, NLP, and data engineering services to drive automation, insights, and innovation.",
  alternates: {
    canonical:
      "https://prolabsit.com/professional-labs-transforming-business-with-advanced-ai-solutions",
  },
  openGraph: {
    title:
      "Advanced AI Solutions | AI Consulting, Machine Learning & NLP Services | Professional Labs",
    description:
      "Transform your business with advanced AI solutions. Professional Labs delivers AI consulting, machine learning, NLP, and data engineering services drive automation, insights, and innovation.",
    url: "https://prolabsit.com/professional-labs-transforming-business-with-advanced-ai-solutions",
    siteName: "Professional Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Advanced AI Solutions | AI Consulting, Machine Learning & NLP Services",
    description:
      "Transform your business with advanced AI solutions including machine learning and NLP from Professional Labs.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is AI consulting and how can it benefit my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI consulting helps organizations identify opportunities to implement artificial intelligence technologies to automate processes, improve decision making, and generate insights from data.",
      },
    },
    {
      "@type": "Question",
      name: "What AI services does Professional Labs offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional Labs offers AI strategy consulting, machine learning development, natural language processing solutions, data engineering services, and AI integration for enterprise systems.",
      },
    },
    {
      "@type": "Question",
      name: "Is my business data safe when implementing AI solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI implementations follow strict data security and privacy practices including encryption, secure infrastructure, and compliance with enterprise security standards.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI be integrated with existing systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI solutions can be integrated into existing enterprise systems and workflows to enhance automation, analytics, and decision-making without replacing current infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to implement an AI solution?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Implementation timelines depend on complexity. Basic AI integrations may take a few weeks, while advanced machine learning projects can take several months.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="ai-solutions-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AIClient />
    </>
  );
}
