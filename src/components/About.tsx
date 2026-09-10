export function About() {
  return (
    <section id="about" className="py-24 bg-secondary text-primary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              WHERE CARE <br className="hidden md:block"/> MEETS CRAFT.
            </h2>
            
            <div className="space-y-6 text-primary/80 font-light leading-relaxed">
              <p>
                At Royal Vision Salon, every service is approached with attention to detail and customer comfort. From haircuts and hair spa to facials and pedicures, the focus is on delivering a professional experience from start to finish.
              </p>
              <p>
                Customers consistently appreciate the team's patience, warm reception, good hygiene and value for money.
              </p>
            </div>

            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-primary/10">
              <div className="space-y-2">
                <span className="text-accent font-display text-2xl">01</span>
                <h3 className="text-xs font-semibold tracking-widest uppercase">Attention to Detail</h3>
              </div>
              <div className="space-y-2">
                <span className="text-accent font-display text-2xl">02</span>
                <h3 className="text-xs font-semibold tracking-widest uppercase">Customer Comfort</h3>
              </div>
              <div className="space-y-2">
                <span className="text-accent font-display text-2xl">03</span>
                <h3 className="text-xs font-semibold tracking-widest uppercase">Professional Care</h3>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none">
            <img
              src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1200&q=80"
              alt="Professional styling at Royal Vision Salon"
              className="w-full h-full object-cover rounded-sm shadow-2xl"
              referrerPolicy="no-referrer"
            />
            {/* Decorative element */}
            <div className="absolute -inset-4 border border-primary/10 rounded-sm -z-10 hidden md:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
