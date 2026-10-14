import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/service" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <Link to="/" className="brand-mark" aria-label="Tan-Stellar home" onClick={() => setMenuOpen(false)}>
          <span className="brand-symbol">TS</span>
          <span>TAN<span className="brand-divider">/</span>STELLAR</span>
        </Link>

        <div className="desktop-nav-links">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to}>{item.label}</Link>
          ))}
        </div>

        <Link to="/contact" className="nav-quote">
          Get a Quote <ArrowUpRight size={15} aria-hidden="true" />
        </Link>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <div id="mobile-navigation" className={`mobile-nav-panel ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>{item.label}</Link>
          ))}
          <Link to="/contact" className="mobile-quote" onClick={() => setMenuOpen(false)}>
            Get a Quote <ArrowUpRight size={16} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;