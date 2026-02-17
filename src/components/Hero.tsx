"use client";



import BrandCarousel from "@/components/BrandCarousel";

export default function Hero() {


  return (
    <section id="home" className="hero">
      <div className="hero-bg-glow"></div>

      {/* Main Content Grid */}
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Smarter IT. Stronger Business.
          </div>
          <h1 className="hero-title">
            Unify IT.
            <br />
            Simplify work.
          </h1>
          <p className="hero-subtitle">
            The modern world relies on a complex array of technologies to keep
            turning. Professional Labs aim is to simplify that complexity.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Get a Free Consultation
            </a>
            <a href="#services" className="btn btn-outline">
              Explore Services
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-glow"></div>
          <div className="dashboard-card">
            <div className="dashboard-header">
              <div className="dashboard-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="dashboard-title">
                Professional Labs Dashboard
              </span>
            </div>
            <div className="dashboard-body">
              <div className="dash-stat-row">
                <div className="dash-stat">
                  <span className="dash-stat-value">99.9%</span>
                  <span className="dash-stat-label">Uptime SLA</span>
                </div>
                <div className="dash-stat">
                  <span className="dash-stat-value">24/7</span>
                  <span className="dash-stat-label">Monitoring</span>
                </div>
                <div className="dash-stat">
                  <span className="dash-stat-value">&lt;15m</span>
                  <span className="dash-stat-label">Response Time</span>
                </div>
              </div>
              <div className="dash-chart">
                <div className="chart-bar" style={{ height: "45%" }}></div>
                <div className="chart-bar" style={{ height: "65%" }}></div>
                <div className="chart-bar" style={{ height: "55%" }}></div>
                <div className="chart-bar active" style={{ height: "85%" }}></div>
                <div className="chart-bar" style={{ height: "70%" }}></div>
                <div className="chart-bar" style={{ height: "90%" }}></div>
                <div className="chart-bar" style={{ height: "75%" }}></div>
              </div>
              <div className="dash-services">
                <div className="dash-service-item">
                  <span className="service-dot green"></span> SOC Active
                </div>
                <div className="dash-service-item">
                  <span className="service-dot green"></span> Cloud Services
                </div>
                <div className="dash-service-item">
                  <span className="service-dot green"></span> Email Security
                </div>
              </div>
            </div>
          </div>
          {/* Floating accent cards */}
          <div className="float-card float-card-left">
            <span className="fc-icon">🛡️</span>
            <div>
              <span className="fc-title">Threat Blocked</span>
              <span className="fc-value">2,847 today</span>
            </div>
          </div>
          <div className="float-card float-card-right">
            <span className="fc-icon">☁️</span>
            <div>
              <span className="fc-title">Cloud Health</span>
              <span className="fc-value">All systems operational</span>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logo Marquee — inside hero like NinjaOne */}
      <BrandCarousel />

      <style jsx>{`
        .hero {
          background: linear-gradient(
            135deg,
            #053856 0%,
            #0b2f45 40%,
            #082638 100%
          );
          color: white;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding-top: 100px;
        }

        .hero-bg-glow {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 70% 30%,
              rgba(34, 167, 224, 0.12) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 20% 80%,
              rgba(34, 167, 224, 0.06) 0%,
              transparent 50%
            );
          z-index: 1;
        }

        .hero::before {
          content: "";
          position: absolute;
          top: -200px;
          right: -150px;
          width: 800px;
          height: 800px;
          background: radial-gradient(
            circle,
            rgba(34, 167, 224, 0.08) 0%,
            transparent 70%
          );
          z-index: 1;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 48px;
          align-items: center;
          z-index: 2;
          position: relative;
          padding-top: 40px;
          padding-bottom: 60px;
          flex: 1;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(34, 167, 224, 0.12);
          border: 1px solid rgba(34, 167, 224, 0.25);
          border-radius: 60px;
          padding: 6px 16px;
          font-size: 12px;
          font-weight: 600;
          color: #22a7e0;
          margin-bottom: 24px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22a7e0;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }

        .hero-content {
          max-width: 580px;
        }

        .hero-title {
          width: 571.13px;
          min-height: 169.43px;
          font-size: 78.44px;
          line-height: 0.98;
          margin-bottom: 20px;
          font-weight: 400;
          letter-spacing: -0.02em;
          color: #ffffff;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.618rem);
          margin-bottom: 32px;
          color: rgba(255, 255, 255, 0.8);
          max-width: 620px;
          font-weight: 400;
          line-height: 1.22;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
        }

        .hero :global(.btn) {
          padding: 14px 28px;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 50px;
        }

        .hero :global(.btn-primary) {
          background: #22a7e0;
          color: #ffffff;
          border: none;
          box-shadow: 0 4px 25px rgba(34, 167, 224, 0.35);
          transition: all 0.3s ease;
        }

        .hero :global(.btn-primary:hover) {
          background: #178dc8;
          transform: translateY(-2px);
          box-shadow: 0 8px 35px rgba(34, 167, 224, 0.5);
        }

        .hero :global(.btn-outline) {
          border: 2px solid rgba(255, 255, 255, 0.5);
          color: #ffffff;
          background: transparent;
          transition: all 0.3s ease;
        }

        .hero :global(.btn-outline:hover) {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.8);
          transform: translateY(-2px);
        }

        /* Visual / Dashboard */
        .hero-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-image-glow {
          position: absolute;
          inset: -60px;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(34, 167, 224, 0.15) 0%,
            transparent 65%
          );
          filter: blur(40px);
          z-index: 0;
        }

        .dashboard-card {
          position: relative;
          z-index: 2;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          overflow: hidden;
          width: 100%;
          max-width: 520px;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
        }

        .dashboard-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          background: rgba(0, 0, 0, 0.2);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .dashboard-dots {
          display: flex;
          gap: 6px;
        }

        .dashboard-dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dashboard-dots span:nth-child(1) { background: #ff5f57; }
        .dashboard-dots span:nth-child(2) { background: #febc2e; }
        .dashboard-dots span:nth-child(3) { background: #28c840; }

        .dashboard-title {
          color: rgba(255, 255, 255, 0.6);
          font-size: 12px;
          font-weight: 500;
        }

        .dashboard-body {
          padding: 24px 20px;
        }

        .dash-stat-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 24px;
        }

        .dash-stat {
          text-align: center;
          padding: 14px 8px;
          background: rgba(34, 167, 224, 0.08);
          border-radius: 10px;
          border: 1px solid rgba(34, 167, 224, 0.12);
        }

        .dash-stat-value {
          display: block;
          font-size: 1.4rem;
          font-weight: 700;
          color: #22a7e0;
          margin-bottom: 4px;
        }

        .dash-stat-label {
          display: block;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .dash-chart {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          height: 100px;
          margin-bottom: 20px;
          padding: 0 8px;
        }

        .chart-bar {
          flex: 1;
          background: rgba(34, 167, 224, 0.25);
          border-radius: 4px 4px 0 0;
          transition: all 0.3s ease;
        }

        .chart-bar.active {
          background: #22a7e0;
          box-shadow: 0 0 12px rgba(34, 167, 224, 0.4);
        }

        .dash-services {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .dash-service-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 6px;
        }

        .service-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .service-dot.green {
          background: #22a7e0;
          box-shadow: 0 0 8px rgba(34, 167, 224, 0.5);
        }

        /* Floating cards */
        .float-card {
          position: absolute;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          padding: 12px 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          animation: float 6s ease-in-out infinite;
        }

        .float-card-left {
          left: -20px;
          top: 20%;
          animation-delay: 0s;
        }

        .float-card-right {
          right: -20px;
          bottom: 15%;
          animation-delay: 3s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .fc-icon { font-size: 1.4rem; }

        .fc-title {
          display: block;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 500;
        }

        .fc-value {
          display: block;
          font-size: 13px;
          color: #22a7e0;
          font-weight: 600;
        }



        /* ───── Responsive ───── */
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            padding-top: 20px;
          }
          .hero-content { margin: 0 auto; }
          .hero-title {
            width: 100%;
            min-height: auto;
            font-size: clamp(2.6rem, 8vw, 4.9025rem);
          }
          .hero-actions { justify-content: center; }
          .hero-visual { margin-top: 40px; }
          .float-card-left { left: 0; }
          .float-card-right { right: 0; }
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 80px;
            min-height: auto;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
            max-width: 280px;
            margin: 0 auto;
          }
          .hero :global(.btn) {
            width: 100%;
            justify-content: center;
          }
          .float-card { display: none; }
          .dashboard-card { max-width: 100%; }

        }


      `}</style>
    </section>
  );
}
