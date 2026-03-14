import { Metadata } from "next";
import Script from "next/script";
import ITTrainingClient from "./ITTrainingClient";

export const metadata: Metadata = {
  title:
    "IT Training Services & Certifications | Cybersecurity, Cloud & Networking | Professional Labs",
  description:
    "Professional Labs offers expert IT training services including cybersecurity, cloud computing, networking, programming, and certification courses. Gain hands-on skills and career support.",
  alternates: {
    canonical: "https://prolabsit.com/it-training-services",
  },
  openGraph: {
    title:
    "IT Training Services & Certifications | Cybersecurity, Cloud & Networking | Professional Labs",
    description:
      "Professional Labs offers expert IT training services including cybersecurity, cloud computing, networking, programming, and certification courses.",
    url: "https://prolabsit.com/it-training-services",
    siteName: "Professional Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Training Services & Certifications | IT Certifications",
    description:
      "Expert IT training and certifications for cybersecurity, cloud, and networking from Professional Labs.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the benefits of IT training services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IT training services help individuals and organizations develop technical skills, stay updated with modern technologies, and improve productivity. Training programs also help professionals prepare for certifications and expand career opportunities in the technology sector.",
      },
    },
    {
      "@type": "Question",
      name: "What types of IT training services are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IT training services typically include courses in cybersecurity, networking, cloud computing, programming, data science, database management, and enterprise software technologies.",
      },
    },
    {
      "@type": "Question",
      name: "How much do IT training services typically cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost of IT training programs depends on the course type, certification level, training format, and duration. Some courses focus on short certification preparation, while others provide comprehensive multi-week training programs.",
      },
    },
    {
      "@type": "Question",
      name: "What qualifications do IT trainers have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IT trainers typically have industry certifications and professional experience in areas such as cybersecurity, cloud computing, networking, and software development.",
      },
    },
    {
      "@type": "Question",
      name: "How can I choose the right IT training provider?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose an IT training provider based on curriculum quality, certification preparation, instructor experience, hands-on labs, career support services, and flexible learning options.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="it-training-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ITTrainingClient />
    </>
  );
}
