"use client";
import BlogPostLayout from "@/components/BlogPostLayout";

const post = {
  title: "Azure Vs Aws How Consulting Services Help You Choose The Right Cloud Provider",
  category: "Insights",
  date: "March 12, 2026",
  author: "Professional Labs Team",
  image: "/illustrations/cloud-infrastructure.svg",
  readTime: "8 min read",
  excerpt: "An in-depth look into Azure Vs Aws How Consulting Services Help You Choose The Right Cloud Provider and how it can help transform your business operations in the modern digital era.",
};

export default function Page() {
  return <BlogPostLayout post={post} />;
}
