import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Breadcrumb = ({ title }) => {
  const location = useLocation();
  
  // Get the path name (e.g., "/service" becomes "Service")
  const pathName = location.pathname.split("/").filter((x) => x);
  const breadcrumbText = pathName.length > 0 ? pathName[0].charAt(0).toUpperCase() + pathName[0].slice(1) : "";

  return (
    <section className="relative h-[450px] flex items-center justify-center bg-[#191919] overflow-hidden">
      {/* Background Decorative Element (Trydo style) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-[#f9004d] blur-[150px] rounded-full animate-pulse"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        {/* Large Page Title */}
        <h1 className="text-white text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">
          {title || breadcrumbText}
        </h1>

        {/* Path Links */}
        <div className="flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-widest">
          <Link to="/" className="text-gray-400 hover:text-[#f9004d] transition-colors">
            Home
          </Link>
          <span className="text-[#f9004d]">/</span>
          <span className="text-white">{breadcrumbText || title}</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Breadcrumb;