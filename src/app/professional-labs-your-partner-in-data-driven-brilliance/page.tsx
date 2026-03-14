import { Metadata } from "next";
import Script from "next/script";
import DataDrivenClient from "./DataDrivenClient";

export const metadata: Metadata = {
  title:
    "Data Driven Solutions | Big Data, AI & Business Intelligence Services | Professional Labs",
  description:
    "Turn data into actionable insights with advanced data-driven solutions. Professional Labs delivers AI consulting, big data analytics, BI dashboards, and predictive modeling for smarter decisions.",
  alternates: {
    canonical:
      "https://prolabsit.com/professional-labs-your-partner-in-data-driven-brilliance",
  },
  openGraph: {
    title:
      "Data Driven Solutions | Big Data, AI & Business Intelligence Services | Professional Labs",
    description:
      "Turn data into actionable insights with advanced data-driven solutions. Professional Labs delivers AI consulting, big data analytics, BI dashboards, and predictive modeling for smarter decisions.",
    url: "https://prolabsit.com/professional-labs-your-partner-in-data-driven-brilliance",
    siteName: "Professional Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Data Driven Solutions | Big Data, AI & Business Intelligence Services",
    description:
      "Turn data into actionable insights with advanced data-driven solutions from Professional Labs.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are data-driven solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Data-driven solutions use analytics, artificial intelligence, and data engineering to transform raw data into actionable insights that improve business decision-making and operational efficiency.",
      },
    },
    {
      "@type": "Question",
      name: "How can data analytics improve business decision-making?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Data analytics helps organizations analyze historical and real-time data to identify trends, patterns, and insights that support informed decision-making and strategic planning.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between business intelligence and predictive analytics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Business intelligence analyzes historical data through dashboards and reporting, while predictive analytics uses machine learning models to forecast future outcomes and business trends.",
      },
    },
    {
      "@type": "Question",
      name: "What services are included in data-driven solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Data-driven solutions include data integration, data engineering, data warehousing, business intelligence dashboards, predictive analytics, machine learning models, and AI-powered insights.",
      },
    },
    {
      "@type": "Question",
      name: "Can data analytics integrate with existing business systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Data analytics platforms can integrate with existing enterprise systems such as CRM, ERP, and cloud applications to centralize data and generate insights.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to implement a data-driven analytics platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Implementation timelines depend on project complexity. Basic analytics dashboards may take weeks, while enterprise data platforms and predictive models can take several months.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="data-driven-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DataDrivenClient />
    </>
  );
}
