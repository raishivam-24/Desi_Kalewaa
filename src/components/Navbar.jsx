import "../css/Navbar.css";
import { NAV_LINKS } from "../data/siteData";

export default function Navbar({ activeNav, scrolled, menuOpen, setMenuOpen, scrollTo }) {
  return (
    <>
      <nav className={`dk-navbar ${scrolled ? "dk-navbar--scrolled" : ""}`}>
        <div className="dk-nav-brand" onClick={() => scrollTo("home")}>
          <img src="/logo.png" alt="Desi Kalewaa Logo" className="dk-brand-logo" />
          <div>
            <div className="dk-brand-name">Desi Kalewaa</div>
            <div className="dk-brand-sub">माटी की खुशबू, परंपरा का स्वाद</div>
            <div className="dk-brand-owner">By Nitish Sahu</div>
          </div>
        </div>

        <div className="dk-nav-links-desktop">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              className={`dk-nav-link${activeNav === l.id ? " dk-nav-link--active" : ""}`}
              onClick={() => scrollTo(l.id)}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* <button className="dk-nav-cta" onClick={() => scrollTo("order")}>
          Order Now
        </button> */}

        <button className="dk-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="dk-mobile-menu">
          {NAV_LINKS.map((l) => (
            <button key={l.id} className="dk-mobile-link" onClick={() => scrollTo(l.id)}>
              {l.label}
            </button>
          ))}
          {/* <button className="dk-mobile-link dk-mobile-link--cta" onClick={() => scrollTo("order")}>
            Order Now
          </button> */}
        </div>
      )}
    </>
  );
}
