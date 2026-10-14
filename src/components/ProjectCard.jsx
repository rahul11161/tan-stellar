import { motion } from "framer-motion";
import { ExternalLink, ImageOff } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true, amount: 0.15 }}
      className="project-card"
    >
      <a
        className={`project-preview ${project.image ? "has-screenshot" : "preview-unavailable"}`}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.name} live website in a new tab`}
      >
        {project.image ? (
          <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" />
        ) : (
          <span className="preview-fallback" role="img" aria-label={`Screenshot unavailable for ${project.name}`}>
            <ImageOff size={24} aria-hidden="true" />
            <span>Preview unavailable</span>
            <small>Live site access is restricted</small>
          </span>
        )}
        <span className="project-preview-link" aria-hidden="true"><ExternalLink size={16} /></span>
      </a>
      <div className="project-info">
        <div className="project-info-heading">
          <p className="project-category">{project.category}</p>
          <span className="project-platform">{project.platform}</span>
        </div>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <a className="project-visit-link" href={project.url} target="_blank" rel="noopener noreferrer">
          Visit Live Website <ExternalLink size={15} aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
};

export { ProjectCard };