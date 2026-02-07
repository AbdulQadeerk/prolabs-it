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
            Professional Managed Security and IT Support Services Provider
          </h1>
          <p className="hero-subtitle">
            Professional Labs aim is to simplify that complexity.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Free Trial</button>
            <button className="btn btn-outline">Watch a Demo</button>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-glow"></div>
          <img className="hero-card hero-card-left" src={heroCardLeft} alt="Patching compliance" />
          <img className="hero-man" src={heroMan} alt="IT professional using Professional Labs" />
          <img className="hero-card hero-card-right" src={heroCardRight} alt="Patches installed" />
        </div>
      </div>

      <style jsx>{`
        .hero {
          background: #053856;
          color: white;
          padding: 0;
          min-height: auto;
          height: calc(100vh - 5px);
          max-height: calc(100vh - 5px);
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: center;
          z-index: 2;
          position: relative;
          padding: 75px 0 0;
          height: 100%;
        }

        .hero-content {
          max-width: 600px;
        }

        .hero-title {
          font-size: clamp(2.5rem, 4.625vw, 4.625rem);
          line-height: 1.1;
          margin-bottom: 12px;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #ffffff;
          font-family: 'Geologica', 'Montserrat', 'Helvetica', sans-serif;
        }

        .text-highlight {
          color: #ffffff;
        }

        .hero-subtitle {
          font-size: clamp(1.125rem, 1.5vw, 1.5rem);
          margin-bottom: 20px;
          color: #ffffff;
          max-width: 500px;
          font-weight: 400;
          letter-spacing: -0.01em;
          line-height: 1.45;
          font-family: 'Geologica', 'Montserrat', 'Helvetica', sans-serif;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          margin-bottom: 0;
        }

        .hero :global(.btn) {
          padding: 12px 24px;
          font-size: 1.25rem;
          font-weight: 600;
          border-radius: 50px;
          text-transform: capitalize;
          letter-spacing: -0.01em;
          font-family: 'Geologica', 'Montserrat', 'Helvetica', sans-serif;
        }

        .hero :global(.btn-primary) {
          background: #22a7e0;
          color: #ffffff;
          border: none;
          font-weight: 700;
          box-shadow: 0 4px 20px rgba(34, 167, 224, 0.3);
          transition: all 0.3s ease;
        }

        .hero :global(.btn-primary:hover) {
          background: #178dc8;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(34, 167, 224, 0.5);
        }

        .hero :global(.btn-outline) {
          border-color: #ffffff;
          border-width: 2px;
          color: #ffffff;
          font-weight: 600;
          background: transparent;
          transition: all 0.3s ease;
        }

        .hero :global(.btn-outline:hover) {
          background: rgba(255, 255, 255, 0.15);
          border-color: #ffffff;
          transform: translateY(-2px);
        }







        .hero-image-wrapper {
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          height: 100%;
          width: 100%;
        }

        .hero-card {
          position: absolute;
          z-index: 10;
          height: auto;
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
          transition: all 0.3s ease;
          border-radius: 8px;
          overflow: hidden;
        }

        .hero-card:hover {
          filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4));
          transform: translateY(-4px);
        }

        .hero-card-left {
          left: 50%;
          top: 10%;
          transform: translateX(-50%);
          width: 300px;
        }

        .hero-card-right {
          right: 5%;
          bottom: 25%;
          width: 280px;
        }

        .hero-man {
          position: relative;
          z-index: 2;
          height: 100%;
          max-height: calc(100vh - 155px);
          width: auto;
          max-width: none;
          object-fit: contain;
          object-position: bottom right;
          margin-right: -20px;
        }

        .hero-image-glow {
          position: absolute;
          inset: -100px -150px -120px -60px;
          background: radial-gradient(circle at 55% 40%, rgba(34, 167, 224, 0.25) 0%, transparent 60%),
            radial-gradient(circle at 60% 70%, rgba(23, 141, 200, 0.15) 0%, transparent 65%);
          filter: blur(50px);
          z-index: 1;
          opacity: 0.8;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -55%;
          right: -25%;
          width: 900px;
          height: 900px;
          background: radial-gradient(circle, rgba(34, 167, 224, 0.14) 0%, rgba(0,0,0,0) 70%);
          z-index: 1;
        }

        @media (min-width: 1200px) {
          .hero-card-left {
            left: 12px;
            top: 70px;
          }

          .hero-man {
            right: -22px;
            bottom: -10px;
          }

          .hero-card-right {
            right: -54px;
            bottom: 6%;
          }
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
