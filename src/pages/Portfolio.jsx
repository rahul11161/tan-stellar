import { useEffect } from "react";
import Allworks from "../components/AllWorks";
import Footer from "../components/Footer";

const PortfolioPage = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;

    document.title = "E-commerce Project Portfolio | Tan-Stellar";
    if (description) {
      description.content = "Explore real e-commerce storefront references across Magento / Adobe Commerce and Shopify with Tan-Stellar.";
    }

    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.content = previousDescription;
    };
  }, []);

  return (
    <main className="portfolio-page">
      <Allworks />
      <Footer
        ctaEyebrow="YOUR NEXT STORE STARTS WITH A CONVERSATION"
        ctaTitle="Planning Your Next E-commerce Project?"
        ctaDescription="Whether you are launching a new online store, improving an existing platform, or integrating business systems, let's discuss a solution that fits your requirements."
      />
    </main>
  );
};

export default PortfolioPage;