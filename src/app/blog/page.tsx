"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    ChevronRight, Search, Clock, User, ArrowRight,
    Filter, Grid, List as ListIcon, Calendar,
    MessageSquare, Share2, Tag, ChevronDown
} from "lucide-react";
import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Managed IT", "Security", "Cloud", "Azure", "Citrix"];

const blogPosts = [
    {
        id: 1,
        category: "Managed IT",
        title: "Managed IT Services in Qatar: Key Reasons Behind the Rapid Adoption",
        excerpt: "Discover why enterprises in Qatar are rapidly shifting toward managed IT models to drive digital transformation and operational excellence.",
        date: "Feb 22, 2026",
        author: "Security Team",
        image: "/illustrations/benefit-efficiency.svg",
        readTime: "6 min read"
    },
    {
        id: 2,
        category: "Security",
        title: "Managed SOC Services in Delaware: How Enterprises Detect & Stop Cyber Threats 24/7",
        excerpt: "A deep dive into how Delaware businesses are leveraging 24/7 Security Operations Centers to mitigate advanced persistent threats (APTs).",
        date: "Feb 20, 2026",
        author: "Cyber Analyst",
        image: "/illustrations/benefit-security.svg",
        readTime: "8 min read",
        featured: true
    },
    {
        id: 3,
        category: "Cloud",
        title: "Cloud Managed Services in Dubai UAE | What Enterprises Should Expect",
        excerpt: "The landscape of cloud infrastructure is changing. Here is what UAE enterprises need to know about the future of managed cloud.",
        date: "Feb 18, 2026",
        author: "Cloud Architect",
        image: "/illustrations/cloud-infrastructure.svg",
        readTime: "5 min read"
    },
    {
        id: 4,
        category: "Azure",
        title: "Azure Consulting Services in Dubai: Cost, Use Cases & Benefits",
        excerpt: "Unpacking the value of Azure for Middle Eastern businesses, from cost optimization to scalable application hosting.",
        date: "Feb 15, 2026",
        author: "Azure Expert",
        image: "/illustrations/dashboard-preview.svg",
        readTime: "7 min read"
    },
    {
        id: 5,
        category: "Managed IT",
        title: "Best Managed IT Services for Delaware Businesses: Professional Labs",
        excerpt: "Professional Labs provides tailor-made IT solutions for local Delaware businesses. Learn how we support your growth.",
        date: "Feb 12, 2026",
        author: "Tech Consultant",
        image: "/illustrations/benefit-compliance.svg",
        readTime: "4 min read"
    },
    {
        id: 6,
        category: "Security",
        title: "Delaware Cybersecurity Services: Professional Labs Security Guide",
        excerpt: "Comprehensive guide for mid-market and enterprise businesses on building a resilient security posture in today's threat landscape.",
        date: "Feb 10, 2026",
        author: "SOC Lead",
        image: "/illustrations/benefit-security.svg",
        readTime: "10 min read"
    },
    {
        id: 7,
        category: "Security",
        title: "Delaware Managed SOC Services – Professional Labs Cybersecurity Solutions",
        excerpt: "In-depth look at our proprietary security stack and how our Delaware-based team protects your data around the clock.",
        date: "Feb 08, 2026",
        author: "Security Expert",
        image: "/illustrations/benefit-security.svg",
        readTime: "6 min read"
    },
    {
        id: 8,
        category: "Cloud",
        title: "Cloud Monitoring Delaware: Professional Labs – The Trusted Choice",
        excerpt: "Real-time visibility into your multi-cloud environment. Why visibility is the first step in performance optimization.",
        date: "Feb 05, 2026",
        author: "Cloud Specialist",
        image: "/illustrations/dashboard-preview.svg",
        readTime: "5 min read"
    },
    {
        id: 9,
        category: "Citrix",
        title: "6 Actionable Ways To Improve Your Cloud Efficiency",
        excerpt: "Cloud costs spiraling? Use these Citrix-proven methods to streamline your virtual desktop infrastructure and save.",
        date: "Feb 02, 2026",
        author: "Citrix Architect",
        image: "/illustrations/benefit-efficiency.svg",
        readTime: "9 min read"
    },
    {
        id: 10,
        category: "Citrix",
        title: "Managed IT vs Cloud Services: What’s right for your business?",
        excerpt: "Choosing between traditional managed services and pure cloud models can be tough. We break down the Pros and Cons for you.",
        date: "Jan 28, 2026",
        author: "Business Strategist",
        image: "/illustrations/benefit-scaling.svg",
        readTime: "8 min read"
    }
];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = useMemo(() => {
        return blogPosts.filter(post => {
            const matchesCategory = activeCategory === "All" || post.category === activeCategory;
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    const featuredPost = blogPosts.find(p => p.featured) || blogPosts[0];

    return (
        <main className="pg-blog-wrapper">
            <Header />

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
                    <p className="pg-subtitle">Expert perspectives on Cybersecurity, Cloud Infrastructure, and Digital Strategy.</p>
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
                                style={{ objectFit: 'cover' }}
                            />
                            <div className="pg-fcard-badge">Featured Story</div>
                        </div>
                        <div className="pg-fcard-info">
                            <div className="pg-fcard-meta">
                                <span className="pg-tag">{featuredPost.category}</span>
                                <span className="pg-read"><Clock size={14} /> {featuredPost.readTime}</span>
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
                            <Link href={`#post-${featuredPost.id}`} className="pg-fcard-btn">
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
                            {categories.map(cat => (
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
                                                style={{ objectFit: 'contain', padding: '20px', background: '#f8fafc' }}
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
                                            <Link href={`#post-${post.id}`} className="pg-card-link">
                                                Continue Reading »
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <div className="pg-no-results">
                                <h3>No articles found matching "{searchQuery}"</h3>
                                <button onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}>Reset Filters</button>
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
                            <p>Our consultants are ready to help you navigate your digital transformation journey.</p>
                        </div>
                        <Link href="/contact" className="pg-cta-btn">Talk to an Expert</Link>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx global>{`
        .pg-blog-wrapper {
          --primary: #22a7e0;
          --dark: #082638;
          --text: #475569;
          --heading: #1e293b;
          --bg-light: #f8fafc;
          --border: #e2e8f0;
          background: #fff;
          color: var(--text);
        }

        .pg-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .pg-blog-hero {
          background: linear-gradient(135deg, var(--dark) 0%, #0d4f6c 100%);
          padding: 160px 0 100px;
          color: white;
          text-align: center;
        }

        .pg-breadcrumbs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-size: 0.85rem;
          margin-bottom: 24px;
          opacity: 0.7;
        }
        .pg-breadcrumbs .sep { opacity: 0.5; }
        .pg-breadcrumbs .active { opacity: 1; font-weight: 600; }
        .pg-breadcrumbs a:hover { color: var(--primary); }

        .pg-title {
          font-size: clamp(2.5rem, 5vw, 3.8rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .pg-subtitle {
          font-size: 1.25rem;
          opacity: 0.8;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Featured Card */
        .pg-featured-entry { margin-top: -60px; padding-bottom: 60px; position: relative; z-index: 10; }
        .pg-fcard {
          background: #fff;
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border);
        }

        @media (max-width: 900px) { .pg-fcard { grid-template-columns: 1fr; } }

        .pg-fcard-img { position: relative; min-height: 400px; }
        .pg-fcard-badge {
          position: absolute; top: 24px; left: 24px; background: var(--primary);
          color: white; padding: 6px 16px; border-radius: 100px; font-weight: 700; font-size: 0.8rem;
        }

        .pg-fcard-info { padding: 60px; display: flex; flex-direction: column; justify-content: center; }
        .pg-fcard-meta { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; }
        .pg-tag { background: #f0f9ff; color: var(--primary); padding: 4px 12px; border-radius: 6px; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; }
        .pg-read { display: flex; align-items: center; gap: 6px; font-size: 0.85rem; font-weight: 500; }

        .pg-fcard-title { font-size: 2.25rem; font-weight: 800; color: var(--heading); line-height: 1.2; margin-bottom: 20px; }
        .pg-fcard-excerpt { font-size: 1.1rem; line-height: 1.6; margin-bottom: 32px; }

        .pg-fcard-author { display: flex; align-items: center; gap: 12px; margin-bottom: 32px; }
        .pg-avatar { width: 44px; height: 44px; background: var(--primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; }
        .pg-author-details { display: flex; flex-direction: column; line-height: 1.4; }
        .pg-author-details strong { font-size: 0.95rem; color: var(--heading); }
        .pg-author-details span { font-size: 0.8rem; opacity: 0.7; }

        .pg-fcard-btn { display: inline-flex; align-items: center; gap: 8px; color: var(--primary); font-weight: 800; text-decoration: none; font-size: 1.1rem; transition: 0.2s; }
        .pg-fcard-btn:hover { transform: translateX(5px); color: var(--dark); }

        /* Toolbar */
        .pg-blog-toolbar { background: #fff; padding: 30px 0; border-bottom: 1px solid var(--border); position: sticky; top: 0; z-index: 50; }
        .pg-toolbar-flex { display: flex; justify-content: space-between; align-items: center; gap: 24px; }
        
        @media (max-width: 768px) { .pg-toolbar-flex { flex-direction: column; align-items: stretch; } }

        .pg-filter-tabs { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 4px; scrollbar-width: none; }
        .pg-filter-tabs::-webkit-scrollbar { display: none; }
        .pg-tab {
          white-space: nowrap; padding: 8px 20px; border-radius: 100px; border: 1px solid var(--border);
          background: #fff; font-weight: 600; font-size: 0.9rem; cursor: pointer; transition: 0.2s;
        }
        .pg-tab:hover { border-color: var(--primary); color: var(--primary); }
        .pg-tab.active { background: var(--primary); color: white; border-color: var(--primary); }

        .pg-search-box { position: relative; display: flex; align-items: center; flex: 1; max-width: 400px; }
        .pg-search-box svg { position: absolute; left: 16px; color: #94a3b8; }
        .pg-search-box input {
          width: 100%; padding: 12px 16px 12px 48px; border-radius: 12px; border: 1px solid var(--border);
          outline: none; font-size: 0.95rem; transition: 0.2s; background: var(--bg-light);
        }
        .pg-search-box input:focus { background: white; border-color: var(--primary); box-shadow: 0 0 0 4px rgba(34, 167, 224, 0.1); }

        /* Grid */
        .pg-blog-grid-section { padding: 60px 0 100px; background: #fff; }
        .pg-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 32px; }

        @media (max-width: 480px) { .pg-grid { grid-template-columns: 1fr; } }

        .pg-card {
          background: #fff; border-radius: 20px; overflow: hidden; border: 1px solid var(--border);
          display: flex; flex-direction: column; height: 100%; transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .pg-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.06); border-color: var(--primary); }

        .pg-card-img { position: relative; height: 220px; width: 100%; flex-shrink: 0; }
        .pg-card-cat {
          position: absolute; bottom: 16px; left: 16px; background: var(--dark);
          color: white; padding: 4px 10px; border-radius: 4px; font-weight: 700; font-size: 0.65rem; text-transform: uppercase;
        }

        .pg-card-body { padding: 28px; display: flex; flex-direction: column; flex: 1; }
        .pg-card-meta { display: flex; align-items: center; gap: 10px; font-size: 0.8rem; font-weight: 600; color: #64748b; margin-bottom: 16px; }
        .pg-card-meta .dot { width: 4px; height: 4px; background: #cbd5e1; border-radius: 50%; }

        .pg-card-title { font-size: 1.35rem; font-weight: 800; color: var(--heading); line-height: 1.3; margin-bottom: 12px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .pg-card-desc { font-size: 0.95rem; line-height: 1.6; color: var(--text); margin-bottom: 24px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        
        .pg-card-link { margin-top: auto; color: var(--primary); font-weight: 700; text-decoration: none; font-size: 0.95rem; }
        .pg-card-link:hover { text-decoration: underline; }

        .pg-load-more { text-align: center; margin-top: 60px; }
        .pg-btn-outline {
          background: white; border: 2px solid var(--primary); color: var(--primary);
          padding: 14px 40px; border-radius: 100px; font-weight: 800; cursor: pointer; transition: 0.2s;
        }
        .pg-btn-outline:hover { background: var(--primary); color: white; }

        .pg-no-results { text-align: center; padding: 80px 0; grid-column: 1 / -1; }
        .pg-no-results h3 { font-size: 1.5rem; color: var(--heading); margin-bottom: 16px; }
        .pg-no-results button { background: none; border: none; color: var(--primary); font-weight: 800; text-decoration: underline; cursor: pointer; }

        /* CTA */
        .pg-blog-cta { padding-bottom: 100px; }
        .pg-cta-box {
          background: var(--dark); border-radius: 32px; padding: 60px;
          display: flex; justify-content: space-between; align-items: center; gap: 40px; color: white;
        }
        @media (max-width: 900px) { .pg-cta-box { flex-direction: column; text-align: center; padding: 40px; } }

        .pg-cta-text h2 { font-size: 2rem; font-weight: 800; margin-bottom: 12px; }
        .pg-cta-text p { font-size: 1.1rem; opacity: 0.8; }
        .pg-cta-btn {
          background: white; color: var(--dark); padding: 18px 45px; border-radius: 100px;
          font-weight: 800; text-decoration: none; transition: 0.3s; white-space: nowrap;
        }
        .pg-cta-btn:hover { background: var(--primary); color: white; transform: scale(1.05); }
      `}</style>
        </main>
    );
}
