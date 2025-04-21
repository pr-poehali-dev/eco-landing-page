import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="about" className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="inline-block text-designer-primary font-medium mb-3">
              Веб-дизайнер
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-designer-dark mb-6 leading-tight">
              Создаю уникальные <br /> 
              <span className="text-designer-primary">дизайн-решения</span> <br />
              для вашего бизнеса
            </h1>
            <p className="text-gray-600 mb-8 md:pr-12 leading-relaxed">
              Я Елена, опытный веб-дизайнер, и предлагаю создать для вас уникальный сайт,
              который привлечет новых клиентов и повысит узнаваемость вашего бренда.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-designer-primary hover:bg-designer-dark group">
                <a href="#portfolio">
                  Смотреть работы <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-designer-primary text-designer-primary hover:bg-designer-secondary/20">
                <a href="#contact">Связаться со мной</a>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-designer-primary/20 blur-xl"></div>
              <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-full border-4 border-designer-secondary/50 shadow-xl">
                <img
                  src="https://cdn.poehali.dev/files/50d3508b-a562-4f25-8684-fd0ebe6b32a1.jpg"
                  alt="Елена - веб-дизайнер"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
