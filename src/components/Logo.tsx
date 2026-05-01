import { cn } from "@/lib/utils";
import { logoBase64 } from "./LogoData";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className, light = false }: LogoProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <div className={cn("flex items-center justify-center", light && "bg-white p-2 rounded-xl")}>
        <img 
          src={logoBase64} 
          alt="Russia Market Entry" 
          className="h-[45px] md:h-[55px] w-auto object-contain"
        />
      </div>
    </div>
  );
}

