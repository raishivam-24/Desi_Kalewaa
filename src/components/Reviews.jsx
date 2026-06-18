import "../css/Reviews.css";
import { REVIEWS } from "../data/siteData";
import { Tag, GoldDividerCenter } from "./UI";

export default function Reviews() {
  return (
    <section id="reviews" className="section section--alt">
      <div className="container">
        <div className="section-header-center">
          <Tag>ग्राहक प्रतिक्रिया</Tag>
          <GoldDividerCenter />
          <h2 className="heading-display dk-reviews-title">What Our Customers Say</h2>
        </div>

        {REVIEWS.length === 0 ? (
          <p className="body-text" style={{ textAlign: "center" }}>
            Reviews coming soon.
          </p>
        ) : (
          <div className="dk-reviews-grid">
            {REVIEWS.map((r, i) => (
              <div key={i} className="dk-review-card">
                <div className="dk-review-stars">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</div>
                <p className="dk-review-text">{r.text}</p>
                <div className="dk-review-name">{r.name}</div>
                <div className="dk-review-source">via {r.source}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
