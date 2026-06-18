import { useState } from "react";
import "../css/Gallery.css";
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from "../data/siteData";
import { Tag, GoldDividerCenter } from "./UI";

export default function Gallery() {
  const [activeCat, setActiveCat] = useState("Restaurant");
  const [lightbox, setLightbox] = useState(null);

  const filtered = GALLERY_IMAGES.filter((g) => g.category === activeCat);

  return (
    <section id="gallery" className="section section--alt">
      <div className="container">
        <div className="section-header-center">
          <Tag>हमारी झलकियां</Tag>
          <GoldDividerCenter />
          <h2 className="heading-display dk-gallery-title">Gallery</h2>
        </div>

        <div className="dk-gallery-tabs">
          {GALLERY_CATEGORIES.map((c) => (
            <button
              key={c}
              className={`dk-gallery-tab ${activeCat === c ? "dk-gallery-tab--active" : ""}`}
              onClick={() => setActiveCat(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="body-text" style={{ textAlign: "center" }}>
            Photos coming soon.
          </p>
        ) : (
          <div className="dk-gallery-grid">
            {filtered.map((g, i) => (
              <div key={i} className="dk-gallery-item" onClick={() => setLightbox(g.src)}>
                <img src={g.src} alt={`${activeCat} ${i + 1}`} />
              </div>
            ))}
          </div>
        )}
      </div>

      {lightbox && (
        <div className="dk-lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Gallery enlarged" />
        </div>
      )}
    </section>
  );
}
