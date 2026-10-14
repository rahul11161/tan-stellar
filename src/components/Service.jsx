import { motion } from "framer-motion";
import { ArrowUpRight, Blocks, Code2, Headset, Smartphone, Store } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "ecommerce",
    title: "E-commerce Development & Adobe Commerce Solutions",
    desc: "Build, customize, improve, and maintain an online store around your catalog, operations, and customer needs.",
    icon: Store,
    featured: true,
  },
  {
    id: "website",
    title: "Website Development",
    desc: "Create or modernize a responsive website that strengthens credibility and makes it easier for customers to take the next step.",
    icon: Code2,
  },
  {
    id: "mobile",
    title: "Mobile Application Development",
    desc: "Plan and build customer-facing applications connected to the services and data your product depends on.",
    icon: Smartphone,
  },
  {
    id: "software",
    title: "Custom Software, API Integration & Technical Support",
    desc: "Connect systems and shape internal tools around business-specific workflows, with ongoing technical help when needed.",
    icon: Blocks,
  },
];

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      viewport={{ once: true, amount: 0.15 }}
      className={`service-card ${service.featured ? "service-card-featured" : ""}`}
    >
      <span className="service-icon"><Icon size={22} strokeWidth={1.7} aria-hidden="true" /></span>
      {service.featured && <span className="service-specialty">CORE SPECIALTY</span>}
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
      <Link to={`/service#${service.id}`} className="text-link" aria-label={`Learn more about ${service.title}`}>
        Explore service <ArrowUpRight size={15} aria-hidden="true" />
      </Link>
    </motion.article>
  );
};

const Service = () => {
  return (
    <section id="services" className="section-shell section-services px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading mb-12 max-w-2xl">
          <p className="eyebrow">SERVICE OVERVIEW</p>
          <h2>End-to-End Development Services</h2>
          <p>Explore the capabilities we bring together to build, connect, and support useful digital products for your business.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
        <p className="service-support mt-7 flex items-center gap-2 text-sm text-slate-400">
          <Headset size={16} aria-hidden="true" /> Need something more specific? <Link to="/contact" className="text-cyan-200 underline decoration-cyan-200/40 underline-offset-4 hover:text-white">Let&apos;s talk</Link>
        </p>
      </div>
    </section>
  );
};

export default Service;