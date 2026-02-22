"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const serviceColumns = [
  {
    title: "Security",
    items: [
      { href: "/services/managed-soc", label: "Managed SOC Services" },
      { href: "#azure-security", label: "Azure Security" },
      { href: "#defender-endpoint", label: "Defender for Endpoint" },
      { href: "#email-security", label: "Email Security" },
      { href: "#cloud-app-security", label: "Microsoft Cloud App Security" },
      { href: "#defender-identity", label: "Defender for Identity" },
      { href: "#vapt", label: "VAPT" },
      { href: "#network-security", label: "Network and Security Services" },
      { href: "#identity-access", label: "Identity and Access Management" },
    ],
  },
  {
    title: "Consulting Services",
    items: [
      { href: "#azure-consulting", label: "Azure Consulting Services" },
      { href: "#azure-virtual-desktop", label: "Azure Virtual Desktop" },
      { href: "#citrix-consulting", label: "Citrix Consulting" },
      { href: "#pki-consulting", label: "PKI Consulting" },
      { href: "#active-directory", label: "Active Directory Consulting" },
      { href: "#modern-workplace", label: "Modern WorkPlace" },
      { href: "#ai-solutions", label: "Professional Labs - AI Solutions" },
      {
        href: "#data-driven",
        label: "Professional Labs - Data Driven Solutions",
      },
      {
        href: "#software-development",
        label: "Software Development Services",
      },
    ],
  },
  {
    title: "Support and Market Research",
    items: [
      { href: "#cloud-managed", label: "Cloud Managed Service" },
      { href: "#it-training", label: "IT Training" },
      { href: "#market-research", label: "Market Research" },
      { href: "#web-app-dev", label: "Website & App Development" },
      { href: "#it-helpdesk", label: "IT Help Desk" },
      {
        href: "#crm-services",
        label: "CRM (Customer Relationship Management) Services",
      },
      { href: "#erp-services", label: "ERP Services" },
      { href: "#ticketing", label: "Ticketing System Services" },
    ],
  },
];

// Flatten all service items for mobile menu
const allServiceItems = serviceColumns.flatMap((col) =>
  col.items.map((item) => ({ ...item, category: col.title }))
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "#services", label: "Services", hasDropdown: true },
    { href: "#partnership", label: "Partnership" },
    { href: "#blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      {/* Top announcement bar */}
      <div className="top-hat">
        <div className="container top-hat-inner">
          <span>
            🚀 Professional Labs — Trusted IT Solutions across 35+ countries
          </span>
          <a href="/contact" className="top-hat-link">
            Contact Us →
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="main-nav">
        <div className="container nav-inner">
          <Link href="/" className="logo-link">
            <Image
              src="/brand/prolabs-logo-dark.png"
              alt="Professional Labs"
              width={160}
              height={40}
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href} className={link.hasDropdown ? "nav-dropdown-wrapper" : ""}>
                {link.hasDropdown ? (
                  <button
                    className="nav-link nav-link-dropdown"
                    onClick={() => setServicesOpen(!servicesOpen)}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <svg
                      className={`dropdown-arrow ${servicesOpen ? "open" : ""}`}
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                ) : (
                  <a href={link.href} className="nav-link">
                    {link.label}
                  </a>
                )}

                {link.hasDropdown && servicesOpen && (
                  <div className="mega-dropdown"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="mega-dropdown-inner">
                      {serviceColumns.map((column) => (
                        <div key={column.title} className="mega-column">
                          <h4 className="mega-column-title">
                            {column.title}
                            <span className="mega-title-underline" />
                          </h4>
                          <ul className="mega-column-list">
                            {column.items.map((item) => (
                              <li key={item.href}>
                                <a
                                  href={item.href}
                                  className="mega-item"
                                  onClick={() => setServicesOpen(false)}
                                >
                                  {item.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <Link href="/contact" className="cta-btn">
              Get a Free Consultation
            </Link>
            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Mobile menu"
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <div className="container">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} className="mobile-dropdown-wrapper">
                  <button
                    className="mobile-link mobile-link-dropdown"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    {link.label}
                    <svg
                      className={`dropdown-arrow ${mobileServicesOpen ? "open" : ""}`}
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
                    <div className="mobile-sub-menu">
                      {serviceColumns.map((col) => (
                        <div key={col.title} className="mobile-sub-category">
                          <h5 className="mobile-sub-category-title">
                            {col.title}
                          </h5>
                          {col.items.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              className="mobile-sub-link"
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileServicesOpen(false);
                              }}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                link.href.startsWith("/") ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="mobile-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="mobile-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              )
            )}
            <Link
              href="/contact"
              className="mobile-cta"
              onClick={() => setMobileOpen(false)}
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        /* Top bar */
        .top-hat {
          background: #082638;
          border-bottom: 1px solid rgba(34, 167, 224, 0.1);
          padding: 8px 0;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
        }

        .scrolled .top-hat {
          padding: 0;
          height: 0;
          overflow: hidden;
          border: none;
        }

        .top-hat-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .top-hat-link {
          color: #22a7e0;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.75rem;
          transition: color 0.2s;
        }

        .top-hat-link:hover {
          color: #5dc4f0;
        }

        /* Main nav */
        .main-nav {
          position: relative;
          background: rgba(8, 38, 56, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(34, 167, 224, 0.08);
          padding: 0;
          transition: all 0.3s ease;
        }

        .scrolled .main-nav {
          background: rgba(8, 38, 56, 0.95);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 66px;
        }

        .logo-link {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .nav-link:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.06);
        }

        /* Dropdown trigger */
        .nav-link-dropdown {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: none;
          border: none;
          font-family: inherit;
        }

        .nav-dropdown-wrapper {
          position: static;
        }

        .dropdown-arrow {
          transition: transform 0.2s ease;
        }

        .dropdown-arrow.open {
          transform: rotate(180deg);
        }

        /* ===== Mega Dropdown ===== */
        .mega-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          width: 100vw;
          background: #082638;
          border-top: 3px solid #22a7e0;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3),
            0 4px 20px rgba(0, 0, 0, 0.2);
          animation: megaFadeIn 0.25s ease;
          z-index: 1001;
        }

        @keyframes megaFadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mega-dropdown-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 0;
          padding: 36px 40px 40px;
        }

        .mega-column {
          padding: 0 24px;
        }

        .mega-column:first-child {
          padding-left: 0;
        }

        .mega-column:last-child {
          padding-right: 0;
        }

        .mega-column:not(:last-child) {
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mega-column-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 12px 0;
          padding-bottom: 10px;
          position: relative;
          letter-spacing: -0.01em;
        }

        .mega-title-underline {
          display: block;
          width: 40px;
          height: 3px;
          background: #22a7e0;
          border-radius: 2px;
          margin-top: 8px;
        }

        .mega-column-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .mega-item {
          display: block;
          padding: 8px 0;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.2s ease;
          letter-spacing: -0.005em;
        }

        .mega-item:hover {
          color: #22a7e0;
          padding-left: 6px;
        }

        /* CTA button */
        .nav-cta {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          padding: 10px 24px;
          background: #22a7e0;
          color: #ffffff;
          border-radius: 50px;
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 2px 12px rgba(34, 167, 224, 0.3);
          white-space: nowrap;
        }

        .cta-btn:hover {
          background: #178dc8;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(34, 167, 224, 0.4);
        }

        .mobile-toggle {
          display: none;
          font-size: 1.4rem;
          color: white;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px 8px;
        }

        /* ===== Mobile Menu ===== */
        .mobile-menu {
          position: fixed;
          top: 66px;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(8, 38, 56, 0.98);
          backdrop-filter: blur(20px);
          z-index: 999;
          padding: 32px 0;
          overflow-y: auto;
        }

        .mobile-link {
          display: block;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          transition: color 0.2s;
        }

        .mobile-link:hover {
          color: #22a7e0;
        }

        .mobile-link-dropdown {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: none;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          font-family: inherit;
          cursor: pointer;
        }

        .mobile-dropdown-wrapper {
          /* wrapper */
        }

        .mobile-sub-menu {
          padding: 8px 0 8px 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .mobile-sub-category {
          margin-bottom: 12px;
        }

        .mobile-sub-category-title {
          font-size: 0.82rem;
          font-weight: 700;
          color: #22a7e0;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 0 0 4px 0;
          padding: 6px 0 4px;
        }

        .mobile-sub-link {
          display: block;
          color: rgba(255, 255, 255, 0.65);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 400;
          padding: 8px 0 8px 8px;
          transition: color 0.2s;
        }

        .mobile-sub-link:hover {
          color: #22a7e0;
        }

        .mobile-cta {
          display: block;
          text-align: center;
          background: #22a7e0;
          color: white;
          padding: 14px 28px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          margin-top: 24px;
          box-shadow: 0 4px 16px rgba(34, 167, 224, 0.3);
          transition: background 0.3s;
        }

        .mobile-cta:hover {
          background: #178dc8;
        }

        @media (max-width: 900px) {
          .nav-links {
            display: none;
          }
          .cta-btn {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
