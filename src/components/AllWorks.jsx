import { useState } from "react";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";
import projects from "./projectData";

const categories = ["All Projects", "Magento / Adobe Commerce", "Shopify"];

const AllWorks = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const filteredProjects = activeCategory === categories[0]
    ? projects
    : projects.filter((project) => project.platform === activeCategory);

  return (
    <>
      <section className="portfolio-hero px-5 pb-12 pt-32 sm:px-8 lg:px-12 lg:pb-16 lg:pt-36">
        <div className="portfolio-hero-content mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="eyebrow"><span className="eyebrow-dot" /> OUR WORK</p>
            <h1>Real Projects. Practical Solutions. Digital Experiences.</h1>
            <p>Explore selected e-commerce projects spanning Magento / Adobe Commerce and Shopify. These projects represent experience with online storefronts, product catalogs, shopping experiences, and business-focused e-commerce solutions.</p>
            <p className="portfolio-context-note">Project listings are live storefront references. Descriptions cover each site&apos;s business category and do not assert individual responsibilities, implementation details, or outcomes.</p>
            <div className="portfolio-hero-actions">
              <Link to="/contact" className="button-primary">Discuss Your Project <ArrowUpRight size={16} aria-hidden="true" /></Link>
              <a href="#projects" className="button-secondary">Explore Projects <ArrowDown size={16} aria-hidden="true" /></a>
            </div>
          </div>
          <aside className="portfolio-platform-summary" aria-label="Project platform categories">
            <p>PLATFORM EXPERIENCE</p>
            <div><span className="platform-summary-icon"><Check size={15} aria-hidden="true" /></span><span><strong>Magento / Adobe Commerce</strong><small>{projects.filter((project) => project.platform === "Magento / Adobe Commerce").length} live project references</small></span></div>
            <div><span className="platform-summary-icon"><Check size={15} aria-hidden="true" /></span><span><strong>Shopify</strong><small>{projects.filter((project) => project.platform === "Shopify").length} live project reference</small></span></div>
          </aside>
        </div>
      </section>

      <section id="projects" className="portfolio-projects-section px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="portfolio-projects-heading">
            <div>
              <p className="eyebrow">ECOMMERCE REFERENCES</p>
              <h2>Selected Storefronts</h2>
            </div>
            <p>Descriptions are business-category summaries; verified personal contributions are not listed.</p>
          </div>
          <div className="portfolio-filters" role="group" aria-label="Filter projects by platform">
            {categories.map((category) => {
              const count = category === categories[0]
                ? projects.length
                : projects.filter((project) => project.platform === category).length;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}<span>{count}</span>
                </button>
              );
            })}
          </div>
          <div className="portfolio-project-grid" aria-live="polite">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllWorks;