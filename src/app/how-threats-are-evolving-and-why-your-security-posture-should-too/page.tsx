"use client";
import BlogPostLayout from "@/components/BlogPostLayout";

const post = {
  title: "How Threats Are Evolving And Why Your Security Posture Should Too",
  category: "Insights",
  date: "March 12, 2026",
  author: "Professional Labs Team",
  image: "/illustrations/cloud-infrastructure.svg",
  readTime: "8 min read",
  excerpt: "An in-depth look into How Threats Are Evolving And Why Your Security Posture Should Too and how it can help transform your business operations in the modern digital era.",
};

export default function Page() {
  return <BlogPostLayout post={post} />;
}
