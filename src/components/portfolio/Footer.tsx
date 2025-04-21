import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-designer-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Елена<span className="text-designer-primary">.</span>design
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Создаю уникальные дизайн-решения для вашего бизнеса.
              Современный веб-дизайн, который помогает достигать ваших целей.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Основные разделы</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  Обо мне
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Портфолио
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-300 hover:text-white transition-colors">
                  Процесс работы
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Свяжитесь со мной</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-designer-primary" />
                <a 
                  href="mailto:info@elena-design.ru" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@elena-design.ru
                </a>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-5 h-5 mr-2 text-designer-primary">📱</span>
                <a 
                  href="tel:+79202715633" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +7 920 271 5633
                </a>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-5 h-5 mr-2 text-designer-primary">💬</span>
                <a 
                  href="https://t.me/afnelena" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  @afnelena
                </a>
              </li>
            </ul>
            
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-400 text-sm">
          <p>© {currentYear} Елена.design | Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
