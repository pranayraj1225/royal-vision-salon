import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80"
          alt="Royal Vision Salon Interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-accent text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-6"
        >
          Suchitra • Jeedimetla • Hyderabad
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-secondary font-bold leading-tight mb-6"
        >
          BEAUTY.<br />
          PRECISION.<br />
          CONFIDENCE.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl text-secondary/80 text-lg md:text-xl font-light text-balance mb-10"
        >
          Professional salon and beauty services delivered with care, patience and attention to detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <a
            href="#book"
            className="w-full sm:w-auto px-8 py-4 bg-accent text-primary font-semibold tracking-widest text-sm hover:bg-accent-hover transition-colors uppercase"
          >
            Book an Appointment
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 border border-secondary text-secondary font-semibold tracking-widest text-sm hover:bg-secondary hover:text-primary transition-colors uppercase"
          >
            Explore Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col items-center space-y-2 border border-white/20 p-4 backdrop-blur-sm bg-primary/30"
        >
          <div className="flex items-center space-x-1 text-accent">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <p className="text-secondary font-semibold tracking-widest text-xs uppercase">
            4.9 Google Rating
          </p>
          <p className="text-secondary/60 text-[10px] tracking-wider uppercase">
            51+ Reviews
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-secondary/50 text-xs tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-px h-12 bg-secondary/30 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48, 48] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
