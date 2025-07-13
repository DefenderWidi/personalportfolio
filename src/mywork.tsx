import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GradientText from "./components/GradientText";
import {
  portfolioData,
  categories,
  type Category,
  type PortfolioItem,
} from "./PortfolioData"; // Pastikan path sesuai

const MyWork = () => {
  const [selected, setSelected] = useState<Category>("IT Developer");

  return (
    <section id="mywork" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Judul */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <GradientText
            className="text-5xl md:text-6xl font-extrabold tracking-tight"
            colors={["#ffb300", "#ffc107", "#ffecb3", "#fff8e1"]}
            animationSpeed={6}
          >
            My Work
          </GradientText>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mt-4">
            Selected works across tech, writing, and business strategy
          </p>
        </motion.div>

        {/* Kategori */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat: Category) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                selected === cat
                  ? "bg-gradient-to-r from-[#ff6600] to-[#ffc107] text-white shadow-md"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portofolio Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {portfolioData[selected].map((item: PortfolioItem, idx: number) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 text-left"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/70 mb-3 text-sm">{item.desc}</p>
                  <span className="text-sm text-orange-300 bg-white/10 px-3 py-1 rounded-full inline-block tracking-wide">
                    {item.tag}
                  </span>

                  {/* Tombol Link */}
                  <div className="flex gap-3 mt-4 flex-wrap">
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-block rounded-full px-4 py-2 text-sm font-medium text-white backdrop-blur-sm bg-orange-400/10 border border-orange-300/30 overflow-hidden group hover:scale-105 transition-all duration-300"
                      >
                        <span className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-orange-200/50 before:to-transparent before:animate-shine before:z-0 before:blur-lg" />
                        <span className="relative z-10">GitHub</span>
                      </a>
                    )}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-block rounded-full px-4 py-2 text-sm font-medium text-white backdrop-blur-sm bg-orange-400/10 border border-orange-300/30 overflow-hidden group hover:scale-105 transition-all duration-300"
                      >
                        <span className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-orange-200/50 before:to-transparent before:animate-shine before:z-0 before:blur-lg" />
                        <span className="relative z-10">Visit Site</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MyWork;
