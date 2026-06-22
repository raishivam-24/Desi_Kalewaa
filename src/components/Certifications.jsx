import { useState } from "react";
import "../css/Certifications.css";
import { Tag, GoldDividerCenter } from "./UI";

const CERTS = [
  {
    icon: "🏛️",
    title: "UDYAM Registered",
    number: "UDYAM-CG-02-0070518",
    issuer: "Ministry of MSME, Government of India",
    valid: "Registered: 19 June 2026",
    color: "#3a5a40",
    img: "/certs/udyam.png",
  },
  {
    icon: "🍽️",
    title: "FSSAI Certified",
    number: "20526039001620",
    issuer: "Food Safety & Standards Authority of India",
    valid: "Valid Till: 19 June 2031",
    color: "#c56b3f",
    img: "/certs/fssai.png",
  },
];

export default function Certifications() {
  const [zoomed, setZoomed] = useState(null);

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header-center">
          <Tag>Government Certified</Tag>
          <GoldDividerCenter />
          <h2 className="heading-display dk-cert-title">
            Trusted & Certified
          </h2>
          <p className="body-text" style={{ maxWidth: 520, margin: "14px auto 0" }}>
            Desi Kalewaa is a fully registered and government-certified food
            business — your trust is our priority.
          </p>
        </div>

        <div className="dk-cert-grid">
          {CERTS.map((c) => (
            <div key={c.title} className="dk-cert-card">
              <div className="dk-cert-badge">✓ Verified</div>

              {/* Certificate Image */}
              <div
                className="dk-cert-img-wrap"
                onClick={() => setZoomed(c)}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  className="dk-cert-img"
                />
                <div className="dk-cert-img-overlay">
                  <span>🔍 Click to View</span>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="dk-cert-info-row">
                <div
                  className="dk-cert-icon"
                  style={{ background: c.color }}
                >
                  {c.icon}
                </div>
                <div className="dk-cert-body">
                  <h3 className="dk-cert-name">{c.title}</h3>
                  <div className="dk-cert-number">{c.number}</div>
                  <div className="dk-cert-issuer">{c.issuer}</div>
                  <div className="dk-cert-valid">{c.valid}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="dk-cert-note">
          <span>🔒</span>
          <span>
            Desi Kalewaa is a legally registered Micro Enterprise under MSME
            Act. All food prepared is certified safe by FSSAI — Government of
            India.
          </span>
        </div>
      </div>

      {/* Lightbox / Zoom */}
      {zoomed && (
        <div
          className="dk-cert-lightbox"
          onClick={() => setZoomed(null)}
        >
          <div
            className="dk-cert-lightbox-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="dk-cert-lightbox-close"
              onClick={() => setZoomed(null)}
            >
              ✕
            </button>
            <img
              src={zoomed.img}
              alt={zoomed.title}
              className="dk-cert-lightbox-img"
            />
            <div className="dk-cert-lightbox-footer">
              <strong>{zoomed.title}</strong> — {zoomed.number}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}