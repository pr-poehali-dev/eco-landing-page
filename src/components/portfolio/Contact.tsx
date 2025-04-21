import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-designer-primary font-medium mb-3">
              Давайте работать вместе
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-designer-dark mb-6">
              Связаться со мной
            </h2>
            <p className="text-gray-600 mb-8 md:pr-12">
              Буду рада обсудить детали вашего проекта! Заполните форму или свяжитесь со мной напрямую.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="mr-4 p-3 bg-designer-secondary/30 rounded-full">
                  <Phone className="h-5 w-5 text-designer-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Телефон</p>
                  <a 
                    href="tel:+79202715633" 
                    className="text-designer-dark hover:text-designer-primary transition-colors"
                  >
                    +7 920 271 5633
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 p-3 bg-designer-secondary/30 rounded-full">
                  <MessageSquare className="h-5 w-5 text-designer-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Telegram</p>
                  <a 
                    href="https://t.me/afnelena" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-designer-dark hover:text-designer-primary transition-colors"
                  >
                    @afnelena
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-designer-secondary/30">
            <h3 className="text-xl font-semibold text-designer-dark mb-6">
              Отправить сообщение
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Ваш email" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Тема</Label>
                <Input id="subject" placeholder="Тема сообщения" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Сообщение</Label>
                <Textarea 
                  id="message" 
                  placeholder="Расскажите о вашем проекте..."
                  className="min-h-[120px]" 
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-designer-primary hover:bg-designer-dark"
              >
                Отправить сообщение
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
