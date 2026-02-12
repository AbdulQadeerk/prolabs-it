export default function BenefitsSplit() {
  return (
    <section id="about" className="benefits-section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Trusted by IT teams and MSPs worldwide</p>
          <h2>Delivering scalable &amp; innovative IT solutions that empower businesses</h2>
        </div>

        <div className="about-text">
          <p>
            The modern world relies on a complex array of technologies to keep turning. Professional Labs aim is to simplify that complexity. Our expertise helps organizations in accelerating their time to value and achieve significant business impact.
          </p>
          <p>
            Founded in 1997 and headquartered in Dubai, we specialize in simplifying complex problems for our customers with Cyber Security, Cloud Services, and Managed Services.
          </p>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="card-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3>Streamline IT with a powerful, simple platform</h3>
            <p>Automate endpoint management, reduce costs, and improve resiliency across your organization with unified visibility and control.</p>
            <div className="card-stats">
              <div className="cs-item">
                <span className="cs-value">99.9%</span>
                <span className="cs-label">SLA Uptime</span>
              </div>
              <div className="cs-item">
                <span className="cs-value">&lt;15min</span>
                <span className="cs-label">Response Time</span>
              </div>
            </div>
          </div>

          <div className="benefit-card">
            <div className="card-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3>Powerful, profitable, secure, and scalable</h3>
            <p>Deliver exceptional service with automation, insight, and rapid remote access. Our security-first approach protects your organization at every level.</p>
            <div className="card-stats">
              <div className="cs-item">
                <span className="cs-value">24/7</span>
                <span className="cs-label">SOC Monitoring</span>
              </div>
              <div className="cs-item">
                <span className="cs-value">35+</span>
                <span className="cs-label">Countries Served</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .benefits-section {
          background: var(--bg-primary);
          padding: 80px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .eyebrow {
          color: #22a7e0;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.72rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        h2 {
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          color: var(--primary-blue);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.25;
        }

        .about-text {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 48px;
        }

        .about-text p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 12px;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
        }

        .benefit-card {
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 32px;
          background: white;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 50px rgba(15, 23, 42, 0.1);
          border-color: rgba(34, 167, 224, 0.3);
        }

        .card-icon {
          width: 64px;
          height: 64px;
          background: rgba(34, 167, 224, 0.08);
          border: 1px solid rgba(34, 167, 224, 0.15);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #22a7e0;
          margin-bottom: 20px;
        }

        h3 {
          font-size: 1.2rem;
          color: var(--primary-blue);
          margin-bottom: 12px;
          font-weight: 700;
          line-height: 1.3;
        }

        .benefit-card p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .card-stats {
          display: flex;
          gap: 24px;
          padding-top: 20px;
          border-top: 1px solid #e2e8f0;
        }

        .cs-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .cs-value {
          font-size: 1.6rem;
          font-weight: 700;
          color: #22a7e0;
          line-height: 1;
        }

        .cs-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @media (max-width: 900px) {
          .benefits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
