"use client";

import {
  ChevronRight,
  Search,
  Clock,
  User,
  ArrowRight,
  Filter,
  Grid,
  List as ListIcon,
  Calendar,
  MessageSquare,
  Share2,
  Tag,
  ChevronDown,
} from "lucide-react";
import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import "./blog.css";

const categories = [
  "All",
  "Managed IT",
  "Security",
  "Cloud",
  "Azure",
  "Citrix",
];

const blogPosts = [
  {
    id: 1,
    category: "Managed IT",
    slug: "managed-it-services-in-qatar-key-reasons-behind-the-rapid-adoption",
    title:
      "Managed IT Services in Qatar: Key Reasons Behind the Rapid Adoption",
    excerpt:
      "Discover why enterprises in Qatar are rapidly shifting toward managed IT models to drive digital transformation and operational excellence.",
    date: "Feb 22, 2026",
    author: "Security Team",
    image: "/illustrations/benefit-efficiency.svg",
    readTime: "6 min read",
  },
  {
    id: 2,
    category: "Security",
    slug: "managed-soc-services-in-delaware-how-enterprises-detect-stop-cyber-threats-24-7",
    title:
      "Managed SOC Services in Delaware: How Enterprises Detect & Stop Cyber Threats 24/7",
    excerpt:
      "A deep dive into how Delaware businesses are leveraging 24/7 Security Operations Centers to mitigate advanced persistent threats (APTs).",
    date: "Feb 20, 2026",
    author: "Cyber Analyst",
    image: "/illustrations/benefit-security.svg",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 3,
    category: "Cloud",
    slug: "cloud-managed-services-in-dubai-uae-what-enterprises-should-expect",
    title:
      "Cloud Managed Services in Dubai UAE | What Enterprises Should Expect",
    excerpt:
      "The landscape of cloud infrastructure is changing. Here is what UAE enterprises need to know about the future of managed cloud.",
    date: "Feb 18, 2026",
    author: "Cloud Architect",
    image: "/illustrations/cloud-infrastructure.svg",
    readTime: "5 min read",
  },
  {
    id: 4,
    category: "Azure",
    slug: "azure-consulting-services-in-dubai-cost-use-cases-benefits",
    title: "Azure Consulting Services in Dubai: Cost, Use Cases & Benefits",
    excerpt:
      "Unpacking the value of Azure for Middle Eastern businesses, from cost optimization to scalable application hosting.",
    date: "Feb 15, 2026",
    author: "Azure Expert",
    image: "/illustrations/dashboard-preview.svg",
    readTime: "7 min read",
  },
  {
    id: 5,
    category: "Managed IT",
    slug: "best-managed-it-services-for-delaware-businesses-professional-labs",
    title:
      "Best Managed IT Services for Delaware Businesses: Professional Labs",
    excerpt:
      "Professional Labs provides tailor-made IT solutions for local Delaware businesses. Learn how we support your growth.",
    date: "Feb 12, 2026",
    author: "Tech Consultant",
    image: "/illustrations/benefit-compliance.svg",
    readTime: "4 min read",
  },
  {
    id: 6,
    category: "Security",
    slug: "delaware-cybersecurity-services-professional-labs-security-guide",
    title: "Delaware Cybersecurity Services: Professional Labs Security Guide",
    excerpt:
      "Comprehensive guide for mid-market and enterprise businesses on building a resilient security posture in today's threat landscape.",
    date: "Feb 10, 2026",
    author: "SOC Lead",
    image: "/illustrations/benefit-security.svg",
    readTime: "10 min read",
  },
  {
    id: 7,
    category: "Security",
    slug: "professional-labs-managed-soc-services-delaware",
    title:
      "Delaware Managed SOC Services – Professional Labs Cybersecurity Solutions",
    excerpt:
      "In-depth look at our proprietary security stack and how our Delaware-based team protects your data around the clock.",
    date: "Feb 08, 2026",
    author: "Security Expert",
    image: "/illustrations/benefit-security.svg",
    readTime: "6 min read",
  },
  {
    id: 8,
    category: "Cloud",
    slug: "cloud-monitoring-delaware-professional-labs-the-trusted-choice",
    title: "Cloud Monitoring Delaware: Professional Labs – The Trusted Choice",
    excerpt:
      "Real-time visibility into your multi-cloud environment. Why visibility is the first step in performance optimization.",
    date: "Feb 05, 2026",
    author: "Cloud Specialist",
    image: "/illustrations/dashboard-preview.svg",
    readTime: "5 min read",
  },
  {
    id: 9,
    category: "Citrix",
    slug: "6-actionable-ways-to-improve-cloud-efficiency",
    title: "6 Actionable Ways To Improve Your Cloud Efficiency",
    excerpt:
      "Cloud costs spiraling? Use these Citrix-proven methods to streamline your virtual desktop infrastructure and save.",
    date: "Feb 02, 2026",
    author: "Citrix Architect",
    image: "/illustrations/benefit-efficiency.svg",
    readTime: "9 min read",
  },
  {
    id: 10,
    category: "Citrix",
    slug: "managed-it-vs-cloud-services",
    title: "Managed IT vs Cloud Services: What's right for your business?",
    excerpt:
      "Choosing between traditional managed services and pure cloud models can be tough. We break down the Pros and Cons for you.",
    date: "Jan 28, 2026",
    author: "Business Strategist",
    image: "/illustrations/benefit-scaling.svg",
    readTime: "8 min read",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

  return (
    <main className="pg-blog-wrapper">
      {/* Hero Header */}
      <section className="pg-blog-hero">
        <div className="pg-container">
          <nav className="pg-breadcrumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Pages</span>
            <span className="sep">/</span>
            <span className="active">Blog</span>
          </nav>
          <h1 className="pg-title">Professional Labs Insights</h1>
          <p className="pg-subtitle">
            Expert perspectives on Cybersecurity, Cloud Infrastructure, and
            Digital Strategy.
          </p>
        </div>
      </section>

      {/* Featured Entry */}
      <section className="pg-featured-entry">
        <div className="pg-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pg-fcard"
          >
            <div className="pg-fcard-img">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="pg-fcard-badge">Featured Story</div>
            </div>
            <div className="pg-fcard-info">
              <div className="pg-fcard-meta">
                <span className="pg-tag">{featuredPost.category}</span>
                <span className="pg-read">
                  <Clock size={14} /> {featuredPost.readTime}
                </span>
              </div>
              <h2 className="pg-fcard-title">{featuredPost.title}</h2>
              <p className="pg-fcard-excerpt">{featuredPost.excerpt}</p>
              <div className="pg-fcard-author">
                <div className="pg-avatar">{featuredPost.author[0]}</div>
                <div className="pg-author-details">
                  <strong>{featuredPost.author}</strong>
                  <span>{featuredPost.date}</span>
                </div>
              </div>
              <Link href={`/${featuredPost.slug}`} className="pg-fcard-btn">
                Continue Reading <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Toolbar */}
      <section className="pg-blog-toolbar">
        <div className="pg-container">
          <div className="pg-toolbar-flex">
            <div className="pg-filter-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`pg-tab ${activeCategory === cat ? "active" : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="pg-search-box">
              <Search size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pg-blog-grid-section">
        <div className="pg-container">
          <AnimatePresence mode="popLayout">
            {filteredPosts.length > 0 ? (
              <motion.div layout className="pg-grid">
                {filteredPosts.map((post, i) => (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="pg-card"
                  >
                    <div className="pg-card-img">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        style={{
                          objectFit: "contain",
                          padding: "20px",
                          background: "#f8fafc",
                        }}
                      />
                      <span className="pg-card-cat">{post.category}</span>
                    </div>
                    <div className="pg-card-body">
                      <div className="pg-card-meta">
                        <Calendar size={14} /> {post.date}
                        <span className="dot"></span>
                        <Clock size={14} /> {post.readTime}
                      </div>
                      <h3 className="pg-card-title">{post.title}</h3>
                      <p className="pg-card-desc">{post.excerpt}</p>
                      <Link href={`/${post.slug}`} className="pg-card-link">
                        Continue Reading »
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="pg-no-results">
                <h3>No articles found matching &quot;{searchQuery}&quot;</h3>
                <button
                  onClick={() => {
                    setActiveCategory("All");
                    setSearchQuery("");
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </AnimatePresence>

          <div className="pg-load-more">
            <button className="pg-btn-outline">Load More Insights</button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pg-blog-cta">
        <div className="pg-container">
          <div className="pg-cta-box">
            <div className="pg-cta-text">
              <h2>Need expert advice for your business?</h2>
              <p>
                Our consultants are ready to help you navigate your digital
                transformation journey.
              </p>
            </div>
            <Link href="/contact" className="pg-cta-btn">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
