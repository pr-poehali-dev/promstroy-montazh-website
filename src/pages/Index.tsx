import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-secondary/95 backdrop-blur-sm z-50 border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
              <Icon name="Building2" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="font-heading font-bold text-white text-xl leading-tight">ПромСтройМонтаж</h1>
              <p className="text-xs text-white/70">Омск</p>
            </div>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-white hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="text-white hover:text-primary transition-colors">О компании</a>
            <a href="#services" className="text-white hover:text-primary transition-colors">Услуги</a>
            <a href="#contact" className="text-white hover:text-primary transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 border-2 border-primary rounded-lg rotate-12"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-primary rounded-lg -rotate-6"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-block bg-primary/20 border border-primary px-4 py-2 rounded-full mb-6">
              <span className="text-primary font-semibold">Профессиональный монтаж</span>
            </div>
            <h2 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
              Инженерные системы под ключ
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Монтаж отопления, кондиционирования и санитарно-технических систем для вашего объекта в Омске
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8">
              Получить консультацию
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in border-l-4 border-l-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="HardHat" size={32} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-2">Гарантия качества</h3>
              <p className="text-muted-foreground">Все работы выполняем с соблюдением строительных норм и стандартов</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in border-l-4 border-l-primary" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-2">Опытные специалисты</h3>
              <p className="text-muted-foreground">Квалифицированные монтажники с большим опытом работ</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in border-l-4 border-l-primary" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-2">Полный цикл работ</h3>
              <p className="text-muted-foreground">От проектирования до запуска и обслуживания систем</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block bg-primary/10 px-3 py-1 rounded-full mb-4">
                <span className="text-primary text-sm font-semibold">О компании</span>
              </div>
              <h2 className="font-heading font-bold text-4xl mb-6">ООО "ПромСтройМонтаж"</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Торгово-монтажная компания под руководством директора Барковского Н.Ф. Специализируемся на производстве санитарно-технических работ, монтаже отопительных систем и систем кондиционирования воздуха.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Осуществляем профессиональный монтаж инженерных систем, установку и обслуживание газового оборудования, замену и опломбировку счетчиков.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Icon name="FileText" size={20} className="text-primary" />
                  <div className="text-sm">
                    <span className="font-semibold">ИНН:</span> 5507230160
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Hash" size={20} className="text-primary" />
                  <div className="text-sm">
                    <span className="font-semibold">ОГРН:</span> 1125543018875
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img 
                  src="https://v3.fal.media/files/tiger/mouHJaeWrynialMfBoAGy_output.png" 
                  alt="ПромСтройМонтаж" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block bg-primary/10 px-3 py-1 rounded-full mb-4">
              <span className="text-primary text-sm font-semibold">Услуги</span>
            </div>
            <h2 className="font-heading font-bold text-4xl mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексное обслуживание инженерных систем
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in">
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Icon name="Thermometer" size={28} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Монтаж отопления</h3>
              <p className="text-muted-foreground">Установка радиаторов, котлов, тёплых полов. Разводка труб и запуск системы отопления</p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Icon name="Wind" size={28} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Кондиционирование</h3>
              <p className="text-muted-foreground">Установка и обслуживание кондиционеров, систем вентиляции и климат-контроля</p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Icon name="Droplets" size={28} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Водоснабжение</h3>
              <p className="text-muted-foreground">Монтаж систем холодного и горячего водоснабжения, установка сантехники</p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Icon name="Gauge" size={28} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Установка счётчиков</h3>
              <p className="text-muted-foreground">Замена и опломбировка счётчиков воды, газа и тепла. Оформление документов</p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Icon name="Flame" size={28} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Газовое оборудование</h3>
              <p className="text-muted-foreground">Установка газовых котлов, колонок, плит. Техническое обслуживание газового оборудования</p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in" style={{animationDelay: '0.5s'}}>
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Icon name="Wrench" size={28} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Ремонт и обслуживание</h3>
              <p className="text-muted-foreground">Техническое обслуживание и ремонт всех видов инженерных систем</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <div className="inline-block bg-primary/10 px-3 py-1 rounded-full mb-4">
                <span className="text-primary text-sm font-semibold">Контакты</span>
              </div>
              <h2 className="font-heading font-bold text-4xl mb-6">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Оставьте заявку, и наш специалист свяжется с вами в ближайшее время
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Омск, бульвар Зеленый, 9/2<br/>Комплекс Тройка, офис 11, 2 этаж<br/>6-й микрорайон, Кировский округ</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (3812) ...</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@promsm-omsk.ru</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 08:30 - 17:00<br/>Сб-Вс: выходной</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Опишите ваш проект или задайте вопрос"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                  <Icon name="Building2" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-lg">ПромСтройМонтаж</h3>
                  <p className="text-xs text-white/70">Омск</p>
                </div>
              </div>
              <p className="text-white/70 text-sm">
                Санитарно-технические работы, монтаж систем отопления и кондиционирования
              </p>
            </div>

            <div>
              <h4 className="font-heading font-bold text-white mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Санитарно-технические работы</li>
                <li>Монтаж систем отопления</li>
                <li>Монтаж кондиционирования</li>
                <li>Установка счетчиков</li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-white mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>г. Омск, бульвар Зеленый, 9/2</li>
                <li>Комплекс Тройка, офис 11</li>
                <li>Пн-Пт: 08:30 - 17:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-center text-white/50 text-sm">
              © 2024 ООО "ПромСтройМонтаж". Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;