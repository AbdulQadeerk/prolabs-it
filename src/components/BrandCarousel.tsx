"use client";

import { useEffect, useRef } from "react";
import s from "./BrandCarousel.module.css";

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
    <section className={s["brand-section"]} id="brand-carousel">
      <div className={s["brand-strip"]}>
        <div className={`${s["brand-fade"]} ${s["brand-fade--left"]}`} />
        <div className={`${s["brand-fade"]} ${s["brand-fade--right"]}`} />

        <div className={s["brand-track"]} ref={trackRef}>
          {[...brands, ...brands].map((b, i) => (
            <div className={s["brand-item"]} key={i}>
              <img src={b.src} alt={b.alt} loading="lazy" draggable={false} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
