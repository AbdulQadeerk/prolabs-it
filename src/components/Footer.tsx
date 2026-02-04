export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h3 className="footer-logo">NinjaOne</h3>
                        <p className="copyright">&copy; {new Date().getFullYear()} NinjaOne. All rights reserved.</p>
                        <div className="social-links">
                            {/* Social icons would go here */}
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Products</h4>
                        <ul>
                            <li><a href="#">Endpoint Management</a></li>
                            <li><a href="#">RMM</a></li>
                            <li><a href="#">Patch Management</a></li>
                            <li><a href="#">Backup</a></li>
                            <li><a href="#">Service Desk</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Partners</a></li>
                            <li><a href="#">Newsroom</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Webinars</a></li>
                            <li><a href="#">Case Studies</a></li>
                            <li><a href="#">Guides</a></li>
                            <li><a href="#">Community</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="legal-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Security</a>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .footer {
          background-color: #0b2f45;
          color: #a7b6c6;
          padding: 70px 0 36px;
          font-size: 0.85rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 60px;
        }

        .footer-logo {
          color: white;
          font-size: 1.6rem;
          margin-bottom: 20px;
        }

        .footer-col h4 {
          color: white;
          margin-bottom: 20px;
          font-size: 1rem;
        }

        .footer-col ul li {
          margin-bottom: 12px;
        }

        .footer-col a:hover {
          color: var(--highlight-green);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .legal-links {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
        </footer>
    );
}

