import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NinjaOne - Top-rated UEM & IT Management Software",
  description: "The easiest IT management platform. No contracts or platform fees. Free onboarding and local support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
