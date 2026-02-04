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

                <div className="footer-mobile">
                    <details>
                        <summary>Products</summary>
                        <div className="footer-mobile-links">
                            <a href="#">Endpoint Management</a>
                            <a href="#">RMM</a>
                            <a href="#">Patch Management</a>
                            <a href="#">Backup</a>
                            <a href="#">Service Desk</a>
                        </div>
                    </details>
                    <details>
                        <summary>Resources</summary>
                        <div className="footer-mobile-links">
                            <a href="#">Blog</a>
                            <a href="#">Webinars</a>
                            <a href="#">Case Studies</a>
                            <a href="#">Guides</a>
                            <a href="#">Community</a>
                        </div>
                    </details>
                    <details>
                        <summary>Company</summary>
                        <div className="footer-mobile-links">
                            <a href="#">About Us</a>
                            <a href="#">Careers</a>
                            <a href="#">Contact</a>
                            <a href="#">Partners</a>
                            <a href="#">Newsroom</a>
                        </div>
                    </details>
                    <details>
                        <summary>Compliance</summary>
                        <div className="footer-mobile-links">
                            <a href="#">Privacy Notice</a>
                            <a href="#">ISO 27001</a>
                            <a href="#">HIPAA</a>
                            <a href="#">Trust Center</a>
                        </div>
                    </details>
                    <details>
                        <summary>Contact Info</summary>
                        <div className="footer-mobile-links">
                            <a href="tel:+18885428339">North America: +1 888 542-8339</a>
                            <a href="tel:+442038809027">UK: +44 20 3880 9027</a>
                            <a href="tel:+493076758700">Germany: +49 30-76758700</a>
                        </div>
                    </details>

                    <div className="footer-mobile-actions">
                        <button className="btn btn-outline btn-small">Contact Us</button>
                        <button className="btn btn-outline btn-small">Schedule a Call</button>
                        <button className="btn btn-primary btn-small">Start a Free Trial</button>
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

        .footer-mobile {
          display: none;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 24px;
          margin-top: 24px;
        }

        .footer-mobile details {
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 12px 0;
        }

        .footer-mobile summary {
          list-style: none;
          cursor: pointer;
          color: white;
          font-weight: 520;
          font-size: 0.95rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-mobile summary::after {
          content: "+";
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .footer-mobile details[open] summary::after {
          content: "−";
        }

        .footer-mobile-links {
          display: grid;
          gap: 8px;
          padding: 12px 0 6px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.85rem;
        }

        .footer-mobile-actions {
          display: grid;
          gap: 12px;
          margin-top: 18px;
        }

        @media (max-width: 768px) {
          .footer-grid,
          .footer-bottom {
            display: none;
          }

          .footer-mobile {
            display: block;
          }
        }
      `}</style>
        </footer>
    );
}

