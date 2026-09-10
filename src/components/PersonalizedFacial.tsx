export function PersonalizedFacial() {
  return (
    <section className="py-24 bg-primary text-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none">
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80"
              alt="Personalized facial treatment"
              className="w-full h-full object-cover rounded-sm"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-sm"></div>
          </div>

          <div className="order-1 lg:order-2 space-y-10">
            <div className="space-y-6">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-accent">
                YOUR SKIN <br className="hidden md:block"/> IS UNIQUE.
              </h2>
              <p className="text-lg text-secondary/80 font-light leading-relaxed">
                Every skin type has different needs. Customers have appreciated the team's ability to understand those needs and recommend a facial suited to the individual.
              </p>
            </div>

            <blockquote className="pl-6 border-l-2 border-accent space-y-4">
              <p className="font-display text-xl leading-relaxed italic text-secondary/90">
                "This was a last minute decision as I wanted to get a quick facial done and I was super impressed. Pavni did a great job and recommended the facial type based on my skin type. I am happy with the results and will again visit them for a different service."
              </p>
              <footer className="text-sm font-semibold tracking-widest uppercase text-accent">
                — Priyanka Ray
              </footer>
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
}
