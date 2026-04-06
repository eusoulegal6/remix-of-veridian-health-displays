import { Monitor, Activity } from "lucide-react";

const MedScreenLogo = ({ className = "", iconOnly = false }: { className?: string; iconOnly?: boolean }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10">
        <Monitor className="w-5 h-5 text-primary" strokeWidth={2} />
        <Activity className="absolute bottom-1.5 right-1 w-3 h-3 text-accent" strokeWidth={2.5} />
      </div>
      {!iconOnly && (
        <span className="text-xl font-bold tracking-tight text-foreground">
          Med<span className="text-primary">Screen</span>
        </span>
      )}
    </div>
  );
};

export default MedScreenLogo;
