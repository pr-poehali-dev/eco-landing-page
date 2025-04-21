import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Services from "@/components/portfolio/Services";
import Portfolio from "@/components/portfolio/Portfolio";
import Process from "@/components/portfolio/Process";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-designer-light">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
