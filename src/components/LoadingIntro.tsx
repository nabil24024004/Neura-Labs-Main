import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const LoadingIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
    >
      <div className="text-center space-y-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-5xl md:text-7xl font-bold gradient-text glow-text">
            Neura Labs
          </h2>
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-lg"
          >
            Designing the Future of Intelligence
          </motion.p> */}
        </motion.div>

        <div className="w-64 mx-auto space-y-2">
          <div className="h-1 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-white to-silver-white"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <p className="text-sm text-muted-foreground">{progress}%</p>
        </div>

        <motion.div
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex justify-center gap-2"
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-white"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
