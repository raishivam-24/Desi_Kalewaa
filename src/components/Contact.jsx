import "../css/Contact.css";
import { CONTACT } from "../data/siteData";
import { Tag, GoldDividerCenter } from "./UI";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header-center">
          <Tag>संपर्क करें</Tag>
          <GoldDividerCenter />
          <h2 className="heading-display dk-contact-title">Contact Us</h2>
        </div>

        <div className="dk-contact-grid">
          <a href={`tel:${CONTACT.phone}`} className="dk-contact-card">
            <div className="dk-contact-icon">📞</div>
            <div className="dk-contact-label">Phone</div>
            <div className="dk-contact-value">{CONTACT.phone}</div>
          </a>
          <a
            href={`https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="dk-contact-card"
          >
            <div className="dk-contact-icon">💬</div>
            <div className="dk-contact-label">WhatsApp</div>
            <div className="dk-contact-value">{CONTACT.whatsapp}</div>
          </a>
          <a href={`mailto:${CONTACT.email}`} className="dk-contact-card">
            <div className="dk-contact-icon">✉</div>
            <div className="dk-contact-label">Email</div>
            <div className="dk-contact-value">{CONTACT.email}</div>
          </a>
        </div>

        <div className="dk-contact-social">
          {CONTACT.social.instagram && (
            <a href={CONTACT.social.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          )}
          {CONTACT.social.facebook && (
            <a href={CONTACT.social.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          )}
          {CONTACT.social.youtube && (
            <a href={CONTACT.social.youtube} target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
