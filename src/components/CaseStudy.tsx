export default function CaseStudy() {
  const videoThumb =
    "https://mlfk3cv5yvnx.i.optimole.com/cb:HA53.300ea/w:768/h:398/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/2025/04/Flash-Parking-Customer-Story.jpg";
  const logos = [
    "https://www.ninjaone.com/wp-content/uploads/2025/12/kansas-city.svg",
    "https://www.ninjaone.com/wp-content/uploads/2025/12/flash-logo-blue.svg",
    "https://www.ninjaone.com/wp-content/uploads/2025/12/carahsoft.svg",
    "https://www.ninjaone.com/wp-content/uploads/2025/12/patra.svg",
  ];

  return (
    <section className="case-study">
      <div className="container case-grid">
        <div className="case-text">
          <h3>Kansas City cuts IT costs and accelerates patching</h3>
          <p>
            Kansas City unified endpoint management to reduce costs and dramatically accelerate patching outcomes.
          </p>
          <div className="stat-grid">
            <div className="stat">
              <span className="stat-value">200K+</span>
              <span className="stat-label">annual savings</span>
            </div>
            <div className="stat">
              <span className="stat-value">72</span>
              <span className="stat-label">hours to minutes patch cycle reduction</span>
            </div>
          </div>
          <div className="case-logos">
            {logos.map((logo) => (
              <img key={logo} src={logo} alt="Partner logo" />
            ))}
          </div>
        </div>
        <div className="case-media">
          <div className="video-frame">
            <img src={videoThumb} alt="Customer story" />
            <span className="play">&#9654;</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .case-study {
          background: var(--bg-primary);
          padding: 80px 0;
        }

        .case-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 48px;
          align-items: center;
        }

        h3 {
          font-size: 1.5rem;
          color: var(--primary-blue);
          margin-bottom: 14px;
        }

        p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 22px;
        }

        .stat-grid {
          display: flex;
          gap: 26px;
          margin-bottom: 18px;
        }

        .stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .stat-value {
          color: var(--highlight-green);
          font-size: 1.6rem;
          font-weight: 800;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .case-logos {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          align-items: center;
        }

        .case-logos img {
          height: 20px;
          opacity: 0.7;
        }

        .video-frame {
          background: linear-gradient(135deg, #dfe7ef 0%, #cbd5e1 100%);
          border-radius: 18px;
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          border: 1px solid #e2e8f0;
        }

        .video-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .play {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: var(--highlight-green);
          color: #062a3b;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          box-shadow: 0 14px 26px rgba(20, 241, 149, 0.35);
          position: relative;
          z-index: 1;
        }

        @media (max-width: 900px) {
          .case-grid {
            grid-template-columns: 1fr;
          }

          .video-frame {
            height: 220px;
          }
        }
      `}</style>
    </section>
  );
}
