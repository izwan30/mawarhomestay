import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Location from './components/Location';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { SITE_TITLE, SITE_DESCRIPTION } from './constants';

function App() {
  useEffect(() => {
    // Update meta tags for SEO
    document.title = SITE_TITLE;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', SITE_DESCRIPTION);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = SITE_DESCRIPTION;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Location />
      <Amenities />
      <Gallery />
      <Testimonials />
      <Pricing />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;