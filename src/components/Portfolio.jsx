import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";
import projects from "./projectData";

const Portfolio = () => {
  return (
    <section id="work" className="section-shell section-work px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">LIVE STOREFRONT REFERENCES</p>
            <h2>Selected Projects</h2>
            <p>Selected online stores across Magento / Adobe Commerce and Shopify. Listings describe each site without inferring individual contributions.</p>
          </div>
          <Link to="/portfolio" className="text-link shrink-0">Explore portfolio <ArrowUpRight size={15} /></Link>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.filter((project) => project.image).slice(0, 3).map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;