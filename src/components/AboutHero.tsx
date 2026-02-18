"use client";

import { useScrollReveal } from "./animations";

export default function AboutHero() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section ref={ref as React.RefObject<HTMLElement>} className={`about-hero-section ${isVisible ? 'animate-in' : ''}`}>
            <div className="container banner-outer">
                <div className="about-hero-banner">
                    {/* Background Video */}
                    <div className="video-background">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="video-content"
                        >
                            <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-city-at-night-with-bright-lights-and-traffic-lights-42991-large.mp4" type="video/mp4" />
                        </video>
                    </div>

                    {/* Dynamic Mesh Overlay */}
                    <div className="hero-overlay"></div>
                    <div className="mesh-gradient"></div>

                    <div className="hero-content relative z-10">
                        <div className="content-inner">
                            <div className="hero-badge">
                                <span>ESTABLISHED 2012</span>
                            </div>
                            <h1 className="hero-title">
                                <span className="word-reveal">Who</span>
                                <span className="word-reveal">We</span>
                                <span className="word-reveal">Are</span>
                            </h1>
                            <div className="title-underline"></div>
                            <p className="hero-subtitle">
                                Professional Labs was founded with one goal: to put the customer first and <strong>simplify complex technology</strong> for everyone.
                            </p>

                            <div className="scroll-hint">
                                <div className="mouse">
                                    <div className="wheel"></div>
                                </div>
                                <span>Discover Our Story</span>
                            </div>
                        </div>
                    </div>

                    {/* Premium Side Decorative Elements */}
                    <div className="premium-glow left-glow"></div>
                    <div className="premium-glow right-glow"></div>

                    {/* Floating Data Nodes */}
                    <div className="floating-node node-1"></div>
                    <div className="floating-node node-2"></div>
                </div>
            </div>

            <style jsx>{`
        .about-hero-section {
          padding: 80px 0 40px;
          background: #f8fafc;
        }

        .banner-outer {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .about-hero-banner {
          position: relative;
          min-height: 680px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 48px;
          overflow: hidden;
          color: white;
          background-color: #082638;
          box-shadow: 0 80px 150px -40px rgba(8, 38, 56, 0.45);
        }

        .video-background {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .video-content {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.85;
          filter: brightness(0.55) contrast(1.2) saturate(0.7);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(8, 38, 56, 0.2) 0%, rgba(8, 38, 56, 0.8) 100%);
          z-index: 1;
        }

        .mesh-gradient {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(at 0% 0%, rgba(34, 167, 224, 0.2) 0, transparent 50%), 
            radial-gradient(at 100% 0%, rgba(34, 167, 224, 0.1) 0, transparent 50%);
          z-index: 2;
          pointer-events: none;
        }

        .hero-content {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
          padding: 60px 40px;
          position: relative;
          z-index: 10;
        }

        .content-inner {
          position: relative;
          padding: 40px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 32px;
        }

        .hero-badge {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(34, 167, 224, 0.2);
          border: 1px solid rgba(34, 167, 224, 0.3);
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #22a7e0;
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: clamp(3.5rem, 10vw, 7.5rem);
          font-weight: 900;
          margin-bottom: 16px;
          letter-spacing: -0.05em;
          line-height: 0.9;
          text-shadow: 0 20px 50px rgba(0,0,0,0.6);
          display: flex;
          justify-content: center;
          gap: 0.2em;
        }

        .word-reveal {
          display: inline-block;
          opacity: 0;
          transform: translateY(40px);
        }

        .title-underline {
          width: 120px;
          height: 6px;
          background: #22a7e0;
          margin: 20px auto 32px;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(34, 167, 224, 0.5);
        }

        .hero-subtitle {
          font-size: clamp(1.4rem, 2.5vw, 1.9rem);
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.4;
          max-width: 800px;
          margin: 0 auto;
          font-weight: 400;
          letter-spacing: -0.01em;
        }

        .hero-subtitle strong {
          color: white;
          font-weight: 700;
        }

        .scroll-hint {
          margin-top: 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          opacity: 0.7;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .mouse {
          width: 24px;
          height: 40px;
          border: 2px solid white;
          border-radius: 20px;
          position: relative;
        }

        .wheel {
          width: 4px;
          height: 8px;
          background: white;
          border-radius: 2px;
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          animation: drop 1.5s infinite;
        }

        @keyframes drop {
          0% { top: 6px; opacity: 1; }
          100% { top: 25px; opacity: 0; }
        }

        .premium-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
          z-index: 1;
          pointer-events: none;
        }

        .left-glow {
          left: -150px;
          top: 20%;
          background: #22a7e0;
        }

        .right-glow {
          right: -150px;
          bottom: 20%;
          background: #22a7e0;
        }

        .floating-node {
          position: absolute;
          width: 12px;
          height: 12px;
          background: #22a7e0;
          border-radius: 50%;
          box-shadow: 0 0 20px #22a7e0;
          z-index: 5;
        }

        .node-1 { top: 20%; left: 15%; animation: float 6s infinite ease-in-out; }
        .node-2 { bottom: 25%; right: 15%; animation: float 8s infinite ease-in-out reverse; }

        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.2); }
        }

        /* Entry Animations */
        .about-hero-section.animate-in .word-reveal {
          animation: revealUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        .about-hero-section.animate-in .word-reveal:nth-child(2) { animation-delay: 0.15s; }
        .about-hero-section.animate-in .word-reveal:nth-child(3) { animation-delay: 0.3s; }

        .about-hero-section.animate-in .content-inner {
          animation: fadeSlight 1.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        @keyframes revealUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeSlight {
          from { opacity: 0; background: rgba(255, 255, 255, 0); }
          to { opacity: 1; background: rgba(255, 255, 255, 0.03); }
        }

        @media (max-width: 768px) {
          .banner-outer { padding: 0 16px; }
          .about-hero-banner { min-height: 580px; border-radius: 32px; }
          .hero-content { padding: 40px 20px; }
          .content-inner { padding: 30px 20px; }
          .hero-title { font-size: 4rem; flex-direction: column; line-height: 1; }
          .hero-subtitle { font-size: 1.2rem; }
          .scroll-hint { display: none; }
        }
      `}</style>
        </section>
    );
}
