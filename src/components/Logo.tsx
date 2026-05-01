import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo.png";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className, light = false }: LogoProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <div className={cn("flex items-center justify-center", light && "bg-white p-2 rounded-xl")}>
        <img 
          src={logoImage} 
          alt="Russia Market Entry" 
          className="h-[140px] sm:h-[160px] w-auto object-contain scale-110 origin-center"
        />
      </div>
    </div>
  );
}

