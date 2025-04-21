import { MessageSquare, FileText, ShieldCheck } from "lucide-react";

const processSteps = [
  {
    icon: <MessageSquare className="h-8 w-8 text-designer-primary" />,
    title: "Индивидуальный подход",
    description:
      "Проведем личный созвон, на котором детально обсудим ваш запрос и ожидаемый результат.",
    number: "01"
  },
  {
    icon: <FileText className="h-8 w-8 text-designer-primary" />,
    title: "Понятный процесс работы",
    description:
      "Составлю коммерческое предложение, в котором будут закреплены все этапы работы вместе со сроками и стоимостью.",
    number: "02"
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-designer-primary" />,
    title: "Безопасность",
    description:
      "Заключим договор, который обезопасит обе стороны и гарантирует выполнение всех обязательств.",
    number: "03"
  }
];

const Process = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-designer-accent/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-designer-primary font-medium mb-3">
            Как я работаю
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-designer-dark mb-4">
            Мой процесс работы
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Прозрачный и понятный процесс работы на каждом этапе создания вашего проекта.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-designer-secondary/30"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-designer-primary flex items-center justify-center text-white font-bold">
                {step.number}
              </div>
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold text-designer-dark mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
