import Breadcrumb from "../components/Breadcrumb";
import Allworks from "../components/AllWorks";
import Footer from "../components/Footer";

const PortfolioPage = () => {
  return (
    <main className="bg-white">
      {/* Dynamic Breadcrumb with the black/red glow background */}
      <Breadcrumb title="Portfolio" />

        <div class="mb-30">
            {/* The White Content Section */}
            <Allworks /> 
        </div>
            
      
      {/* Optional: You can add the FunFacts here too if you want to match the demo */}
      <Footer />
    </main>
  );
};

export default PortfolioPage;