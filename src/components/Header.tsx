import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="top-hat">
        <div className="container top-hat-container">
          <div className="top-hat-left">
            <span className="top-hat-message">Professional Labs — Unified IT operations, simplified.</span>
            <a className="top-hat-cta" href="#">
              Learn More <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="top-hat-right">
            <a className="top-hat-link" href="#">
              Explore Demos <span aria-hidden="true">›</span>
            </a>
            <a className="top-hat-link" href="#">
              Contact Us <span aria-hidden="true">›</span>
            </a>
            <button className="lang" aria-label="Language selector">
              EN <span aria-hidden="true">▾</span>
            </button>
            <button className="search" aria-label="Search">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <g
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeMiterlimit="10"
                >
                  <line x1="22" y1="22" x2="15.656" y2="15.656"></line>
                  <circle cx="10" cy="10" r="8"></circle>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="main-bar">
        <div className="container header-container">
          <div className="logo">
            <Link href="/">
              <div className="logo-wrapper">
                <img
                  src="/brand/prolabs-logo.svg"
                  alt="Professional Labs"
                  className="logo-image"
                />
              </div>
            </Link>
          </div>

          <nav className="nav-menu" aria-label="Primary">
            <ul className="nav-list">
              <li>
                <Link href="#" className="nav-link">
                  Products <span className="caret" aria-hidden="true">▾</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="nav-link">
                  Solutions <span className="caret" aria-hidden="true">▾</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="nav-link">
                  For MSPs <span className="caret" aria-hidden="true">▾</span>
                </Link>
              </li>
              <li><Link href="#" className="nav-link">Pricing</Link></li>
              <li>
                <Link href="#" className="nav-link">
                  Partners <span className="caret" aria-hidden="true">▾</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="nav-link">
                  Resources <span className="caret" aria-hidden="true">▾</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="nav-link">
                  Company <span className="caret" aria-hidden="true">▾</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="btn btn-primary btn-small start-btn">Get Started</button>
            <button className="menu-toggle" aria-label="Open menu">
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(18, 56, 71, 0.12);
          z-index: 1000;
        }

        .top-hat {
          background: var(--bg-dark);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.78rem;
          line-height: 1.2;
          color: rgba(255, 255, 255, 0.88);
        }

        .top-hat-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 0;
          gap: 18px;
        }

        .top-hat-left {
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
        }

        .top-hat-message {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .top-hat-cta {
          color: var(--highlight-green);
          font-weight: 520;
          white-space: nowrap;
        }

        .top-hat-right {
          display: flex;
          align-items: center;
          gap: 16px;
          flex: 0 0 auto;
        }

        .top-hat-link {
          color: rgba(255, 255, 255, 0.86);
          white-space: nowrap;
        }

        .top-hat-link:hover {
          color: var(--highlight-green);
        }

        .lang {
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 999px;
          padding: 6px 10px;
          color: rgba(255, 255, 255, 0.88);
        }

        .search {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.18);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.9);
        }

        .main-bar {
          padding: 14px 0;
        }

        .header-container {
          display: flex;
          align-items: center;
          gap: 34px;
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
        }

        .logo-image {
          height: 30px;
          width: auto;
        }

        .nav-menu {
          margin: 0 auto;
        }

        .nav-list {
          display: flex;
          gap: 22px;
          align-items: center;
        }

        .nav-link {
          font-weight: 420;
          color: rgba(18, 56, 71, 0.82);
          font-size: 0.82rem;
          letter-spacing: 0.3px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .nav-link:hover {
          color: var(--accent-blue);
        }

        .caret {
          font-size: 0.72rem;
          opacity: 0.85;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: nowrap;
        }
        
        .start-btn {
           padding: 10px 18px;
           font-size: 0.82rem;
           font-weight: 520;
        }

        .menu-toggle {
          display: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(18, 56, 71, 0.22);
          background: transparent;
          align-items: center;
          justify-content: center;
          gap: 3px;
        }

        .menu-toggle span {
          display: block;
          width: 16px;
          height: 2px;
          background: var(--primary-blue);
          border-radius: 999px;
        }
        
        @media (max-width: 1024px) {
           .nav-menu { display: none; }
           .header-container { justify-content: space-between; }
           .menu-toggle { display: inline-flex; }
           .top-hat-right { display: none; }
        }

        @media (max-width: 768px) {
          .top-hat {
            display: none;
          }

          .start-btn {
            padding: 6px 12px;
            font-size: 0.7rem;
          }

          .menu-toggle {
            width: 28px;
            height: 28px;
          }
        }
      `}</style>
    </header>
  );
}
