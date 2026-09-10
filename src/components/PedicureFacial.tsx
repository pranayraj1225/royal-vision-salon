export function PedicureFacial() {
  return (
    <section className="bg-primary text-secondary">
      <div className="grid md:grid-cols-2">
        {/* Left: Pedicure */}
        <div className="relative aspect-[3/4] md:aspect-auto md:h-[800px] group overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=1200&q=80"
            alt="Relaxing pedicure service"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex items-end p-8 md:p-16">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white">PEDICURE</h3>
          </div>
        </div>

        {/* Right: Facial */}
        <div className="relative aspect-[3/4] md:aspect-auto md:h-[800px] group overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
            alt="Relaxing facial service"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex items-end p-8 md:p-16">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white">FACIAL</h3>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-24 text-center max-w-4xl">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-accent mb-8">
          TAKE TIME FOR YOURSELF.
        </h2>
        <p className="text-lg md:text-xl text-secondary/80 font-light max-w-2xl mx-auto mb-12">
          From pedicures and facials to everyday beauty care, enjoy a comfortable experience with a team that takes the time to provide attentive service.
        </p>

        <blockquote className="mb-12">
          <p className="font-display text-2xl italic text-secondary mb-4">
            "My mom and I went here for a pedicure and facial, the service was excellent, and the staff were incredibly patient."
          </p>
          <footer className="text-sm font-semibold tracking-widest uppercase text-accent">
            — Sanjana Erravelli
          </footer>
        </blockquote>

        <a
          href="#book"
          className="inline-flex items-center justify-center px-8 py-4 bg-accent text-primary hover:bg-accent-hover transition-all duration-300 text-xs font-semibold tracking-widest uppercase"
        >
          Book a Beauty Service
        </a>
      </div>
    </section>
  );
}
