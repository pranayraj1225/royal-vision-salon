export function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary text-secondary border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="font-display text-4xl md:text-5xl font-bold">VISIT ROYAL VISION</h2>
              <div className="w-12 h-px bg-accent"></div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">Address</h3>
                <p className="text-secondary/80 font-light leading-relaxed max-w-sm">
                  ROYAL VISION SALON<br />
                  Pipeline Colony,<br />
                  Suchitra, Praga Tools Colony,<br />
                  Jeedimetla, Hyderabad,<br />
                  Telangana 500067
                </p>
              </div>

              <div>
                <h3 className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">Contact</h3>
                <p className="text-secondary/80 font-light">
                  <a href="tel:+919908548883" className="hover:text-accent transition-colors">099085 48883</a>
                </p>
              </div>

              <div>
                <h3 className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">Hours</h3>
                <p className="text-secondary/80 font-light">
                  Open daily until 9:00 PM
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="tel:+919908548883"
                className="px-6 py-3 border border-secondary text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 text-xs font-semibold tracking-widest uppercase text-center"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/919908548883?text=Hi%20Royal%20Vision%20Salon"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-secondary text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 text-xs font-semibold tracking-widest uppercase text-center"
              >
                WhatsApp
              </a>
              <a
                href="https://goo.gl/maps/search/?api=1&query=Royal+Vision+Salon+Pipeline+Colony+Suchitra+Jeedimetla+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-accent text-primary hover:bg-accent-hover transition-all duration-300 text-xs font-semibold tracking-widest uppercase text-center"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="w-full h-[400px] lg:h-[600px] bg-white/5 rounded-sm overflow-hidden ring-1 ring-white/10">
            {/* Minimal static map placeholder. In a real app with API keys, use an actual Google Map embed. */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15220.170566371728!2d78.4619472!3d17.5055039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb904ab7030807%3A0x7c4dd9afb21a8d9b!2sSuchitra%20Cross%20Roads%2C%20Jeedimetla%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Royal Vision Salon Map Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
