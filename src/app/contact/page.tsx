"use client";

import React, { useState } from "react";
import { useScrollReveal } from "@/components/animations";
import "./contact.css";

const offices = [
  {
    city: "Doha",
    country: "Qatar",
    address:
      "Office NO. Regus 111, Register04, Floor NO. 1, Jaidah Square AL Jaidah Square, NO 63, Doha Qatar",
  },
  {
    city: "Dubai",
    country: "UAE",
    address:
      "Office No 1-029, Hilal Bank Building, Near Altawar Center, Al Nadha Street, Al Qusais 2, Dubai",
  },
  {
    city: "Pune",
    country: "India",
    address: "Block 7/B, Jai Jawan, SN-52/2, Wanawdi, Pune - 411040",
  },
  {
    city: "Lewes",
    country: "USA (Mailing Address)",
    address: "16192 Coastal Hwy, Lewes, DE 19958, USA",
  },
];

const phoneNumbers = [
  { country: "Qatar", number: "+974 4426 7463" },
  { country: "UAE", number: "+971 4286 6807" },
  { country: "India", number: "+91 89756 66524" },
  { country: "USA", number: "+1 206 350 9033" },
];

export default function ContactPage() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal();
  const { ref: officeRef, isVisible: officeVisible } = useScrollReveal();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Auto-hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <>
      <main className="contact-page">
        {/* Page Title Section */}
        <section
          ref={headerRef as React.RefObject<HTMLElement>}
          className={`contact-hero ${headerVisible ? "animate-in" : ""}`}
        >
          <div className="container">
            <h1 className="main-title">Contact Professional Labs</h1>
          </div>
        </section>

        {/* Form and Global Numbers Section */}
        <section
          ref={formRef as React.RefObject<HTMLElement>}
          className={`contact-main ${formVisible ? "animate-in" : ""}`}
        >
          <div className="container">
            <div className="split-grid">
              {/* Left Column: Form */}
              <div className="form-container">
                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                >
                  {isSuccess && (
                    <div className="success-banner">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="success-icon">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span>Message sent successfully! We'll get back to you soon.</span>
                    </div>
                  )}
                  <div className="form-grid-2col">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="First and last name*"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Business email*"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input type="tel" placeholder="Phone number*" required />
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder="Company name*" required />
                    </div>
                  </div>

                  <div className="services-interest">
                    <p className="interest-title">How can we help?</p>
                    <p className="interest-subtitle">
                      Feel free to ask a question or simply leave a comment
                    </p>
                    <div className="checkbox-grid">
                      <label>
                        <input type="checkbox" /> Managed IT Services
                      </label>
                      <label>
                        <input type="checkbox" /> Cyber Security
                      </label>
                      <label>
                        <input type="checkbox" /> Cloud Solutions
                      </label>
                      <label>
                        <input type="checkbox" /> Market Research
                      </label>
                      <label>
                        <input type="checkbox" /> Software Development
                      </label>
                      <label>
                        <input type="checkbox" /> IT Consulting
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <textarea placeholder="Message" rows={4} required></textarea>
                  </div>
                  <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting && (
                      <svg className="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="2" x2="12" y2="6"></line>
                        <line x1="12" y1="18" x2="12" y2="22"></line>
                        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                        <line x1="2" y1="12" x2="6" y2="12"></line>
                        <line x1="18" y1="12" x2="22" y2="12"></line>
                        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                      </svg>
                    )}
                    Contact us
                  </button>
                  <p className="form-disclaimer">
                    By continuing, you agree to our Terms of Use, acknowledge
                    that the Privacy Notice applies, and consent to receive
                    calls and emails. Consent is not required to purchase.
                  </p>
                </form>
              </div>

              {/* Right Column: Numbers */}
              <div className="numbers-container">
                <div className="numbers-grid">
                  {phoneNumbers.map((item, idx) => (
                    <div key={idx} className="number-item">
                      <div className="icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <div className="details">
                        <h4>{item.country}</h4>
                        <a href={`tel:${item.number.replace(/\s/g, "")}`}>
                          {item.number}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="email-contact">
                  <h4>Email Support</h4>
                  <a href="mailto:info@prolabsit.com">info@prolabsit.com</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Offices Section */}
        <section
          ref={officeRef as React.RefObject<HTMLElement>}
          className={`offices-section ${officeVisible ? "animate-in" : ""}`}
        >
          <div className="container">
            <h2 className="section-title">
              Our <span>Offices</span>
            </h2>
            <div className="offices-grid">
              {offices.map((office, idx) => (
                <div key={idx} className="office-card">
                  <h3>{office.city}</h3>
                  <p className="brand-name">Professional Labs LLC</p>
                  <p className="office-address">{office.address}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
