import { motion } from 'motion/react';
import heroImg from '../assets/images/regenerated_image_1789036224348.png';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
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
          className="max-w-2xl text-secondary/80 text-lg md:text-xl font-light text-balance mb-10 italic"
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
      </div>
    </section>
  );
}
