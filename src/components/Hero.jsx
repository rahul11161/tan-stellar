import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "../assets/agency-hero.png";

const Hero = () => {
  const benefits = [
    "Custom Solutions",
    "Reliable Delivery",
    "Clean, Maintainable Code",
    "Ongoing Support",
  ];

  return (
    <section className="hero-section relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:min-h-180 lg:px-12 lg:pb-24 lg:pt-36">
      <div className="hero-glow" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative z-10 max-w-2xl"
        >
          <p className="eyebrow mb-6">
            <span className="eyebrow-dot" /> IT SERVICES &amp; SOFTWARE DEVELOPMENT
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.12] text-white sm:text-5xl lg:text-[62px]">
            We Build Digital Solutions That <span className="hero-highlight">Power Your Business.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            From high-performing websites and e-commerce platforms to mobile applications and custom software, we help businesses turn their ideas into scalable, reliable digital products.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="button-primary">
              Get a Free Consultation <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <Link to="/portfolio" className="button-secondary">
              Explore Our Work <ArrowDown size={16} aria-hidden="true" />
            </Link>
          </div>
          <ul className="mt-9 grid max-w-2xl grid-cols-1 gap-x-5 gap-y-3 text-sm text-slate-300 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2.5">
                <span className="check-icon"><Check size={13} aria-hidden="true" /></span>
                {benefit}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
          className="device-stage"
          aria-label="Responsive digital product preview on laptop and mobile"
        >
          <div className="device-orbit device-orbit-one" aria-hidden="true" />
          <div className="device-orbit device-orbit-two" aria-hidden="true" />
          <div className="laptop-device">
            <div className="laptop-camera" />
            <div className="laptop-screen">
              <img src={heroImg} alt="A software team collaborating in a bright studio" />
              <div className="screen-shade" />
              <div className="screen-nav"><span>tan stellar</span><span>Digital, made useful</span></div>
              <div className="screen-message">
                <span>BUILD WITH CLARITY</span>
                <strong>Better digital<br />starts here.</strong>
                <i />
              </div>
              <div className="screen-status"><span /> PRODUCT EXPERIENCE <b>01 / 04</b></div>
            </div>
            <div className="laptop-base"><span /></div>
          </div>
          <div className="phone-device" aria-hidden="true">
            <div className="phone-island" />
            <div className="phone-content">
              <span className="phone-brand">TS.</span>
              <span className="phone-kicker">MADE FOR MOMENTUM</span>
              <strong>Shop the<br />new season.</strong>
              <div className="phone-product"><span /><span /><i /></div>
              <div className="phone-action">Explore collection <ArrowUpRight size={12} /></div>
            </div>
          </div>
          <div className="preview-label"><span className="preview-pulse" /> BUILT FOR EVERY SCREEN</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;