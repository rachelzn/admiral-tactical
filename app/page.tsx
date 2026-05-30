import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

import Metrics from '@/components/Metrics';
import About from '@/components/About';
import Factory from '@/components/Factory';
import CustomDesign from '@/components/CustomDesign';
import ProductShowcase from '@/components/ProductShowcase';
import WhyAdmiral from '@/components/WhyAdmiral';

import Location from '@/components/Location';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <Metrics />
      <About />
      <Factory />
      <CustomDesign />
      <ProductShowcase />
      <WhyAdmiral />

      <Location />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
