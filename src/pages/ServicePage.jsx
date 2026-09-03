import { motion } from "framer-motion";
import { Cast, Layers, Users, Monitor, Shield, Zap } from "lucide-react";
import Footer from "../components/Footer.jsx";
import Breadcrumb from "../components/Breadcrumb";


const ServicePage = () => {
  const services = [
    { title: "Business Strategy", icon: <Cast />, desc: "I throw myself down among the tall grass by the stream as I lie close to the earth." },
    { title: "Website Development", icon: <Layers />, desc: "I throw myself down among the tall grass by the stream as I lie close to the earth." },
    { title: "Marketing & Reporting", icon: <Users />, desc: "I throw myself down among the tall grass by the stream as I lie close to the earth." },
    { title: "Mobile App Development", icon: <Monitor />, desc: "I throw myself down among the tall grass by the stream as I lie close to the earth." },
    { title: "Cyber Security", icon: <Shield />, desc: "I throw myself down among the tall grass by the stream as I lie close to the earth." },
    { title: "Cloud Computing", icon: <Zap />, desc: "I throw myself down among the tall grass by the stream as I lie close to the earth." },
  ];

  return (
    <main className="bg-[#f8f9fc]">
        <div class="mb-10">
            {/* ADD BREADCRUMB AT THE TOP */}
            <Breadcrumb title="Our Service" />
        </div>
        
      {/* Centered Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-20 px-10">
        <h1 className="text-6xl font-black text-[#1f1f1f] mb-6">Creative Agency</h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          There are many variations of passages of Lorem Ipsum available, 
          but the majority have suffered alteration.
        </p>
      </div>

      {/* 3-Column Grid Section */}
      <div className="max-w-7xl mx-auto px-10 mb-60">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-12 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-500 hover:bg-gradient-to-br hover:from-[#f9004d] hover:to-[#ff4b2b] group cursor-pointer hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="text-[#f9004d] group-hover:text-white mb-8 transition-colors duration-300 transform scale-150 origin-left">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1f1f1f] group-hover:text-white transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-500 group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ServicePage;