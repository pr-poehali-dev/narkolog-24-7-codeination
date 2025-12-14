import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;
