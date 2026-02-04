export default function Hero() {
  const heroMan =
    "https://mlfk3cv5yvnx.i.optimole.com/cb:HA53.300ea/w:1083/h:1080/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/2025/12/man-laptop.png";
  const heroDashboard =
    "https://mlfk3cv5yvnx.i.optimole.com/cb:HA53.300ea/w:800/h:468/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/2026/01/ninjaone-dashboard-it.png";
  const heroChevron =
    "https://www.ninjaone.com/wp-content/uploads/2025/12/home-hero-chevron.svg";

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Unify IT. <br />
            <span className="text-highlight">Simplify work.</span>
          </h1>
          <p className="hero-subtitle">
            Automate endpoint management, patching, and ticketing with the world's highest-rated IT management platform.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Start a Free Trial</button>
            <button className="btn btn-outline">Watch a Demo</button>
          </div>
          <div className="hero-trust">
            <div className="trust-badge">N</div>
            <p>Trusted by 17,000+ customers worldwide</p>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-glow"></div>
          <img className="hero-man" src={heroMan} alt="IT professional using NinjaOne" />
          <img className="hero-chevron" src={heroChevron} alt="" aria-hidden="true" />
          <div className="hero-float">
            <img className="hero-float-img" src={heroDashboard} alt="NinjaOne dashboard" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, #0b3248 0%, #0a3a55 45%, #082c41 100%);
          color: white;
          padding: 84px 0 96px;
          min-height: 72vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.02fr 0.98fr;
          gap: 48px;
          align-items: center;
          z-index: 2;
          position: relative;
        }

        .hero-title {
          font-size: 3.8rem;
          line-height: 1.05;
          margin-bottom: 20px;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .text-highlight {
          color: var(--highlight-green);
        }

        .hero-subtitle {
          font-size: 1.02rem;
          margin-bottom: 28px;
          color: rgba(226, 232, 240, 0.85);
          max-width: 480px;
        }

        .hero-actions {
          display: flex;
          gap: 12px;
          margin-bottom: 28px;
        }

        .hero :global(.btn) {
          padding: 10px 18px;
          font-size: 0.85rem;
        }

        .hero :global(.btn-outline) {
          border-color: rgba(255, 255, 255, 0.4);
          color: white;
        }

        .hero :global(.btn-outline:hover) {
          border-color: rgba(255, 255, 255, 0.7);
          color: white;
        }

        .hero-trust p {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          opacity: 0.8;
        }

        .hero-trust {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .trust-badge {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #0a1d2b;
          border: 1px solid rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.65rem;
          color: var(--highlight-green);
        }

        .hero-image-wrapper {
          position: relative;
          perspective: 1000px;
          display: flex;
          justify-content: flex-end;
          justify-self: end;
          min-height: 360px;
        }

        .hero-image-glow {
          position: absolute;
          inset: -20px -20px -20px -40px;
          background: radial-gradient(circle at 30% 30%, rgba(20, 241, 149, 0.18) 0%, transparent 60%),
            radial-gradient(circle at 70% 10%, rgba(125, 185, 255, 0.18) 0%, transparent 50%);
          filter: blur(14px);
          z-index: 1;
        }

        .hero-man {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 420px;
          height: auto;
          filter: drop-shadow(0 30px 50px rgba(6, 25, 38, 0.45));
        }

        .hero-chevron {
          position: absolute;
          right: 20px;
          bottom: 0;
          width: 120px;
          opacity: 0.9;
          z-index: 1;
        }

        .hero-float {
          position: absolute;
          right: 0;
          bottom: 18px;
          width: 220px;
          background: rgba(9, 24, 36, 0.8);
          border-radius: 12px;
          padding: 8px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 18px 30px rgba(5, 21, 33, 0.5);
          z-index: 3;
        }

        .hero-float-img {
          width: 100%;
          height: auto;
          border-radius: 8px;
          display: block;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(20, 241, 149, 0.1) 0%, rgba(0,0,0,0) 70%);
          z-index: 1;
        }

        .hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: linear-gradient(0deg, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 140px 140px;
          opacity: 0.18;
          pointer-events: none;
          z-index: 0;
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-content {
            margin-bottom: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-actions {
            flex-direction: column;
          }

          .hero-trust {
            justify-content: center;
          }

          .hero-image {
            transform: none;
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
