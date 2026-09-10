import interiorImg from '../assets/images/regenerated_image_1789036224348.png';

export function Hygiene() {
  return (
    <section className="py-24 bg-secondary text-primary overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            CLEAN. COMFORTABLE. <br className="hidden md:block" /> PROFESSIONAL.
          </h2>
          <p className="text-lg md:text-xl text-primary/80 font-light max-w-3xl text-balance">
            Customers appreciate the salon's good infrastructure, hygiene and warm reception — creating an environment where you can relax while receiving professional care.
          </p>
        </div>

        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] mb-16">
          <img
            src={interiorImg}
            alt="Clean and comfortable salon interior"
            className="w-full h-full object-cover rounded-sm shadow-xl"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-primary/10">
          <div className="space-y-3 px-4">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-accent">Good Hygiene</h3>
          </div>
          <div className="space-y-3 px-4 border-l border-primary/10 md:border-none">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-accent">Well-Equipped Space</h3>
          </div>
          <div className="space-y-3 px-4 border-t border-primary/10 pt-8 md:border-t-0 md:pt-0">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-accent">Warm Reception</h3>
          </div>
          <div className="space-y-3 px-4 border-t border-l border-primary/10 pt-8 md:border-t-0 md:border-l-0 md:pt-0 md:border-none">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-accent">Comfortable Experience</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
