"use client";
import BlogPostLayout from "@/components/BlogPostLayout";

const post = {
  title: "Professional Labs Managed Soc Services Delaware",
  category: "Insights",
  date: "March 12, 2026",
  author: "Professional Labs Team",
  image: "/blog-images/blog_2_soc_delaware.png",
  readTime: "8 min read",
  excerpt: "An in-depth look into Professional Labs Managed Soc Services Delaware and how it can help transform your business operations in the modern digital era.",
};

export default function Page() {
  return <BlogPostLayout post={post} />;
}
