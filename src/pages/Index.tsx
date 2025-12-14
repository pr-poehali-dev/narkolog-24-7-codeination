import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const { toast } = useToast();

  const services = [
    {
      icon: 'Activity',
      title: 'Вывод из запоя',
      description: 'Профессиональная детоксикация организма в стационаре или на дому. Работаем круглосуточно.',
      features: ['24/7 выезд', 'Анонимно', 'Безопасно']
    },
    {
      icon: 'Shield',
      title: 'Кодирование',
      description: 'Современные методы медикаментозного и психотерапевтического кодирования от алкоголизма.',
      features: ['Гарантия', 'Сертификаты', 'Опыт 15+ лет']
    },
    {
      icon: 'MessageCircle',
      title: 'Консультации',
      description: 'Индивидуальные консультации нарколога и психотерапевта для пациентов и их родственников.',
      features: ['Онлайн', 'Очно', 'Конфиденциально']
    }
  ];

  const doctors = [
    {
      name: 'Иванов Сергей Петрович',
      specialty: 'Главный нарколог',
      experience: '20 лет опыта',
      education: 'Первый МГМУ им. И.М. Сеченова',
      certifications: ['Нарколог высшей категории', 'Психотерапевт', 'Токсиколог']
    },
    {
      name: 'Петрова Елена Владимировна',
      specialty: 'Нарколог-психиатр',
      experience: '15 лет опыта',
      education: 'РНИМУ им. Н.И. Пирогова',
      certifications: ['Нарколог первой категории', 'Психиатр', 'Реабилитолог']
    },
    {
      name: 'Смирнов Алексей Николаевич',
      specialty: 'Нарколог',
      experience: '12 лет опыта',
      education: 'МГМСУ им. А.И. Евдокимова',
      certifications: ['Нарколог', 'Специалист по детоксикации', 'Консультант']
    }
  ];

  const methods = [
    {
      title: 'Медикаментозная терапия',
      description: 'Использование современных препаратов для безопасной детоксикации и поддержания трезвости.',
      icon: 'Pill'
    },
    {
      title: 'Психотерапия',
      description: 'Индивидуальные и групповые сеансы для работы с психологическими причинами зависимости.',
      icon: 'Brain'
    },
    {
      title: 'Реабилитация',
      description: 'Комплексная программа восстановления физического и психического здоровья.',
      icon: 'Heart'
    },
    {
      title: 'Поддержка родных',
      description: 'Консультации и программы для членов семьи пациента.',
      icon: 'Users'
    }
  ];

  const testimonials = [
    {
      name: 'Анна К.',
      text: 'Спасибо за помощь моему мужу. Профессиональный подход, внимание к деталям. Прошло полгода - всё отлично!',
      rating: 5
    },
    {
      name: 'Михаил П.',
      text: 'Обратился за консультацией, врач помог разобраться в ситуации. Кодирование прошло успешно, побочных эффектов не было.',
      rating: 5
    },
    {
      name: 'Екатерина С.',
      text: 'Вызывали на дом для вывода из запоя. Приехали быстро, всё сделали профессионально и деликатно. Рекомендую.',
      rating: 5
    }
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDoctor || !selectedTime || !formData.name || !formData.phone) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните все обязательные поля',
        variant: 'destructive'
      });
      return;
    }
    toast({
      title: 'Заявка отправлена',
      description: 'Мы свяжемся с вами в ближайшее время для подтверждения записи'
    });
    setFormData({ name: '', phone: '', message: '' });
    setSelectedDoctor('');
    setSelectedTime('');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Heart" className="text-primary" size={32} />
            <div>
              <h1 className="text-2xl font-bold text-foreground">МедЦентр</h1>
              <p className="text-sm text-muted-foreground">Наркологическая помощь 24/7</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition">Услуги</a>
            <a href="#doctors" className="text-foreground hover:text-primary transition">Специалисты</a>
            <a href="#methods" className="text-foreground hover:text-primary transition">Методы</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition">Отзывы</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition">Контакты</a>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden lg:block text-right">
              <p className="text-2xl font-bold text-primary">+7 (495) 123-45-67</p>
              <p className="text-xs text-muted-foreground">Круглосуточно</p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="gap-2">
                  <Icon name="Calendar" size={20} />
                  Записаться
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Онлайн запись на консультацию</DialogTitle>
                  <DialogDescription>
                    Выберите специалиста и удобное время для посещения
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="doctor">Выберите специалиста *</Label>
                    <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                      <SelectTrigger id="doctor">
                        <SelectValue placeholder="Выберите врача" />
                      </SelectTrigger>
                      <SelectContent>
                        {doctors.map((doctor, idx) => (
                          <SelectItem key={idx} value={doctor.name}>
                            {doctor.name} - {doctor.specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Время приёма *</Label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Опишите вашу ситуацию (необязательно)"
                      rows={3}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    * Обязательные поля. Мы гарантируем полную конфиденциальность ваших данных.
                  </p>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Работаем с 2008 года</Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Профессиональная наркологическая помощь
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Современные методы лечения зависимостей. Анонимно, безопасно, эффективно. 
              Выезд на дом 24/7 по Москве и области.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="gap-2 text-lg px-8">
                <Icon name="Phone" size={20} />
                +7 (495) 123-45-67
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="gap-2 text-lg px-8">
                    <Icon name="Calendar" size={20} />
                    Онлайн запись
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Онлайн запись на консультацию</DialogTitle>
                    <DialogDescription>
                      Выберите специалиста и удобное время для посещения
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="doctor-hero">Выберите специалиста *</Label>
                      <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                        <SelectTrigger id="doctor-hero">
                          <SelectValue placeholder="Выберите врача" />
                        </SelectTrigger>
                        <SelectContent>
                          {doctors.map((doctor, idx) => (
                            <SelectItem key={idx} value={doctor.name}>
                              {doctor.name} - {doctor.specialty}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time-hero">Время приёма *</Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger id="time-hero">
                          <SelectValue placeholder="Выберите время" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name-hero">Ваше имя *</Label>
                      <Input
                        id="name-hero"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone-hero">Телефон *</Label>
                      <Input
                        id="phone-hero"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message-hero">Комментарий</Label>
                      <Textarea
                        id="message-hero"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Опишите вашу ситуацию (необязательно)"
                        rows={3}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      * Обязательные поля. Мы гарантируем полную конфиденциальность ваших данных.
                    </p>
                    <Button type="submit" className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-2">
                <Icon name="Clock" size={48} className="text-primary" />
                <p className="font-semibold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Круглосуточно</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon name="ShieldCheck" size={48} className="text-primary" />
                <p className="font-semibold text-foreground">Анонимно</p>
                <p className="text-sm text-muted-foreground">Конфиденциальность</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon name="Award" size={48} className="text-primary" />
                <p className="font-semibold text-foreground">15+ лет</p>
                <p className="text-sm text-muted-foreground">Опыт работы</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр наркологических услуг для эффективного лечения зависимостей
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name={service.icon as any} size={48} className="text-primary mb-4" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <Badge key={i} variant="secondary">{feature}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="doctors" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши специалисты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Опытные врачи с высокой квалификацией и многолетней практикой
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {doctors.map((doctor, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="UserRound" size={64} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{doctor.name}</CardTitle>
                  <CardDescription className="text-base font-semibold text-primary">
                    {doctor.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-left space-y-3">
                  <div className="flex items-start gap-2">
                    <Icon name="Briefcase" size={16} className="text-muted-foreground mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground">{doctor.experience}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="GraduationCap" size={16} className="text-muted-foreground mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground">{doctor.education}</p>
                  </div>
                  <Separator />
                  <div className="space-y-1">
                    {doctor.certifications.map((cert, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={14} className="text-primary flex-shrink-0" />
                        <p className="text-xs text-muted-foreground">{cert}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="methods" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Методы лечения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Научно обоснованные и проверенные методики лечения зависимостей
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {methods.map((method, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name={method.icon as any} size={48} className="text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Отзывы пациентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные истории людей, которым мы помогли
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Контакты</h2>
              <p className="text-lg text-muted-foreground">
                Свяжитесь с нами удобным способом
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <Icon name="Phone" size={32} className="text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Телефон</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary mb-1">+7 (495) 123-45-67</p>
                  <p className="text-sm text-muted-foreground">Круглосуточно</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Icon name="MapPin" size={32} className="text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Адрес</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">г. Москва</p>
                  <p className="text-foreground">ул. Примерная, д. 1</p>
                  <p className="text-sm text-muted-foreground mt-1">м. Центральная</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Icon name="Mail" size={32} className="text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">info@medcentr.ru</p>
                  <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                </CardContent>
              </Card>
            </div>
            <Card className="bg-primary text-primary-foreground">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Нужна помощь прямо сейчас?</CardTitle>
                <CardDescription className="text-primary-foreground/80 text-base">
                  Мы работаем круглосуточно и готовы выехать к вам в любое время
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button size="lg" variant="secondary" className="gap-2">
                  <Icon name="Phone" size={20} />
                  Позвонить сейчас
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Heart" className="text-primary" size={24} />
                <h3 className="text-xl font-bold">МедЦентр</h3>
              </div>
              <p className="text-sm text-background/70">
                Профессиональная наркологическая помощь с 2008 года. 
                Лицензия № ЛО-77-01-012345
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#services" className="hover:text-primary transition">Услуги</a></li>
                <li><a href="#doctors" className="hover:text-primary transition">Специалисты</a></li>
                <li><a href="#methods" className="hover:text-primary transition">Методы лечения</a></li>
                <li><a href="#testimonials" className="hover:text-primary transition">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@medcentr.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Москва, ул. Примерная, 1
                </li>
              </ul>
            </div>
          </div>
          <Separator className="bg-background/20 mb-6" />
          <div className="text-center text-sm text-background/60">
            <p>© 2024 МедЦентр. Все права защищены. Имеются противопоказания, необходима консультация специалиста.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
