export default function UnifiedPlatform() {
  const platformImage =
    "https://mlfk3cv5yvnx.i.optimole.com/cb:HA53.300ea/w:1048/h:934/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/2026/01/endpoint-management-dashboard-2026.png";
  const vetcorLogo = "https://www.ninjaone.com/wp-content/uploads/2025/12/vetcor-logo-blue.svg";

  return (
    <section className="unified-section">
      <div className="container">
        <div className="section-header">
          <span className="badge">NinjaOne Platform</span>
          <h2 className="title">Unified IT Operations Platform</h2>
          <div className="tabs">
            <button className="tab active">Overview</button>
            <button className="tab">Endpoint Management</button>
            <button className="tab">Patch Management</button>
            <button className="tab">RMM</button>
            <button className="tab">Backup</button>
            <button className="tab">Ticketing</button>
          </div>
        </div>

        <div className="platform-grid">
          <div className="platform-showcase">
            <div className="showcase-content">
              <h3>Endpoint Management, Unified</h3>
              <p>
                Unify visibility and control across all devices to reduce complexity, improve efficiency, and
                strengthen security all from a single console.
              </p>
              <div className="feature-list">
                <div className="feature-item">
                  <span className="check">&#10003;</span> <span>Automatic Device Discovery</span>
                </div>
                <div className="feature-item">
                  <span className="check">&#10003;</span> <span>Integrated Remote Control</span>
                </div>
                <div className="feature-item">
                  <span className="check">&#10003;</span> <span>One-Click Remediation</span>
                </div>
              </div>
              <button className="btn btn-primary btn-small">Explore Endpoint Management</button>
            </div>
            <div className="showcase-image">
              <img className="platform-img" src={platformImage} alt="Unified Platform View" />
            </div>
          </div>

          <div className="vetcor-card">
            <div className="vetcor-head">
              <img src={vetcorLogo} alt="Vetcor" />
              <span>15,000 endpoints managed</span>
            </div>
            <p>
              &ldquo;NinjaOne helped us unify endpoint management and deliver a better experience for our teams.&rdquo;
            </p>
            <button className="btn btn-primary btn-small">See the product</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .unified-section {
          padding: 100px 0 110px;
          background-color: var(--bg-secondary);
        }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .badge {
          background-color: rgba(20, 241, 149, 0.15);
          color: #0d8f62;
          padding: 6px 12px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.75rem;
          margin-bottom: 16px;
          display: inline-block;
        }

        .title {
          color: var(--primary-blue);
          font-size: 2.35rem;
          margin-bottom: 24px;
        }

        .tabs {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 18px;
        }

        .tab {
          background: white;
          border: 1px solid #dfe6ee;
          padding: 6px 12px;
          border-radius: 99px; /* Pill shape */
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.72rem;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 1px 2px rgba(0,0,0,0.04);
        }

        .tab:hover, .tab.active {
          background-color: var(--primary-blue);
          color: white;
          border-color: var(--primary-blue);
          box-shadow: 0 8px 14px rgba(9, 52, 79, 0.18);
        }

        .platform-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.6fr;
          gap: 24px;
          align-items: stretch;
        }

        .platform-showcase {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 24px 40px rgba(15, 23, 42, 0.08);
          border: 1px solid #e5ecf2;
        }

        .showcase-content h3 {
          font-size: 1.75rem;
          color: var(--primary-blue);
          margin-bottom: 20px;
        }

        .showcase-content p {
          color: var(--text-secondary);
          margin-bottom: 26px;
          font-size: 0.98rem;
        }

        .feature-list {
          margin-bottom: 30px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          font-weight: 600;
          color: var(--primary-blue);
          font-size: 0.92rem;
        }

        .check {
          color: var(--highlight-green);
          font-weight: 800;
        }

        .platform-img {
          border-radius: 12px;
          box-shadow: 0 12px 30px rgba(9, 52, 79, 0.18);
          width: 100%;
          height: auto;
        }

        .vetcor-card {
          background: white;
          border-radius: 18px;
          padding: 24px;
          border: 1px solid #e5ecf2;
          box-shadow: 0 16px 30px rgba(15, 23, 42, 0.08);
          display: flex;
          flex-direction: column;
          gap: 16px;
          justify-content: space-between;
        }

        .vetcor-head {
          display: flex;
          flex-direction: column;
          gap: 10px;
          color: var(--text-secondary);
          font-size: 0.85rem;
        }

        .vetcor-head img {
          height: 22px;
          width: auto;
        }

        .vetcor-card p {
          font-size: 0.92rem;
          color: var(--text-secondary);
        }

        @media (max-width: 1024px) {
          .platform-grid {
            grid-template-columns: 1fr;
          }

          .platform-showcase {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .feature-list {
            display: inline-block;
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
}
