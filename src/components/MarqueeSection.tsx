import { motion } from "framer-motion";

const items = [
  "AI Engineering",
  "Automation Design",
  "Intelligent Systems",
  "Product Innovation",
  "Neural Networks",
  "Machine Learning",
];

export const MarqueeSection = () => {
  return (
    <div className="py-20 space-y-8 overflow-hidden">
      {/* Forward Marquee */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 md:gap-12 whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <div
              key={index}
              className="text-4xl sm:text-6xl md:text-8xl font-bold gradient-text opacity-20 hover:opacity-100 smooth-transition"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Reverse Marquee */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 md:gap-12 whitespace-nowrap"
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...items, ...items, ...items, ...items].reverse().map((item, index) => (
            <div
              key={index}
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-white/10 hover:text-white/30 smooth-transition"
            >
              • {item}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
