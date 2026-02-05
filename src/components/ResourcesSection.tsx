const resources = [
  {
    tag: "Event",
    title: "Professional Labs Roadshow 2026",
    desc: "Join the team for the latest product highlights and roadmap.",
    image:
      "https://mlfk3cv5yvnx.i.optimole.com/cb:HA53.300ea/w:300/h:157/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/2025/09/GettyImages-1222775179-1-2-e1756840057814.jpg",
  },
  {
    tag: "Resource",
    title: "Professional Labs Named #1 in UEM",
    desc: "Read the report on why Professional Labs leads the market.",
    image:
      "https://mlfk3cv5yvnx.i.optimole.com/cb:HA53.300ea/w:300/h:157/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/2025/12/N1-1720-Gartner-Magic-Quadrant-landing-page-social-sharing-thumbnail-1.jpg",
  },
  {
    tag: "Resource",
    title: "Professional Labs Product Tour",
    desc: "See how the platform unifies endpoint management.",
    image:
      "https://mlfk3cv5yvnx.i.optimole.com/cb:HA53.300ea/w:300/h:157/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/2026/01/homepage-repositioning-social-share.jpg",
  },
];

export default function ResourcesSection() {
  return (
    <section className="resources-section">
      <div className="container">
        <div className="section-header">
          <h2>Events, Updates, and Resources</h2>
        </div>
        <div className="resources-grid">
          {resources.map((item) => (
            <article key={item.title} className="resource-card">
              <div className="card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <span className="card-tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href="#" className="card-link">
                Read more &rarr;
              </a>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .resources-section {
          background: var(--bg-primary);
          padding: 80px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        h2 {
          color: var(--primary-blue);
          font-size: 2rem;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 26px;
        }

        .resource-card {
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 18px;
          background: white;
          box-shadow: 0 16px 24px rgba(15, 23, 42, 0.06);
        }

        .card-image {
          height: 140px;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 16px;
          background: #e2e8f0;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .card-tag {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #64748b;
        }

        h3 {
          font-size: 1.05rem;
          margin: 10px 0;
          color: var(--primary-blue);
        }

        p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 14px;
        }

        .card-link {
          color: var(--accent-blue);
          font-weight: 600;
          font-size: 0.85rem;
        }

        @media (max-width: 1024px) {
          .resources-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 720px) {
          .resources-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
