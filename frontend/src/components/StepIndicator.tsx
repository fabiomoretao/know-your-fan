
import { cn } from "@/lib/utils";

type Step = {
  id: number;
  name: string;
};

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

const StepIndicator = ({ steps, currentStep, className }: StepIndicatorProps) => {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      {steps.map((step, index) => (
        <div key={step.id} className="flex flex-col items-center">
          <div className="flex items-center">
            {index > 0 && (
              <div 
                className={cn(
                  "h-1 w-16 md:w-28 lg:w-39", 
                  index < currentStep ? "bg-[gold]" : "bg-gray-600"
                )}
              />
            )}
            <div 
              className={cn(
                "h-10 w-10 rounded-full flex items-center justify-center",
                step.id === currentStep ? "bg-gold text-white" : 
                step.id < currentStep ? "bg-gold/80 text-white" : "bg-gray-600 text-gray-300"
              )}
            >
              {step.id < currentStep ? "✓" : step.id}
            </div>
            {index < steps.length - 1 && (
              <div 
                className={cn(
                  "h-1 w-16 md:w-28 lg:w-39", 
                  index + 1 < currentStep ? "bg-gold" : "bg-gray-600"
                )}
              />
            )}
          </div>
          <span className={cn(
            "mt-2 text-sm ", 
            step.id === currentStep ? "text-gold font-medium" : 
            step.id < currentStep ? "text-gold/80" : "text-gray-400"
          )}>
            {step.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
