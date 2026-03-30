"use client";
import BlogPostLayout from "@/components/BlogPostLayout";

const post = {
  title: "Delaware Cybersecurity Services Professional Labs Security Guide",
  category: "Insights",
  date: "March 12, 2026",
  author: "Professional Labs Team",
  image: "/blog-images/blog_6_delaware_cyber.png",
  readTime: "8 min read",
  excerpt: "An in-depth look into Delaware Cybersecurity Services Professional Labs Security Guide and how it can help transform your business operations in the modern digital era.",
};

export default function Page() {
  return <BlogPostLayout post={post} />;
}
