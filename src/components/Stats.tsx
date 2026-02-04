export default function Stats() {
    const stats = [
        { value: "17,000+", label: "Customers Worldwide" },
        { value: "5M+", label: "Endpoints Managed" },
        { value: "#1", label: "Rated RMM on G2" },
        { value: "98%", label: "CSAT Score" },
    ];

    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <span className="stat-value">{stat.value}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .stats-section {
          background-color: var(--primary-blue);
          padding: 60px 0;
          color: white;
          position: relative;
          z-index: 10;
          margin-top: -40px; /* Overlap with hero potentially, or just below */
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .stats-grid {
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;
          gap: 40px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-value {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--highlight-green);
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 1rem;
          color: #E2E8F0;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
           .stats-grid {
             flex-direction: column;
           }
        }
      `}</style>
        </section>
    );
}
