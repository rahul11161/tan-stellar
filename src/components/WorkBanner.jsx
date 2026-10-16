import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import bannerImg from "../assets/finding-us-01.png"; // Use the image from your screenshot
import { contactHref } from "../data/contactOptions";

const WorkBanner = () => {
  return (
    <section className="py-10 px-10 md:px-20 bg-white">
      <div 
        className="max-w-7xl mx-auto h-[600px] rounded-3xl overflow-hidden relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        {/* The Dark Floating Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="work-banner-copy absolute inset-0 md:inset-auto md:top-20 md:left-20 w-full md:w-[600px] h-full md:h-[450px] backdrop-blur-sm p-12 md:p-20 flex flex-col justify-center rounded-none md:rounded-2xl"
        >
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Have a Project in Mind?
          </h2>
          
          <p className="mb-8 mt-5 text-lg leading-relaxed text-slate-600">
            Tell us what you want to build, improve, or connect. We&apos;ll help you explore a practical next step.
          </p>

          <Link to={contactHref({ intent: "project" })} className="button-primary w-fit">
            Start a Project <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkBanner;