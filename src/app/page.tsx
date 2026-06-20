import Navbar from "@/components/Navbar";
import PageLoader from "@/components/PageLoader";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import CasesSection from "@/components/CasesSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import ProfileSection from "@/components/ProfileSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#020b18] text-white">
      <PageLoader />
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <StatsSection />
      <CasesSection />
      <ProcessSection />
      <FAQSection />
      <ProfileSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
