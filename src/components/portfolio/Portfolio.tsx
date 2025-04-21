import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";

// Портфолио данные
const portfolioItems = [
  {
    id: 1,
    title: "Дизайн книги",
    category: "branding",
    imageUrl: "https://cdn.poehali.dev/files/305d2be4-476f-4b40-94ad-7ab378bbd60d.jpeg",
    description: "Оформление книги с элементами классического стиля"
  },
  {
    id: 2,
    title: "SPA салон",
    category: "web",
    imageUrl: "https://cdn.poehali.dev/files/58f54299-b2df-4421-a5d1-62f062a75301.jpeg",
    description: "Рекламный баннер для SPA-салона с акцентом на романтические пакеты"
  },
  {
    id: 3,
    title: "Мастер-класс по керамике",
    category: "ui",
    imageUrl: "https://cdn.poehali.dev/files/ab721b73-7b18-490c-976f-0063fe1cb8a8.jpeg",
    description: "Лендинг для мастер-класса по гончарному искусству"
  },
  {
    id: 4,
    title: "Дизайн интерфейса приложения",
    category: "ui",
    imageUrl: "/placeholder.svg",
    description: "Современный интерфейс мобильного приложения"
  },
  {
    id: 5,
    title: "Корпоративный сайт",
    category: "web",
    imageUrl: "/placeholder.svg",
    description: "Многостраничный сайт для IT компании"
  },
  {
    id: 6,
    title: "Логотип бренда одежды",
    category: "branding",
    imageUrl: "/placeholder.svg",
    description: "Минималистичный логотип для модного бренда"
  }
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems = activeTab === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-designer-primary font-medium mb-3">
            Последние проекты
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-designer-dark mb-4">
            Мое портфолио
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ознакомьтесь с моими последними работами. Посмотрите полное портфолио на{" "}
            <a 
              href="https://pin.it/6Ew5eP29Z" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-designer-primary hover:underline"
            >
              Pinterest
            </a>
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center">
            <TabsList className="bg-designer-secondary/30">
              <TabsTrigger 
                value="all" 
                onClick={() => setActiveTab("all")}
                className="data-[state=active]:bg-designer-primary data-[state=active]:text-white"
              >
                Все проекты
              </TabsTrigger>
              <TabsTrigger 
                value="web" 
                onClick={() => setActiveTab("web")}
                className="data-[state=active]:bg-designer-primary data-[state=active]:text-white"
              >
                Веб-дизайн
              </TabsTrigger>
              <TabsTrigger 
                value="ui" 
                onClick={() => setActiveTab("ui")}
                className="data-[state=active]:bg-designer-primary data-[state=active]:text-white"
              >
                UI/UX
              </TabsTrigger>
              <TabsTrigger 
                value="branding" 
                onClick={() => setActiveTab("branding")}
                className="data-[state=active]:bg-designer-primary data-[state=active]:text-white"
              >
                Брендинг
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div 
                  key={item.id} 
                  className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-white font-semibold text-xl mb-1">{item.title}</h3>
                      <p className="text-white/80 text-sm mb-4">{item.description}</p>
                      <Button variant="outline" size="sm" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                        <ExternalLink className="h-4 w-4 mr-2" /> Подробнее
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Button asChild variant="outline" className="border-designer-primary text-designer-primary hover:bg-designer-secondary/20">
            <a 
              href="https://pin.it/6Ew5eP29Z" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Смотреть больше работ на Pinterest
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
