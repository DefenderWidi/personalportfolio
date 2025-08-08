import { motion } from "framer-motion";
import GradientText from './components/GradientText';

export const techLogos: Record<string, string> = {
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  expressjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  tailwindcss: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  postman: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
};

const technologies = [
  { name: "React", key: "react" },
  { name: "Tailwind CSS", key: "tailwindcss" },
  { name: "Node.js", key: "nodejs" },
  { name: "Express", key: "expressjs" },
  { name: "Next.js", key: "nextjs" },
  { name: "MongoDB", key: "mongodb" },
  { name: "MySQL", key: "mysql" },
  { name: "Postman", key: "postman" },
  { name: "GitHub", key: "github" },
  { name: "Figma", key: "figma" },
  { name: "JavaScript", key: "js" },
  { name: "TypeScript", key: "typescript" },
  { name: "HTML", key: "html" },
  { name: "CSS", key: "css" },
];

const TechStack = () => {
  return (
    <section className="py-24 px-6 relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0" />

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
            colors={["#ffc107", "#ffd54f", "#ffecb3", "#fff8e1"]}
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
            {[...technologies, ...technologies].map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                className="relative flex-shrink-0 rounded-2xl border border-white/10 p-6 shadow-xl transition-all duration-300 hover:scale-105 group min-w-[220px] bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl backdrop-saturate-200 overflow-hidden"
                whileHover={{ y: -5 }}
              >
                {/* Pseudo-reflection shine */}
                <span className="absolute inset-0 rounded-2xl bg-white/10 blur-[8px] opacity-10 pointer-events-none" />

                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  <img
                    src={techLogos[tech.key]}
                    alt={tech.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-yellow-100 transition-colors duration-300 tracking-wide">
                  {tech.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
