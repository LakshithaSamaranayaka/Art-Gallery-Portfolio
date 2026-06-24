import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function IntroSplash({ show, onFinish }) {
  const fadeUpTime = 1.5;
  const visibleTime = 1.5;
  const fadeOutTime = 1.5;

  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => {
      onFinish();
    }, (fadeUpTime + visibleTime) * 1000);

    return () => clearTimeout(timer);
  }, [show, onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: fadeOutTime, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: fadeUpTime, ease: "easeOut" }}
            className="text-center px-6"
          >
            <h1 className="text-gold font-display text-4xl md:text-7xl leading-tight">
              Welcome to Graphite Noir
            </h1>

            <p className="mt-5 text-cream/70 tracking-[0.35em] uppercase text-xs md:text-sm">
              Artist - Lakshitha Samaranayaka
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroSplash;