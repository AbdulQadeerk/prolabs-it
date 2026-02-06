import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "./globals.css";

const geologica = Geologica({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-geologica",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Professional Labs - Unified IT Operations",
  description:
    "Unified IT operations, endpoint security, and support — built for modern teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geologica.variable}>
      <body>{children}</body>
    </html>
  );
}
