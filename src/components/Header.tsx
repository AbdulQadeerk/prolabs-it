import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link href="/">
            <div className="logo-wrapper">
              <img
                src="https://www.ninjaone.com/wp-content/uploads/2023/04/primary-logo-block-2023.svg"
                alt="NinjaOne"
                className="logo-image"
              />
            </div>
          </Link>
        </div>

        <nav className="nav-menu">
          <ul className="nav-list">
            <li><Link href="#" className="nav-link">Products</Link></li>
            <li><Link href="#" className="nav-link">Solutions</Link></li>
            <li><Link href="#" className="nav-link">Pricing</Link></li>
            <li><Link href="#" className="nav-link">Customers</Link></li>
            <li><Link href="#" className="nav-link">Resources</Link></li>
            <li><Link href="#" className="nav-link">Company</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <Link href="#" className="nav-link login-link">Log In</Link>
          <button className="btn btn-primary btn-small start-btn">Start a Free Trial</button>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          background: #0b3248;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          z-index: 1000;
          padding: 12px 0;
        }

        .header-container {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
        }

        .logo-image {
          height: 26px;
          width: auto;
          filter: brightness(0) invert(1);
        }

        .nav-menu {
          margin: 0 auto;
        }

        .nav-list {
          display: flex;
          gap: 24px;
        }

        .nav-link {
          font-weight: 600;
          color: rgba(255, 255, 255, 0.82);
          font-size: 0.86rem;
          letter-spacing: 0.3px;
        }

        .nav-link:hover {
          color: var(--highlight-green);
        }
        
        .login-link {
           font-weight: 600;
           color: rgba(255, 255, 255, 0.78);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        
        .start-btn {
           padding: 8px 16px;
           font-size: 0.82rem;
        }
        
        @media (max-width: 1024px) {
           .nav-menu { display: none; }
           .header-container { justify-content: space-between; }
        }
      `}</style>
    </header>
  );
}
