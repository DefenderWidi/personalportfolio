import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  portfolioData,
  categories,
  type Category,
  type PortfolioItem,
} from "./PortfolioData";

const MyWork = () => {
  const [selected, setSelected] = useState<Category>("IT Developer");

  return (
    <section id="mywork" className="section-shell">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[#c26a11] mb-3">Portfolio</p>
          <h2 className="warm-title text-4xl md:text-6xl">My Work</h2>
          <p className="warm-muted text-lg max-w-2xl mx-auto mt-4">
            Selected works across development, writing, and business ideas.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat: Category) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`rounded-full px-5 py-3 text-sm md:text-base font-semibold transition-all duration-300 ${
                selected === cat
                  ? "bg-gradient-to-r from-[#ff9f1c] to-[#ff7f11] text-white shadow-[8px_8px_18px_rgba(223,124,35,0.25)]"
                  : "clay-pill"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -22 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7"
          >
            {portfolioData[selected].map((item: PortfolioItem, idx: number) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="clay-card overflow-hidden text-left"
              >
                <div className="p-4">
                  <div className="overflow-hidden rounded-[24px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-52 object-cover"
                    />
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <div className="mb-3">
                    <span className="clay-pill text-xs">{item.tag}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#7b430a] mb-2">{item.title}</h3>
                  <p className="warm-text text-sm leading-7 min-h-[84px]">{item.desc}</p>

                  <div className="flex gap-3 mt-5 flex-wrap">
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="clay-button-secondary text-sm px-4 py-3"
                      >
                        GitHub
                      </a>
                    )}

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="clay-button-primary text-sm px-4 py-3"
                      >
                        Visit Site
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