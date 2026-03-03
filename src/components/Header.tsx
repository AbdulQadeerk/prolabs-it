"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const serviceColumns = [
  {
    title: "Security",
    items: [
      { href: "/services/managed-soc", label: "Managed SOC Services" },
      { href: "/services/azure-security", label: "Azure Security" },
      { href: "/services/defender-endpoint", label: "Defender for Endpoint" },
      { href: "/services/email-security", label: "Email Security" },
      {
        href: "/services/cloud-app-security",
        label: "Microsoft Cloud App Security",
      },
      { href: "/services/defender-identity", label: "Defender for Identity" },
      { href: "/services/vapt", label: "VAPT" },
      {
        href: "/services/network-security",
        label: "Network and Security Services",
      },
      {
        href: "/services/identity-access-management",
        label: "Identity and Access Management",
      },
    ],
  },
  {
    title: "Consulting Services",
    items: [
      { href: "/services/azure-consulting", label: "Azure Consulting Services" },
      { href: "/services/azure-virtual-desktop", label: "Azure Virtual Desktop" },
      { href: "/services/citrix-consulting", label: "Citrix Consulting" },
      { href: "/services/pki-consulting", label: "PKI Consulting" },
      { href: "/services/active-directory", label: "Active Directory Consulting" },
      { href: "/services/modern-workplace", label: "Modern WorkPlace" },
      { href: "/services/ai-solutions", label: "Professional Labs - AI Solutions" },
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
      {
        href: "/services/cloud-managed-services",
        label: "Cloud Managed Service",
      },
      { href: "/services/it-training", label: "IT Training" },
      { href: "/services/market-research", label: "Market Research" },
      { href: "/services/web-app-dev", label: "Website & App Development" },
      { href: "/services/it-helpdesk", label: "IT Help Desk" },
      {
        href: "/services/crm-services",
        label: "CRM (Customer Relationship Management) Services",
      },
      { href: "/services/erp-services", label: "ERP Services" },
      { href: "/services/ticketing", label: "Ticketing System Services" },
    ],
  },
];

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
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`site-header ${scrolled ? "scrolled" : ""}${mobileOpen ? " mobile-open" : ""}`}
    >
      {/* Top announcement bar */}
      <div className="top-hat">
        <div className="container top-hat-inner">
          <span>
            🚀 Professional Labs — Trusted IT Solutions across 35+ countries
          </span>
          <Link href="/contact" className="top-hat-link">
            Contact Us →
          </Link>
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
              <li
                key={link.href}
                className={link.hasDropdown ? "nav-dropdown-wrapper" : ""}
                ref={link.hasDropdown ? dropdownRef : null}
                onMouseEnter={
                  link.hasDropdown ? () => setServicesOpen(true) : undefined
                }
                onMouseLeave={
                  link.hasDropdown ? () => setServicesOpen(false) : undefined
                }
              >
                {link.hasDropdown ? (
                  <button
                    className="nav-link nav-link-dropdown"
                    onClick={() => setServicesOpen(!servicesOpen)}
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
                ) : link.href.startsWith("/") ? (
                  <Link href={link.href} className="nav-link">
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} className="nav-link">
                    {link.label}
                  </a>
                )}

                {link.hasDropdown && servicesOpen && (
                  <div className="mega-dropdown">
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
                                {item.href.startsWith("/") ? (
                                  <Link
                                    href={item.href}
                                    className="mega-item"
                                    onClick={() => setServicesOpen(false)}
                                  >
                                    {item.label}
                                  </Link>
                                ) : (
                                  <a
                                    href={item.href}
                                    className="mega-item"
                                    onClick={() => setServicesOpen(false)}
                                  >
                                    {item.label}
                                  </a>
                                )}
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
          <div className="mobile-menu-header">
            <Link
              href="/"
              className="logo-link"
              onClick={() => setMobileOpen(false)}
            >
              <Image
                src="/brand/prolabs-logo-dark.png"
                alt="Professional Labs"
                width={140}
                height={36}
                style={{ objectFit: "contain" }}
              />
            </Link>
            <button
              className="mobile-close-btn"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
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
                          {col.items.map((item) =>
                            item.href.startsWith("/") ? (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="mobile-sub-link"
                                onClick={() => {
                                  setMobileOpen(false);
                                  setMobileServicesOpen(false);
                                }}
                              >
                                {item.label}
                              </Link>
                            ) : (
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
                            ),
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.href.startsWith("/") ? (
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
              ),
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
    </header>
  );
}
