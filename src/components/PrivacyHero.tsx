const PrivacyHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-6 overflow-hidden pt-32">
      {/* Static background glow with CSS animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-full blur-[120px] animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">Legal & Privacy</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground font-light tracking-wide">
            Transparent. Secure. Responsible.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            Neura Labs operates with clarity and respect for your data. This page outlines 
            how we collect, use, and protect information — and the terms that guide our services.
          </p>
        </div>

        {/* Static divider */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </div>
    </section>
  );
};

export default PrivacyHero;
