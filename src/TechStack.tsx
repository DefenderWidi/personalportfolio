import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Database,
  Zap,
  Globe,
  Smartphone,
} from "lucide-react";

const TechStack = () => {
  const technologies = [
    { name: "React", icon: Code, color: "from-blue-400 to-blue-600" },
    { name: "TypeScript", icon: Code, color: "from-blue-500 to-blue-700" },
    { name: "Tailwind CSS", icon: Palette, color: "from-cyan-400 to-cyan-600" },
    { name: "Framer Motion", icon: Zap, color: "from-purple-400 to-purple-600" },
    { name: "Next.js", icon: Globe, color: "from-gray-400 to-gray-600" },
    { name: "Node.js", icon: Database, color: "from-green-400 to-green-600" },
    { name: "React Native", icon: Smartphone, color: "from-pink-400 to-pink-600" },
    { name: "Three.js", icon: Zap, color: "from-orange-400 to-orange-600" },
  ];

  return (
    <section className="py-20 px-4 relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Scrolling carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 w-max"
            animate={{
              x: [0, -300 * technologies.length],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...technologies, ...technologies].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group min-w-[200px]"
                  whileHover={{ y: -5 }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tech.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-200 transition-colors duration-300">
                    {tech.name}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
