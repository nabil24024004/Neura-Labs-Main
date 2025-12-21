import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LoadingIntro } from "@/components/LoadingIntro";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WorksSection } from "@/components/WorksSection";
import { MottosSection } from "@/components/MottosSection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatePresence mode="wait">
        {showIntro && <LoadingIntro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navigation />
          <HeroSection />
          <ServicesSection />
          <MottosSection />
          <WorksSection />
          <MarqueeSection />
          <AboutSection />
          <ContactSection />
          <Footer />
          <ScrollToTop />
        </motion.div>
      )}
    </div>
  );
};

export default Index;
