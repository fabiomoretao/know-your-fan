
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface SocialMediaConnectProps {
  onNext: () => void;
  onBack: () => void;
}

interface SocialMedia {
  name: string;
  icon: React.ReactNode;
  connected: boolean;
  username: string;
}

const SocialMediaConnect = ({ onNext, onBack }: SocialMediaConnectProps) => {
  const [socialMedias, setSocialMedias] = useState<SocialMedia[]>([
    {
      name: "Instagram",
      icon: <img src="/assets/img/socialLogo/instagram-logo.svg" className="w-8 h-8" />,
      connected: false,
      username: "",
    },
    {
      name: "X",
      icon: <img src="/assets/img/socialLogo/x-logo.svg" className="w-8 h-8 " />,
      connected: false,
      username: "",
    },
    {
      name: "Facebook",
      icon: <img src="/assets/img/socialLogo/facebook-logo.svg" className="w-8 h-8" />,
      connected: false,
      username: "",
    },
  ]);

  const handleConnect = (index: number) => {
    setSocialMedias(prev =>
      prev.map((media, i) =>
        i === index
          ? {
              ...media,
              connected: true,
              username: `user_${Math.floor(Math.random() * 10000)}`,
            }
          : media
      )
    );
  };

  const handleDisconnect = (index: number) => {
    setSocialMedias(prev =>
      prev.map((media, i) =>
        i === index
          ? {
              ...media,
              connected: false,
              username: "",
            }
          : media
      )
    );
  };

  const isAnyConnected = socialMedias.some(media => media.connected);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gold mb-4">Conecte suas Redes Sociais</h2>
        <p className="text-gray-300 mb-6">
          Conecte suas redes sociais para personalizarmos sua experiência como fã de e-sports.
          Usaremos suas preferências de conteúdo para oferecer experiências exclusivas.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {socialMedias.map((media, index) => (
          <Card key={media.name} className="bg-[#2A2F3C] border-royalBlue p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-[#1A1F2C] p-2 rounded-full">
                  {media.icon}
                </div>
                <div>
                  <h3 className="font-medium text-white">{media.name}</h3>
                  {media.connected && (
                    <p className="text-sm text-gray-400">@{media.username}</p>
                  )}
                </div>
              </div>
              {media.connected ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDisconnect(index)}
                  className="bg-red-600 border-red-500 text-red-200 hover:bg-red-500/30"
                >
                  Desconectar
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={() => handleConnect(index)}
                  className="bg-lightRoyalBlue hover:bg-royalBlue"
                >
                  Conectar
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>

      {isAnyConnected && (
        <div className="bg-blue-900/20 border border-blue-600 rounded-md p-4">
          <h3 className="text-blue-400 font-medium mb-2">O que analisaremos:</h3>
          <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
            <li>Páginas de e-sports que você segue</li>
            <li>Interações com conteúdo relacionado à FURIA</li>
            <li>Eventos de e-sports que você demonstrou interesse</li>
            <li>Seus jogos favoritos baseados em suas interações</li>
          </ul>
          <p className="mt-3 text-xs text-gray-400">
            * Todas as análises respeitam nossa política de privacidade e são utilizadas apenas para melhorar sua experiência.
          </p>
        </div>
      )}

      <div className="pt-4 flex justify-between">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onBack}
          className="border-silver bg-transparent text-white hover:bg-lightRoyalBlue"
        >
          Voltar
        </Button>
        <Button 
          type="button" 
          onClick={onNext} 
          className="bg-gold hover:bg-darkGold"
        >
          Próximo
        </Button>
      </div>
    </div>
  );
};

export default SocialMediaConnect;
