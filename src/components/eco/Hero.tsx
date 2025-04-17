import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-eco-light py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-eco-dark mb-4">
              Натуральные <span className="text-eco-primary">эко продукты</span> для здоровой жизни
            </h1>
            <p className="text-gray-700 text-lg mb-8 max-w-lg">
              Мы выращиваем и доставляем натуральные продукты без химикатов и ГМО прямо с фермы на ваш стол — здоровое питание стало проще!
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button className="bg-eco-primary hover:bg-eco-dark text-white px-8 py-6 text-lg">
                Заказать сейчас
              </Button>
              <Button variant="outline" className="border-eco-primary text-eco-primary hover:bg-eco-light px-8 py-6 text-lg">
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/placeholder.svg" 
                alt="Свежие эко продукты" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-lg p-4 shadow-md md:flex items-center hidden">
              <span className="text-eco-primary text-3xl mr-3">🥦</span>
              <div>
                <p className="font-bold text-eco-dark">100% Органик</p>
                <p className="text-sm text-gray-600">Сертифицированные продукты</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}></div>
    </section>
  );
};

export default Hero;