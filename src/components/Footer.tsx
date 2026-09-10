export function Footer() {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-primary text-secondary border-t border-white/5 py-16 pb-32 lg:pb-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-start mb-16">
          
          <div className="space-y-4">
            <a href="#home" className="flex flex-col items-start leading-none group inline-flex">
              <span className="font-display text-2xl font-semibold tracking-wider uppercase group-hover:text-accent transition-colors">
                Royal
              </span>
              <span className="font-display text-2xl font-semibold tracking-wider uppercase group-hover:text-accent transition-colors">
                Vision
              </span>
              <span className="text-[10px] tracking-[0.2em] font-sans mt-1 text-accent">SALON</span>
            </a>
            <p className="text-secondary/60 text-sm italic font-display pt-4">
              Beauty. Precision. Confidence.
            </p>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">Navigation</h4>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-secondary/70 hover:text-accent text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">Contact</h4>
            <p className="text-secondary/70 text-sm">
              099085 48883
            </p>
            <p className="text-secondary/70 text-sm">
              Suchitra / Jeedimetla, Hyderabad
            </p>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-secondary/40 text-xs">
          <p>© {new Date().getFullYear()} Royal Vision Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
