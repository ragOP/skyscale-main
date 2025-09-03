import { motion } from "framer-motion";

export function HeroHeader() {
  return (
    <div className="relative flex w-full items-center justify-center bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden">
      {/* Animated dot pattern background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251, 146, 60, 0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Animated content */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="relative z-10 text-center px-4"
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 max-w-4xl leading-tight mx-auto"
        >
          Your Astrology{" "} <br />
          <motion.span
            initial={{
              backgroundSize: "0% 100%",
            }}
            animate={{
              backgroundSize: "100% 100%",
            }}
            transition={{
              duration: 2,
              ease: "linear",
              delay: 0.5,
            }}
            style={{
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left center",
              display: "inline",
            }}
            className="relative inline-block rounded-lg text-3xl bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-[length:200%_100%] animate-gradient-x text-white px-2 pb-1"
          // className="relative inline-block rounded-lg text-3xl bg-gradient-to-r from-orange-300 to-red-300 px-2 pb-1 text-black"

          >
            Made Simple
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          जानिए अपना भविष्य - ज्योतिष से
        </motion.p>
      </motion.div>
    </div>
  );
} 