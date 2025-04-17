import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-eco-primary">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-eco-dark mb-4">
                Готовы попробовать настоящие эко продукты?
              </h2>
              <p className="text-gray-600 max-w-lg">
                Подпишитесь на еженедельную доставку свежих органических продуктов и получите скидку 10% на первый заказ.
              </p>
            </div>
            <div className="md:w-1/3 flex flex-col space-y-4">
              <Button className="bg-eco-primary hover:bg-eco-dark text-white px-8 py-6 text-lg w-full">
                Заказать сейчас
              </Button>
              <Button variant="outline" className="border-eco-primary text-eco-primary hover:bg-eco-light px-8 py-6 text-lg w-full">
                Подробнее о доставке
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;