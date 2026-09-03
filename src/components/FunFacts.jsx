import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [count, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const FunFacts = () => {
  const facts = [
    { target: 199, label: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those." },
    { target: 575, label: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those." },
    { target: 69, label: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those." }
  ];

  return (
    <section className="py-24 px-10 bg-white text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#1f1f1f] mb-20">Our Fun Facts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {facts.map((fact, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              {/* Animated Number */}
              <div className="text-7xl md:text-8xl font-black text-[#f9004d] mb-6 flex">
                <Counter value={fact.target} />
                <span>+</span>
              </div>
              
              {/* Description */}
              <p className="text-gray-500 text-lg leading-relaxed max-w-xs mx-auto">
                {fact.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFacts;