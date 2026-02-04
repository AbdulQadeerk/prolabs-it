export default function LeadershipBand() {
  const logos = [
    "https://www.ninjaone.com/wp-content/uploads/2025/12/g2-leader-winter26.svg",
    "https://mlfk3cv5yvnx.i.optimole.com/cb:HA53.300ea/w:219/h:208/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/2025/02/Canalys.png",
    "https://www.ninjaone.com/wp-content/uploads/2025/12/EndpointManagement_Leader_Enterprise_Leader.svg",
    "https://www.ninjaone.com/wp-content/uploads/2025/12/g2-best-usability-enterprise-winter26.svg",
  ];

  return (
    <section className="leadership-band">
      <div className="container">
        <div className="leadership-card">
          <div className="leadership-content">
            <p className="eyebrow">Canalys RMM & PSA Leadership Matrix</p>
            <h3>IDC names NinjaOne a leader in Unified Endpoint Management Tools for 2025 - 2026</h3>
            <button className="btn btn-outline btn-small">Read the report</button>
          </div>
          <div className="leadership-logos">
            {logos.map((logo, index) => (
              <img key={index} src={logo} alt="Leadership badge" />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .leadership-band {
          background: #0a2f45;
          padding: 46px 0 56px;
        }

        .leadership-card {
          border-radius: 18px;
          padding: 36px;
          background: linear-gradient(135deg, #0c3248 0%, #083149 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
          overflow: hidden;
        }

        .leadership-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
          background-size: 120px 120px;
          opacity: 0.35;
          pointer-events: none;
        }

        .leadership-content {
          position: relative;
          z-index: 1;
          max-width: 640px;
        }

        .eyebrow {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.75rem;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        h3 {
          color: white;
          font-size: 1.6rem;
          line-height: 1.3;
          margin-bottom: 18px;
        }

        .leadership-logos {
          position: relative;
          z-index: 1;
          display: flex;
          gap: 20px;
          margin-top: 24px;
          align-items: center;
          flex-wrap: wrap;
        }

        .leadership-logos img {
          height: 36px;
          filter: brightness(0) invert(1);
          opacity: 0.85;
        }

        .leadership-band :global(.btn-outline) {
          border-color: rgba(255, 255, 255, 0.5);
          color: white;
        }

        @media (max-width: 768px) {
          .leadership-card {
            padding: 28px;
          }

          h3 {
            font-size: 1.35rem;
          }

          .leadership-logos {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  );
}
