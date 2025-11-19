// Server Component - No 'use client' directive
// Only imports client components where interactivity is needed

import HeroSection from '@/components/HeroSection';
import QuienesSomosSection from '@/components/QuienesSomosSection';
import PhotoCarouselSection from '@/components/PhotoCarouselSection';
import ServiciosSection from '@/components/ServiciosSection';
import ComoFuncionaSection from '@/components/ComoFuncionaSection';
import StatsSection from '@/components/StatsSection';
import ComingSoonBanner from '@/components/ComingSoonBanner';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuienesSomosSection />
      <PhotoCarouselSection />
      <ServiciosSection />
      <ComoFuncionaSection />
      <StatsSection />
      <ComingSoonBanner />
      <ContactSection />
      <Footer />
    </>
  );
}
