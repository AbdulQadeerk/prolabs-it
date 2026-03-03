"use client";

import Image from "next/image";
import Link from "next/link";
import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s["footer-grid"]}>
          {/* Brand Column */}
          <div className={`${s["footer-col"]} ${s["brand-col"]}`}>
            <Image
              src="/brand/prolabs-logo-dark.png"
              alt="Professional Labs"
              width={130}
              height={32}
              className={s["footer-logo-img"]}
              style={{ objectFit: "contain", marginBottom: "18px" }}
            />
            <p className={s["brand-desc"]}>
              Founded in 1997 and headquartered in Dubai, we specialize in
              simplifying complex problems for our customers with Cyber
              Security, Cloud Services, and Managed Services.
            </p>
            <div className={s["social-links"]}>
              <a href="#" className={s["social-icon"]} aria-label="LinkedIn">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className={s["social-icon"]} aria-label="Twitter">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className={s["social-icon"]} aria-label="Facebook">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className={s["footer-col"]}>
            <h4>Our Services</h4>
            <ul>
              <li>
                <Link href="/services/managed-soc">Managed SOC Service</Link>
              </li>
              <li>
                <a href="/services/cloud-managed-services">
                  Cloud Managed Services
                </a>
              </li>
              <li>
                <Link href="/services/email-security">Email Security</Link>
              </li>
              <li>
                <Link href="/services/azure-security">Azure Security</Link>
              </li>
              <li>
                <Link href="/services/defender-endpoint">
                  Defender for Endpoint
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-app-security">
                  Cloud App Security
                </Link>
              </li>
              <li>
                <Link href="/services/defender-identity">
                  Defender for Identity
                </Link>
              </li>
              <li>
                <Link href="/services/vapt">VAPT</Link>
              </li>
              <li>
                <Link href="/services/network-security">
                  Network &amp; Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className={s["footer-col"]}>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Tools</a>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className={s["footer-col"]}>
            <h4>Contact Us</h4>
            <div className={s["contact-items"]}>
              <div className={s["contact-item"]}>
                <span className={s["contact-label"]}>UAE (HQ)</span>
                <span className={s["contact-value"]}>
                  Office No 1-029, Hilal Bank Building, Al Qusais 2, Dubai
                </span>
                <a href="tel:+97142866807" className={s["contact-phone"]}>
                  +971 4 286 6807
                </a>
              </div>
              <div className={s["contact-item"]}>
                <span className={s["contact-label"]}>Qatar</span>
                <span className={s["contact-value"]}>
                  Regus 111, Jaidah Square, Doha
                </span>
                <a href="tel:+97444267463" className={s["contact-phone"]}>
                  +974 4426 7463
                </a>
              </div>
              <div className={s["contact-item"]}>
                <span className={s["contact-label"]}>USA</span>
                <span className={s["contact-value"]}>
                  16192 Coastal Hwy, Lewes, DE 19958
                </span>
                <a href="tel:+12063509033" className={s["contact-phone"]}>
                  +1 206 350 9033
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className={s["newsletter-row"]}>
          <div className={s["newsletter-text"]}>
            <h4>Subscribe to our newsletter</h4>
            <p>
              Get expert insights, industry news, and practical tips delivered
              to your inbox.
            </p>
          </div>
          <form
            className={s["newsletter-form"]}
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="email" placeholder="Enter your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className={s["footer-bottom"]}>
          <p className={s.copyright}>
            &copy; {new Date().getFullYear()} Professional Labs. All rights
            reserved.
          </p>
          <div className={s["legal-links"]}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Security</a>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className={s["footer-mobile"]}>
          <Image
            src="/brand/prolabs-logo-dark.png"
            alt="Professional Labs"
            width={120}
            height={28}
            style={{ objectFit: "contain", marginBottom: "16px" }}
          />
          <p className={s["brand-desc-mobile"]}>
            Founded in 1997 and headquartered in Dubai, we specialize in Cyber
            Security, Cloud Services, and Managed Services.
          </p>
          <details>
            <summary>Our Services</summary>
            <div className={s["footer-mobile-links"]}>
              <Link href="/services/managed-soc">Managed SOC Service</Link>
              <a href="/cloud-managed-services">Cloud Managed Service</a>
              <Link href="/services/email-security">Email Security</Link>
              <Link href="/services/azure-security">Azure Security</Link>
              <Link href="/services/defender-endpoint">
                Defender for Endpoint
              </Link>
              <Link href="/services/cloud-app-security">
                Cloud App Security
              </Link>
              <Link href="/services/defender-identity">
                Defender for Identity
              </Link>
              <Link href="/services/vapt">VAPT</Link>
              <a href="#">IT Help Desk</a>
            </div>
          </details>
          <details>
            <summary>Company</summary>
            <div className={s["footer-mobile-links"]}>
              <a href="#">About Us</a>
              <a href="#">Our Tools</a>
              <Link href="/blog">Blog</Link>
              <a href="#">Careers</a>
            </div>
          </details>
          <details>
            <summary>Contact</summary>
            <div className={s["footer-mobile-links"]}>
              <a href="tel:+97142866807">UAE: +971 4 286 6807</a>
              <a href="tel:+97444267463">Qatar: +974 4426 7463</a>
              <a href="tel:+12063509033">USA: +1 206 350 9033</a>
              <a href="mailto:info@professionallabs.com">
                info@professionallabs.com
              </a>
            </div>
          </details>
          <div className={s["footer-mobile-actions"]}>
            <Link href="/contact" className="btn btn-primary btn-small">
              Get a Free Consultation
            </Link>
          </div>
          <p className={s["copyright-mobile"]}>
            &copy; {new Date().getFullYear()} Professional Labs. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
