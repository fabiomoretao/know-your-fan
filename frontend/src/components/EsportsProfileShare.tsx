import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface EsportsProfileShareProps {
  onComplete: () => void;
  onBack: () => void;
}

const EsportsProfileShare = ({ onComplete, onBack }: EsportsProfileShareProps) => {
  const navigate = useNavigate();

  const handleComplete = () => {
    onComplete();
    navigate('/analysis');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold bg-gradient-to-r bg-gold inline-block text-transparent bg-clip-text">
        Perfis de E-sports
      </h2>
      
      <div className="space-y-4">
        <div className="p-4 bbg-[#2A2F3C] border-royalBlue backdrop-blur-sm rounded-lg border ">
          <p className="text-gray-300 mb-4">
            Compartilhe seus perfis de jogos e plataformas para conectar com outros fãs e jogadores.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center p-3 bg-[#2A2F3C] rounded-md hover:bg-[#1A1F2C] transition-colors cursor-pointer border border-royalBlue group">
              <img src="/assets/img/esportsLogo/steam-logo.svg" alt="Steam" className="w-8 h-8 mr-3" />
              <span className="text-white group-hover:text-lightRoyalBlue transition-colors">Conectar Steam</span>
            </div>
            
            <div className="flex items-center p-3 bg-[#2A2F3C] rounded-md hover:bg-[#1A1F2C] transition-colors cursor-pointer border border-royalBlue group">
              <img src="/assets/img/esportsLogo/battlenet-logo.png" alt="Battle.net" className="w-8 h-8 mr-3" />
              <span className="text-white group-hover:text-lightRoyalBlue transition-colors">Conectar Battle.net</span>
            </div>
            
            <div className="flex items-center p-3 bg-[#2A2F3C] rounded-md hover:bg-[#1A1F2C] transition-colors cursor-pointer border border-royalBlue group">
              <img src="/assets/img/esportsLogo/epic-logo.png" alt="Epic Games" className="w-8 h-8 mr-3" />
              <span className="text-white group-hover:text-lightRoyalBlue transition-colors">Conectar Epic Games</span>
            </div>
            
            <div className="flex items-center p-3 bg-[#2A2F3C] rounded-md hover:bg-[#1A1F2C] transition-colors cursor-pointer border border-royalBlue group">
              <img src="/assets/img/esportsLogo/riot-logo.png" alt="Riot Games" className="w-8 h-8 mr-3" />
              <span className="text-white group-hover:text-lightRoyalBlue transition-colors">Conectar Riot Games</span>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-[#1A1F2C]/80 backdrop-blur-sm rounded-lg border border-royalBlue">
          <p className="text-gray-300 mb-4">
            Ao compartilhar seus dados, você concorda em receber conteúdo personalizado e ofertas exclusivas da FURIA e parceiros.
          </p>
          
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="consent" className="rounded border-[#2A2F3C] bg-[#2A2F3C]" />
            <label htmlFor="consent" className="text-gray-300">
              Concordo com os termos de uso e política de privacidade
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="border-silver bg-transparent text-white hover:bg-lightRoyalBlue"
        >
          Voltar
        </Button>
        <Button 
          onClick={handleComplete}
          className="bg-gradient-to-r from-gold to-gold hover:opacity-80 gap-2 text-black bold"
        >
          <img src="/assets/img/marca-de-selecao.png" className="w-4 h-4" />
          Finalizar
        </Button>
      </div>
    </div>
  );
};

export default EsportsProfileShare;
