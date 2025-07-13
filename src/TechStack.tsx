import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Database,
  Zap,
  Globe,
  PenTool,
  CircleDot,
} from "lucide-react";
import GradientText from './components/GradientText';

const TechStack = () => {
const technologies = [
  { name: "React", icon: Code, color: "from-blue-400 to-blue-600" },
  { name: "Tailwind CSS", icon: Palette, color: "from-cyan-400 to-cyan-600" },
  { name: "Node.js", icon: Database, color: "from-green-400 to-green-600" },
  { name: "Express", icon: Zap, color: "from-gray-500 to-gray-700" },
  { name: "PostgreSQL", icon: Database, color: "from-blue-700 to-blue-900" },
  { name: "Remix", icon: Globe, color: "from-orange-400 to-orange-600" },
  { name: "Figma", icon: PenTool, color: "from-pink-500 to-pink-700" },
  { name: "JavaScript", icon: Code, color: "from-yellow-400 to-yellow-600" },
  { name: "MySQL", icon: Database, color: "from-teal-500 to-teal-700" },
  { name: "Python", icon: CircleDot, color: "from-indigo-400 to-indigo-600" },
];

  return (
    <section className="py-24 px-6 relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
            <GradientText
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
       colors={['#ffc107', '#ffd54f', '#ffecb3', '#fff8e1']}
          animationSpeed={5}
        >
          Tech Stack
        </GradientText>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mt-4">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Scrolling carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: [0, -300 * technologies.length] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...technologies, ...technologies].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group min-w-[220px]"
                  whileHover={{ y: -5 }}
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${tech.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner`}
                  >
                    <Icon className="w-7 h-7 text-white drop-shadow" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-yellow-100 transition-colors duration-300 tracking-wide">
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
