import Hero from "@/components/marketing/Hero";
import { WhyUsSection } from "@/components/marketing/WhyUsSection";
import { ServicesSection } from "@/components/marketing/ServicesSection";
import { PricingSection } from "@/components/marketing/Pricing";
import Doubts from "@/components/marketing/Doubts";
import { TestimonialsSection } from "@/components/marketing/Testimonials";
import { Footer } from "@/components/marketing/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden bg-black">
      <Hero />
      <WhyUsSection />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <Doubts/>
      <Footer />
    </div>
  );
}
