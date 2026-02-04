export default function PromoShowcase() {
  const carImage =
    "https://mlfk3cv5yvnx.i.optimole.com/cb:HA53.300ea/w:1536/h:458/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/2026/01/audi-f1-car-1.png";
  const f1Logo = "https://www.ninjaone.com/wp-content/uploads/2026/01/ninjaone-f1-logo.svg";

  return (
    <section className="promo-showcase">
      <div className="container">
        <div className="promo-card">
          <div className="promo-top">
            <div className="promo-badges">
              <img className="badge-logo" src={f1Logo} alt="NinjaOne F1" />
              <span className="badge">Audi</span>
              <span className="badge">Revolt</span>
            </div>
            <button className="play-btn" aria-label="Play video">
              &#9654;
            </button>
          </div>
          <div className="promo-art">
            <img className="car-image" src={carImage} alt="Racing car" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .promo-showcase {
          background: var(--bg-primary);
          padding: 34px 0 60px;
        }

        .promo-card {
          background: #eef2f6;
          border-radius: 18px;
          padding: 22px 28px 30px;
          position: relative;
          overflow: hidden;
          border: 1px solid #e2e8f0;
        }

        .promo-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, rgba(20, 241, 149, 0.2), transparent 40%),
            linear-gradient(300deg, rgba(125, 185, 255, 0.2), transparent 50%);
          opacity: 0.5;
          pointer-events: none;
        }

        .promo-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }

        .promo-badges {
          display: flex;
          gap: 10px;
        }

        .badge {
          background: white;
          color: #0a2f45;
          border-radius: 999px;
          padding: 6px 12px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.4px;
          text-transform: uppercase;
        }

        .badge-logo {
          height: 24px;
          filter: brightness(0) invert(1);
        }

        .play-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--highlight-green);
          color: #08212f;
          font-size: 0.75rem;
          box-shadow: 0 10px 20px rgba(20, 241, 149, 0.35);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
        }

        .promo-art {
          margin-top: 18px;
          height: 170px;
          border-radius: 14px;
          background: linear-gradient(90deg, #f8fafc 0%, #e2e8f0 55%, #f8fafc 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
        }

        .car-image {
          width: 90%;
          max-width: 720px;
          height: auto;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .promo-card {
            padding: 18px;
          }

          .promo-art {
            height: 140px;
          }
        }
      `}</style>
    </section>
  );
}
