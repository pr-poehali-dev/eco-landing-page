import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-eco-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-white text-2xl font-bold">ЭкоЕда</span>
              <span className="text-eco-accent">🌱</span>
            </div>
            <p className="text-gray-300 mb-4">
              Натуральные продукты для здорового образа жизни прямо с эко фермы на ваш стол.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-eco-accent transition-colors">
                <span className="sr-only">Facebook</span>
                📱
              </a>
              <a href="#" className="text-white hover:text-eco-accent transition-colors">
                <span className="sr-only">Instagram</span>
                📸
              </a>
              <a href="#" className="text-white hover:text-eco-accent transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-eco-accent transition-colors">Главная</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-eco-accent transition-colors">О нас</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-eco-accent transition-colors">Продукты</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-eco-accent transition-colors">Преимущества</a></li>
              <li><a href="#" className="text-gray-300 hover:text-eco-accent transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Продукты</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-eco-accent transition-colors">Овощи</a></li>
              <li><a href="#" className="text-gray-300 hover:text-eco-accent transition-colors">Фрукты</a></li>
              <li><a href="#" className="text-gray-300 hover:text-eco-accent transition-colors">Злаки</a></li>
              <li><a href="#" className="text-gray-300 hover:text-eco-accent transition-colors">Молочная продукция</a></li>
              <li><a href="#" className="text-gray-300 hover:text-eco-accent transition-colors">Эко-наборы</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Подписка на новости</h3>
            <p className="text-gray-300 mb-4">
              Подпишитесь на нашу рассылку и получайте новости о сезонных продуктах и скидках.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Ваш email" 
                className="bg-eco-dark border-gray-600 text-white placeholder:text-gray-400"
              />
              <Button className="bg-eco-primary hover:bg-eco-accent text-white">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ЭкоЕда. Все права защищены.
            </p>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-eco-accent transition-colors">Условия использования</a>
              <a href="#" className="hover:text-eco-accent transition-colors">Политика конфиденциальности</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;