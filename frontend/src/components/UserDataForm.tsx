import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface UserDataFormProps {
  onNext: () => void;
}

const UserDataForm = ({ onNext }: UserDataFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    preferredGame: "",
    preferredTeam: "",
    attendedEvents: [] as string[],
    interests: [] as string[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
   onNext(); 
  }
  const events = [
    "IEM Rio Major",
    "ESL One Brasil",
    "CBLoL Finals",
    "CBLOL Split",
    "Furia Fan Meetups"
  ];

  const interests = [
    "Pro Players",
    "Campeonatos",
    "Treinos",
    "Streaming",
    "Cosplay",
    "Tecnologia",
    "Colecionáveis",
    "Eventos"
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-[#fff]">Dados Pessoais</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Nome Completo</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-[darkgray]/60 backdrop-blur-sm border-silver/20 text-white focus:border-silver/50 focus:ring-gold/50 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-[darkgray]/60 backdrop-blur-sm border-silver/20 text-white focus:border-silver/50 focus:ring-gold/50 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cpf" className="text-white">CPF</Label>
            <Input
              id="cpf"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              required
              className="bg-[darkgray]/60 backdrop-blur-sm border-silver/20 text-white focus:border-silver/50 focus:ring-gold/50 transition-colors placeholder:text-gray-400"
              placeholder="000.000.000-00"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="zipCode" className="text-white">CEP</Label>
            <Input
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
              className="bg-[darkgray]/60 backdrop-blur-sm border-silver/20 text-white focus:border-silver/50 focus:ring-gold/50 transition-colors placeholder:text-gray-400"
              placeholder="00000-000"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address" className="text-white">Endereço</Label>
          <Input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="bg-[darkgray]/60 backdrop-blur-sm border-silver/20 text-white focus:border-silver/50 focus:ring-gold/50 transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city" className="text-white">Cidade</Label>
            <Input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="bg-[darkgray]/60 backdrop-blur-sm border-silver/20 text-white focus:border-silver/50 focus:ring-gold/50 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="state" className="text-white">Estado</Label>
            <Input
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="bg-[darkgray]/60 backdrop-blur-sm border-silver/20 text-white focus:border-silver/50 focus:ring-gold/50 transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-[white]">Interesses</h2>

        <div className="space-y-2">
          <Label className="text-white">Qual e-sport você mais acompanha?</Label>
          <RadioGroup
            value={formData.preferredGame}
            onValueChange={(value) => setFormData(prev => ({ ...prev, preferredGame: value }))}
            className="flex flex-col space-y-2 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cs2" id="cs2" className="border-gold text-[white]" />
              <Label htmlFor="cs2" className="cursor-pointer text-[white]">Counter-Strike 2</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="valorant" id="valorant" className="border-gold text-[white]" />
              <Label htmlFor="valorant" className="cursor-pointer text-[white]">Valorant</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="lol" id="lol" className="text-[white] border-gold " />
              <Label htmlFor="lol" className="cursor-pointer text-[white]">League of Legends</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="r6" id="r6" className="border-gold text-[white]" />
              <Label htmlFor="r6" className="cursor-pointer text-[white]">Rainbow Six Siege</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="pubg" id="pubg" className="border-gold text-[white]" />
              <Label htmlFor="pubg" className="cursor-pointer text-[white]">PUBG</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="rkl" id="rkl" className="border-gold text-[white]" />
              <Label htmlFor="rkl" className="cursor-pointer text-[white]">Rocket League</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="fut7" id="fut7" className="border-gold text-[white]" />
              <Label htmlFor="fut7" className="cursor-pointer text-[white]">Kings League</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="redram" id="redram" className="border-gold text-[white]" />
              <Label htmlFor="redram" className="cursor-pointer text-[white]">Automobilismo</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" className="border-gold text-[white]" />
              <Label htmlFor="other" className="cursor-pointer text-[white]">Outro</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label className="text-[white]">Eventos que você participou no último ano</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
            {events.map((event) => (
              <div key={event} className="flex items-center space-x-2">
                <Checkbox
                  id={event}
                  checked={formData.attendedEvents.includes(event)}
                  onCheckedChange={(checked) => {
                    setFormData(prev => {
                      const events = [...prev.attendedEvents];
                      if (checked) {
                        events.push(event);
                      } else {
                        const index = events.indexOf(event);
                        if (index !== -1) events.splice(index, 1);
                      }
                      return { ...prev, attendedEvents: events };
                    });
                  }}
                  className="border-gold data-[state=checked]:bg-darkGold"
                />
                <Label htmlFor={event} className="cursor-pointer text-white">{event}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-[white]">Quais são os seus principais interesses ?</Label>
          <ToggleGroup
            type="multiple"
            className="flex flex-wrap gap-2 mt-2"
            value={formData.interests}
            onValueChange={(value: string[]) => setFormData(prev => ({ ...prev, interests: value }))}
          >
            {interests.map((interest) => (
              <ToggleGroupItem
                key={interest}
                value={interest}
                className="bg-silver backdrop-blur-sm border border-[gray]/20 text-black hover:bg-royalBlue/10 hover:text-white data-[state=on]:bg-silver/20 data-[state=on]:text-white transition-colors"
              >
                {interest}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </div>

      <div className="pt-4 flex justify-end">
        <Button
          type="submit"
          className="bg-gold hover:bg-darkGold text-white transition-colors shadow-[0_0_15px_rgba(155,135,245,0.3)] hover:shadow-[0_0_20px_rgba(155,135,245,0.4)]"
        >
          Próximo
        </Button>
      </div>
    </form>
  );
};

export default UserDataForm;