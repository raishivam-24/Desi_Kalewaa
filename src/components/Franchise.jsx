import { useState } from "react";
import "../css/Franchise.css";
import { FRANCHISE_REASONS, FRANCHISE_PROCESS } from "../data/siteData";
import { Tag, GoldDividerCenter } from "./UI";

export default function Franchise() {
  const [form, setForm] = useState({ name: "", city: "", budget: "", mobile: "" });
  const [sent, setSent] = useState(false);

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const submit = () => {
    if (!form.name || !form.mobile) return;
    setSent(true);
  };

  return (
    <section id="franchise" className="section section--dark">
      <div className="container">
        <div className="section-header-center">
          <Tag>व्यापार अवसर</Tag>
          <GoldDividerCenter />
          <h2 className="heading-display dk-franchise-title">Why Choose Desi Kalewaa Franchise?</h2>
        </div>

        <div className="dk-franchise-reasons">
          {FRANCHISE_REASONS.map((r) => (
            <div key={r.title} className="dk-reason-card">
              <div className="dk-reason-icon">{r.icon}</div>
              <h4 className="dk-reason-title">{r.title}</h4>
              <p className="dk-reason-desc">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="dk-franchise-process">
          {FRANCHISE_PROCESS.map((p) => (
            <div key={p.step} className="dk-process-step">
              <div className="dk-process-num">{p.step}</div>
              <h4 className="dk-process-title">{p.title}</h4>
              <p className="dk-process-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="dk-franchise-form-wrap">
          {sent ? (
            <div className="dk-franchise-success">
              <div className="dk-franchise-success-icon">✓</div>
              <h3 className="heading-display" style={{ color: "#e08a5c", fontSize: 24 }}>
                Inquiry Received
              </h3>
              <p style={{ color: "rgba(255,255,255,0.65)", marginTop: 8 }}>
                Our franchise team will contact you shortly.
              </p>
            </div>
          ) : (
            <div className="dk-franchise-form">
              <h3 className="dk-form-heading">Franchise Inquiry</h3>
              <div className="dk-form-row">
                <input
                  className="dk-form-input"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                />
                <input
                  className="dk-form-input"
                  placeholder="City"
                  value={form.city}
                  onChange={(e) => update("city", e.target.value)}
                />
              </div>
              <div className="dk-form-row">
                <input
                  className="dk-form-input"
                  placeholder="Investment Budget"
                  value={form.budget}
                  onChange={(e) => update("budget", e.target.value)}
                />
                <input
                  className="dk-form-input"
                  placeholder="Mobile Number"
                  value={form.mobile}
                  onChange={(e) => update("mobile", e.target.value)}
                />
              </div>
              <button className="btn-primary" style={{ width: "100%", marginTop: 8 }} onClick={submit}>
                Submit Inquiry →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
