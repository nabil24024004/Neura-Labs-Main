import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
export const HeroSection = () => {
  const isMobile = useIsMobile();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      </div>

      {/* Floating Orbs */}
      <motion.div animate={{
      y: [0, -30, 0],
      opacity: [0.3, 0.6, 0.3]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <motion.div animate={{
      y: [0, 30, 0],
      opacity: [0.3, 0.6, 0.3]
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1
    }} className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 z-10">
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="text-center space-y-8 max-w-5xl mx-auto">
          

          <h1 className="text-6xl md:text-8xl font-bold gradient-text glow-text leading-tight">
            Designing the Future
            <br />
            of Intelligence
          </h1>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5
        }} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">Software Architect • AI Automation • SaaS Agency</motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.7
        }} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            
            
          </motion.div>

          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1
        }} className="pt-12">
            <p className="text-sm text-muted-foreground mb-4">Trusted by innovative companies</p>
            <div className={`relative w-full opacity-40 ${isMobile ? 'overflow-hidden' : ''}`}>
              <motion.div className={`flex gap-8 whitespace-nowrap ${!isMobile ? 'justify-center' : ''}`} animate={isMobile ? {
              x: ["0%", "-50%"]
            } : {}} transition={isMobile ? {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            } : {}}>
                {(isMobile ? [...["TechCorp", "InnovateLabs", "FutureAI", "DataFlow"], ...["TechCorp", "InnovateLabs", "FutureAI", "DataFlow"]] : ["TechCorp", "InnovateLabs", "FutureAI", "DataFlow"]).map((company, i) => <div key={`${company}-${i}`} className="text-lg font-semibold">
                    {company}
                  </div>)}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};