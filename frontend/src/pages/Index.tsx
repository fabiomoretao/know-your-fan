import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import UserDataForm from "@/components/UserDataForm";
import DocumentUpload from "@/components/DocumentUpload";
import SocialMediaConnect from "../components/SocialMediaConnect";
import EsportsProfileShare from "@/components/EsportsProfileShare";
import StepIndicator from "@/components/StepIndicator";
import { ChevronDown, ArrowRight } from "lucide-react";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [scrolled, setScrolled] = useState(false);
  const totalSteps = 4;

  const steps = [
    { id: 1, name: "Dados Básicos" },
    { id: 2, name: "Documentos" },
    { id: 3, name: "Redes Sociais" },
    { id: 4, name: "Perfis de E-sports" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    const contentElement = document.getElementById("register-content");
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-helvetica min-h-screen bg-black text-white relative overflow-hidden">
      {/* Video background*/}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-black/65 z-10"></div>
        <video
          className="absolute w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/img/furia-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Glowing accents */}
      <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full blur-[120px] opacity-10 animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-white rounded-full blur-[120px] opacity-5 animate-pulse delay-1000" />
      </div>

      {/* Header with enhanced animation */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/10 backdrop-blur-lg py-2" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-4 sm:px-6 relative flex justify-between items-center">
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <img src="/assets/img/furia-logo.png" className=" w-32" />
            </div>
            <img src="/assets/img/furia-palavra.svg" alt="furia" />
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.furia.gg/quem-somos" className="hidden md:block text-white/80 hover:text-silver text-sm font-medium transition-colors">CONHEÇA A FURIA</a>
            <a href="#" className="hidden md:block text-white/80 hover:text-silver text-sm font-medium transition-colors">TIMES</a>
            <a href="https://www.furia.gg" className="hidden md:block text-white/80 hover:text-silver text-sm font-medium transition-colors">LOJA</a>
            <a href="#" className="bg-[white] text-black px-4 py-2 rounded-md text-sm font-bold hover:bg-silver transition-colors">LOGIN</a>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <div className="relative min-h-screen flex flex-col justify-center items-center pt-16 z-30">
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-none">
            <span className="bg-gradient-to-r from-[gray] to-white bg-clip-text text-transparent">
              CADASTRE-SE
            </span>
            <br />
            <span className="relative inline-block mt-2 bg-gradient-to-r from-[gray] to-white bg-clip-text text-transparent">
              E TORNE-SE MAIS UM FURIOSO
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-gold to-transparent"></div>
            </span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8">
            Entre para o nosso time de fãs e tenha acesso a experiências exclusivas,
            conteúdos personalizados e vantagens únicas.
          </p>

          <div className="max-w-xs mx-auto relative group">
            <button
              onClick={() => {
                const element = document.getElementById("register-form");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-gold text-black px-8 py-4 rounded-md text-lg font-bold w-full group-hover:bg-white transition-colors flex items-center justify-center gap-2"
            >
              CADASTRE-SE <ArrowRight className="w-5 h-5" />
            </button>
            <div className="absolute inset-0 -z-10 bg-gold blur-md opacity-50 group-hover:opacity-75 transition-all"></div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToContent}>
            <ChevronDown className="h-8 w-8 text-gold" />
          </div>
        </div>
      </div>
      {/* Main content */}
      <main id="register-content" className="relative z-30 bg-black/80 backdrop-blur-md py-16">
        {/* Benefits section */}
        <section className="relative z-30 py-16 bg-gradient-to-b from-black/80 to-black">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gold to-[#FFA500] inline-block text-transparent bg-clip-text mb-4">
                VANTAGENS EXCLUSIVAS
              </h2>
              <p className="text-lg text-gray-300">
                Ao se cadastrar como um furioso, você terá acesso a:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Benefit Card 1 */}
              <div className="bg-[#111]/80 border border-gold/80 rounded-lg p-6">
                <div className="bg-white/100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <img src="/assets/img/exclusivo.png" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Conteúdo Exclusivo</h3>
                <p className="text-gray-400">Acesso a vídeos, fotos e momentos dos bastidores que só fãs cadastrados podem ver.</p>
              </div>

              {/* Benefit Card 2 */}
              <div className="bg-[#111]/80 border border-gold/80 rounded-lg p-6">
                <div className="bg-white/100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <img src="/assets/img/marcacao.png" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Promoções Especiais</h3>
                <p className="text-gray-400">Descontos exclusivos na loja oficial e acesso prioritário a novos produtos.</p>
              </div>

              {/* Benefit Card 3 */}
              <div className="bg-[#111]/80 border border-gold/80 rounded-lg p-6 ">
                <div className="bg-white/100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <img src="/assets/img/evento.png" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Encontros com Pro Players</h3>
                <p className="text-gray-400">Oportunidade de participar de meet & greets e eventos com seus jogadores favoritos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form Section */}
        <div className="container mx-auto py-8 px-4 relative z-10" id="register-form">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gold to-[#FFA500] inline-block text-transparent bg-clip-text mb-4">
              KNOW YOUR FAN
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Queremos conhecer você melhor para oferecer experiências exclusivas e conteúdos personalizados
              que realmente combinam com a sua paixão pela FURIA.
            </p>
          </div>

          <Card className="bg-[#111]/95 backdrop-blur-md border-gold/20 shadow-[0_0_15px_rgba(255,215,0,0.15)] max-w-4xl mx-auto hover:shadow-[0_0_25px_rgba(255,215,0,0.2)] transition-all duration-500">
            <CardHeader className="relative overflow-hidden">
              {/* Animated accent line */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

              <CardTitle className="text-2xl md:text-3xl bg-gradient-to-r from-gold to-[#FFA500] inline-block text-transparent bg-clip-text font-bold">
                Cadatre-se
              </CardTitle>
              <CardDescription className="text-white/60 text-base md:text-lg">
                Entre para a família FURIA e tenha uma experiência personalizada como fã
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8 relative">
              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16">
                <div className="absolute top-0 right-0 w-[1px] h-8 bg-gradient-to-b from-gold/50 to-transparent" />
                <div className="absolute top-0 right-0 w-8 h-[1px] bg-gradient-to-l from-gold/50 to-transparent" />
              </div>

              <StepIndicator
                steps={steps}
                currentStep={currentStep}
                className="mb-8"
              />

              <div className="transform transition-all duration-500">
                {currentStep === 1 && (
                  <UserDataForm
                    onNext={() => setCurrentStep(2)}
                  />
                )}

                {currentStep === 2 && (
                  <DocumentUpload
                    onNext={() => setCurrentStep(3)}
                    onBack={() => setCurrentStep(1)}
                  />
                )}

                {currentStep === 3 && (
                  <SocialMediaConnect
                    onNext={() => setCurrentStep(4)}
                    onBack={() => setCurrentStep(2)}
                  />
                )}

                {currentStep === 4 && (
                  <EsportsProfileShare
                    onComplete={() => alert("Obrigado por compartilhar suas informações!")}
                    onBack={() => setCurrentStep(3)}
                  />
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>


      {/* Footer with hover effect and FURIA branding */}
      <footer className="bg-black/90 backdrop-blur-md py-10 border-t border-gold/10 relative z-30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <div className="relative">
                <img src="/assets/img/furia-logo-dourada.png" className="h-16" />
              </div>
              <img src="/assets/img/furia-palavra-dourada.svg" alt="furia"/>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              <a href="https://www.furia.gg/quem-somos" className="text-white/60 hover:text-white text-sm font-medium transition-colors">Sobre</a>
              <a href="#" className="text-white/60 hover:text-white text-sm font-medium transition-colors">Times</a>
              <a href="https://furia.gg" className="text-white/60 hover:text-white text-sm font-medium transition-colors">Loja</a>
              <a href="#" className="text-white/60 hover:text-white text-sm font-medium transition-colors">Notícias</a>
              <a href="#" className="text-white/60 hover:text-white text-sm font-medium transition-colors">Contato</a>
            </div>
          </div>

          <div className="border-t border-gold/10 pt-8 text-center">
            <p className="text-white text-sm">
              © {new Date().getFullYear()} FURIA Esports.
              <span className="ml-2 font-bold tracking-wider text-gold">
                THE FUTURE IS BLACK
              </span>
            </p>
          </div>

          <div className="text-center">
            <p className="text-white text-sm">Desenvolvido por Fábio Moretão</p>
         </div>
          <div className="flex justify-center gap-4 mt-4 margin-top-4">
            <img src="/assets/img/socialLogo/instagram-logo.svg" className="w-8 h-8 align-center" />
            <img src="/assets/img/socialLogo/github-logo.svg" className="w-8 h-8 align-center" />
            <img src="/assets/img/socialLogo/linkedin-logo.svg" className="w-8 h-8 align-center" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
