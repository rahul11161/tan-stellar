import { motion } from "framer-motion";
import heroImg from "../assets/agency-hero.png"; // Ensure path is correct
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col md:flex-row bg-[#191919] overflow-hidden">
      
      {/* LEFT SIDE: Content */}
      <div className="w-full md:w-1/2 h-full flex items-center px-10 md:px-20 z-10 bg-[#191919]">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-white text-6xl md:text-8xl font-black leading-tight uppercase tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9004d] via-[#ff4b2b] to-[#f9004d] bg-animate-gradient">
              Creative <br /> Agency.
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg mt-8 leading-relaxed">
            A collective of diverse artists based in Ubuntu, crafting unique digital experiences for the physical and conceptual worlds.
          </p>

          <div className="mt-10">
            <button className="border-2 border-white text-white px-8 py-3 font-bold hover:bg-[#f9004d] hover:border-[#f9004d] transition duration-300 uppercase tracking-widest text-sm">
            <Link to="/contact">Contact Us</Link>
            </button>
          </div>
        </motion.div>
      </div>

      {/* RIGHT SIDE: Image Section */}
      <div 
        className="w-full md:w-1/2 h-full bg-no-repeat bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroImg})`,
          backgroundPosition: 'left center' // This ensures the left side of your image is visible
        }}
      >
        {/* Subtle dark overlay to blend the image with the left side */}
        <div className="w-full h-full bg-gradient-to-r from-[#191919] to-transparent hidden md:block"></div>
      </div>

    </section>
  );
};

export default Hero;