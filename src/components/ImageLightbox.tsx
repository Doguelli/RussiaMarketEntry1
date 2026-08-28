import { useEffect, useRef } from "react";
import { X } from "lucide-react";

type ImageLightboxProps = {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
  closeLabel: string;
};

export default function ImageLightbox({ src, alt, isOpen, onClose, closeLabel }: ImageLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (!isOpen) return;

    scrollYRef.current = window.scrollY;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.width = "100%";

    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollYRef.current);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75" aria-hidden="true" />

      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        aria-label={closeLabel}
      >
        <X className="w-5 h-5" />
      </button>

      <img
        src={src}
        alt={alt}
        className="relative z-10 max-h-[min(90vh,900px)] max-w-[min(100%,1200px)] w-auto h-auto object-contain rounded-xl"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
}
