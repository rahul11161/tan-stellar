import Hero from "../components/Hero";
import Service from "../components/Service";
import Portfolio from "../components/Portfolio";
import FunFacts from "../components/FunFacts";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden bg-[#191919]">
      {/* 1. The main big opening section */}
      <Hero />

      {/* 2. The 3-column service grid */}
      <Service />

      {/* 3. The image gallery section */}
      <Portfolio />
      <div className="bg-white pb-40">
        <FunFacts />
      </div>
      {/* 4. Quick Contact/Footer Section */}
      {/* <footer className="bg-[#1d1d1d] py-20 text-center border-t border-white/5">
        <h2 className="text-white text-3xl font-bold mb-8">
          Ready to start a project?
        </h2>
        <button className="bg-[#f9004d] text-white px-12 py-4 rounded-full font-bold hover:scale-110 transition duration-300">
          LET'S TALK
        </button>
        <p className="mt-10 text-gray-500 text-sm">
          © 2026 Trydo Clone. Built on Ubuntu with React.
        </p>
      </footer> */}

      <Footer />
    </div>
  );
};

export default Home;