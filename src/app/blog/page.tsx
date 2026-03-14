import { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Insights on Cybersecurity, Cloud & IT Management | Professional Labs Blog",
  description:
    "Stay updated with the latest insights on cybersecurity threats, IT automation, and cloud infrastructure management from Professional Labs experts.",
  alternates: {
    canonical: "https://prolabsit.com/blog",
  },
};

export default function Page() {
  return <BlogClient />;
}
