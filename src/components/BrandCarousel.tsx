"use client";

import { useEffect, useRef } from "react";

interface BrandLogo {
    src: string;
    alt: string;
}

const brands: BrandLogo[] = [
    {
        src: "https://prolabsit.com/wp-content/uploads/2023/03/Redington-India.png",
        alt: "Redington",
    },
    {
        src: "https://prolabsit.com/wp-content/uploads/2023/03/kloudynet.png",
        alt: "Kloudynet",
    },
    {
        src: "https://prolabsit.com/wp-content/uploads/2023/03/Picture15.png",
        alt: "Hommer",
    },
    {
        src: "https://prolabsit.com/wp-content/uploads/2023/03/Picture14.png",
        alt: "Ethos Integrated Solutions",
    },
    {
        src: "https://prolabsit.com/wp-content/uploads/2023/03/Picture13.png",
        alt: "Logicom Distribution",
    },
    {
        src: "https://prolabsit.com/wp-content/uploads/2023/03/Picture11.png",
        alt: "Safanad",
    },
    {
        src: "https://prolabsit.com/wp-content/uploads/2023/03/Picture10.png",
        alt: "Excelledia",
    },
    {
        src: "https://prolabsit.com/wp-content/uploads/2023/03/Picture8.png",
        alt: "Thintech",
    },
    {
        src: "https://prolabsit.com/wp-content/uploads/2023/03/Picture7.jpg",
        alt: "Itensis",
    },
    {
        src: "https://prolabsit.com/wp-content/uploads/2023/03/logo_2.png",
        alt: "Encryption Consulting",
    },
    {
        src: "https://prolabsit.com/wp-content/uploads/2023/03/seder-e1679648785161.png",
        alt: "Seder",
    },
    {
        src: "https://prolabsit.com/wp-content/uploads/2023/03/logo.webp",
        alt: "CNS Juris",
    },
    {
        src: "https://prolabsit.com/wp-content/uploads/2023/03/ll.webp",
        alt: "CNS Juris Logo",
    },
    {
        src: "https://prolabsit.com/wp-content/uploads/2023/03/be56228ac0775b65.png",
        alt: "Gree",
    },
    {
        src: "https://prolabsit.com/wp-content/uploads/2023/03/logo.png",
        alt: "Mayez Holding",
    },
    {
        src: "https://prolabsit.com/wp-content/uploads/2023/07/image-2.png",
        alt: "Authmind",
    },
];

export default function BrandCarousel() {
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const pause = () => {
            track.style.animationPlayState = "paused";
        };
        const play = () => {
            track.style.animationPlayState = "running";
        };

        track.addEventListener("mouseenter", pause);
        track.addEventListener("mouseleave", play);

        return () => {
            track.removeEventListener("mouseenter", pause);
            track.removeEventListener("mouseleave", play);
        };
    }, []);

    return (
        <section className="brand-section" id="brand-carousel">
            <div className="brand-strip">
                <div className="brand-fade brand-fade--left" />
                <div className="brand-fade brand-fade--right" />

                <div className="brand-track" ref={trackRef}>
                    {[...brands, ...brands].map((b, i) => (
                        <div className="brand-item" key={i}>
                            <img src={b.src} alt={b.alt} loading="lazy" draggable={false} />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .brand-section {
          background: #0b3045;
          padding: 24px 0;
          border-top: 1px solid rgba(34, 167, 224, 0.1);
          border-bottom: 1px solid rgba(34, 167, 224, 0.1);
        }

        .brand-strip {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .brand-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }

        .brand-fade--left {
          left: 0;
          background: linear-gradient(to right, #0b3045, rgba(11, 48, 69, 0));
        }

        .brand-fade--right {
          right: 0;
          background: linear-gradient(to left, #0b3045, rgba(11, 48, 69, 0));
        }

        .brand-track {
          display: flex;
          align-items: center;
          gap: 72px;
          width: max-content;
          animation: marquee 38s linear infinite;
          will-change: transform;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .brand-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 44px;
        }

        .brand-item img {
          max-height: 40px;
          max-width: 160px;
          width: auto;
          height: auto;
          object-fit: contain;
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }

        .brand-item:hover img {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .brand-section {
            padding: 18px 0;
          }
          .brand-track {
            gap: 48px;
            animation-duration: 28s;
          }
          .brand-item img {
            max-height: 32px;
            max-width: 120px;
          }
          .brand-fade {
            width: 60px;
          }
        }

        @media (max-width: 480px) {
          .brand-track {
            gap: 36px;
            animation-duration: 22s;
          }
          .brand-item img {
            max-height: 26px;
            max-width: 100px;
          }
          .brand-fade {
            width: 40px;
          }
        }
      `}</style>
        </section>
    );
}
