import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
