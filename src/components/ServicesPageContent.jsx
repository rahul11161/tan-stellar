import {
  ArrowDown,
  ArrowUpRight,
  Blocks,
  Check,
  Code2,
  Globe,
  LayoutDashboard,
  Link2,
  PlugZap,
  ShieldCheck,
  Smartphone,
  Store,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Process from "./Process";
import Service from "./Service";
import WhyChoose from "./WhyChoose";

const commerceCapabilities = [
  {
    id: "adobe-commerce",
    title: "Adobe Commerce / Magento 2",
    intro: "Extend your commerce platform around your catalog, team, and customer experience.",
    icon: Store,
    items: [
      "Custom modules and changes to existing functionality",
      "Themes, storefront implementation, and third-party extension integration",
      "REST API connections and admin workflows for day-to-day operations",
      "Extension maintenance, compatibility checks, upgrades, and migrations where applicable",
    ],
  },
  {
    id: "store-development",
    title: "E-commerce store development",
    intro: "Create a practical shopping experience for your products and the way you sell them.",
    icon: LayoutDashboard,
    items: [
      "New store builds, catalogs, categories, product attributes, and pricing rules",
      "Cart and checkout improvements with payment and shipping integrations",
      "Customer account and order-management enhancements",
      "Responsive storefronts and multi-store or multi-website configuration when required",
    ],
  },
  {
    id: "commerce-optimization",
    title: "Performance, security & optimization",
    intro: "Investigate friction in the existing implementation and prioritize changes that fit its infrastructure.",
    icon: ShieldCheck,
    items: [
      "Review page loading, caching, database behavior, and indexing",
      "Troubleshoot production issues and search, catalog, or checkout bottlenecks",
      "Apply secure development practices and review upgrade compatibility",
      "Optimization opportunities depend on the current implementation and hosting environment",
    ],
  },
  {
    id: "commerce-integrations",
    title: "Integrations & ongoing support",
    intro: "Keep commerce data moving between the services your business already relies on.",
    icon: PlugZap,
    items: [
      "ERP, CRM, inventory, and order-management integrations",
      "Payment, shipping, and other third-party service connections",
      "REST API development, integration debugging, and provider troubleshooting",
      "Bug fixes, maintenance, feature enhancements, consultation, and code-quality improvements",
    ],
  },
];

const otherServices = [
  {
    id: "website",
    number: "01",
    title: "Website Development",
    description: "Build or modernize a website that explains what you do, reflects your brand, and makes the next step clear to prospective customers.",
    icon: Globe,
    capabilities: ["Business and corporate sites", "Responsive marketing pages", "CMS and content management", "Redesigns and third-party integrations", "Performance, accessibility, and SEO fundamentals"],
    useCase: "A company site, campaign landing page, or content-led website that needs a more useful customer journey.",
    value: "Support brand credibility, customer engagement, and business enquiries with a site your team can maintain.",
  },
  {
    id: "mobile",
    number: "02",
    title: "Mobile Application Development",
    description: "Create mobile experiences that put useful services within reach, with the platform approach agreed around your users and requirements.",
    icon: Smartphone,
    capabilities: ["Android and iOS project planning", "Customer-facing applications", "Booking and appointment flows", "API-connected features and account access", "Push notifications and supported third-party integrations", "Testing, maintenance, and enhancements"],
    useCase: "A customer portal, appointment experience, or mobile companion for an existing digital service.",
    value: "Give customers a convenient way to complete key tasks and keep using your service.",
  },
  {
    id: "software",
    number: "03",
    title: "Custom Software Development",
    description: "Shape practical internal tools around the workflows, information, and decisions that are specific to your business.",
    icon: Blocks,
    capabilities: ["Business dashboards and admin panels", "Workflow automation and custom applications", "Data management and reporting interfaces", "Integration with existing systems", "Ongoing feature and maintenance work"],
    useCase: "A team coordinating work across spreadsheets, manual steps, or systems that do not reflect how the business operates.",
    value: "Reduce repetitive work, improve operational visibility, and support business-specific processes.",
  },
  {
    id: "api-support",
    number: "04",
    title: "API Integration & Technical Support",
    description: "Connect services reliably so information can move between tools without adding avoidable manual handoffs.",
    icon: Link2,
    capabilities: ["REST API development and integration", "Third-party service and business-system connections", "Authentication, data mapping, and error handling", "Integration debugging and troubleshooting", "Documentation, handover, and maintenance where supported"],
    useCase: "A website, store, or internal application that needs to exchange data with another business system.",
    value: "Keep teams working from more consistent information and make connected workflows easier to support.",
  },
];

const faqs = [
  {
    question: "Can you customize an existing Magento 2 store?",
    answer: "Yes. We can review the current codebase, theme, installed extensions, and release requirements, then scope custom modules or changes to existing functionality. The safest implementation depends on the store's current architecture and upgrade path.",
  },
  {
    question: "Can you integrate payment gateways and shipping providers?",
    answer: "We can assess and integrate providers that fit the platform and your requirements. The available approach depends on provider documentation, merchant account access, supported regions, and compatibility with the current store.",
  },
  {
    question: "Can you improve an existing website's performance?",
    answer: "We can investigate areas such as page loading, caching, hosting, media, database queries, and third-party scripts. The right work depends on the findings and infrastructure; results are not guaranteed before a technical review.",
  },
  {
    question: "Can you develop a website from scratch?",
    answer: "Yes. We can plan and build a business website or marketing experience from the ground up, including its content structure, responsive layouts, CMS needs, and relevant integrations.",
  },
  {
    question: "Can you connect our website with third-party systems?",
    answer: "Yes. We can review the systems' APIs or other supported connection methods, then plan authentication, data mapping, error handling, and testing around the information that needs to move.",
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Maintenance, bug fixes, compatibility checks, and feature enhancements can be scoped as ongoing work. Monitoring depends on access to the relevant services and the agreed support arrangement.",
  },
  {
    question: "How are project scope, cost, and timing determined?",
    answer: "They depend on your goals, required functionality, integrations, existing infrastructure, and delivery constraints. We first clarify requirements and dependencies, then define a practical scope and estimate for the agreed work.",
  },
];

const ServicesHero = () => (
  <section className="services-hero hero-section px-5 pb-14 pt-32 sm:px-8 lg:px-12 lg:pb-16 lg:pt-36">
    <div className="services-hero-inner mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.82fr] lg:gap-16">
      <div className="services-hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot" /> SERVICES &amp; EXPERTISE</p>
        <h1>Technology Services Designed Around Your Business.</h1>
        <p>From scalable e-commerce platforms to custom digital products, we help businesses turn complex requirements into practical, reliable technology solutions.</p>
        <div className="services-hero-actions">
          <Link to="/contact" className="button-primary">Discuss Your Project <ArrowUpRight size={17} aria-hidden="true" /></Link>
          <a href="#expertise" className="button-secondary">Explore Our Expertise <ArrowDown size={16} aria-hidden="true" /></a>
        </div>
      </div>

      <figure className="services-flow-figure" aria-label="Illustration showing how storefront, integrations, and business operations connect">
        <div className="services-flow-label">CONNECTED DIGITAL PRODUCTS</div>
        <div className="services-flow-map">
          <div className="flow-main-node"><span><Store size={20} aria-hidden="true" /></span><div><strong>Customer experience</strong><small>Storefronts · websites · apps</small></div></div>
          <div className="flow-connector"><span /><span /><span /></div>
          <div className="flow-node-row">
            <div className="flow-node"><Code2 size={17} aria-hidden="true" /><span>Platforms</span></div>
            <div className="flow-node"><PlugZap size={17} aria-hidden="true" /><span>Integrations</span></div>
            <div className="flow-node"><Workflow size={17} aria-hidden="true" /><span>Operations</span></div>
          </div>
        </div>
        <figcaption>Illustrative view of connected service areas</figcaption>
      </figure>
    </div>
  </section>
);

const StorefrontIllustration = () => (
  <figure className="commerce-visual" aria-label="Illustrative responsive storefront interface">
    <div className="commerce-visual-top"><span className="commerce-window-dots"><i /><i /><i /></span><span>ILLUSTRATIVE STOREFRONT</span><span className="commerce-window-menu">MENU</span></div>
    <div className="commerce-storefront">
      <div className="commerce-store-nav"><strong>YOUR STORE</strong><span>New arrivals</span><span>Collections</span><span>About</span><span className="commerce-cart">Cart · 0</span></div>
      <div className="commerce-store-hero">
        <div className="commerce-store-copy"><small>COLLECTION / 01</small><strong>Products,<br />presented well.</strong><span>A storefront shaped around your range and customers.</span><b>Explore the collection <ArrowUpRight size={13} aria-hidden="true" /></b></div>
        <div className="commerce-product-art"><div className="product-art-object product-art-object-one" /><div className="product-art-object product-art-object-two" /><div className="product-art-object product-art-object-three" /></div>
      </div>
      <div className="commerce-store-bottom"><span>PRODUCT DISCOVERY</span><span>RESPONSIVE STOREFRONT</span><span>CONNECTED CHECKOUT</span></div>
    </div>
    <figcaption>Conceptual interface only; not a client project or platform screenshot.</figcaption>
  </figure>
);

const CommerceSection = () => (
  <section id="ecommerce" className="service-page-section commerce-section px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="section-heading mb-10 max-w-3xl">
        <p className="eyebrow">FLAGSHIP CAPABILITY</p>
        <h2>E-commerce Development &amp; Adobe Commerce Solutions</h2>
        <p>Build, customize, improve, and maintain e-commerce platforms around your business requirements. Our work covers the customer-facing store as well as the integrations and admin workflows behind it.</p>
      </div>

      <div className="commerce-feature-layout">
        <div className="commerce-value-panel">
          <span className="commerce-feature-icon"><Store size={21} aria-hidden="true" /></span>
          <h3>A commerce platform that fits the way you operate.</h3>
          <p>From a new online store to a complex Magento 2 implementation, we help make the catalog, checkout, and connected business systems work together.</p>
          <ul>
            <li><Check size={16} aria-hidden="true" /> Customer and admin workflows considered together</li>
            <li><Check size={16} aria-hidden="true" /> Integrations planned around real data and provider constraints</li>
            <li><Check size={16} aria-hidden="true" /> Upgrade and maintenance needs included in technical decisions</li>
          </ul>
          <Link to="/contact" className="text-link">Discuss your commerce platform <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
        <StorefrontIllustration />
      </div>

      <div className="commerce-capability-heading">
        <p className="eyebrow">ONE CONNECTED COMMERCE PRACTICE</p>
        <h3>From platform work to ongoing improvement.</h3>
      </div>
      <div className="commerce-capability-grid">
        {commerceCapabilities.map((capability, index) => {
          const Icon = capability.icon;

          return (
            <article key={capability.id} className="commerce-capability">
              <div className="commerce-capability-top"><span>0{index + 1}</span><Icon size={19} aria-hidden="true" /></div>
              <h4>{capability.title}</h4>
              <p>{capability.intro}</p>
              <ul>{capability.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

const OtherServicesSection = () => (
  <section className="service-page-section other-services-section px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="section-heading mb-10 max-w-3xl">
        <p className="eyebrow">MORE WAYS WE CAN HELP</p>
        <h2>Digital services for the work around your store, too.</h2>
        <p>Choose a focused engagement or combine services when a project needs a wider solution.</p>
      </div>
      <div className="other-service-list">
        {otherServices.map((service) => {
          const Icon = service.icon;

          return (
            <article key={service.id} id={service.id} className="other-service-row">
              <div className="other-service-intro">
                <span className="other-service-number">{service.number}</span>
                <span className="other-service-icon"><Icon size={21} aria-hidden="true" /></span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/contact" className="text-link">Discuss this service <ArrowUpRight size={15} aria-hidden="true" /></Link>
              </div>
              <div className="other-service-details">
                <div className="service-detail-block">
                  <h4>Capabilities</h4>
                  <ul>{service.capabilities.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
                <div className="service-detail-context">
                  <div><h4>Typical fit</h4><p>{service.useCase}</p></div>
                  <div><h4>Business value</h4><p>{service.value}</p></div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

const ServicesFaq = () => (
  <section className="service-page-section services-faq-section px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
      <div className="section-heading self-start">
        <p className="eyebrow">COMMON QUESTIONS</p>
        <h2>Useful details before we begin.</h2>
        <p>Every platform and project has its own constraints. These answers outline how we approach common questions.</p>
        <Link to="/contact" className="text-link mt-6">Talk through your requirements <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </div>
      <div className="service-faq-list">
        {faqs.map((faq) => (
          <details key={faq.question} className="service-faq-item">
            <summary>{faq.question}<ArrowDown size={17} aria-hidden="true" /></summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

const ServicesPageContent = () => (
  <main className="services-page">
    <ServicesHero />
    <div id="expertise"><Service /></div>
    <CommerceSection />
    <OtherServicesSection />
    <Process />
    <WhyChoose />
    <ServicesFaq />
    <Footer
      ctaEyebrow="LET'S TALK ABOUT WHAT'S NEXT"
      ctaTitle="Have a Project or Existing Platform That Needs Improvement?"
      ctaDescription="Tell us what you want to build, improve, or integrate. We’ll help you identify the next practical steps."
    />
  </main>
);

export default ServicesPageContent;