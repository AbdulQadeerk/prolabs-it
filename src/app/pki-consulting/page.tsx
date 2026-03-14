import { Metadata } from "next";
import Script from "next/script";
import PKIClient from "./PKIClient";

export const metadata: Metadata = {
  title:
    "PKI Consulting Services | Public Key Infrastructure & HSM Integration | Professional Labs",
  description:
    "Expert PKI consulting services to design, implement, and manage secure public key infrastructure. Enable trusted communication, digital certificates, and HSM-based cryptographic security.",
  alternates: {
    canonical: "https://prolabsit.com/pki-consulting",
  },
  openGraph: {
    title:
      "PKI Consulting Services | Public Key Infrastructure & HSM Integration | Professional Labs",
    description:
      "Expert PKI consulting services to design, implement, and manage secure public key infrastructure. Enable trusted communication, digital certificates, and HSM-based cryptographic security.",
    url: "https://prolabsit.com/pki-consulting",
    siteName: "Professional Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "PKI Consulting Services | Public Key Infrastructure & HSM Integration",
    description:
      "Expert PKI consulting services to design, implement, and manage secure public key infrastructure.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a PKI consultant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A PKI consultant is a cybersecurity expert who designs, implements, and manages public key infrastructure systems that secure digital communications using encryption and digital certificates.",
      },
    },
    {
      "@type": "Question",
      name: "What services does a PKI provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PKI services include digital certificate issuance, identity authentication, encryption, digital signatures, key management, and certificate lifecycle management.",
      },
    },
    {
      "@type": "Question",
      name: "What is PKI and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Public Key Infrastructure uses public and private cryptographic keys, digital certificates, and certificate authorities to authenticate users and encrypt communications across networks.",
      },
    },
    {
      "@type": "Question",
      name: "What is the importance of HSMs in PKI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hardware Security Modules provide secure environments for generating and storing cryptographic keys, protecting the root of trust within PKI systems.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="pki-consulting-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PKIClient />
    </>
  );
}
