
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] flex flex-col items-center justify-center text-white p-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-[#9b87f5]">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Página não encontrada</h2>
        <p className="text-gray-300 mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Button asChild className="bg-[#9b87f5] hover:bg-[#8a76e4]">
          <Link to="/">Voltar para a página inicial</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
