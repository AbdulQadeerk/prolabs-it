export default function CTASection() {
    const ctaBg = "https://www.ninjaone.com/wp-content/uploads/2024/08/rectangles-cta.svg";

    return (
        <section className="cta-section">
            <div className="cta-bg-pattern"></div>
            <div className="container">
                <div className="cta-content">
                    <h2 className="cta-title">Ready to simplify work with unified IT?</h2>
                    <div className="cta-buttons">
                        <button className="btn btn-primary btn-large">Try for Free</button>
                        <button className="btn btn-outline btn-large">Get a Demo</button>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .cta-section {
          background: linear-gradient(135deg, #0b3248 0%, #082c40 100%);
          padding: 80px 0;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .cta-bg-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(circle at 20% 50%, rgba(20, 241, 149, 0.08) 0%, transparent 55%),
                            radial-gradient(circle at 80% 40%, rgba(125, 185, 255, 0.1) 0%, transparent 55%),
                            linear-gradient(0deg, rgba(255,255,255,0.02) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: auto, auto, 120px 120px, 120px 120px;
          z-index: 1;
        }

        .cta-bg-pattern::after {
          content: "";
          position: absolute;
          inset: 0;
          background: url(${ctaBg}) center right / 320px no-repeat;
          opacity: 0.25;
        }

        .container {
          position: relative;
          z-index: 2;
        }

        .cta-title {
          font-size: 2.4rem;
          color: white;
          margin-bottom: 40px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .btn-large {
          padding: 12px 24px;
          font-size: 0.9rem;
        }

        .cta-section :global(.btn-outline) {
          border-color: rgba(255, 255, 255, 0.6);
          color: white;
        }

        .cta-section :global(.btn-outline:hover) {
          border-color: rgba(255, 255, 255, 0.9);
          color: white;
        }

        @media (max-width: 768px) {
          .cta-title {
            font-size: 2rem;
          }
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
        </section>
    );
}
