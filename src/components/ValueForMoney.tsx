export function ValueForMoney() {
  return (
    <section className="py-24 bg-primary text-secondary border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              PREMIUM CARE. <br className="hidden md:block"/> REASONABLE VALUE.
            </h2>
            <p className="text-lg text-secondary/80 font-light leading-relaxed max-w-xl">
              Professional service should also feel like good value. Customers have specifically highlighted Royal Vision Salon for its value-for-money experience.
            </p>
            
            <ul className="space-y-6 pt-4">
              {['Professional Service', 'Quality Experience', 'Value For Money', 'Customer Care'].map((item, i) => (
                <li key={i} className="flex items-center space-x-4 border-b border-white/10 pb-4">
                  <div className="w-12 h-px bg-accent"></div>
                  <span className="text-sm font-semibold tracking-widest uppercase text-secondary/90">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-8">
              <a
                href="#book"
                className="inline-flex items-center justify-center px-8 py-4 border border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300 text-xs font-semibold tracking-widest uppercase"
              >
                Enquire About Services
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="space-y-4 translate-y-8">
              <img src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=800&q=80" alt="Detail shot" className="w-full aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1520338801623-6b88fe32bbf2?auto=format&fit=crop&w=800&q=80" alt="Salon tools" className="w-full aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
