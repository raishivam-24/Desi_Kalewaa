import { useState } from "react";
import "../css/Branches.css";
import { BRANCHES } from "../data/siteData";
import { Tag, GoldDividerCenter } from "./UI";

export default function Branches() {
  const [search, setSearch] = useState("");

  const filtered = BRANCHES.filter(
    (b) =>
      b.city.toLowerCase().includes(search.toLowerCase()) ||
      b.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="branches" className="section">
      <div className="container">
        <div className="section-header-center">
          <Tag>15 शाखाएं</Tag>
          <GoldDividerCenter />
          <h2 className="heading-display dk-branches-title">Find Your Nearest Branch</h2>
        </div>

        <div className="dk-branch-search-wrap">
          <input
            className="dk-branch-search"
            placeholder="Search by city or branch name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="dk-branches-grid">
          {filtered.map((b) => (
            <div key={b.id} className="dk-branch-card">
              <h3 className="dk-branch-name">{b.name}</h3>
              <div className="dk-branch-city">{b.city}</div>
              <div className="dk-branch-row">
                <span className="dk-branch-icon">📍</span>
                <span>{b.address}</span>
              </div>
              <div className="dk-branch-row">
                <span className="dk-branch-icon">🕒</span>
                <span>{b.timing}</span>
              </div>
              <div className="dk-branch-row">
                <span className="dk-branch-icon">🚗</span>
                <span>Parking: {b.parking}</span>
              </div>
              <div className="dk-branch-actions">
                <a href={`tel:${b.phone}`} className="dk-branch-call">
                  📞 {b.phone}
                </a>
                <a
                  href={
                    b.mapLink ||
                    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.address)}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dk-branch-directions"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
