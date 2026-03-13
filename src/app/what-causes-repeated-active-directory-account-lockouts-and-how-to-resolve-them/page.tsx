"use client";
import BlogPostLayout from "@/components/BlogPostLayout";

const post = {
  title: "What Causes Repeated Active Directory Account Lockouts And How To Resolve Them",
  category: "Insights",
  date: "March 12, 2026",
  author: "Professional Labs Team",
  image: "/illustrations/cloud-infrastructure.svg",
  readTime: "8 min read",
  excerpt: "An in-depth look into What Causes Repeated Active Directory Account Lockouts And How To Resolve Them and how it can help transform your business operations in the modern digital era.",
};

export default function Page() {
  return <BlogPostLayout post={post} />;
}
