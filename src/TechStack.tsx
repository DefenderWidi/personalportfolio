import { motion } from "framer-motion";

export const techLogos: Record<string, string> = {
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
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
    <section className="section-shell">
      <div className="section-container">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[#c26a11] mb-3">Tools I Use</p>
          <h2 className="warm-title text-4xl md:text-6xl">Tech Stack</h2>
          <p className="warm-muted text-lg max-w-2xl mx-auto mt-4">
            Technologies and tools I use to turn ideas into useful digital products.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="clay-card-soft p-5 text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              viewport={{ once: true }}
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-[22px] bg-[#fff0c8] shadow-inner">
                <img
                  src={techLogos[tech.key]}
                  alt={tech.name}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <h3 className="font-bold text-[#7b430a]">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;