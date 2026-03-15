import { Metadata } from "next";
import Script from "next/script";
import WebDevelopmentClient from "./WebDevelopmentClient";

export const metadata: Metadata = {
  title:
    "Web Development Services | Custom Websites & Web Apps | Professional Labs",
  description:
    "Professional Labs provides expert web development services including custom websites, ecommerce development, and scalable web applications designed for performance, user experience, and business growth.",
  alternates: {
    canonical: "https://prolabsit.com/web-development-services",
  },
  openGraph: {
    title:
      "Web Development Services | Custom Websites & Web Apps | Professional Labs",
    description:
      "Expert web development services including custom websites, ecommerce development, and scalable web applications.",
    url: "https://prolabsit.com/web-development-services",
    siteName: "Professional Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Web Development Services | Custom Websites & Web Apps | Professional Labs",
    description:
      "Professional Labs provides expert web development services for performance, user experience, and business growth.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is web development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Web development is the process of creating, building, and maintaining websites and web applications. It includes coding, server configuration, database management, and designing user interfaces for digital platforms.",
      },
    },
    {
      "@type": "Question",
      name: "What are the different types of web development services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Web development services include website development, web application development, ecommerce development, CMS development, and custom software development.",
      },
    },
    {
      "@type": "Question",
      name: "What skills are required for web development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Web developers typically use technologies such as HTML, CSS, JavaScript, backend programming languages, databases, and web frameworks to build websites and applications.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to develop a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Website development timelines vary depending on project complexity. Simple websites may take a few weeks, while complex web applications may require several months.",
      },
    },
    {
      "@type": "Question",
      name: "How much do web development services cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost of web development depends on project scope, features, design complexity, and integrations. Custom web development projects typically require tailored pricing.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="web-development-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <WebDevelopmentClient />
    </>
  );
}
