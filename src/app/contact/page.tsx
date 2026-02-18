"use client";

import { useScrollReveal } from "@/components/animations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const offices = [
    {
        city: "Doha",
        country: "Qatar",
        address: "Office NO. Regus 111, Register04, Floor NO. 1, Jaidah Square AL Jaidah Square, NO 63, Doha Qatar",
    },
    {
        city: "Dubai",
        country: "UAE",
        address: "Office No 1-029, Hilal Bank Building, Near Altawar Center, Al Nadha Street, Al Qusais 2, Dubai",
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

    return (
        <>
            <Header />
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
                                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                    <div className="form-group">
                                        <input type="text" placeholder="First and last name*" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" placeholder="Business email*" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" placeholder="Phone number*" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Company name*" required />
                                    </div>

                                    <div className="services-interest">
                                        <p className="interest-title">How can we help?</p>
                                        <p className="interest-subtitle">Feel free to ask a question or simply leave a comment</p>
                                        <div className="checkbox-grid">
                                            <label><input type="checkbox" /> Managed IT Services</label>
                                            <label><input type="checkbox" /> Cyber Security</label>
                                            <label><input type="checkbox" /> Cloud Solutions</label>
                                            <label><input type="checkbox" /> Market Research</label>
                                            <label><input type="checkbox" /> Software Development</label>
                                            <label><input type="checkbox" /> IT Consulting</label>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <textarea placeholder="Message" rows={4}></textarea>
                                    </div>
                                    <button type="submit" className="submit-btn">Contact us</button>
                                    <p className="form-disclaimer">
                                        By continuing, you agree to our Terms of Use, acknowledge that the Privacy Notice applies, and consent to receive calls and emails. Consent is not required to purchase.
                                    </p>
                                </form>
                            </div>

                            {/* Right Column: Numbers */}
                            <div className="numbers-container">
                                <div className="numbers-grid">
                                    {phoneNumbers.map((item, idx) => (
                                        <div key={idx} className="number-item">
                                            <div className="icon">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                            </div>
                                            <div className="details">
                                                <h4>{item.country}</h4>
                                                <a href={`tel:${item.number.replace(/\s/g, "")}`}>{item.number}</a>
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
                        <h2 className="section-title">Our <span>Offices</span></h2>
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
            <Footer />

            <style jsx>{`
        .contact-page {
          background: #ffffff;
          color: #082638;
          padding-top: 100px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Hero */
        .contact-hero {
          padding: 80px 0 40px;
        }

        .main-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          color: #082638;
          letter-spacing: -0.04em;
          margin-bottom: 20px;
        }

        /* Layout Grid */
        .split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
          padding-bottom: 100px;
        }

        /* Form Styling */
        .contact-form {
          background: #ffffff;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group input, .form-group textarea {
          width: 100%;
          padding: 14px 20px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          color: #082638;
          transition: border-color 0.2s;
        }

        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: #22a7e0;
        }

        .interest-title {
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 4px;
          color: #082638;
        }

        .interest-subtitle {
          font-size: 0.8rem;
          color: #64748b;
          margin-bottom: 16px;
        }

        .checkbox-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 20px;
        }

        .checkbox-grid label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          cursor: pointer;
          color: #475569;
        }

        .submit-btn {
          background: #22a7e0;
          color: #ffffff;
          border: none;
          padding: 16px;
          border-radius: 8px;
          font-weight: 800;
          font-size: 1.1rem;
          cursor: pointer;
          transition: transform 0.2s, background 0.2s, box-shadow 0.2s;
          margin-top: 10px;
          box-shadow: 0 4px 15px rgba(34, 167, 224, 0.25);
        }

        .submit-btn:hover {
          background: #178dc8;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(34, 167, 224, 0.35);
        }

        .form-disclaimer {
          font-size: 0.75rem;
          color: #64748b;
          line-height: 1.5;
          margin-top: 10px;
        }

        /* Numbers Pillar */
        .numbers-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .number-item {
          display: flex;
          gap: 15px;
        }

        .number-item .icon {
          color: #22a7e0;
          margin-top: 4px;
        }

        .number-item h4 {
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .number-item a {
          font-size: 0.9rem;
          color: #475569;
          text-decoration: none;
          font-weight: 500;
        }

        .email-contact {
          margin-top: 60px;
          padding: 40px;
          background: #f8fafc;
          border-radius: 20px;
          text-align: center;
        }

        .email-contact h4 {
          margin-bottom: 10px;
          color: #64748b;
        }

        .email-contact a {
          font-size: 1.25rem;
          font-weight: 700;
          color: #22a7e0;
          text-decoration: none;
        }

        /* Offices Section */
        .offices-section {
          padding: 100px 0;
          background: #f8fafc;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 60px;
        }

        .section-title span {
          color: #22a7e0;
        }

        .offices-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
        }

        .office-card h3 {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .brand-name {
          font-weight: 700;
          font-size: 0.9rem;
          color: #64748b;
          margin-bottom: 12px;
        }

        .office-address {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #475569;
        }

        /* Animations */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .contact-hero, .contact-main, .offices-section {
          perspective: 1000px;
        }

        .animate-in {
          animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        @media (max-width: 900px) {
          .split-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .numbers-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
      `}</style>
        </>
    );
}
