import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const mottos = [
  "AI. Engineered with Imagination.",
  "Automation Reimagined.",
  "Design Meets Intelligence.",
  "Building Tomorrow's SaaS Agency.",
];

export const MottosSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mottos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated Neural Network Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center min-h-[400px] flex items-center justify-center">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-bold gradient-text glow-text leading-tight">
              {mottos[currentIndex]}
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 4, ease: "linear" }}
              className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-white to-transparent"
            />
          </motion.div>
        </div>

        {/* Motto Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {mottos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full smooth-transition ${
                index === currentIndex ? "bg-white w-8" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
