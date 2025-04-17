const benefits = [
  {
    id: 1,
    icon: "🌱",
    title: "100% Органические",
    description: "Все наши продукты выращены на органических фермах без использования химических удобрений и пестицидов"
  },
  {
    id: 2,
    icon: "🥬",
    title: "Свежесть и качество",
    description: "Доставляем свежие продукты напрямую с фермы, сохраняя все полезные вещества и витамины"
  },
  {
    id: 3,
    icon: "♻️",
    title: "Экологичная упаковка",
    description: "Используем только переработанные и биоразлагаемые материалы для упаковки наших продуктов"
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-eco-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-eco-primary font-semibold">Почему выбирают нас</span>
          <h2 className="text-3xl md:text-4xl font-bold text-eco-dark mt-2 mb-4">Преимущества эко продуктов</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы заботимся о вашем здоровье и окружающей среде, предлагая только натуральные продукты высшего качества
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-eco-dark mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-eco-dark mb-4">Забота о природе — забота о будущем</h3>
              <p className="text-gray-600 mb-4">
                Экологически чистое сельское хозяйство не только обеспечивает вас полезными продуктами, но и защищает окружающую среду. 
                Мы не используем химические удобрения и пестициды, сохраняя плодородие почвы и чистоту воды.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="text-eco-primary mr-2">✓</span>
                  Снижение углеродного следа
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-eco-primary mr-2">✓</span>
                  Сохранение биоразнообразия
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-eco-primary mr-2">✓</span>
                  Поддержка местных фермеров
                </li>
              </ul>
            </div>
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Забота о природе" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;