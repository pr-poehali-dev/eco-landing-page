import Navbar from "@/components/eco/Navbar";
import Hero from "@/components/eco/Hero";
import About from "@/components/eco/About";
import Products from "@/components/eco/Products";
import Benefits from "@/components/eco/Benefits";
import Testimonials from "@/components/eco/Testimonials";
import CallToAction from "@/components/eco/CallToAction";
import Footer from "@/components/eco/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Benefits />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;