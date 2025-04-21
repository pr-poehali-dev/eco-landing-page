import { Layout, PenTool, Globe, MonitorSmartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <Layout className="h-10 w-10 text-designer-primary" />,
    title: "Веб-дизайн",
    description:
      "Разработка современных и удобных веб-интерфейсов для сайтов, лендингов и онлайн-магазинов."
  },
  {
    icon: <PenTool className="h-10 w-10 text-designer-primary" />,
    title: "UI/UX дизайн",
    description:
      "Создание интуитивных пользовательских интерфейсов с акцентом на удобство использования и эстетику."
  },
  {
    icon: <Globe className="h-10 w-10 text-designer-primary" />,
    title: "Брендинг",
    description:
      "Разработка фирменного стиля, логотипов и визуальной идентичности для вашего бизнеса."
  },
  {
    icon: <MonitorSmartphone className="h-10 w-10 text-designer-primary" />,
    title: "Адаптивный дизайн",
    description:
      "Создание сайтов, которые отлично выглядят и работают на всех устройствах — от смартфонов до больших мониторов."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-designer-accent/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-designer-primary font-medium mb-3">
            Что я предлагаю
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-designer-dark mb-4">
            Мои услуги
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Создаю дизайн, который не только выглядит привлекательно, но и помогает достигать ваших бизнес-целей.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-designer-secondary/40 hover:shadow-md transition-shadow group overflow-hidden">
              <CardHeader className="p-6">
                <div className="p-3 rounded-md inline-block bg-designer-secondary/30 mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-designer-dark group-hover:text-designer-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
