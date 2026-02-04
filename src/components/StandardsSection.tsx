export default function StandardsSection() {
  const badges = [
    "https://mlfk3cv5yvnx.i.optimole.com/cb:HA53.300ea/w:auto/h:auto/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/2025/10/soc2_badge.ac7ad1ad.webp",
    "https://www.ninjaone.com/wp-content/uploads/2025/12/iso-icon.svg",
    "https://www.ninjaone.com/wp-content/uploads/2025/12/fedramp-logo.svg",
    "https://www.ninjaone.com/wp-content/uploads/2025/12/fcc-logo-blue.svg",
  ];

  return (
    <section className="standards-section">
      <div className="container">
        <h2>Built for IT. Backed by the world's strictest standards.</h2>
        <div className="badge-row">
          {badges.map((badge) => (
            <div key={badge} className="badge-circle">
              <img src={badge} alt="Compliance badge" />
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

        h2 {
          color: var(--primary-blue);
          font-size: 1.9rem;
          margin-bottom: 28px;
        }

        .badge-row {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .badge-circle {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          border: 2px solid #0b2f45;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
        }

        .badge-circle img {
          max-width: 70px;
          max-height: 70px;
        }
      `}</style>
    </section>
  );
}
