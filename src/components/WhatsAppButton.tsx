import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const expandTimer = setTimeout(() => {
        setIsExpanded(false);
      }, 3000);
      return () => clearTimeout(expandTimer);
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          layout
          href="https://wa.me/905327852420"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          className={`fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:bg-[#22c15c] transition-colors duration-300 group ${
            isExpanded ? 'px-5 gap-3' : 'w-14 px-0 gap-0'
          }`}
          aria-label="WhatsApp Canlı Destek"
        >
          <motion.svg 
            layout
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-7 h-7 shrink-0"
          >
            <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.2-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4 0-.1 0-.3-.1-.4-.1-.2-.6-1.3-.8-1.8-.1-.4-.3-.3-.5-.3h-.4c-.2 0-.5.1-.7.3-.2.2-.8.8-.8 2 0 1.2.8 2.3 1 2.5.1.2 1.7 2.6 4.1 3.6.6.2 1.1.4 1.5.5.6.2 1.1.1 1.5.1.4 0 1.2-.5 1.4-1 .2-.5.2-.9.1-1-.1-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3C8.6 21.5 10.3 22 12 22c5.5 22 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.1l-.3-.2-3.2.8.9-3.1-.2-.3C4.2 15.1 3.8 13.6 3.8 12c0-4.5 3.7-8.2 8.2-8.2s8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z"/>
          </motion.svg>
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.span
                layout
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="font-bold text-[15px] pr-1 whitespace-nowrap overflow-hidden"
              >
                Hemen İletişime Geçin
              </motion.span>
            )}
          </AnimatePresence>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
