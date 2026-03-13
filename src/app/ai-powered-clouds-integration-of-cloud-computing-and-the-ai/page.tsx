"use client";
import BlogPostLayout from "@/components/BlogPostLayout";

const post = {
  title: "Ai Powered Clouds Integration Of Cloud Computing And The Ai",
  category: "Insights",
  date: "March 12, 2026",
  author: "Professional Labs Team",
  image: "/illustrations/cloud-infrastructure.svg",
  readTime: "8 min read",
  excerpt: "An in-depth look into Ai Powered Clouds Integration Of Cloud Computing And The Ai and how it can help transform your business operations in the modern digital era.",
};

export default function Page() {
  return <BlogPostLayout post={post} />;
}
