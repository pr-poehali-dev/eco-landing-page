import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="О нашей ферме" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-eco-primary text-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-3xl font-bold">10+ лет</p>
                <p className="text-sm">опыта в органическом земледелии</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <span className="text-eco-primary font-semibold">О нас</span>
            <h2 className="text-3xl md:text-4xl font-bold text-eco-dark mt-2 mb-4">
              Наша миссия — обеспечить вас натуральными продуктами
            </h2>
            <p className="text-gray-600 mb-6">
              Мы — команда энтузиастов, которые верят в силу природы и экологически чистого питания. 
              Наша ферма расположена в экологически чистом районе, где мы выращиваем овощи, фрукты и злаки 
              в соответствии с принципами органического земледелия.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start">
                <div className="mr-3 text-eco-primary">🌾</div>
                <div>
                  <h3 className="font-semibold text-eco-dark">Органическое земледелие</h3>
                  <p className="text-gray-600 text-sm">Без химикатов и ГМО</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-3 text-eco-primary">🚚</div>
                <div>
                  <h3 className="font-semibold text-eco-dark">Прямые поставки</h3>
                  <p className="text-gray-600 text-sm">От фермы до вашего стола</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-3 text-eco-primary">🌍</div>
                <div>
                  <h3 className="font-semibold text-eco-dark">Забота об экологии</h3>
                  <p className="text-gray-600 text-sm">Сохраняем природные ресурсы</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-3 text-eco-primary">❤️</div>
                <div>
                  <h3 className="font-semibold text-eco-dark">Здоровье семьи</h3>
                  <p className="text-gray-600 text-sm">Полезные продукты для всех</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-eco-primary hover:bg-eco-dark text-white">
              Подробнее о нас
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;