
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Check, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

interface DocumentUploadProps {
  onNext: () => void;
  onBack: () => void;
}

const DocumentUpload = ({ onNext, onBack }: DocumentUploadProps) => {
  const [idDocument, setIdDocument] = useState<File | null>(null);
  const [idPreview, setIdPreview] = useState<string | null>(null);
  const [selfieDocument, setSelfieDocument] = useState<File | null>(null);
  const [selfiePreview, setSelfiePreview] = useState<string | null>(null);
  const [validating, setValidating] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleIdUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setIdDocument(file);
      setIdPreview(URL.createObjectURL(file));
    }
  };

  const handleSelfieUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelfieDocument(file);
      setSelfiePreview(URL.createObjectURL(file));
    }
  };

  const handleValidate = () => {
    if (!idDocument || !selfieDocument) return;

    setValidating(true);

    // Simulando validação com IA
    setTimeout(() => {
      setValidating(false);
      setValidated(true);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-[#fff] mb-4">Verificação de Identidade</h2>
        <p className="text-gray-300 mb-6">
          Para garantir a segurança e personalização da sua experiência, precisamos verificar sua identidade.
          Por favor, envie uma foto do seu documento de identidade (RG ou CNH) e uma selfie.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-white">Documento de Identidade</h3>
          <Card className="bg-[#2A2F3C] border-dashed border-2 border-gray-500 p-6 flex flex-col items-center justify-center h-60">
            {idPreview ? (
              <div className="relative w-full h-full">
                <img
                  src={idPreview}
                  alt="ID Preview"
                  className="w-full h-full object-contain"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-0 right-0 text-white bg-black/50 hover:bg-black/70"
                  onClick={() => {
                    setIdDocument(null);
                    setIdPreview(null);
                  }}
                >
                  Remover
                </Button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center cursor-pointer w-full h-full">
                <FileText className="h-10 w-10 text-gray-400 mb-2" />
                <span className="text-gray-400">Clique para fazer upload</span>
                <span className="text-gray-500 text-sm mt-1">RG ou CNH</span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleIdUpload}
                />
              </label>
            )}
          </Card>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-white">Selfie</h3>
          <Card className="bg-[#2A2F3C] border-dashed border-2 border-gray-500 p-6 flex flex-col items-center justify-center h-60">
            {selfiePreview ? (
              <div className="relative w-full h-full">
                <img
                  src={selfiePreview}
                  alt="Selfie Preview"
                  className="w-full h-full object-contain"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-0 right-0 text-white bg-black/50 hover:bg-black/70"
                  onClick={() => {
                    setSelfieDocument(null);
                    setSelfiePreview(null);
                  }}
                >
                  Remover
                </Button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center cursor-pointer w-full h-full">
                <Upload className="h-10 w-10 text-gray-400 mb-2" />
                <span className="text-gray-400">Clique para fazer upload</span>
                <span className="text-gray-500 text-sm mt-1">Uma selfie clara do seu rosto</span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleSelfieUpload}
                />
              </label>
            )}
          </Card>
        </div>
      </div>

      {idDocument && selfieDocument && !validated && (
        <div className="flex justify-center mt-6">
          <Button
            onClick={handleValidate}
            disabled={validating}
            className="bg-[#0FA0CE] hover:bg-[#0c89b1]"
          >
            {validating ? "Validando..." : "Validar Documentos"}
          </Button>
        </div>
      )}

      {validated && (
        <div className="bg-green-900/20 border border-green-600 rounded-md p-4 flex items-center">
          <Check className="w-6 h-6 text-green-500 mr-2" />
          <span className="text-green-400">Documentos validados com sucesso!</span>
        </div>
      )}

      <div className="pt-4 flex justify-between">
        <Button
          variant="outline"
          onClick={onBack}
          className="border-silver bg-transparent text-white hover:bg-lightRoyalBlue"
        >
          Voltar
        </Button>
        <Button
          type="button"
          onClick={onNext}
          className="bg-gradient-to-r from-gold to-gold hover:opacity-80 gap-2 text-black bold"
        >
          Próximo
        </Button>
      </div>
    </div>
  );
};

export default DocumentUpload;
