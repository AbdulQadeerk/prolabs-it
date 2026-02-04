export default function Hero() {
  const heroMan =
    "https://mlfk3cv5yvnx.i.optimole.com/cb:HA53.300ea/w:1083/h:1080/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/2025/12/man-laptop.png";
  const heroCardLeft =
    "https://www.ninjaone.com/wp-content/uploads/2026/01/patching-compliance-dashboard.svg";
  const heroCardRight =
    "https://www.ninjaone.com/wp-content/uploads/2026/01/patches-installed-dashboard.svg";

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Unify IT. <br />
            <span className="text-highlight">Simplify work.</span>
          </h1>
          <p className="hero-subtitle">
            One platform to manage every device, protect every endpoint, and support every employee.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Free Trial</button>
            <button className="btn btn-outline">Watch a Demo</button>
          </div>
          <div className="hero-trust">
            <div className="trust-badge">N</div>
            <p>Trusted by 17,000+ customers worldwide</p>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-glow"></div>
          <img className="hero-card hero-card-left" src={heroCardLeft} alt="Patching compliance" />
          <img className="hero-man" src={heroMan} alt="IT professional using NinjaOne" />
          <img className="hero-card hero-card-right" src={heroCardRight} alt="Patches installed" />
        </div>
      </div>

      <style jsx>{`
        .hero {
          background: #0d2d44;
          color: white;
          padding: var(--space-xl) 0 var(--space-2xl);
          min-height: 640px;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0px;
          align-items: center;
          z-index: 2;
          position: relative;
        }

        .hero-content {
          max-width: 560px;
        }

        .hero-title {
          font-size: var(--step-6);
          line-height: 1.08;
          margin-bottom: 20px;
          font-weight: 368;
          letter-spacing: -0.03em;
        }

        .text-highlight {
          color: #ffffff;
        }

        .hero-subtitle {
          font-size: var(--step-1);
          margin-bottom: var(--space-l);
          color: rgba(226, 232, 240, 0.9);
          max-width: 520px;
          font-weight: 320;
          letter-spacing: -0.01em;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          margin-bottom: 22px;
        }

        .hero :global(.btn-outline) {
          border-color: rgba(4, 255, 136, 0.75);
          border-width: 1.5px;
          color: white;
          background: transparent;
        }

        .hero :global(.btn-outline:hover) {
          border-color: rgba(4, 255, 136, 1);
          color: white;
        }

        .hero-trust p {
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 1.4px;
          opacity: 0.85;
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
          display: block;
          min-height: 560px;
          width: 100%;
          overflow: visible;
        }

        .hero-card {
          position: absolute;
          z-index: 2;
          height: auto;
          filter: drop-shadow(0 12px 24px rgba(6, 25, 38, 0.35));
        }

        .hero-card-left {
          left: 0;
          top: 84px;
          width: 325px;
        }

        .hero-card-right {
          right: -7%;
          bottom: 9%;
          width: 348px;
          z-index: 3;
        }

        .hero-image-glow {
          position: absolute;
          inset: -120px -180px -140px -80px;
          background: radial-gradient(circle at 62% 35%, rgba(85, 235, 255, 0.22) 0%, transparent 62%),
            radial-gradient(circle at 55% 65%, rgba(4, 255, 136, 0.1) 0%, transparent 70%);
          filter: blur(40px);
          z-index: 1;
        }

        .hero-man {
          position: absolute;
          z-index: 2;
          right: -28px;
          bottom: -24px;
          width: clamp(520px, 44vw, 700px);
          max-width: none;
          height: auto;
          object-fit: contain;
          object-position: bottom center;
          filter: drop-shadow(0 30px 50px rgba(6, 25, 38, 0.45));
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -55%;
          right: -25%;
          width: 900px;
          height: 900px;
          background: radial-gradient(circle, rgba(4, 255, 136, 0.12) 0%, rgba(0,0,0,0) 70%);
          z-index: 1;
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

          .hero-image-wrapper {
            justify-content: center;
            min-height: 420px;
          }

          .hero-man {
            position: relative;
            right: auto;
            bottom: auto;
            width: min(520px, 100%);
            max-width: 520px;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: var(--step-4);
          }

          .hero-subtitle {
            font-size: var(--step--1);
          }

          .hero-actions {
            width: 100%;
            max-width: 260px;
          }

          .hero :global(.btn) {
            width: 100%;
            justify-content: center;
          }

          .hero-image-wrapper {
            min-height: 320px;
            justify-content: center;
          }

          .hero-man {
            position: relative;
            width: 280px;
            height: auto;
            margin-top: 8px;
            margin-left: 0;
          }

          .hero-card {
            width: 200px;
          }

          .hero-card-left {
            left: 0;
            top: 12px;
          }

          .hero-card-right {
            right: -4%;
            bottom: 6%;
            width: 220px;
          }
        }
      `}</style>
    </section>
  );
}
