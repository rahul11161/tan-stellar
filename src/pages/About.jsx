import { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

const AboutPage = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;

    document.title = "About Tan-Stellar | Web, App & Commerce Services";
    if (description) {
      description.content = "Learn about Tan-Stellar’s approach to web development, e-commerce, custom software, API integrations, and ongoing technical support.";
    }

    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.content = previousDescription;
    };
  }, []);

  return (
    <main className="bg-[#f3f6fb]">
      <Breadcrumb title="About Us" />
      <AboutSection />
      <Footer />
    </main>
  );
};

export default AboutPage;