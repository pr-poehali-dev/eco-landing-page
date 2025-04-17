import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Александра К.",
    role: "Постоянный клиент",
    content: "Я заказываю продукты уже более года, и качество всегда на высоте. Овощи и фрукты свежие, как будто только собраны с грядки. Вся семья в восторге!",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Дмитрий Н.",
    role: "Шеф-повар",
    content: "Как шеф-повар, я очень требователен к качеству продуктов. Эко-продукты этой фермы превзошли все мои ожидания — вкус натуральный, яркий, настоящий!",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Елена В.",
    role: "Мама троих детей",
    content: "Здоровье детей — главный приоритет. С тех пор как мы перешли на эти эко-продукты, дети стали меньше болеть, а их иммунитет заметно укрепился.",
    image: "/placeholder.svg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-eco-primary font-semibold">Отзывы</span>
          <h2 className="text-3xl md:text-4xl font-bold text-eco-dark mt-2 mb-4">Что говорят наши клиенты</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Тысячи семей уже выбрали наши эко продукты для здорового питания. Вот что они говорят о своем опыте
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-eco-light shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-eco-dark">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
                <div className="mt-4 text-eco-primary">
                  ★★★★★
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;