import { Metadata } from "next";
import Script from "next/script";
import DefenderClient from "./DefenderClient";

export const metadata: Metadata = {
  title:
    "Microsoft Defender for Endpoint Services | Managed EDR & SOC Monitoring | Professional Labs",
  description:
    "Deploy and manage Microsoft Defender for Endpoint with 24/7 SOC monitoring, threat detection, and automated response. Expert Microsoft security engineers helping organizations secure endpoints and stop cyber threats.",
  alternates: {
    canonical: "https://prolabsit.com/defender-for-endpoint",
  },
  openGraph: {
    title:
      "Microsoft Defender for Endpoint Services | Managed EDR & SOC Monitoring | Professional Labs",
    description:
      "Deploy and manage Microsoft Defender for Endpoint with 24/7 SOC monitoring, threat detection, and automated response. Expert Microsoft security engineers helping organizations secure endpoints and stop cyber threats.",
    url: "https://prolabsit.com/defender-for-endpoint",
    siteName: "Professional Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Microsoft Defender for Endpoint Services | Managed EDR & SOC Monitoring",
    description:
      "Deploy and manage Microsoft Defender for Endpoint with 24/7 SOC monitoring, threat detection, and automated response.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Microsoft Defender for Endpoint do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft Defender for Endpoint is an enterprise endpoint detection and response platform that helps organizations prevent, detect, investigate, and respond to advanced cyber threats across Windows, macOS, Linux, and mobile devices.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Microsoft Defender and Defender for Endpoint?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft Defender is the basic antivirus protection included with Windows, while Microsoft Defender for Endpoint provides enterprise security capabilities including advanced threat detection, automated response, and threat hunting.",
      },
    },
    {
      "@type": "Question",
      name: "Is Microsoft Defender for Endpoint free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Basic Microsoft Defender protection is included with Windows devices, but advanced Defender for Endpoint capabilities require Microsoft enterprise security licensing.",
      },
    },
    {
      "@type": "Question",
      name: "Is Defender for Endpoint enough without a SOC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Organizations typically need a Security Operations Center to continuously monitor alerts, investigate threats, and respond to incidents. Managed SOC services help maximize Defender's effectiveness.",
      },
    },
    {
      "@type": "Question",
      name: "Can Professional Labs manage Defender 24/7?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Professional Labs provides 24/7 managed Microsoft Defender for Endpoint services including SOC monitoring, threat detection, incident response, and automation optimization.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="defender-endpoint-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DefenderClient />
    </>
  );
}
