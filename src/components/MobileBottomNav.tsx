import { Phone, MessageCircle, CalendarDays } from 'lucide-react';

export function MobileBottomNav() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
      <div className="flex items-center justify-around p-3">
        <a 
          href="tel:+919908548883"
          className="flex flex-col items-center justify-center w-full py-2 text-secondary/70 hover:text-accent transition-colors"
        >
          <Phone size={20} className="mb-1" />
          <span className="text-[10px] font-semibold tracking-widest uppercase">Call</span>
        </a>
        
        <div className="w-px h-8 bg-white/10"></div>
        
        <a 
          href="https://wa.me/919908548883?text=Hi%20Royal%20Vision%20Salon"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center w-full py-2 text-secondary/70 hover:text-accent transition-colors"
        >
          <MessageCircle size={20} className="mb-1" />
          <span className="text-[10px] font-semibold tracking-widest uppercase">WhatsApp</span>
        </a>
        
        <div className="w-px h-8 bg-white/10"></div>
        
        <a 
          href="#book"
          className="flex flex-col items-center justify-center w-full py-2 text-accent hover:text-accent-hover transition-colors"
        >
          <CalendarDays size={20} className="mb-1" />
          <span className="text-[10px] font-semibold tracking-widest uppercase">Book</span>
        </a>
      </div>
    </div>
  );
}
