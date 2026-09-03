import { motion } from "framer-motion";
import { Cast, Layers, Users, Monitor } from "lucide-react"; // Matching icons

const Service = () => {
  const services = [
    { 
      title: "Business Strategy", 
      desc: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
      icon: <Cast className="w-10 h-10" />
    },
    { 
      title: "Website Development", 
      desc: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
      icon: <Layers className="w-10 h-10" />
    },
    { 
      title: "Marketing & Reporting", 
      desc: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
      icon: <Users className="w-10 h-10" />
    },
    { 
      title: "Mobile App Development", 
      desc: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
      icon: <Monitor className="w-10 h-10" />
    }
  ];

  return (
    <section className="py-24 px-10 md:px-20 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Left Side: Header Content */}
        <div className="lg:w-1/3">
          <h2 className="text-6xl font-bold text-[#1f1f1f] mb-8">Services</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
          </p>
          <a href="#" className="text-[#1f1f1f] font-bold border-b-2 border-[#f9004d] pb-1 hover:text-[#f9004d] transition-colors">
            Request Custom Service
          </a>
        </div>

        {/* Right Side: 2x2 Grid */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-12 rounded-lg transition-all duration-500 bg-transparent hover:bg-gradient-to-br hover:from-[#f9004d] hover:to-[#ff4b2b] group cursor-pointer hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-[#f9004d] group-hover:text-white mb-6 transition-colors duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-[#1f1f1f] group-hover:text-white transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Service;