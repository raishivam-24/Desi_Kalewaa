import "../css/About.css";
import { ABOUT } from "../data/siteData";
import { Tag, GoldDivider } from "./UI";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="dk-about-grid">
          <div className="dk-about-left">
            <Tag>हमारी कहानी</Tag>
            <GoldDivider />
            <h2 className="heading-display dk-about-title">Our Story</h2>
            <p className="body-text" style={{ marginTop: 20 }}>
              {ABOUT.story}
            </p>
            <p className="body-text" style={{ marginTop: 14 }}>
              {ABOUT.purpose}
            </p>
          </div>

          <div className="dk-about-right">
            <div className="dk-vision-card">
              <div className="dk-vision-label">Vision</div>
              <p className="dk-vision-text heading-hindi">{ABOUT.vision}</p>
            </div>
            <div className="dk-mission-card">
              <div className="dk-mission-label">Mission</div>
              <p className="dk-mission-text heading-hindi">{ABOUT.mission}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
