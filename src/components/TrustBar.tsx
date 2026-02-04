export default function TrustBar() {
  const logos = [
    {
      src: "https://www.ninjaone.com/wp-content/uploads/2026/01/ThermoFisher-logo.svg",
      alt: "ThermoFisher Scientific",
    },
    {
      src: "https://www.ninjaone.com/wp-content/uploads/2026/01/siemens-logo.svg",
      alt: "Siemens",
    },
    {
      src: "https://www.ninjaone.com/wp-content/uploads/2026/01/arcteryx-logo.svg",
      alt: "Arc'teryx",
    },
    {
      src: "https://www.ninjaone.com/wp-content/uploads/2025/12/nvidia-logo-white.svg",
      alt: "NVIDIA",
    },
    {
      src: "https://www.ninjaone.com/wp-content/uploads/2026/01/vimeo-logo.svg",
      alt: "Vimeo",
    },
    {
      src: "https://www.ninjaone.com/wp-content/uploads/2026/01/UCLA-logo.svg",
      alt: "UCLA",
    },
    {
      src: "https://www.ninjaone.com/wp-content/uploads/2025/12/ohio-state-logo-white.svg",
      alt: "The Ohio State University",
    },
    {
      src: "https://www.ninjaone.com/wp-content/uploads/2025/12/pwc-logo-white.svg",
      alt: "pwc",
    },
    {
      src: "https://www.ninjaone.com/wp-content/uploads/2026/01/deloitte-logo.svg",
      alt: "Deloitte",
    },
    {
      src: "https://www.ninjaone.com/wp-content/uploads/2026/01/OKC-logo.svg",
      alt: "OKC",
    },
    {
      src: "https://www.ninjaone.com/wp-content/uploads/2026/01/porsche-logo.svg",
      alt: "Porsche",
    },
    {
      src: "https://www.ninjaone.com/wp-content/uploads/2025/12/pga-logo-white.svg",
      alt: "PGA",
    },
  ];

  return (
    <section className="trust-bar">
      <div className="container">
        <div className="slider-container" aria-label="Trusted by customers">
          <ul className="slider">
            {logos.map((logo) => (
              <li key={logo.alt} className="slider__slide">
                <div className="slide__content">
                  <img className="logo-item" src={logo.src} alt={logo.alt} loading="lazy" decoding="async" />
                </div>
              </li>
            ))}
          </ul>
          <ul className="slider" aria-hidden="true">
            {logos.map((logo) => (
              <li key={`${logo.alt}-dup`} className="slider__slide">
                <div className="slide__content">
                  <img className="logo-item" src={logo.src} alt="" loading="lazy" decoding="async" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .trust-bar {
          background-color: #0d2d44;
          padding: 22px 0 18px;
          --logo-gap: 40px;
        }

        .slider-container {
          display: flex;
          gap: var(--logo-gap);
          height: 120px;
          overflow: hidden;
          position: relative;
          user-select: none;
          -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
          mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
        }

        .slider-container:hover .slider {
          animation-play-state: paused;
        }

        .slider {
          --slider-speed: 90s;
          animation: trustBarScroll linear infinite var(--slider-speed);
          display: flex;
          flex-shrink: 0;
          gap: var(--logo-gap);
          justify-content: space-around;
          min-width: 100%;
          padding: 0;
          transform: translateZ(0);
          will-change: transform;
          transition: animation-play-state 0.3s ease;
        }

        .slider__slide {
          align-items: center;
          display: flex;
          flex-grow: 1;
          height: 120px;
          justify-content: center;
        }

        .slide__content {
          display: flex;
          align-items: center;
        }

        .logo-item {
          height: 26px;
          opacity: 0.6;
          filter: brightness(0) invert(1);
          flex: 0 0 auto;
        }

        @media (max-width: 720px) {
          .logo-item {
            height: 22px;
          }
        }
      `}</style>

      <style jsx global>{`
        @keyframes trustBarScroll {
          0% {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - var(--logo-gap)));
          }
        }
      `}</style>
    </section>
  );
}
