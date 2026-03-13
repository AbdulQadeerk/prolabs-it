"use client";
import BlogPostLayout from "@/components/BlogPostLayout";

const post = {
  title: "Discover The Dynamics Of High Availability In Azure With Insights Into Azure Load Balancer And Traffic Manager",
  category: "Insights",
  date: "March 12, 2026",
  author: "Professional Labs Team",
  image: "/illustrations/cloud-infrastructure.svg",
  readTime: "8 min read",
  excerpt: "An in-depth look into Discover The Dynamics Of High Availability In Azure With Insights Into Azure Load Balancer And Traffic Manager and how it can help transform your business operations in the modern digital era.",
};

export default function Page() {
  return <BlogPostLayout post={post} />;
}
