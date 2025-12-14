import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import AppointmentForm from '@/components/AppointmentForm';

interface HeroSectionProps {
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

const HeroSection = ({
  doctors,
  timeSlots,
  selectedDoctor,
  setSelectedDoctor,
  selectedTime,
  setSelectedTime,
  formData,
  setFormData,
  handleSubmit
}: HeroSectionProps) => {
  return (
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
                  idPrefix="doctor-hero"
                />
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
  );
};

export default HeroSection;
