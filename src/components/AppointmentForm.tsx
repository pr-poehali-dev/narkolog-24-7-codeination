import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface AppointmentFormProps {
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
  idPrefix: string;
}

const AppointmentForm = ({
  doctors,
  timeSlots,
  selectedDoctor,
  setSelectedDoctor,
  selectedTime,
  setSelectedTime,
  formData,
  setFormData,
  handleSubmit,
  idPrefix
}: AppointmentFormProps) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div className="space-y-2">
        <Label htmlFor={idPrefix}>Выберите специалиста *</Label>
        <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
          <SelectTrigger id={idPrefix}>
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
        <Label htmlFor={`time-${idPrefix}`}>Время приёма *</Label>
        <Select value={selectedTime} onValueChange={setSelectedTime}>
          <SelectTrigger id={`time-${idPrefix}`}>
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
        <Label htmlFor={`name-${idPrefix}`}>Ваше имя *</Label>
        <Input
          id={`name-${idPrefix}`}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Иван Иванов"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor={`phone-${idPrefix}`}>Телефон *</Label>
        <Input
          id={`phone-${idPrefix}`}
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="+7 (___) ___-__-__"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor={`message-${idPrefix}`}>Комментарий</Label>
        <Textarea
          id={`message-${idPrefix}`}
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
  );
};

export default AppointmentForm;
