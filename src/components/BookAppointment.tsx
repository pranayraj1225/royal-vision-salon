import { useState } from 'react';

export function BookAppointment() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="book" className="py-24 bg-secondary text-primary relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              BOOK AN APPOINTMENT
            </h2>
            <p className="text-primary/70 text-lg font-light">
              Reserve your time for a premium salon experience.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-primary/5 border border-primary/20 p-8 text-center rounded-sm">
              <h3 className="font-display text-2xl font-bold mb-2">Request Received</h3>
              <p className="text-primary/70">
                Thank you! We will contact you shortly to confirm your appointment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-12 shadow-sm border border-primary/10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold tracking-widest uppercase">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full border-b border-primary/20 pb-2 bg-transparent focus:outline-none focus:border-accent transition-colors text-primary"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-semibold tracking-widest uppercase">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required 
                    className="w-full border-b border-primary/20 pb-2 bg-transparent focus:outline-none focus:border-accent transition-colors text-primary"
                    placeholder="Your Phone Number"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="date" className="text-xs font-semibold tracking-widest uppercase">Preferred Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    required 
                    className="w-full border-b border-primary/20 pb-2 bg-transparent focus:outline-none focus:border-accent transition-colors text-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="time" className="text-xs font-semibold tracking-widest uppercase">Preferred Time</label>
                  <input 
                    type="time" 
                    id="time" 
                    required 
                    className="w-full border-b border-primary/20 pb-2 bg-transparent focus:outline-none focus:border-accent transition-colors text-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-xs font-semibold tracking-widest uppercase">Service Required</label>
                <select 
                  id="service" 
                  required
                  className="w-full border-b border-primary/20 pb-2 bg-transparent focus:outline-none focus:border-accent transition-colors text-primary"
                >
                  <option value="">Select a service</option>
                  <option value="hair">Haircut & Styling</option>
                  <option value="facial">Skin & Facial Treatments</option>
                  <option value="nails">Manicure & Pedicure</option>
                  <option value="makeup">Professional Makeup</option>
                  <option value="other">Other / Consultation</option>
                </select>
              </div>

              <div className="pt-8 text-center">
                <button 
                  type="submit"
                  className="px-10 py-4 bg-primary text-secondary hover:bg-primary-light transition-all duration-300 text-xs font-semibold tracking-widest uppercase"
                >
                  Confirm Booking Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
