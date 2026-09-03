import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      category: "Development",
      title: "Getting tickets to the big show",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    },
    {
      category: "Design",
      title: "Creative Agency Branding",
      img: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
    },
    {
      category: "Digital",
      title: "Modern UI/UX Concept",
      img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
    },
    {
      category: "Marketing",
      title: "Strategy for Startups",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
  ];

  return (
    <section className="py-24 px-10 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-6xl font-black text-[#1f1f1f] mb-6">Our Works</h2>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-[450px] rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* Main Image */}
              <img
                src={project.img}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Content Layer */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">
                  {project.category}
                </p>
                <h3 className="text-white text-2xl font-bold mb-6 leading-tight group-hover:text-[#f9004d] transition-colors">
                  {project.title}
                </h3>
                
                {/* Case Study Button - Slides up on hover */}
                <motion.button 
                  className="w-fit border border-white/30 text-white px-6 py-2 rounded-md text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:border-[#f9004d] transition-all duration-300"
                >
                  Case Study
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;