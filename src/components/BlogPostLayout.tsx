"use client";

import { Clock, Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface BlogPostLayoutProps {
  post: {
    title: string;
    category: string;
    date: string;
    author: string;
    image: string;
    readTime: string;
    excerpt: string;
    content?: string;
  };
}

export default function BlogPostLayout({ post }: BlogPostLayoutProps) {
  return (
    <main className="pg-blog-post-wrapper" style={{ paddingTop: "120px", paddingBottom: "100px", minHeight: "100vh", background: "#fcfdfe" }}>
      <article className="container" style={{ maxWidth: "850px" }}>
        <nav style={{ marginBottom: "32px" }}>
          <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#64748b", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }} onMouseOver={(e) => e.currentTarget.style.color = "#22a7e0"} onMouseOut={(e) => e.currentTarget.style.color = "#64748b"}>
            <ArrowLeft size={18} /> Back to Insights
          </Link>
        </nav>

        <header style={{ marginBottom: "48px" }}>
          <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
            <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "4px 12px", borderRadius: "100px", fontSize: "0.85rem", fontWeight: 600 }}>
              {post.category}
            </span>
          </div>
          
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#1e293b", lineHeight: 1.1, marginBottom: "24px", letterSpacing: "-0.02em" }}>
            {post.title}
          </h1>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", color: "#64748b", fontSize: "0.95rem", borderBottom: "1px solid #e2e8f0", paddingBottom: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <User size={18} />
              <span>{post.author}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Calendar size={18} />
              <span>{post.date}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ position: "relative", width: "100%", height: "450px", borderRadius: "24px", overflow: "hidden", marginBottom: "48px", boxShadow: "0 20px 50px -12px rgba(0,0,0,0.1)" }}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </motion.div>

        <div style={{ fontSize: "1.25rem", color: "#475569", lineHeight: 1.6, marginBottom: "40px", fontWeight: 500 }}>
          {post.excerpt}
        </div>

        <div style={{ color: "#334155", lineHeight: 1.8, fontSize: "1.125rem" }}>
          <p style={{ marginBottom: "24px" }}>
            In today&apos;s fast-paced digital landscape, businesses are increasingly looking for ways to streamline their operations while maintaining the highest levels of security and efficiency. This article explores the key aspects of {post.title.toLowerCase()} and how it impacts modern enterprises.
          </p>
          
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#1e293b", marginTop: "40px", marginBottom: "20px" }}>Key Insights</h2>
          <p style={{ marginBottom: "24px" }}>
            Our team of experts has been monitoring the trends in {post.category} closely. We have observed a significant shift towards more integrated and automated solutions that not only provide better protection but also improve overall productivity.
          </p>

          <blockquote style={{ borderLeft: "4px solid #22a7e0", paddingLeft: "24px", margin: "40px 0", fontStyle: "italic", color: "#0f172a", fontSize: "1.35rem", fontWeight: 500 }}>
            &quot;The future of business lies in the seamless integration of technology and strategy, where every decision is backed by data and secured by advanced AI.&quot;
          </blockquote>

          <p style={{ marginBottom: "24px" }}>
            As we continue to navigate these changes, Professional Labs remains committed to providing state-of-the-art solutions tailored to the unique needs of our clients across the globe.
          </p>

          <div style={{ marginTop: "60px", padding: "40px", background: "#f8fafc", borderRadius: "24px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1e293b", marginBottom: "16px" }}>About the Author</h3>
            <p style={{ color: "#475569" }}>
              The {post.author} at Professional Labs is dedicated to researching and sharing the latest developments in {post.category} and digital transformation.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
