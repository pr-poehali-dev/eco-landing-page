import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Органические овощи",
    category: "Овощи",
    description: "Свежие сезонные овощи, выращенные без пестицидов и химических удобрений",
    image: "/placeholder.svg",
    tags: ["Органик", "Без ГМО"]
  },
  {
    id: 2,
    name: "Фермерские фрукты",
    category: "Фрукты",
    description: "Сладкие и сочные фрукты, созревшие под солнцем на наших эко-фермах",
    image: "/placeholder.svg",
    tags: ["Органик", "Местные"]
  },
  {
    id: 3,
    name: "Полезные злаки",
    category: "Злаки",
    description: "Натуральные злаки и крупы для правильного питания без обработки и добавок",
    image: "/placeholder.svg",
    tags: ["Без глютена", "Органик"]
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-eco-primary font-semibold">Наш ассортимент</span>
          <h2 className="text-3xl md:text-4xl font-bold text-eco-dark mt-2 mb-4">Эко продукты для вашего стола</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем широкий выбор экологически чистых продуктов, заботливо выращенных на наших органических фермах
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-56">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-eco-primary hover:bg-eco-dark">
                    {product.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-bold text-eco-dark mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="border-eco-secondary text-eco-dark">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;