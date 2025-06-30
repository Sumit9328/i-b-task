"use client";

import AOSProvider from '../components/AOSProvider';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseMeSection from '../components/WhyChooseMeSection';
import ProjectsSection from '../components/ProjectsSection';
import ParallaxSection from '../components/ParallaxSection';
import ContactFormSection from '../components/ContactFormSection';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';

// Main Portfolio Component
export default function Portfolio() {
  return (
    <AOSProvider>
      <div className="min-h-screen">
        <Header />
        <main className="pt-16"> {/* Add padding-top to account for fixed header */}
          <HeroSection />
          <ServicesSection />
          <WhyChooseMeSection />
          <ParallaxSection />
          <ProjectsSection />
          <ContactFormSection />
          <NewsletterSection />
        </main>
        <Footer />
      </div>
    </AOSProvider>
  );
}
