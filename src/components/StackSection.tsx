export default function StackSection() {
  const stackGraphic = "https://www.ninjaone.com/wp-content/uploads/2025/12/featured-integrations.svg";

  return (
    <section className="stack-section">
      <div className="container stack-grid">
        <div className="stack-content">
          <h3>Built for your IT stack</h3>
          <p>
            Connect and automate your entire stack with integrations that fit modern IT operations.
          </p>
          <div className="stack-logos">
            <span>SentinelOne</span>
            <span>CrowdStrike</span>
            <span>ServiceNow</span>
            <span>HaloPSA</span>
          </div>
        </div>
        <div className="stack-graphic">
          <img src={stackGraphic} alt="Integration partners" />
        </div>
      </div>

      <style jsx>{`
        .stack-section {
          background: var(--bg-primary);
          padding: 80px 0;
        }

        .stack-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 40px;
        }

        h3 {
          font-size: 1.6rem;
          color: var(--primary-blue);
          margin-bottom: 14px;
        }

        p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 18px;
        }

        .stack-logos {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: #94a3b8;
        }

        .stack-graphic {
          display: flex;
          justify-content: center;
        }

        .stack-graphic img {
          width: 280px;
          height: auto;
        }

        @media (max-width: 900px) {
          .stack-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .stack-logos {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
