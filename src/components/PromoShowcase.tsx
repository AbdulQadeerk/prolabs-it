import s from "./PromoShowcase.module.css";

export default function PromoShowcase() {
  const carImage =
    "https://mlfk3cv5yvnx.i.optimole.com/cb:HA53.300ea/w:1536/h:458/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/2026/01/audi-f1-car-1.png";
  const brandLogo = "/brand/prolabs-logo-dark.png";

  return (
    <section className={s["promo-showcase"]}>
      <div className="container">
        <div className={s["promo-card"]}>
          <div className={s["promo-top"]}>
            <div className={s["promo-badges"]}>
              <span className={`${s.badge} ${s["badge-logo"]}`}>
                <img src={brandLogo} alt="Professional Labs" />
              </span>
              <span className={s.badge}>Audi</span>
              <span className={s.badge}>Revolut</span>
            </div>
            <button className={s["play-btn"]} aria-label="Play video">
              &#9654;
            </button>
          </div>
          <div className={s["promo-art"]}>
            <img className={s["car-image"]} src={carImage} alt="Racing car" />
          </div>
        </div>
      </div>
    </section>
  );
}
