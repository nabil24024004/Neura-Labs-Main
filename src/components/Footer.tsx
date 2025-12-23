import { motion } from "framer-motion";
import { Mail, Phone, Globe, Facebook, Instagram, Sparkles, Zap } from "lucide-react";
import behanceFooterLogo from "@/assets/behance-footer.png";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "", label: "Facebook", color: "hover:text-blue-400" },
    { icon: Instagram, href: "https://www.instagram.com/neuralabs.co/", label: "Instagram", color: "hover:text-pink-400" },
    { image: behanceFooterLogo, href: "https://www.behance.net/neuralabs-projects", label: "Behance", color: "hover:text-purple-400" },
  ];

  const contactInfo = [
    { icon: Mail, text: "hello@neuralabs.co", href: "mailto:neuralabsaaub@gmail.com" },
    { icon: Phone, text: "+880 1823 604026", href: "tel:+8801823604026" },
    { icon: Globe, text: "www.neuralabs.co", href: "https://neuralabsaaub.vercel.app" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Works", href: "#works" },
    { name: "About", href: "#about" },
    { name: "Connect", href: "#connect" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Neon glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-20 top-1/2 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-20 top-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Neura Labs" className="w-20 h-20 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
              <h3 className="text-2xl font-bold gradient-text">Neura Labs</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Designing the Future of Intelligence. AI-powered solutions for tomorrow's challenges.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <Zap className="w-4 h-4 text-cyan-400 animate-pulse" style={{ animationDelay: "0.5s" }} />
              <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground smooth-transition text-sm inline-block relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full smooth-transition" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={info.href}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground smooth-transition text-sm group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                    >
                      <info.icon className="w-4 h-4" />
                    </motion.div>
                    <span className="group-hover:translate-x-1 smooth-transition">{info.text}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Us</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 flex items-center justify-center smooth-transition group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 smooth-transition"
                  />
                  {'icon' in social ? (
                    <social.icon className={`w-5 h-5 text-muted-foreground group-hover:text-foreground smooth-transition relative z-10 ${social.color}`} />
                  ) : (
                    <img src={social.image} alt={social.label} className="w-5 h-5 relative z-10 opacity-70 group-hover:opacity-100 smooth-transition" />
                  )}

                  {/* Neon glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 smooth-transition"
                    style={{
                      boxShadow: "0 0 20px rgba(34,211,238,0.5), inset 0 0 20px rgba(34,211,238,0.2)",
                    }}
                  />
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
              Stay updated with our latest AI innovations and projects.
            </p>
          </motion.div>
        </div>

        {/* Divider with glow */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Neura Labs. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="text-muted-foreground hover:text-foreground smooth-transition">
              Privacy Policy
            </a>
            <a href="/privacy" className="text-muted-foreground hover:text-foreground smooth-transition">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
