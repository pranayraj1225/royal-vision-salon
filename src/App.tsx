/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { About } from './components/About';
import { Differentiator } from './components/Differentiator';
import { Services } from './components/Services';
import { PersonalizedFacial } from './components/PersonalizedFacial';
import { Hygiene } from './components/Hygiene';
import { HairSection } from './components/HairSection';
import { Reviews } from './components/Reviews';
import { BookAppointment } from './components/BookAppointment';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Differentiator />
        
        <div id="services">
          <Services />
        </div>
        
        <div id="experience">
          <PersonalizedFacial />
          <Hygiene />
          <HairSection />
        </div>
        
        <Reviews />
        <BookAppointment />
        <Contact />
      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
