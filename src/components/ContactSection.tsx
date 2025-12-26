import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Send, Phone, Globe, Linkedin, Instagram, ExternalLink } from "lucide-react";
import { useState } from "react";
import behanceLogo from "@/assets/behance.png";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_pxvd8m8",
        "template_ccp4fi9",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "9KaRQQTYYLWLDN_ee"
      );

      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          message: ""
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  const contactMethods = [{
    icon: Mail,
    label: "Email",
    value: "hello@neuralabs.co",
    href: "mailto:hello@neuralabs.co",
    delay: 0.1
  }, {
    icon: Globe,
    label: "Website",
    value: "www.neuralabs.co",
    href: "https://neuralab.lovable.app",
    delay: 0.1
  }, {
    icon: Phone,
    label: "Call",
    value: "+880 1823 604026",
    href: "tel:+8801823604026",
    delay: 0.3
  }];
  const socialLinks = [{
    icon: Linkedin,
    label: "LinkedIn",
    href: "#",
    delay: 0.4
  }, {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/neuralabs.co/",
    delay: 0.5
  }, {
    image: behanceLogo,
    label: "Behance",
    href: "#",
    delay: 0.6
  }];
  return <section id="connect" className="py-32 relative overflow-hidden">
    {/* Neural Network Background */}
    <div className="absolute inset-0 opacity-5">
      <motion.div animate={{
        backgroundPosition: ["0% 0%", "100% 100%"]
      }} transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse"
      }} className="absolute inset-0" style={{
        backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
        backgroundSize: "80px 80px"
      }} />
    </div>

    {/* Particle Effects */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 bg-white rounded-full" initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: 0
      }} animate={{
        y: [null, Math.random() * window.innerHeight],
        opacity: [0, 0.5, 0]
      }} transition={{
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        delay: Math.random() * 5
      }} />)}
    </div>

    <div className="container mx-auto px-4 relative z-10">
      {/* Header */}
      <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-20">
        <motion.div initial={{
          scaleX: 0
        }} whileInView={{
          scaleX: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 1,
          delay: 0.2
        }} className="h-0.5 w-32 mx-auto mb-8 bg-gradient-to-r from-transparent via-white to-transparent" />

        <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
          Let's Build Intelligence Together
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Whether you're looking to automate a workflow, design an AI product, or discuss collaboration, we're here to help.
          <br />
          <span className="text-foreground/80">Drop us a message, we'll respond faster than your favorite AI.</span>
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Left: Contact Form */}
        <motion.div initial={{
          opacity: 0,
          x: -40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="relative">
          <AnimatePresence mode="wait">
            {!isSubmitted ? <motion.form key="form" initial={{
              opacity: 1
            }} exit={{
              opacity: 0,
              scale: 0.95
            }} onSubmit={handleSubmit} className="glass-panel rounded-2xl p-8 space-y-10 relative overflow-hidden min-h-[750px] flex flex-col">
              {/* Form glow effect */}
              <motion.div className="absolute inset-0 opacity-10 pointer-events-none" animate={{
                background: ["radial-gradient(circle at 0% 0%, white 0%, transparent 50%)", "radial-gradient(circle at 100% 100%, white 0%, transparent 50%)", "radial-gradient(circle at 0% 0%, white 0%, transparent 50%)"]
              }} transition={{
                duration: 10,
                repeat: Infinity
              }} />

              <h3 className="text-2xl font-bold gradient-text mb-4">Let's Connect</h3>

              {/* Name Field */}
              <div className="relative flex-1">
                <motion.label animate={{
                  y: focusedField === "name" || formData.name ? -28 : 0,
                  scale: focusedField === "name" || formData.name ? 0.85 : 1,
                  color: focusedField === "name" ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))"
                }} className="absolute left-4 top-4 pointer-events-none origin-left smooth-transition text-sm font-medium">
                  Your Name
                </motion.label>
                <input type="text" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} onFocus={() => setFocusedField("name")} onBlur={() => setFocusedField(null)} className="w-full bg-background/40 border border-white/10 rounded-lg px-4 pt-6 pb-2 text-foreground focus:border-white/40 focus:ring-2 focus:ring-white/20 smooth-transition outline-none" required />
              </div>

              {/* Email Field */}
              <div className="relative flex-1">
                <motion.label animate={{
                  y: focusedField === "email" || formData.email ? -28 : 0,
                  scale: focusedField === "email" || formData.email ? 0.85 : 1,
                  color: focusedField === "email" ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))"
                }} className="absolute left-4 top-4 pointer-events-none origin-left smooth-transition text-sm font-medium">
                  Email Address
                </motion.label>
                <input type="email" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)} className="w-full bg-background/40 border border-white/10 rounded-lg px-4 pt-6 pb-2 text-foreground focus:border-white/40 focus:ring-2 focus:ring-white/20 smooth-transition outline-none" required />
              </div>

              {/* Message Field */}
              <div className="relative flex-[2]">
                <motion.label animate={{
                  y: focusedField === "message" || formData.message ? -28 : 0,
                  scale: focusedField === "message" || formData.message ? 0.85 : 1,
                  color: focusedField === "message" ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))"
                }} className="absolute left-4 top-4 pointer-events-none origin-left smooth-transition text-sm font-medium">
                  Your Message
                </motion.label>
                <textarea value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} onFocus={() => setFocusedField("message")} onBlur={() => setFocusedField(null)} className="w-full h-full bg-background/40 border border-white/10 rounded-lg px-4 pt-6 pb-2 text-foreground focus:border-white/40 focus:ring-2 focus:ring-white/20 smooth-transition outline-none min-h-[200px] resize-none" required />
              </div>

              {/* Submit Button */}
              <motion.button type="submit" whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} className="w-full bg-white text-background py-4 rounded-lg font-semibold text-lg group relative overflow-hidden mt-auto">
                <motion.div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0" animate={{
                  x: ["-100%", "200%"]
                }} transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1
                }} />
                <span className="relative flex items-center justify-center gap-2">
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 smooth-transition" />
                </span>
              </motion.button>
            </motion.form> : <motion.div key="success" initial={{
              opacity: 0,
              scale: 0.9
            }} animate={{
              opacity: 1,
              scale: 1
            }} className="glass-panel rounded-2xl p-12 flex flex-col items-center justify-center min-h-[750px] text-center">
              <motion.div initial={{
                scale: 0
              }} animate={{
                scale: 1
              }} transition={{
                type: "spring",
                delay: 0.2
              }} className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <motion.div animate={{
                  rotate: 360
                }} transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}>
                  <Send className="w-12 h-12 text-white" />
                </motion.div>
              </motion.div>
              <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.4
              }}>
                <h3 className="text-2xl font-bold mb-3 gradient-text">Message sent. The system is thinking...</h3>
                <p className="text-muted-foreground">Our team will respond soon.</p>
              </motion.div>
            </motion.div>}
          </AnimatePresence>
        </motion.div>

        {/* Right: Contact Info */}
        <motion.div initial={{
          opacity: 0,
          x: 40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="space-y-8">
          {/* Contact Methods */}
          <div className="glass-panel rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-bold gradient-text mb-6">Keep in. touch.</h3>
            {contactMethods.map((method, index) => <motion.a key={index} href={method.href} initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: method.delay
            }} whileHover={{
              x: 5
            }} className="flex items-center gap-4 p-4 rounded-lg bg-background/40 border border-white/10 hover:border-white/30 smooth-transition group">
              <motion.div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 smooth-transition" whileHover={{
                scale: 1.1
              }}>
                <method.icon className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <p className="text-sm text-muted-foreground">{method.label}</p>
                <p className="text-foreground font-medium">{method.value}</p>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 smooth-transition" />
            </motion.a>)}
          </div>

          {/* Social Links */}
          <div className="glass-panel rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => <motion.a key={index} href={social.href} target="_blank" rel="noopener noreferrer" initial={{
                opacity: 0,
                scale: 0
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: social.delay
              }} whileHover={{
                scale: 1.1,
                y: -3
              }} className="w-14 h-14 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 flex items-center justify-center smooth-transition group">
                {'icon' in social ? <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-foreground smooth-transition" /> : <img src={social.image} alt={social.label} className="w-8 h-8 opacity-70 group-hover:opacity-100 smooth-transition" />}
              </motion.a>)}
            </div>
          </div>

          {/* Additional Info */}
          <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.7
          }} className="glass-panel rounded-2xl p-8">
            <p className="text-muted-foreground leading-relaxed">
              Got an idea, a problem to solve, or a product to automate? Reach out Neura Labs is always ready to collaborate.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>;
};