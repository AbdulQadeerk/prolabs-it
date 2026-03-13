import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "./globals.css";
import "./services.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geologica = Geologica({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-geologica",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Managed IT Services & Cybersecurity Solutions | Professional Labs",
    template: "%s | Professional Labs",
  },
  description:
    "Professional Labs delivers managed IT services, cybersecurity, SOC monitoring, cloud security, and IT support for global businesses. Trusted across 35+ countries since 1997.",
  metadataBase: new URL("https://prolabsit.com"),
  verification: {
    google: "nQFnk8eA7YsFgaZfJkvif8jwYRO1GFlF_FjGs7HWBAU",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geologica.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
