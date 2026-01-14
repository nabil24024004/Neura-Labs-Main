import { motion } from "framer-motion";
import { Brain, Palette, Zap } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Web & App Development",
    description: "Dynamic, scalable, and beautifully crafted digital experiences, built to perform and inspire. From mobile apps to full-scale web platforms, we bring your vision to life with modern frameworks and design precision.",
    features: ["Custom Web Applications", "Mobile App Development (iOS & Android)", "Backend Systems & API Integration"],
  },
  {
    icon: Palette,
    title: "Product Design",
    description: "We craft intelligent digital experiences that merge aesthetics with function. From advanced UI/UX and lifelike interactive prototypes to adaptive, AI-powered design systems, every pixel is engineered to captivate and convert.",
    features: ["Next-Gen UI/UX Design", "Interactive Prototyping", "Intelligent Design Systems"],
  },
  {
    icon: Zap,
    title: "Automation Systems",
    description: "Automate. Integrate. Elevate. We engineer intelligent pipelines, connect APIs, and deploy AI agents that move your business at machine speed.",
    features: ["Workflow Automation", "Seamless API Integration", "AI Agent development"],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building intelligent solutions that transform businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-panel rounded-2xl p-8 group hover:shadow-glow smooth-transition"
            >
              {/* <motion.div
                whileHover={{ rotate: 0 }}
                transition={{ duration: 0 }}
                className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 smooth-transition"
              >
                <service.icon className="w-8 h-8" />
              </motion.div> */}

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + i * 0.1 }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
