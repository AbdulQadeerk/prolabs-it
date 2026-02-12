export default function StandardsSection() {
  const certifications = [
    { name: "ISO 27001", desc: "Information Security" },
    { name: "SOC 2", desc: "Type II Compliance" },
    { name: "GDPR", desc: "Data Protection" },
    { name: "HIPAA", desc: "Healthcare Compliance" },
  ];

  return (
    <section className="standards-section">
      <div className="container">
        <p className="eyebrow">Compliance & Security</p>
        <h2>Built for IT. Backed by the world&apos;s strictest standards.</h2>
        <p className="standards-desc">
          We adhere to the highest industry standards to ensure your data and systems are protected.
        </p>
        <div className="badge-row">
          {certifications.map((cert, index) => (
            <div key={index} className="badge-card">
              <div className="badge-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <span className="badge-name">{cert.name}</span>
              <span className="badge-desc">{cert.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .standards-section {
          background: var(--bg-primary);
          padding: 80px 0 90px;
          text-align: center;
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
          color: var(--primary-blue);
          font-size: clamp(1.6rem, 2.5vw, 2rem);
          margin-bottom: 12px;
        }

        .standards-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 40px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .badge-row {
          display: flex;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .badge-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 28px 24px;
          min-width: 160px;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          background: white;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
          transition: all 0.3s ease;
        }

        .badge-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(34, 167, 224, 0.1);
          border-color: rgba(34, 167, 224, 0.3);
        }

        .badge-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(34, 167, 224, 0.08);
          border: 1px solid rgba(34, 167, 224, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #22a7e0;
          margin-bottom: 4px;
        }

        .badge-name {
          font-size: 1rem;
          font-weight: 700;
          color: var(--primary-blue);
        }

        .badge-desc {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .badge-row {
            gap: 16px;
          }
          .badge-card {
            min-width: 140px;
            padding: 22px 18px;
          }
        }
      `}</style>
    </section>
  );
}
