"use client";
import BlogPostLayout from "@/components/BlogPostLayout";

const post = {
  title: "Managed It Vs Cloud Services",
  category: "Insights",
  date: "March 12, 2026",
  author: "Professional Labs Team",
  image: "/blog-images/blog_1_qatar_it.png",
  readTime: "8 min read",
  excerpt: "An in-depth look into Managed It Vs Cloud Services and how it can help transform your business operations in the modern digital era.",
};

export default function Page() {
  return <BlogPostLayout post={post} />;
}
