import Hero from "../components/Hero";
import Service from "../components/Service";
import Portfolio from "../components/Portfolio";
import WhyChoose from "../components/WhyChoose";
import Process from "../components/Process";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="overflow-hidden bg-[#f3f6fb] text-slate-900">
      <Hero />
      <Service />
      <WhyChoose />
      <Portfolio />
      <Process />
      <Footer />
    </main>
  );
};

export default Home;