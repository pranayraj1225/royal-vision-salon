import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { reviews } from '../data';

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section id="reviews" className="py-32 bg-secondary text-primary relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">WHAT OUR CLIENTS SAY</h2>
          
          <div className="inline-flex flex-col items-center justify-center space-y-3 p-6 bg-white border border-primary/5 shadow-sm rounded-sm">
            <span className="font-display text-5xl font-bold text-accent">4.9</span>
            <div className="flex text-accent space-x-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">
              51+ Google Reviews
            </span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative px-4 md:px-16">
          {/* Controls */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-primary/40 hover:text-accent transition-colors z-20"
            aria-label="Previous review"
          >
            <ChevronLeft size={32} strokeWidth={1} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-primary/40 hover:text-accent transition-colors z-20"
            aria-label="Next review"
          >
            <ChevronRight size={32} strokeWidth={1} />
          </button>

          {/* Carousel */}
          <div className="relative h-[250px] md:h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
              >
                <p className="font-display text-xl md:text-2xl leading-relaxed italic text-primary/90 mb-8 max-w-3xl">
                  "{reviews[currentIndex].text}"
                </p>
                <div className="w-8 h-px bg-accent mb-4"></div>
                <p className="text-sm font-semibold tracking-widest uppercase text-primary">
                  {reviews[currentIndex].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-accent w-6' : 'bg-primary/20 hover:bg-primary/40'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
