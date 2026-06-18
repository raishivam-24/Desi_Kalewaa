import { useState, useEffect } from "react";
import "../css/Hero.css";
import { TAGLINES, HERO_DISHES } from "../data/siteData";

export default function Hero({ scrollTo }) {
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTaglineIdx((i) => (i + 1) % TAGLINES.length), 3500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const s = setInterval(() => setSlideIdx((i) => (i + 1) % HERO_DISHES.length), 4000);
    return () => clearInterval(s);
  }, []);

  return (
    <section id="home" className="dk-hero">
      <div className="dk-hero-bg-pattern" />

      <div className="dk-hero-slider">
        {HERO_DISHES.map((d, i) => (
          <div
            key={d.name}
            className={`dk-hero-slide ${i === slideIdx ? "dk-hero-slide--active" : ""}`}
            style={{ backgroundImage: `url(${d.img})` }}
          />
        ))}
        <div className="dk-hero-slide-overlay" />
      </div>

      <div className="dk-hero-content">
        <img src="/logo.png" alt="Desi Kalewaa" className="dk-hero-logo" />
        <h1 className="dk-hero-title heading-hindi">{TAGLINES[taglineIdx]}</h1>
        <p className="dk-hero-sub">
          Authentic Chhattisgarhi cuisine, made with tradition, love, and the freshest local ingredients.
        </p>

        <div className="dk-hero-dishes-row">
          {HERO_DISHES.map((d) => (
            <span key={d.name} className="dk-hero-dish-pill">
              {d.name}
            </span>
          ))}
        </div>

        <div className="dk-hero-actions">
          <button className="btn-primary" onClick={() => scrollTo("order")}>
            Order Now
          </button>
          <button className="btn-outline" onClick={() => scrollTo("branches")}>
            Find Nearest Branch
          </button>
          <button className="btn-dark" onClick={() => scrollTo("franchise")}>
            Franchise Inquiry
          </button>
        </div>
      </div>
    </section>
  );
}
