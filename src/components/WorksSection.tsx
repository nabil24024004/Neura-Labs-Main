import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const projects = [{
  title: "PeerHire",
  category: "Web App",
  description: "A university-exclusive platform for outsourcing varsity work",
  gradient: "from-blue-500/20 to-purple-500/20"
}, {
  title: "Smart Analytics Dashboard",
  category: "Product Design",
  description: "Real-time data visualization with predictive insights",
  gradient: "from-green-500/20 to-teal-500/20"
}, {
  title: "Voice AI Assistant",
  category: "AI Development",
  description: "Natural language processing for enterprise workflows",
  gradient: "from-orange-500/20 to-red-500/20"
}, {
  title: "Document Intelligence",
  category: "AI Development",
  description: "Automated document processing and extraction system",
  gradient: "from-pink-500/20 to-purple-500/20"
}];
export const WorksSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  return <section id="works" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
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
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Featured Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Showcasing our latest innovative solutions
          </p>
          <Button onClick={() => {
          navigate("/works");
          setTimeout(() => window.scrollTo({
            top: 0,
            behavior: "instant"
          }), 0);
        }} variant="outline" size="lg" className="hover-scale">
            View All Projects
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => <motion.div key={project.title} initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} onHoverStart={() => setHoveredIndex(index)} onHoverEnd={() => setHoveredIndex(null)} className="relative group cursor-pointer">
              <motion.div animate={{
            y: hoveredIndex === index ? -10 : 0,
            rotateY: hoveredIndex === index ? 5 : 0
          }} transition={{
            duration: 0.3
          }} className="glass-panel rounded-2xl p-8 h-80 flex flex-col justify-between overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 smooth-transition`} />
                
                <div className="relative z-10">
                  <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm mb-4">
                    {project.category}
                  </div>
                  <h3 className="text-3xl font-bold mb-3 group-hover:glow-text smooth-transition">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: hoveredIndex === index ? 1 : 0,
              y: hoveredIndex === index ? 0 : 20
            }} className="relative z-10 flex items-center gap-2 text-sm font-semibold">
                  View Case Study
                  <motion.span animate={{
                x: hoveredIndex === index ? 5 : 0
              }}>
                    →
                  </motion.span>
                </motion.div>
              </motion.div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
