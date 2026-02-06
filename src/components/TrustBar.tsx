export default function TrustBar() {
  const stats = [
    {
      number: "50",
      suffix: "+",
      label: "Global Companies",
    },
    {
      number: "100",
      suffix: "+",
      label: "Engineers and Developers",
    },
    {
      number: "35",
      suffix: "+",
      label: "Customers",
    },
    {
      number: "15",
      suffix: "+",
      label: "Presence in Countries",
    },
    {
      number: "10",
      suffix: "+",
      label: "Years in Support",
    },
  ];

  return (
    <section className="trust-bar">
      <div className="container">
        <h2 className="trust-heading">Trusted by</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">
                {stat.number}
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .trust-bar {
          background: linear-gradient(180deg, #0b2f45 0%, #053856 100%);
          padding: 60px 0;
          position: relative;
        }

        .trust-heading {
          text-align: center;
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 48px;
          letter-spacing: -0.01em;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .stat-item {
          text-align: center;
          padding: 20px;
          border-radius: 12px;
          background: rgba(34, 167, 224, 0.05);
          border: 1px solid rgba(34, 167, 224, 0.1);
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          background: rgba(34, 167, 224, 0.1);
          border-color: rgba(34, 167, 224, 0.3);
          transform: translateY(-4px);
        }

        .stat-number {
          font-size: clamp(3rem, 5vw, 4.5rem);
          font-weight: 700;
          color: #22a7e0;
          line-height: 1;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }

        .stat-suffix {
          font-size: 0.7em;
          color: #22a7e0;
          opacity: 0.9;
        }

        .stat-label {
          font-size: clamp(0.9rem, 1.5vw, 1.1rem);
          font-weight: 500;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.4;
          letter-spacing: -0.01em;
        }

        @media (max-width: 768px) {
          .trust-bar {
            padding: 40px 0;
          }

          .trust-heading {
            margin-bottom: 32px;
          }

          .stats-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 24px;
          }

          .stat-item {
            padding: 16px;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}
