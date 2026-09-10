export function TrustStrip() {
  const items = [
    {
      title: "4.9 ★",
      subtitle: "Google Rating",
    },
    {
      title: "51+",
      subtitle: "Reviews",
    },
    {
      title: "Professional",
      subtitle: "Service",
    },
    {
      title: "Open Until",
      subtitle: "9 PM",
    },
  ];

  return (
    <section className="bg-primary text-secondary py-12 border-b border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <span className="font-display text-3xl md:text-4xl text-accent mb-2">{item.title}</span>
              <span className="text-xs tracking-widest uppercase text-secondary/70">{item.subtitle}</span>
            </div>
          ))}
        </div>
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-sans text-sm md:text-base text-secondary/80 font-light italic text-balance">
            "Trusted by customers for professional service, patient staff and a comfortable salon experience."
          </p>
        </div>
      </div>
    </section>
  );
}
