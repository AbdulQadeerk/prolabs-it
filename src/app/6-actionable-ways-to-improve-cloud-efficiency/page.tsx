"use client";
import BlogPostLayout from "@/components/BlogPostLayout";

const post = {
  title: "6 Actionable Ways To Improve Cloud Efficiency",
  category: "Insights",
  date: "March 12, 2026",
  author: "Professional Labs Team",
  image: "/blog-images/blog_4_azure_dubai.png",
  readTime: "8 min read",
  excerpt: "An in-depth look into 6 Actionable Ways To Improve Cloud Efficiency and how it can help transform your business operations in the modern digital era.",
};

export default function Page() {
  return <BlogPostLayout post={post} />;
}
