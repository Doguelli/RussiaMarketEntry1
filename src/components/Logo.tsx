import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className, light = false }: LogoProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <div className={cn("flex items-center justify-center", light && "bg-white p-2 rounded-xl")}>
        <div className="flex items-center gap-2">
          <div className="flex items-end -space-x-1">
            <span className={cn("text-4xl md:text-5xl font-black italic tracking-tighter leading-none text-[#0B2545]")}>R</span>
            <span className={cn("text-4xl md:text-5xl font-black italic tracking-tighter leading-none text-[#E61E2A]")}>M</span>
            <svg className="w-5 h-5 text-[#E61E2A] -ml-2 -mt-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </div>
          <div className="flex flex-col ml-1">
            <span className={cn("text-[10px] md:text-xs font-black uppercase tracking-widest leading-none", light ? "text-slate-800" : "text-slate-900")}>Russia</span>
            <span className={cn("text-[10px] md:text-xs font-black uppercase tracking-widest leading-none text-[#E61E2A]")}>Market</span>
            <span className={cn("text-[10px] md:text-xs font-black uppercase tracking-widest leading-none", light ? "text-slate-800" : "text-slate-900")}>Entry</span>
          </div>
        </div>
      </div>
    </div>
  );
}

