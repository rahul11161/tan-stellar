import Breadcrumb from "../components/Breadcrumb";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import WorkBanner from "../components/WorkBanner";

const AboutPage = () => {
  return (
    <main className="bg-white">
      {/* Dynamic Breadcrumb with the black/red glow background */}
      <Breadcrumb title="About Us" />
     
        {/* The White Content Section */}
        <AboutSection />

      <div class="mb-30">
        {/* New Banner Section */}
        <WorkBanner />
      </div>
      
      
      {/* Optional: You can add the FunFacts here too if you want to match the demo */}
      <Footer />
    </main>
  );
};

export default AboutPage;