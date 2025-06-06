import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import GradientText from "./components/GradientText";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
 <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      {/* Dark overlay*/}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="text-center max-w-5xl mx-auto relative z-10">
        {/* Glass card container */}
        <motion.div
          className="backdrop-blur-md bg-white/5 rounded-3xl border border-white/10 p-8 md:p-16 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 rounded-3xl" />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-white/80">Available for projects</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <GradientText
                className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight"
                colors={["#ffaa40", "#9c40ff", "#40c9ff"]}
                animationSpeed={8}
              >
                Defender Widi
              </GradientText>
            </motion.div>

            <motion.p
              className="text-xl md:text-3xl text-purple-200/90 mb-6 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Frontend Developer
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              Specializing in Interactive Web Experiences that push the boundaries of design and technology.
              Creating digital solutions that captivate, inspire, and deliver exceptional user experiences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <button
                onClick={scrollToProjects}
                className="group bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore My Work
                  <motion.div
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowDown className="w-5 h-5" />
                  </motion.div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button
                className="backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 px-8 py-4 text-lg rounded-xl hover:scale-105"
              >
                Download CV
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
