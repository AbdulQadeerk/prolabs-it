import { Metadata } from "next";
import Script from "next/script";
import TicketingSystemClient from "./TicketingSystemClient";

export const metadata: Metadata = {
  title:
    "Ticketing System Software & IT Service Desk Solutions | Professional Labs",
  description:
    "Streamline customer support with intelligent ticketing system software from Professional Labs. Manage omnichannel requests, automate workflows, track SLAs, and improve service efficiency.",
  alternates: {
    canonical: "https://prolabsit.com/ticketing-system-service",
  },
  openGraph: {
    title:
      "Ticketing System Software & IT Service Desk Solutions | Professional Labs",
    description:
      "Intelligent ticketing system software to organize, track, and resolve support requests efficiently.",
    url: "https://prolabsit.com/ticketing-system-service",
    siteName: "Professional Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ticketing System Software & IT Service Desk Solutions | Professional Labs",
    description:
      "Streamline customer support with intelligent ticketing system software from Professional Labs.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a ticketing system and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A ticketing system is software used to manage customer support requests. Each inquiry becomes a ticket that can be tracked from creation to resolution, helping teams prioritize issues and deliver faster support.",
      },
    },
    {
      "@type": "Question",
      name: "Can the ticketing system handle requests from multiple channels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Professional Labs ticketing solutions support omnichannel communication including email, chat, phone calls, and social media so all customer requests appear in a unified dashboard.",
      },
    },
    {
      "@type": "Question",
      name: "Is a ticketing system suitable for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A ticketing system helps small businesses organize customer requests, improve response time, and maintain consistent support quality as they grow.",
      },
    },
    {
      "@type": "Question",
      name: "Can the ticketing system integrate with existing tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional Labs ticketing systems integrate with CRM platforms, communication tools, analytics software, and other business systems to streamline workflows.",
      },
    },
    {
      "@type": "Question",
      name: "What support does Professional Labs provide after implementation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional Labs provides onboarding, configuration, training, maintenance, and ongoing technical support to ensure your ticketing system performs efficiently.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="ticketing-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TicketingSystemClient />
    </>
  );
}
