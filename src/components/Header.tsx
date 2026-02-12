'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top Hat / Announcement Bar */}
      <div className="top-hat">
        <div className="top-hat-inner">
          <div className="top-hat-content">
            <span className="announcement-text">
              Professional Labs — Trusted by 100+ Global Companies since 1997
            </span>
            <a href="#contact" className="announcement-link">
              Get in Touch <span>→</span>
            </a>
          </div>
          <div className="top-hat-actions">
            <a href="tel:+97142866807" className="hat-link">+971 4 286 6807</a>
            <a href="mailto:info@professionallabs.com" className="hat-link">info@professionallabs.com</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="nav-inner">
          <Link href="/" className="logo-link">
            <Image
              src="/brand/prolabs-logo-dark.png"
              alt="Professional Labs"
              width={130}
              height={28}
              priority
              style={{ objectFit: 'contain' }}
            />
          </Link>

          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services <span className="dropdown-arrow">▾</span></a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#tools">Our Tools</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="nav-cta">
            <a href="#contact" className="cta-button">Get a Free Consultation</a>
            <button
              className="mobile-menu-btn"
              aria-label="Menu"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <a href="#home" onClick={() => setMobileOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>
          <a href="#about" onClick={() => setMobileOpen(false)}>About Us</a>
          <a href="#tools" onClick={() => setMobileOpen(false)}>Our Tools</a>
          <a href="#resources" onClick={() => setMobileOpen(false)}>Resources</a>
          <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
          <a href="#contact" className="mobile-cta" onClick={() => setMobileOpen(false)}>Get a Free Consultation</a>
        </div>
      )}

      <style jsx>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 9999;
          background: linear-gradient(180deg, rgba(5, 56, 86, 0.97) 0%, rgba(5, 56, 86, 0.92) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: all 0.3s ease;
        }

        .site-header.scrolled {
          background: rgba(5, 56, 86, 0.98);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        }

        .top-hat {
          background: transparent;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 5px 0;
        }

        .top-hat-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .top-hat-content {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .announcement-text {
          color: rgba(255, 255, 255, 0.85);
          font-size: 14px;
          font-weight: 400;
          line-height: 1.2;
        }

        .announcement-link {
          color: #22a7e0;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s;
          line-height: 1.2;
        }

        .announcement-link:hover {
          color: #4dc4f5;
        }

        .top-hat-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .hat-link {
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          text-decoration: none;
          transition: color 0.2s;
          line-height: 1.2;
        }

        .hat-link:hover {
          color: #22a7e0;
        }

        .main-nav {
          background: transparent;
          padding: 6px 0;
        }

        .nav-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo-link {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 36px;
          list-style: none;
          margin: 0;
          padding: 0;
          flex: 1;
          margin-left: 48px;
        }

        .nav-links li a {
          color: #ffffff;
          font-size: 16.8px;
          font-weight: 500;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 6px 0;
          transition: color 0.2s;
          position: relative;
        }

        .nav-links li a:hover {
          color: #22a7e0;
        }

        .nav-links li a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #22a7e0;
          transition: width 0.3s ease;
        }

        .nav-links li a:hover::after {
          width: 100%;
        }

        .dropdown-arrow {
          font-size: 10px;
          opacity: 0.7;
        }

        .nav-cta {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 15px 21px;
          background-color: #22a7e0;
          color: #ffffff;
          font-size: 16.8px;
          font-weight: 600;
          line-height: 1.2;
          text-decoration: none;
          border-radius: 60px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(34, 167, 224, 0.3);
        }

        .cta-button:hover {
          background-color: #178dc8;
          transform: translateY(-1px);
          box-shadow: 0 8px 30px rgba(34, 167, 224, 0.5);
        }

        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 4px;
          width: 40px;
          height: 40px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 50%;
          cursor: pointer;
        }

        .mobile-menu-btn span {
          width: 18px;
          height: 2px;
          background-color: #ffffff;
          border-radius: 2px;
          transition: all 0.3s;
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          background: rgba(5, 56, 86, 0.98);
          padding: 16px 24px 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .mobile-menu a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          padding: 12px 0;
          font-size: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          transition: color 0.2s;
        }

        .mobile-menu a:hover {
          color: #22a7e0;
        }

        .mobile-cta {
          margin-top: 12px;
          background: #22a7e0 !important;
          color: white !important;
          text-align: center;
          padding: 12px !important;
          border-radius: 60px;
          font-weight: 600;
          border: none !important;
        }

        @media (max-width: 1200px) {
          .nav-links {
            gap: 20px;
            margin-left: 24px;
          }
          .nav-links li a {
            font-size: 15px;
          }
        }

        @media (max-width: 1024px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-btn {
            display: flex;
          }
          .mobile-menu {
            display: flex;
          }
          .top-hat-actions {
            display: none;
          }
          .cta-button {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .top-hat {
            display: none;
          }
          .main-nav {
            padding: 10px 0;
          }
          .nav-inner {
            padding: 0 16px;
          }
        }
      `}</style>
    </header>
  );
}
