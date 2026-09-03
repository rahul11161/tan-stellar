import { motion } from "framer-motion";

const AllWorks = () => {
  const projects = [
    { category: "Development", title: "Getting tickets to the big show", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f" },
    { category: "Development", title: "Getting tickets to the big show", img: "https://images.unsplash.com/photo-1558655146-d09347e92766" },
    { category: "Development", title: "Getting tickets to the big show", img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e" },
    { category: "Development", title: "Getting tickets to the big show", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f" },
    { category: "Development", title: "Getting tickets to the big show", img: "https://images.unsplash.com/photo-1558655146-d09347e92766" },
    { category: "Development", title: "Getting tickets to the big show", img: "https://images.unsplash.com/photo-1542744094-24638eff58bb" },
  ];

  return (
    <section className="py-24 px-10 md:px-20 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto">
        
        {/* Centered Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#1f1f1f] mb-6">All Works</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but the 
            majority have suffered alteration.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-[550px] rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={project.img}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={project.title}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>

              {/* Text Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-3">{project.category}</p>
                <h3 className="text-white text-3xl font-bold mb-8 leading-tight group-hover:text-[#f9004d] transition-colors">
                  {project.title}
                </h3>
                <button className="w-fit border border-white/30 text-white px-6 py-2 rounded-md text-xs font-bold uppercase tracking-widest opacity-100 group-hover:bg-[#f9004d] group-hover:border-[#f9004d] transition-all duration-300">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Project Button */}
        <div className="mt-20 text-center">
          <button className="bg-[#f9004d] text-white px-10 py-4 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-[#d80042] transition-colors shadow-lg">
            View More Project
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default AllWorks;