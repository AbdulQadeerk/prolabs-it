import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <Image
              src="/brand/prolabs-logo-dark.png"
              alt="Professional Labs"
              width={130}
              height={32}
              className="footer-logo-img"
              style={{ objectFit: 'contain', marginBottom: '18px' }}
            />
            <p className="brand-desc">
              Founded in 1997 and headquartered in Dubai, we specialize in simplifying complex problems for our customers with Cyber Security, Cloud Services, and Managed Services.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#">Managed SOC Service</a></li>
              <li><a href="#">Cloud Managed Services</a></li>
              <li><a href="#">Email Security</a></li>
              <li><a href="#">Azure Security</a></li>
              <li><a href="#">IT Help Desk</a></li>
              <li><a href="#">Network & Security</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Tools</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="contact-items">
              <div className="contact-item">
                <span className="contact-label">UAE (HQ)</span>
                <span className="contact-value">Office No 1-029, Hilal Bank Building, Al Qusais 2, Dubai</span>
                <a href="tel:+97142866807" className="contact-phone">+971 4 286 6807</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Qatar</span>
                <span className="contact-value">Regus 111, Jaidah Square, Doha</span>
                <a href="tel:+97444267463" className="contact-phone">+974 4426 7463</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">USA</span>
                <span className="contact-value">16192 Coastal Hwy, Lewes, DE 19958</span>
                <a href="tel:+12063509033" className="contact-phone">+1 206 350 9033</a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="newsletter-row">
          <div className="newsletter-text">
            <h4>Subscribe to our newsletter</h4>
            <p>Get expert insights, industry news, and practical tips delivered to your inbox.</p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} Professional Labs. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Security</a>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="footer-mobile">
          <Image
            src="/brand/prolabs-logo-dark.png"
            alt="Professional Labs"
            width={120}
            height={28}
            style={{ objectFit: 'contain', marginBottom: '16px' }}
          />
          <p className="brand-desc-mobile">
            Founded in 1997 and headquartered in Dubai, we specialize in Cyber Security, Cloud Services, and Managed Services.
          </p>
          <details>
            <summary>Our Services</summary>
            <div className="footer-mobile-links">
              <a href="#">Managed SOC Service</a>
              <a href="#">Cloud Managed Services</a>
              <a href="#">Email Security</a>
              <a href="#">Azure Security</a>
              <a href="#">IT Help Desk</a>
            </div>
          </details>
          <details>
            <summary>Company</summary>
            <div className="footer-mobile-links">
              <a href="#">About Us</a>
              <a href="#">Our Tools</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
            </div>
          </details>
          <details>
            <summary>Contact</summary>
            <div className="footer-mobile-links">
              <a href="tel:+97142866807">UAE: +971 4 286 6807</a>
              <a href="tel:+97444267463">Qatar: +974 4426 7463</a>
              <a href="tel:+12063509033">USA: +1 206 350 9033</a>
              <a href="mailto:info@professionallabs.com">info@professionallabs.com</a>
            </div>
          </details>
          <div className="footer-mobile-actions">
            <a href="#contact" className="btn btn-primary btn-small">Get a Free Consultation</a>
          </div>
          <p className="copyright-mobile">&copy; {new Date().getFullYear()} Professional Labs. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #0b2f45 0%, #082638 100%);
          color: #a7b6c6;
          padding: 70px 0 0;
          font-size: 0.85rem;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #22a7e0, transparent);
          opacity: 0.5;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.3fr;
          gap: 40px;
          margin-bottom: 48px;
        }

        .brand-desc {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.85rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .social-links {
          display: flex;
          gap: 10px;
        }

        .social-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: #22a7e0;
          border-color: #22a7e0;
          color: white;
          transform: translateY(-2px);
        }

        .footer-col h4 {
          color: white;
          margin-bottom: 20px;
          font-size: 1rem;
          font-weight: 700;
        }

        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-col ul li {
          margin-bottom: 12px;
        }

        .footer-col a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: color 0.2s;
          font-size: 0.85rem;
        }

        .footer-col a:hover {
          color: #22a7e0;
        }

        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .contact-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #22a7e0;
          font-weight: 700;
          margin-bottom: 2px;
        }

        .contact-value {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.8rem;
          line-height: 1.4;
        }

        .contact-phone {
          color: rgba(255, 255, 255, 0.8) !important;
          font-weight: 600;
          font-size: 0.85rem !important;
        }

        .contact-phone:hover {
          color: #22a7e0 !important;
        }

        /* Newsletter */
        .newsletter-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          padding: 32px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          margin-bottom: 32px;
        }

        .newsletter-text h4 {
          color: white;
          font-size: 1rem;
          margin-bottom: 4px;
        }

        .newsletter-text p {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.85rem;
        }

        .newsletter-form {
          display: flex;
          flex-shrink: 0;
        }

        .newsletter-form input {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: white;
          padding: 12px 18px;
          border-radius: 50px 0 0 50px;
          font-size: 0.85rem;
          outline: none;
          width: 260px;
          transition: all 0.3s;
        }

        .newsletter-form input:focus {
          border-color: #22a7e0;
          background: rgba(255, 255, 255, 0.1);
        }

        .newsletter-form input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .newsletter-form button {
          background: #22a7e0;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 0 50px 50px 0;
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          transition: background 0.3s;
        }

        .newsletter-form button:hover {
          background: #178dc8;
        }

        /* Bottom */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 0;
        }

        .copyright {
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.8rem;
        }

        .legal-links {
          display: flex;
          gap: 24px;
        }

        .legal-links a {
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          font-size: 0.8rem;
          transition: color 0.2s;
        }

        .legal-links a:hover {
          color: #22a7e0;
        }

        /* Mobile */
        .footer-mobile {
          display: none;
        }

        .brand-desc-mobile {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.85rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .footer-mobile details {
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 14px 0;
        }

        .footer-mobile summary {
          list-style: none;
          cursor: pointer;
          color: white;
          font-weight: 600;
          font-size: 0.95rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-mobile summary::after {
          content: "+";
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .footer-mobile details[open] summary::after {
          content: "−";
        }

        .footer-mobile-links {
          display: grid;
          gap: 10px;
          padding: 14px 0 6px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.85rem;
        }

        .footer-mobile-links a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
        }

        .footer-mobile-actions {
          margin-top: 20px;
          margin-bottom: 20px;
        }

        .footer-mobile-actions a {
          display: block;
          text-align: center;
          text-decoration: none;
        }

        .copyright-mobile {
          text-align: center;
          color: rgba(255, 255, 255, 0.3);
          font-size: 0.75rem;
          padding: 16px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
          .newsletter-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .newsletter-form {
            width: 100%;
          }
          .newsletter-form input {
            flex: 1;
            width: auto;
          }
        }

        @media (max-width: 768px) {
          .footer-grid,
          .footer-bottom,
          .newsletter-row {
            display: none;
          }
          .footer-mobile {
            display: block;
          }
          .footer {
            padding: 40px 0 0;
          }
        }
      `}</style>
    </footer>
  );
}
