import { services } from '../data';

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary text-primary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">OUR SERVICES</h2>
          <p className="text-primary/70 text-lg font-light">
            Professional beauty and grooming services designed around you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-24">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col group">
              <div className="overflow-hidden mb-6 h-64 md:h-80 w-full relative">
                <img 
                  src={service.image} 
                  alt={service.category} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/10 transition-opacity duration-300 group-hover:opacity-0" />
              </div>
              <div className="border-b border-primary/20 pb-4 mb-6">
                <h3 className="text-xl font-semibold tracking-widest uppercase mb-2">
                  {service.category}
                </h3>
                <p className="text-primary/60 text-sm font-light">
                  {service.description}
                </p>
              </div>
              
              <ul className="space-y-4 flex-grow">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center text-primary/90 font-medium">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-4"></span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-primary/10">
                <a href="#book" className="text-xs font-semibold tracking-widest uppercase text-accent hover:text-accent-hover transition-colors">
                  Enquire for Pricing →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
