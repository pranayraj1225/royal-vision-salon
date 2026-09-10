export function Differentiator() {
  return (
    <section className="py-24 bg-primary text-secondary relative overflow-hidden">
      {/* Abstract subtle background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          <div className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-accent">
              WE DON'T RUSH YOUR LOOK.
            </h2>
            <p className="text-lg md:text-xl text-secondary/80 font-light max-w-2xl mx-auto text-balance">
              Great results take attention. Customers have highlighted the patience and detail shown by the team, even when services were being completed close to closing time.
            </p>
          </div>

          <blockquote className="relative p-8 md:p-12 border border-white/10 bg-white/5 backdrop-blur-sm">
            {/* Elegant Quote marks */}
            <span className="absolute top-4 left-6 text-6xl text-accent/20 font-display leading-none">"</span>
            
            <p className="relative z-10 font-display text-xl md:text-2xl leading-relaxed text-secondary italic mb-8">
              I went to get my hair cut done here during closing time and I was extremely impressed with the patience and attention to detail by the hair dresser. I didn't see any signs of impatience nor did I notice any rush in trying to get the hair cut.
            </p>
            
            <footer className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-px bg-accent mb-4"></div>
              <cite className="not-italic text-sm font-semibold tracking-widest uppercase text-secondary">
                Dugyala Ashritha
              </cite>
              <span className="text-xs text-secondary/50 mt-1 uppercase tracking-wider">
                Customer Review
              </span>
            </footer>
          </blockquote>

        </div>
      </div>
    </section>
  );
}
