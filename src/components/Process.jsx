import { ArrowRight, CheckCircle2, Compass, FileSearch, FlaskConical, Layers3, Rocket, Workflow } from "lucide-react";
import processImage from "../assets/finding-us-01.png";

const steps = [
  { title: "Discovery", detail: "Understand business goals, users, and requirements.", icon: FileSearch },
  { title: "Planning", detail: "Define scope, priorities, technology, and milestones.", icon: Compass },
  { title: "Design", detail: "Structure user journeys and interface requirements.", icon: Layers3 },
  { title: "Development", detail: "Implement features and integrations in clear steps.", icon: Workflow },
  { title: "Testing", detail: "Verify usability, functionality, and quality.", icon: FlaskConical },
  { title: "Deployment & Support", detail: "Release the solution and provide agreed support.", icon: Rocket },
];

const Process = () => (
  <section className="section-shell section-process px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
    <div className="process-image-backdrop" aria-hidden="true">
      <img src={processImage} alt="" />
    </div>
    <div className="process-image-shade" aria-hidden="true" />
    <div className="process-image-panel mx-auto max-w-7xl">
      <div className="section-heading mb-10 max-w-2xl">
        <p className="eyebrow">OUR DEVELOPMENT APPROACH</p>
        <h2 id="process-heading">A clear path from idea to launch.</h2>
        <p>Each engagement is shaped around its needs, with clear checkpoints and a shared understanding of what comes next.</p>
      </div>
      <ol className="process-grid">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <li key={step.title} className="process-step">
              <div className="process-topline"><span>0{index + 1}</span>{index < steps.length - 1 && <ArrowRight size={15} aria-hidden="true" />}</div>
              <span className="process-icon"><Icon size={21} strokeWidth={1.7} aria-hidden="true" /></span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
              {index === steps.length - 1 && <CheckCircle2 className="process-finish" size={17} aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </div>
  </section>
);

export default Process;