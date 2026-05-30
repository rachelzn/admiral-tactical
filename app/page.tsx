import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Clients from '@/components/Clients';
import Metrics from '@/components/Metrics';
import About from '@/components/About';
import Factory from '@/components/Factory';
import CustomDesign from '@/components/CustomDesign';
import ProductShowcase from '@/components/ProductShowcase';
import WhyAdmiral from '@/components/WhyAdmiral';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Metrics />
      <About />
      <Factory />
      <CustomDesign />
      <ProductShowcase />
      <WhyAdmiral />
      <Testimonials />
      <Location />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
