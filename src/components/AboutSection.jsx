import { motion } from "framer-motion";
import aboutImg from "../assets/about-3.jpg"; // Make sure to add your image here

const AboutSection = () => {
  return (
    <section className="py-24 px-10 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        
        {/* LEFT SIDE: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <div className="relative">
            <img 
              src={aboutImg} 
              alt="About Us" 
              className="w-full h-[600px] object-cover rounded-xl shadow-2xl"
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-6xl font-bold text-[#1f1f1f] mb-8">About</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-12">
            There are many variations of passages of Lorem Ipsum available, but the 
            majority have suffered alteration in some form, by injected humour, or 
            randomised words which dont look even slightly believable.
          </p>

          {/* Sub-grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-2xl font-bold text-[#1f1f1f] mb-4">Who we are</h4>
              <p className="text-gray-500 leading-relaxed">
                There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-[#1f1f1f] mb-4">Who we are</h4>
              <p className="text-gray-500 leading-relaxed">
                There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;