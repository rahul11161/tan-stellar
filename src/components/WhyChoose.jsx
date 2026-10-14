import { motion } from "framer-motion";
import { CodeXml, MessagesSquare, ShieldCheck, SlidersHorizontal, Sparkles, Wrench } from "lucide-react";

const strengths = [
  { title: "Technical Expertise", description: "Careful engineering across commerce, web, mobile, and connected systems.", icon: CodeXml },
  { title: "Business-Focused Solutions", description: "Technology choices grounded in the way your business actually works.", icon: SlidersHorizontal },
  { title: "Transparent Communication", description: "Clear conversations, practical decisions, and shared visibility throughout.", icon: MessagesSquare },
  { title: "Performance & Security", description: "Thoughtful foundations for responsive, dependable digital products.", icon: ShieldCheck },
  { title: "Maintainable Code", description: "Readable, considered implementation built to be understood and extended.", icon: Sparkles },
  { title: "Post-Launch Support", description: "A team to help with improvements and technical needs after launch.", icon: Wrench },
];

const WhyChoose = () => (
  <section id="about" className="section-shell section-why px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
      <div className="section-heading lg:sticky lg:top-28 lg:self-start">
        <p className="eyebrow">A PRACTICAL PARTNER</p>
        <h2>Technology Built Around Your Business</h2>
        <p>Good software starts by understanding the people, processes, and priorities behind it. We bring focused technical delivery and a collaborative way of working.</p>
        <div className="why-note"><span className="why-note-mark">+</span><span>Specialists in <b>Magento 2 / Adobe Commerce</b>, with the capability to support your wider digital ecosystem.</span></div>
      </div>
      <div className="strength-grid">
        {strengths.map((strength, index) => {
          const Icon = strength.icon;

          return (
            <motion.article
              key={strength.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              className="strength-item"
            >
              <span className="strength-icon"><Icon size={20} strokeWidth={1.7} aria-hidden="true" /></span>
              <div><h3>{strength.title}</h3><p>{strength.description}</p></div>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyChoose;