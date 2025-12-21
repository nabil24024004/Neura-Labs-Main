import { useEffect, useState, useCallback } from "react";
import { ArrowUp, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import PrivacyHero from "@/components/PrivacyHero";
import LegalSection from "@/components/LegalSection";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const privacyContent = [
  {
    title: "Who We Are",
    content: `Neura Labs is an AI and design agency focused on intelligent systems, automation, and digital experiences.

Website: https://www.neuralabs.co

Contact: hello@neuralabs.co`
  },
  {
    title: "Information We Collect",
    content: `We collect limited data to operate our business effectively:

• Provided by you: name, email, project or inquiry details.
• Automatically: browser type, IP address, device info, and analytics data (via Google Analytics or similar tools).

We do not sell or trade your personal information.`
  },
  {
    title: "How We Use Data",
    content: `• To communicate with you about projects or inquiries.
• To improve our site and user experience.
• To meet legal or contractual obligations.

All processing is based on legitimate business needs or your consent.`
  },
  {
    title: "Data Retention & Security",
    content: `• We retain data only as long as necessary.
• Our systems use SSL encryption, secure servers, and restricted access.
• To delete or modify your data, email privacy@neuralabs.co`
  },
  {
    title: "Cookies",
    content: `We use essential and analytics cookies to ensure smooth functionality and improve performance.

You can manage or disable cookies in your browser settings.`
  },
  {
    title: "Your Rights",
    content: `You may request to access, correct, or delete your data, or withdraw consent at any time under GDPR or equivalent laws.`
  },
  {
    title: "Third-Party Services",
    content: `We use trusted third-party providers for hosting, analytics, and communication — all compliant with international data laws.`
  },
  {
    title: "Policy Updates",
    content: `We may revise this policy periodically. Updates will be posted here with a new "Last Updated" date.

Contact: privacy@neuralabs.co

Neura Labs, Lalmonirhat, Bangladesh.`
  }
];

const termsContent = [
  {
    title: "Services",
    content: `Neura Labs provides AI development, web/app design, automation, and consulting.

Service details, deliverables, and payment terms are outlined in separate agreements.`
  },
  {
    title: "Acceptable Use",
    content: `You agree not to misuse our website or materials.

Unauthorized copying, scraping, or interference with our systems is prohibited.`
  },
  {
    title: "Intellectual Property",
    content: `All site content, branding, and materials are owned by Neura Labs.

Client assets created under contract are transferred according to each project's agreement.`
  },
  {
    title: "Payments & Refunds",
    content: `All payments follow the terms of individual contracts.

Unless otherwise stated, fees are non-refundable once a project has commenced.`
  },
  {
    title: "Confidentiality",
    content: `Both parties agree to protect proprietary and project information shared during collaboration.`
  },
  {
    title: "Disclaimer & Liability",
    content: `Our website and services are provided "as is."

Neura Labs is not liable for indirect or consequential damages exceeding the total service fee paid.`
  },
  {
    title: "Termination",
    content: `We may suspend or terminate access if these terms are violated or misused.`
  },
  {
    title: "Governing Law",
    content: `These Terms are governed by the laws of Bangladesh, and disputes will be settled in the courts of Lalmonirhat.`
  },
  {
    title: "Updates",
    content: `Neura Labs may modify these Terms periodically. Continued use implies acceptance of the latest version.

Contact: legal@neuralabs.co`
  }
];

const Privacy = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("privacy");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Throttled scroll handler for better performance
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = (scrollTop / docHeight) * 100;
          
          setShowBackToTop(scrollTop > 400);
          setScrollProgress(progress);

          // Detect active section
          const privacySection = document.getElementById("privacy-section");
          const termsSection = document.getElementById("terms-section");
          
          if (privacySection && termsSection) {
            const privacyRect = privacySection.getBoundingClientRect();
            const termsRect = termsSection.getBoundingClientRect();
            
            if (termsRect.top < window.innerHeight / 2) {
              setActiveSection("terms");
            } else if (privacyRect.top < window.innerHeight / 2) {
              setActiveSection("privacy");
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      </div>

      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-border z-50 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navigation />

      {/* Sticky TOC for desktop - Minimal vertical indicators */}
      <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-40">
        <nav className="flex flex-col gap-4">
          <button
            onClick={() => scrollToSection("privacy-section")}
            className="group relative"
            aria-label="Privacy Policy"
          >
            <div
              className={`w-2 h-12 rounded-full transition-all ${
                activeSection === "privacy"
                  ? "bg-gradient-to-b from-cyan-500 to-violet-500"
                  : "bg-border hover:bg-muted-foreground"
              }`}
            />
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="glass-panel px-3 py-1.5 rounded text-xs whitespace-nowrap">
                Privacy Policy
              </div>
            </div>
          </button>
          <button
            onClick={() => scrollToSection("terms-section")}
            className="group relative"
            aria-label="Terms of Service"
          >
            <div
              className={`w-2 h-12 rounded-full transition-all ${
                activeSection === "terms"
                  ? "bg-gradient-to-b from-cyan-500 to-violet-500"
                  : "bg-border hover:bg-muted-foreground"
              }`}
            />
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="glass-panel px-3 py-1.5 rounded text-xs whitespace-nowrap">
                Terms of Service
              </div>
            </div>
          </button>
        </nav>
      </div>

      <PrivacyHero />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        {/* Privacy Policy Section */}
        <div
          id="privacy-section"
          className="mb-32 scroll-mt-32 animate-fade-in"
        >
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              🔒 Privacy Policy
            </h2>
            <p className="text-muted-foreground">
              Effective Date: <span className="text-foreground">13 Nov, 2025</span>
            </p>
            <div className="h-px bg-gradient-to-r from-cyan-500/50 via-violet-500/50 to-transparent mt-8" />
          </div>

          <p className="text-lg mb-12 leading-relaxed text-muted-foreground">
            At Neura Labs, we value your privacy and are committed to handling your information 
            responsibly. This policy explains what data we collect, how we use it, and your rights 
            regarding that information.
          </p>

          <LegalSection items={privacyContent} />
        </div>

        {/* Terms of Service Section */}
        <div
          id="terms-section"
          className="mb-32 scroll-mt-32 animate-fade-in"
        >
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              ⚖️ Terms of Service
            </h2>
            <p className="text-muted-foreground">
              Effective Date: <span className="text-foreground">13 Nov, 2025</span>
            </p>
            <div className="h-px bg-gradient-to-r from-cyan-500/50 via-violet-500/50 to-transparent mt-8" />
          </div>

          <p className="text-lg mb-12 leading-relaxed text-muted-foreground">
            By accessing our website or services, you agree to the following terms.
          </p>

          <LegalSection items={termsContent} />
        </div>

        {/* Footer CTA Section */}
        <div className="glass-panel p-12 rounded-2xl text-center animate-fade-in">
          <p className="text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
            "Transparency builds trust. Neura Labs is committed to ethical AI, user privacy, 
            and responsible innovation."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="gap-2 group">
              <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Download PDF
            </Button>
            <Button 
              size="lg" 
              className="gap-2 group"
              onClick={() => window.location.href = "mailto:legal@neuralabs.co"}
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Contact Legal Team
            </Button>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl smooth-transition hover:scale-110 z-50 animate-scale-in"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <Footer />
    </div>
  );
};

export default Privacy;
