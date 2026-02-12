'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="site-header">
      {/* Top Hat / Announcement Bar */}
      <div className="top-hat">
        <div className="top-hat-inner">
          <div className="top-hat-content">
            <span className="announcement-text">
              Professional Labs is a Leader in the 2026 Gartner® Magic Quadrant™
            </span>
            <a href="#" className="announcement-link">
              Learn More <span>→</span>
            </a>
          </div>
          <div className="top-hat-actions">
            <a href="#" className="hat-link">Explore Demos ›</a>
            <a href="#" className="hat-link">Contact Us ›</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="nav-inner">
          {/* Logo */}
          <Link href="/" className="logo-link">
            <Image
              src="/brand/prolabs-logo-dark.png"
              alt="Professional Labs"
              width={120}
              height={24}
              priority
              style={{ objectFit: 'contain' }}
            />
          </Link>

          {/* Navigation Links */}
          <ul className="nav-links">
            <li>
              <a href="#">Products <span className="dropdown-arrow">▾</span></a>
            </li>
            <li>
              <a href="#">Solutions <span className="dropdown-arrow">▾</span></a>
            </li>
            <li>
              <a href="#">For MSPs</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Partners <span className="dropdown-arrow">▾</span></a>
            </li>
            <li>
              <a href="#">Resources <span className="dropdown-arrow">▾</span></a>
            </li>
            <li>
              <a href="#">Company <span className="dropdown-arrow">▾</span></a>
            </li>
          </ul>

          {/* CTA Button */}
          <div className="nav-cta">
            <a href="#" className="cta-button">Try it now, FREE!</a>
            <button className="mobile-menu-btn" aria-label="Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <style jsx>{`
        /* ============================================
           HEADER STYLES - NinjaOne Exact Match
           ============================================ */
        
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 9999;
          background: linear-gradient(180deg, rgba(5, 56, 86, 0.95) 0%, rgba(5, 56, 86, 0.85) 100%);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        /* ---- TOP HAT / ANNOUNCEMENT BAR ---- */
        .top-hat {
          background: transparent;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 4px 0;
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
          color: rgba(255, 255, 255, 0.9);
          font-size: 12px;
          font-weight: 400;
          font-family: 'Geologica', 'Montserrat', 'Helvetica', sans-serif;
        }

        .announcement-link {
          color: #22a7e0;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s;
          font-family: 'Geologica', 'Montserrat', 'Helvetica', sans-serif;
        }

        .announcement-link:hover {
          color: #4dc4f5;
        }

        .top-hat-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .hat-link {
          color: rgba(255, 255, 255, 0.85);
          font-size: 12px;
          text-decoration: none;
          transition: color 0.2s;
          font-family: 'Geologica', 'Montserrat', 'Helvetica', sans-serif;
        }

        .hat-link:hover {
          color: #22a7e0;
        }

        .lang-selector {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 4px 10px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 11px;
          cursor: pointer;
          transition: border-color 0.2s;
        }

        .lang-selector:hover {
          border-color: rgba(255, 255, 255, 0.5);
        }

        .search-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          color: rgba(255, 255, 255, 0.9);
          cursor: pointer;
          transition: border-color 0.2s;
        }

        .search-icon:hover {
          border-color: rgba(255, 255, 255, 0.5);
        }

        /* ---- MAIN NAVIGATION ---- */
        .main-nav {
          background: transparent;
          padding: 8px 0;
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

        /* ---- NAV LINKS ---- */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 40px;
          list-style: none;
          margin: 0;
          padding: 0;
          flex: 1;
          margin-left: 50px;
        }

        .nav-links li a {
          color: #ffffff;
          font-size: 18px;
          font-weight: 400;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 6px 0;
          transition: color 0.2s;
          font-family: 'Geologica', 'Montserrat', 'Helvetica', sans-serif;
        }

        .nav-links li a:hover {
          color: #22a7e0;
        }

        .dropdown-arrow {
          font-size: 10px;
          opacity: 0.7;
        }

        /* ---- CTA SECTION ---- */
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
          padding: 10px 18px;
          background-color: #22a7e0;
          color: #ffffff;
          font-size: 16.8px;
          font-weight: 500;
          text-decoration: none;
          border-radius: 60px;
          transition: background-color 0.2s, transform 0.2s;
          font-family: 'Geologica', 'Montserrat', 'Helvetica', sans-serif;
        }

        .cta-button:hover {
          background-color: #1a8fc4;
          transform: translateY(-1px);
        }

        /* ---- MOBILE MENU BUTTON ---- */
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
        }

        /* ---- RESPONSIVE STYLES ---- */
        @media (max-width: 1200px) {
          .nav-links {
            gap: 18px;
            margin-left: 30px;
          }
          
          .nav-links li a {
            font-size: 14px;
          }
        }

        @media (max-width: 1024px) {
          .nav-links {
            display: none;
          }
          
          .mobile-menu-btn {
            display: flex;
          }
          
          .top-hat-actions {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .top-hat {
            display: none;
          }
          
          .main-nav {
            padding: 12px 0;
          }
          
          .nav-inner {
            padding: 0 16px;
          }
          
          .cta-button {
            padding: 10px 18px;
            font-size: 13px;
          }
        }
      `}</style>
    </header>
  );
}
