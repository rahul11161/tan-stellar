import { motion } from "framer-motion";
import bannerImg from "../assets/finding-us-01.png"; // Use the image from your screenshot

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
          className="absolute inset-0 md:inset-auto md:top-20 md:left-20 w-full md:w-[600px] h-full md:h-[450px] bg-[#222023]/90 backdrop-blur-sm p-12 md:p-20 flex flex-col justify-center rounded-none md:rounded-2xl"
        >
          <h2 className="text-[#f9004d] text-4xl md:text-5xl font-bold mb-8">
            Find Your Work Now
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-12">
            It is a long established fact that a reader will be distracted by the 
            readable content of a page when looking at its layout. The point of 
            using Lorem Ipsum is that.
          </p>

          <button className="w-fit border border-white/40 text-white px-10 py-4 rounded-md font-bold hover:bg-[#f9004d] hover:border-[#f9004d] transition-all duration-300 uppercase tracking-widest text-sm">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkBanner;