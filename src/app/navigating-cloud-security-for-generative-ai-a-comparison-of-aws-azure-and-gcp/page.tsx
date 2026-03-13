"use client";
import BlogPostLayout from "@/components/BlogPostLayout";

const post = {
  title: "Navigating Cloud Security For Generative Ai A Comparison Of Aws Azure And Gcp",
  category: "Insights",
  date: "March 12, 2026",
  author: "Professional Labs Team",
  image: "/illustrations/cloud-infrastructure.svg",
  readTime: "8 min read",
  excerpt: "An in-depth look into Navigating Cloud Security For Generative Ai A Comparison Of Aws Azure And Gcp and how it can help transform your business operations in the modern digital era.",
};

export default function Page() {
  return <BlogPostLayout post={post} />;
}
