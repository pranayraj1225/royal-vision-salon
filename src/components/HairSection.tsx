export function HairSection() {
  return (
    <section className="py-24 bg-secondary text-primary relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-5/12 space-y-10">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              YOUR NEXT <br /> LOOK, DONE RIGHT.
            </h2>
            
            <ul className="space-y-4">
              {['Haircuts', 'Hair styling', 'Hair spa', 'Personalized attention'].map((item, i) => (
                <li key={i} className="flex items-center text-primary/80 font-medium">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mr-4"></span>
                  <span className="text-sm tracking-wider uppercase">{item}</span>
                </li>
              ))}
            </ul>

            <blockquote className="p-6 bg-white border border-primary/5 shadow-sm rounded-sm">
              <p className="font-display text-xl italic text-primary/90 mb-4">
                "The response is very good and my haircut is awesome."
              </p>
              <footer className="text-xs font-semibold tracking-widest uppercase text-primary/50">
                Customer Review
              </footer>
            </blockquote>

            <div className="pt-4">
              <a
                href="#book"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-secondary hover:bg-primary-light transition-all duration-300 text-xs font-semibold tracking-widest uppercase"
              >
                Book a Hair Appointment
              </a>
            </div>
          </div>

          <div className="w-full lg:w-7/12 relative">
            <div className="aspect-[4/3] w-full">
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80"
                alt="Professional hair styling"
                className="w-full h-full object-cover rounded-sm shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Subtle decorative block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-sm -z-10 hidden md:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
