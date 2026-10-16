import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Check,
  Code2,
  Globe,
  Link2,
  MessageSquareText,
  MonitorSmartphone,
  Rocket,
  Sparkles,
  Store,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import { contactHref } from "../data/contactOptions";

const serviceHighlights = [
  {
    title: "E-commerce Development & Adobe Commerce",
    servicesHref: "/service#ecommerce",
    description:
      "Develop and enhance e-commerce experiences with Magento Open Source and Adobe Commerce, including custom modules, storefront functionality, third-party integrations, performance improvements, upgrades, and ongoing support.",
    icon: Store,
  },
  {
    title: "Website & Web Application Development",
    servicesHref: "/service#website",
    description:
      "Build responsive websites and web applications designed to deliver useful, accessible, and consistent experiences across devices.",
    icon: Globe,
  },
  {
    title: "Mobile App & Custom Software Development",
    servicesHref: "/service#mobile",
    description:
      "Develop digital applications and tailored software solutions that support business workflows, customer engagement, and operational needs.",
    icon: MonitorSmartphone,
  },
  {
    title: "API Integrations & Technical Support",
    servicesHref: "/service#api-support",
    description:
      "Connect platforms and services through API integrations, improve existing systems, troubleshoot issues, and support the reliability of your digital infrastructure.",
    icon: Link2,
  },
];

const processSteps = [
  {
    title: "Understand",
    description: "We discuss your objectives, requirements, users, and technical constraints before defining the right approach.",
    icon: MessageSquareText,
  },
  {
    title: "Plan",
    description: "We identify priorities, outline the solution, and agree on the scope and expected deliverables.",
    icon: Workflow,
  },
  {
    title: "Build & Test",
    description: "We develop the solution with attention to code quality, usability, compatibility, and appropriate testing.",
    icon: Code2,
  },
  {
    title: "Launch & Support",
    description: "We help prepare the solution for release and can provide ongoing improvements and technical support based on the agreed scope.",
    icon: Rocket,
  },
];

const values = [
  { title: "Quality First", description: "Focus on reliable implementation, maintainable code, and careful testing." },
  { title: "Clear Communication", description: "Keep requirements, progress, questions, and expectations transparent." },
  { title: "Practical Solutions", description: "Choose technologies and approaches that fit the actual business problem." },
  { title: "Continuous Improvement", description: "Look for opportunities to improve performance, usability, maintainability, and long-term value." },
];

const reasons = [
  "Solutions aligned with business requirements.",
  "Experience across e-commerce and web technologies.",
  "Attention to performance, usability, and maintainability.",
  "Clear communication throughout the development process.",
  "Support for enhancements and ongoing technical needs.",
];

const AboutSection = () => (
  <section className="bg-[#f3f6fb] px-5 pb-20 pt-20 text-slate-900 sm:px-8 lg:px-12 lg:pb-24 lg:pt-24">
    <div className="mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-16 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div>
          <p className="eyebrow"><span className="eyebrow-dot" /> ABOUT US</p>
          <h1 className="mt-6 max-w-xl text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-[4rem]" style={{ fontFamily: "var(--heading-font)" }}>
            Technology That Moves Your Business Forward
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            We help businesses turn ideas into reliable digital solutions. From high-performing websites and e-commerce platforms to custom software and system integrations, we focus on building technology that supports real business needs.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Our approach combines thoughtful planning, practical engineering, and a commitment to quality to help businesses improve their digital experiences and operate more efficiently.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to={contactHref({ intent: "project" })} className="button-primary">
              Discuss Your Project <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/portfolio" className="button-secondary">
              Explore Our Work <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8">
          <div className="rounded-[22px] border border-slate-200 bg-[#eef3ff] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">WHY IT MATTERS</p>
            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#dfeaff] text-[#1f3b75]"><Check size={18} aria-hidden="true" /></span>
                <div>
                  <h2 className="text-lg font-bold text-slate-900" style={{ fontFamily: "var(--heading-font)" }}>Business-first thinking</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600">Technology is chosen to support operations, user experience, and commercial outcomes rather than adding complexity for its own sake.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#e8e3ff] text-[#4b2ea8]"><Sparkles size={18} aria-hidden="true" /></span>
                <div>
                  <h2 className="text-lg font-bold text-slate-900" style={{ fontFamily: "var(--heading-font)" }}>Built to be maintainable</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600">We aim for clear implementation, practical quality checks, and systems that can evolve as business requirements change.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#dffaf2] text-[#0f766e]"><Blocks size={18} aria-hidden="true" /></span>
                <div>
                  <h2 className="text-lg font-bold text-slate-900" style={{ fontFamily: "var(--heading-font)" }}>Connected digital systems</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600">From storefronts to internal tools, we help connect business processes with the digital tools that support them.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-20 grid gap-8 lg:grid-cols-[0.82fr_1.18fr]"
      >
        <div>
          <p className="eyebrow"><span className="eyebrow-dot" /> WHO WE ARE</p>
          <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl" style={{ fontFamily: "var(--heading-font)" }}>Your Partner in Digital Development</h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
          <p>Every business has different goals, challenges, and customers. That is why we believe technology solutions should be designed around the business, not the other way around.</p>
          <p>We work across web development, e-commerce, application development, custom software, and API integrations to help businesses establish, improve, and expand their digital capabilities.</p>
          <p>Our focus is on understanding project requirements, communicating clearly, writing maintainable code, and delivering solutions that are practical to manage and grow.</p>
        </div>
      </motion.div>

      <div className="mb-20">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow"><span className="eyebrow-dot" /> WHAT WE DO</p>
          <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl" style={{ fontFamily: "var(--heading-font)" }}>Digital Solutions Built Around Your Needs</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {serviceHighlights.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.25 }}
                className="group rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-transform duration-200 hover:-translate-y-1"
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf1ff] text-[#1d4ed8]"><Icon size={22} aria-hidden="true" /></span>
                <h3 className="text-xl font-bold text-slate-900" style={{ fontFamily: "var(--heading-font)" }}>{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
                <Link to={service.servicesHref} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1d4ed8]">
                  Learn more <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>

      <div className="mb-20 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:p-8 lg:p-10">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow"><span className="eyebrow-dot" /> OUR APPROACH</p>
          <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl" style={{ fontFamily: "var(--heading-font)" }}>A Clear, Collaborative Development Process</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title} className="rounded-[22px] border border-slate-200 bg-[#f8fafc] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#eff6ff] text-[#1d4ed8]"><Icon size={20} aria-hidden="true" /></span>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900" style={{ fontFamily: "var(--heading-font)" }}>{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mb-20">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow"><span className="eyebrow-dot" /> OUR VALUES</p>
          <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl" style={{ fontFamily: "var(--heading-font)" }}>What Guides Our Work</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <article key={value.title} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_8px_22px_rgba(15,23,42,0.04)]">
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef9ff] text-[#0f766e]"><Sparkles size={18} aria-hidden="true" /></span>
              <h3 className="text-xl font-bold text-slate-900" style={{ fontFamily: "var(--heading-font)" }}>{value.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{value.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mb-20 rounded-[28px] bg-[#101a2f] p-6 text-white shadow-[0_25px_70px_rgba(16,26,47,0.18)] sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow text-slate-300"><span className="eyebrow-dot" /> WHY WORK WITH US</p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl" style={{ fontFamily: "var(--heading-font)" }}>A Practical Approach to Your Technology Needs</h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-200">
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#dfeaff] text-[#173f8d]"><Check size={14} aria-hidden="true" /></span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-20 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:p-8 lg:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow"><span className="eyebrow-dot" /> PORTFOLIO</p>
            <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl" style={{ fontFamily: "var(--heading-font)" }}>See Our Work in Action</h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">Explore selected e-commerce projects and digital experiences that demonstrate the types of platforms and solutions we work with.</p>
          </div>
          <Link to="/portfolio" className="button-primary w-fit">
            View Our Portfolio <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="rounded-[28px] bg-[#eef3ff] p-6 text-slate-900 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8 lg:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-slate-600"><span className="eyebrow-dot" /> LET&apos;S TALK</p>
            <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl" style={{ fontFamily: "var(--heading-font)" }}>Let&apos;s Build Something Valuable</h2>
            <p className="mt-4 text-base leading-8 text-slate-700 sm:text-lg">Have an idea, an existing platform that needs improvement, or a technical challenge to solve? Let&apos;s discuss your requirements and explore a practical way forward.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to={contactHref({ intent: "project" })} className="button-primary">
              Start a Project <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <Link to={contactHref()} className="button-secondary">
              Contact Us <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;