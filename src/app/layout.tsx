import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "./globals.css";
import "./services.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StyledJsxRegistry from "./registry";

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
      <body>
        <StyledJsxRegistry>
          <Header />
          {children}
          <Footer />
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
