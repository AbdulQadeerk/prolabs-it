export default function TrustBar() {
  const logos = [
    {
      src: "https://www.ninjaone.com/wp-content/uploads/2026/01/ThermoFisher-logo.svg",
      alt: "Thermo Fisher",
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
      alt: "Nvidia",
    },
    {
      src: "https://www.ninjaone.com/wp-content/uploads/2026/01/vimeo-logo.svg",
      alt: "Vimeo",
    },
  ];

  return (
    <section className="trust-bar">
      <div className="container">
        <div className="logo-row">
          {logos.map((logo) => (
            <img key={logo.alt} className="logo-item" src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .trust-bar {
          background-color: #0b3248;
          padding: 18px 0 28px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .logo-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 24px;
        }

        .logo-item {
          height: 20px;
          opacity: 0.8;
          filter: brightness(0) invert(1);
        }

        @media (max-width: 720px) {
          .logo-row {
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}
