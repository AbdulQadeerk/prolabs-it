"use client";
import BlogPostLayout from "@/components/BlogPostLayout";

const post = {
  title: "Choosing The Right Citrix Consulting Partner For Your Organization",
  category: "Insights",
  date: "March 12, 2026",
  author: "Professional Labs Team",
  image: "/illustrations/cloud-infrastructure.svg",
  readTime: "8 min read",
  excerpt: "An in-depth look into Choosing The Right Citrix Consulting Partner For Your Organization and how it can help transform your business operations in the modern digital era.",
};

export default function Page() {
  return <BlogPostLayout post={post} />;
}
