export default function BenefitsSplit() {
  const leftImg =
    "https://mlfk3cv5yvnx.i.optimole.com/cb:HA53.300ea/w:800/h:468/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/2026/01/ninjaone-dashboard-it.png";
  const rightImg =
    "https://mlfk3cv5yvnx.i.optimole.com/cb:HA53.300ea/w:800/h:713/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/2025/12/patching-dashboard.png";

  return (
    <section className="benefits-section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Trusted by IT teams and MSPs worldwide</p>
          <h2>Streamline IT and scale with confidence</h2>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Streamline IT with a powerful, simple platform</h3>
            <p>Automate endpoint management, reduce costs, and improve resiliency across your organization.</p>
            <div className="card-media">
              <img src={leftImg} alt="NinjaOne dashboard" />
            </div>
          </div>

          <div className="benefit-card">
            <h3>Powerful, profitable, secure, and scalable</h3>
            <p>Deliver exceptional service with automation, insight, and rapid remote access.</p>
            <div className="card-media">
              <img src={rightImg} alt="Patch management dashboard" />
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
          margin-bottom: 40px;
        }

        .eyebrow {
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1.4px;
          font-size: 0.72rem;
          margin-bottom: 12px;
        }

        h2 {
          font-size: 2rem;
          color: var(--primary-blue);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
        }

        .benefit-card {
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 26px;
          background: white;
          box-shadow: 0 18px 30px rgba(15, 23, 42, 0.06);
        }

        h3 {
          font-size: 1.15rem;
          color: var(--primary-blue);
          margin-bottom: 12px;
        }

        p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 18px;
        }

        .card-media {
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          padding: 12px;
        }

        .card-media img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 8px;
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
