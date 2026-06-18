import { useState } from "react";
import "../css/Menu.css";
import { DISHES } from "../data/siteData";
import { Tag, GoldDividerCenter } from "./UI";

const CATEGORIES = ["All", "Breakfast", "Snacks", "Main", "Sweets"];

export default function Menu({ addToCart }) {
  const [activeCat, setActiveCat] = useState("All");

  const filtered = activeCat === "All" ? DISHES : DISHES.filter((d) => d.category === activeCat);

  return (
    <section id="menu" className="section section--alt">
      <div className="container">
        <div className="section-header-center">
          <Tag>स्वाद की दुनिया</Tag>
          <GoldDividerCenter />
          <h2 className="heading-display dk-menu-title">Our Special Dishes</h2>
          <p className="body-text" style={{ maxWidth: 560, margin: "14px auto 0" }}>
            Every dish tells a story — rooted in Chhattisgarhi tradition, made with local ingredients.
          </p>
        </div>

        <div className="dk-menu-filters">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`dk-filter-btn ${activeCat === c ? "dk-filter-btn--active" : ""}`}
              onClick={() => setActiveCat(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="dk-dish-grid">
          {filtered.map((d) => (
            <div key={d.id} className="dk-dish-card">
              <div className="dk-dish-img-wrap">
                <img src={d.img} alt={d.name} className="dk-dish-img" />
              </div>
              <div className="dk-dish-body">
                <h3 className="dk-dish-name">{d.name}</h3>
                <p className="dk-dish-ingredients">{d.ingredients}</p>
                <p className="dk-dish-history">{d.history}</p>
                <div className="dk-dish-meta">
                  <span className="dk-dish-price">{d.price}</span>
                  {d.calories && <span className="dk-dish-cal">{d.calories}</span>}
                </div>
                {addToCart && (
                  <button className="dk-dish-add-btn" onClick={() => addToCart(d)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
