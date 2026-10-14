import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = ({
  ctaEyebrow = "LET'S MAKE THE NEXT THING MATTER",
  ctaTitle = "Have a Project in Mind?",
  ctaDescription = "Tell us about your goals, and let's explore the right digital solution for your business.",
}) => (
  <footer className="site-footer px-5 pb-8 pt-16 sm:px-8 lg:px-12 lg:pt-20">
    <div className="mx-auto max-w-7xl">
      <section className="footer-cta" aria-labelledby="footer-cta-heading">
        <div className="footer-cta-copy">
          <p className="eyebrow">{ctaEyebrow}</p>
          <h2 id="footer-cta-heading">{ctaTitle}</h2>
          <p>{ctaDescription}</p>
        </div>
        <div className="footer-cta-actions">
          <Link to="/contact" className="button-primary button-light">
            Start a Project <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <Link to="/contact" className="button-secondary button-footer-secondary">
            Contact Us <MoveUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <div className="footer-bottom">
        <Link to="/" className="brand-mark footer-brand" aria-label="Tan-Stellar home">
          <span className="brand-symbol">TS</span>
          <span>TAN<span className="brand-divider">/</span>STELLAR</span>
        </Link>
        <p>Thoughtful technology. Built around your business.</p>
        <div className="footer-links">
          <Link to="/service">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <span className="footer-copyright">© {new Date().getFullYear()} Tan-Stellar</span>
      </div>
    </div>
  </footer>
);

export default Footer;