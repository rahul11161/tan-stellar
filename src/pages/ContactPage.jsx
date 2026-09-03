import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import contactImg from "../assets/contact-image.jpg"; // Use the girl with the tablet image
import Footer from "../components/Footer"

const ContactPage = () => {
  const contactInfo = [
    { 
      title: "Contact With Phone Number", 
      icon: <Phone className="w-6 h-6" />, 
      details: ["+057 254 365 456", "+856 325 652 984"] 
    },
    { 
      title: "Email Address", 
      icon: <Mail className="w-6 h-6" />, 
      details: ["admin@gmail.com", "example@gmail.com"] 
    },
    { 
      title: "Location", 
      icon: <MapPin className="w-6 h-6" />, 
      details: ["5678 Bangla Main Road, cities 580", "GBnagla, example 54786"] 
    },
  ];

  return (
    <main className="bg-white">
      {/* 1. Header Section */}
      <Breadcrumb title="Contact Us" />

      {/* 2. Contact Info Cards */}
      <section className="py-24 px-10 md:px-20 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-12 rounded-xl shadow-sm border border-gray-100 flex flex-col items-start hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#f8f9fc] flex items-center justify-center text-[#f9004d] mb-8">
                  {info.icon}
                </div>
                <h4 className="text-xl font-bold text-[#1f1f1f] mb-6">{info.title}</h4>
                {info.details.map((line, i) => (
                  <p key={i} className="text-gray-500 text-lg">{line}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Contact Form Section */}
      <section className="py-24 px-10 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Form Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-5xl font-bold text-[#1f1f1f] mb-6">Contact Us.</h2>
            <p className="text-gray-500 text-lg mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate aperiam neque.
            </p>
            
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-4 border border-gray-200 rounded-md focus:outline-none focus:border-[#f9004d] transition-colors" />
              <input type="email" placeholder="Your Email" className="w-full p-4 border border-gray-200 rounded-md focus:outline-none focus:border-[#f9004d] transition-colors" />
              <input type="text" placeholder="Phone Number" className="w-full p-4 border border-gray-200 rounded-md focus:outline-none focus:border-[#f9004d] transition-colors" />
              <input type="text" placeholder="Subject" className="w-full p-4 border border-gray-200 rounded-md focus:outline-none focus:border-[#f9004d] transition-colors" />
              <textarea placeholder="Your Message" rows="4" className="w-full p-4 border border-gray-200 rounded-md focus:outline-none focus:border-[#f9004d] transition-colors resize-none"></textarea>
              <button className="bg-[#f9004d] text-white px-10 py-4 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-[#d80042] transition-colors">
                Submit Now
              </button>
            </form>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <img 
              src={contactImg} 
              alt="Contact" 
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>

        </div>
      </section>
      <div class="mt-20">
        <Footer />
      </div>
      
    </main>
  );
};

export default ContactPage;