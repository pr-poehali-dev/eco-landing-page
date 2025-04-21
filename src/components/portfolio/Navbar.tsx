import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl md:text-2xl font-semibold text-designer-dark">
            Елена<span className="text-designer-primary">.design</span>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-designer-dark hover:text-designer-primary transition-colors">
              Обо мне
            </a>
            <a href="#services" className="text-designer-dark hover:text-designer-primary transition-colors">
              Услуги
            </a>
            <a href="#portfolio" className="text-designer-dark hover:text-designer-primary transition-colors">
              Портфолио
            </a>
            <a href="#process" className="text-designer-dark hover:text-designer-primary transition-colors">
              Процесс
            </a>
            <Button asChild>
              <a href="#contact" className="bg-designer-primary hover:bg-designer-dark text-white transition-colors">
                Связаться
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-designer-dark" />
            ) : (
              <Menu className="h-6 w-6 text-designer-dark" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#about"
              className="text-designer-dark hover:text-designer-primary transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Обо мне
            </a>
            <a
              href="#services"
              className="text-designer-dark hover:text-designer-primary transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Услуги
            </a>
            <a
              href="#portfolio"
              className="text-designer-dark hover:text-designer-primary transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Портфолио
            </a>
            <a
              href="#process"
              className="text-designer-dark hover:text-designer-primary transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Процесс
            </a>
            <Button
              asChild
              className="w-full bg-designer-primary hover:bg-designer-dark"
              onClick={toggleMobileMenu}
            >
              <a href="#contact">Связаться</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
