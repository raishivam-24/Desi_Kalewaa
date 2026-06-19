import "../css/Footer.css";
import { NAV_LINKS, CONTACT } from "../data/siteData";

export default function Footer({ scrollTo }) {
  return (
    <footer className="dk-footer">
      <div className="container">
        <div className="dk-footer-grid">
          <div>
            <div className="dk-footer-brand">
              <img src="/logo.png" alt="Desi Kalewaa" className="dk-footer-logo" />
              <div className="dk-footer-brand-name">Desi Kalewaa</div>
            </div>
            <p className="dk-footer-tagline">छत्तीसगढ़ के स्वाद की असली पहचान</p>
          </div>

          <div>
            <div className="dk-footer-title">Quick Links</div>
            {NAV_LINKS.map((l) => (
              <button key={l.id} className="dk-footer-link" onClick={() => scrollTo(l.id)}>
                {l.label}
              </button>
            ))}
          </div>

          <div>
            <div className="dk-footer-title">Contact</div>
            <div className="dk-footer-contact-item">📞 {CONTACT.phone}</div>
            <div className="dk-footer-contact-item">✉ {CONTACT.email}</div>
          </div>
        </div>

        <div className="dk-footer-bottom">© 2026 Desi Kalewaa, by Nitish Sahu. All rights reserved.</div>
      </div>
    </footer>
  );
}
