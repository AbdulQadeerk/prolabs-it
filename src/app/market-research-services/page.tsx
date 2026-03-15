import { Metadata } from "next";
import Script from "next/script";
import MarketResearchClient from "./MarketResearchClient";

export const metadata: Metadata = {
  title:
    "Market Research Services & Business Intelligence Solutions | Professional Labs",
  description:
    "Professional Labs provides expert market research services including competitive intelligence, customer insights, data analysis, and business intelligence to help companies make data-driven decisions.",
  alternates: {
    canonical: "https://prolabsit.com/market-research-services",
  },
  openGraph: {
    title:
      "Market Research Services & Business Intelligence Solutions | Professional Labs",
    description:
      "Expert market research services including competitive intelligence, customer insights, data analysis, and business intelligence.",
    url: "https://prolabsit.com/market-research-services",
    siteName: "Professional Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Market Research Services & Business Intelligence | Professional Labs",
    description:
      "Professional Labs provides expert market research services for data-driven business decisions.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are market research services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Market research services involve collecting and analyzing data about customers, competitors, and industry trends to help businesses make informed strategic decisions.",
      },
    },
    {
      "@type": "Question",
      name: "What does a market research analyst do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A market research analyst studies consumer behavior, market trends, and competitor strategies to provide insights that guide marketing, product development, and business decisions.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to hire a market research firm?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Market research costs vary depending on the project scope, research methodology, data sources, and sample size. Many firms provide customized pricing based on business requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What are the main types of marketing research?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common types of marketing research include customer research, product research, brand research, competitive analysis, market segmentation studies, pricing research, and customer satisfaction surveys.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="market-research-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MarketResearchClient />
    </>
  );
}
