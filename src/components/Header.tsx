import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import AppointmentForm from '@/components/AppointmentForm';

interface HeaderProps {
  doctors: Array<{
    name: string;
    specialty: string;
    experience: string;
    education: string;
    certifications: string[];
  }>;
  timeSlots: string[];
  selectedDoctor: string;
  setSelectedDoctor: (value: string) => void;
  selectedTime: string;
  setSelectedTime: (value: string) => void;
  formData: { name: string; phone: string; message: string };
  setFormData: (value: { name: string; phone: string; message: string }) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const Header = ({
  doctors,
  timeSlots,
  selectedDoctor,
  setSelectedDoctor,
  selectedTime,
  setSelectedTime,
  formData,
  setFormData,
  handleSubmit
}: HeaderProps) => {
  return (
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
              <AppointmentForm
                doctors={doctors}
                timeSlots={timeSlots}
                selectedDoctor={selectedDoctor}
                setSelectedDoctor={setSelectedDoctor}
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
                formData={formData}
                setFormData={setFormData}
                handleSubmit={handleSubmit}
                idPrefix="doctor"
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
};

export default Header;
