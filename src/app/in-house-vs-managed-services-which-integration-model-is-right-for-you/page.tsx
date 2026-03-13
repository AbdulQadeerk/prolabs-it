"use client";
import BlogPostLayout from "@/components/BlogPostLayout";

const post = {
  title: "In House Vs Managed Services Which Integration Model Is Right For You",
  category: "Insights",
  date: "March 12, 2026",
  author: "Professional Labs Team",
  image: "/illustrations/cloud-infrastructure.svg",
  readTime: "8 min read",
  excerpt: "An in-depth look into In House Vs Managed Services Which Integration Model Is Right For You and how it can help transform your business operations in the modern digital era.",
};

export default function Page() {
  return <BlogPostLayout post={post} />;
}
