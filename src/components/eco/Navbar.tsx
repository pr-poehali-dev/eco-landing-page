import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-eco-light">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-eco-primary text-2xl font-bold">ЭкоЕда</span>
            <span className="text-eco-secondary">🌱</span>
          </div>
          
          {/* Десктопное меню */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-gray-700 hover:text-eco-primary transition-colors">О нас</a>
            <a href="#products" className="text-gray-700 hover:text-eco-primary transition-colors">Продукты</a>
            <a href="#benefits" className="text-gray-700 hover:text-eco-primary transition-colors">Преимущества</a>
            <Button variant="outline" className="border-eco-primary text-eco-primary hover:bg-eco-light">
              Каталог
            </Button>
            <Button className="bg-eco-primary hover:bg-eco-dark text-white">
              Заказать
            </Button>
          </div>
          
          {/* Мобильная кнопка меню */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <a 
              href="#about" 
              className="block text-gray-700 hover:text-eco-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </a>
            <a 
              href="#products" 
              className="block text-gray-700 hover:text-eco-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Продукты
            </a>
            <a 
              href="#benefits" 
              className="block text-gray-700 hover:text-eco-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Преимущества
            </a>
            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="outline" className="border-eco-primary text-eco-primary hover:bg-eco-light w-full">
                Каталог
              </Button>
              <Button className="bg-eco-primary hover:bg-eco-dark text-white w-full">
                Заказать
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;