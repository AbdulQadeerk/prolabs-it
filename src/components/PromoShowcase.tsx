export default function PromoShowcase() {
  const carImage =
    "https://mlfk3cv5yvnx.i.optimole.com/cb:HA53.300ea/w:1536/h:458/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/2026/01/audi-f1-car-1.png";
  const brandLogo = "/brand/prolabs-mark.svg";

  return (
    <section className="promo-showcase">
      <div className="container">
        <div className="promo-card">
          <div className="promo-top">
            <div className="promo-badges">
              <span className="badge badge-logo">
                <img src={brandLogo} alt="Professional Labs" />
              </span>
              <span className="badge">Audi</span>
              <span className="badge">Revolut</span>
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
          background: #ffffff;
          border-radius: 16px;
          padding: 20px 22px 24px;
          position: relative;
          overflow: hidden;
          border: 1px solid #e6eef2;
          box-shadow: 0 12px 24px rgba(13, 45, 68, 0.06);
        }

        .promo-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, rgba(34, 167, 224, 0.14), transparent 40%),
            linear-gradient(300deg, rgba(51, 185, 238, 0.14), transparent 50%);
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
          padding: 4px 10px;
        }

        .badge-logo img {
          height: 18px;
        }

        .play-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--highlight-green);
          color: #08212f;
          font-size: 0.75rem;
          box-shadow: 0 10px 20px rgba(34, 167, 224, 0.35);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
        }

        .promo-art {
          margin-top: 16px;
          height: 150px;
          border-radius: 12px;
          background: linear-gradient(90deg, #eef5f7 0%, #f8fafc 50%, #eef5f7 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .promo-art::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 120px;
          background: linear-gradient(90deg, rgba(34, 167, 224, 0.22), transparent);
        }

        .promo-art::after {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 120px;
          background: linear-gradient(270deg, rgba(85, 235, 255, 0.2), transparent);
        }

        .car-image {
          width: 88%;
          max-width: 680px;
          height: auto;
          object-fit: contain;
          position: relative;
          z-index: 1;
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
