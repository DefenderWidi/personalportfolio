import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles, Code2, PenTool, BriefcaseBusiness } from "lucide-react";
import TypewriterRoles from "./components/TypewriterRoles";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("mywork")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 pb-20 pt-32 md:px-6 md:pt-36">
      <div className="dot-pattern absolute inset-0 opacity-45" />

      {/* decorative clay stickers */}
      <div className="pointer-events-none absolute left-[4%] top-36 hidden h-20 w-20 items-center justify-center rounded-[30px] bg-[#ffd45d] text-4xl sticker animate-bob md:flex">💻</div>
      <div className="pointer-events-none absolute right-[5%] top-52 hidden h-20 w-20 items-center justify-center rounded-full bg-[#ffb55d] text-4xl sticker animate-bob-reverse lg:flex">🚀</div>
      <div className="pointer-events-none absolute bottom-24 left-[8%] hidden h-16 w-16 items-center justify-center rounded-[24px] bg-[#fff0aa] text-3xl sticker animate-bob-reverse lg:flex">✍️</div>
      <div className="pointer-events-none absolute bottom-20 right-[12%] hidden h-16 w-16 items-center justify-center rounded-[24px] bg-[#ffd978] text-3xl sticker animate-bob md:flex">⚙️</div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.18fr_.82fr]">
        <motion.div
          className="clay-card relative overflow-hidden rounded-[42px] p-7 md:p-12"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#ffd66d]/65 blur-2xl" />
          <div className="absolute -bottom-14 -left-10 h-44 w-44 rounded-full bg-[#ffb551]/50 blur-2xl" />

          <div className="relative z-10">
            <div className="clay-pill mb-7 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-[#86501a]">
              <Sparkles className="h-4 w-4 text-[#ff8b15]" />
              Computer Engineering · Tech · Writing
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-[#c46e16]">Hello, I’m 👋</p>
            <h1 className="orange-gradient-text text-5xl font-black leading-[.95] tracking-tight sm:text-6xl md:text-8xl">
              Defender<br />Widi
            </h1>

            <div className="mt-5 min-h-[48px] text-xl font-extrabold text-[#78440f] md:text-3xl">
              <TypewriterRoles
                roles={[
                  "Computer Engineering Student",
                  "Frontend Developer",
                  "Full-Stack Developer",
                  "IoT & Digital Solution Builder",
                  "Copywriter & Content Writer",
                ]}
                typingSpeed={70}
                deletingSpeed={36}
                pauseDuration={1400}
              />
            </div>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[#85572a] md:text-lg">
              I enjoy turning technical problems into useful digital solutions — from mining operations and IoT monitoring to scalable web applications. Beyond coding, I also love writing and translating complex ideas into clear, engaging communication.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={scrollToProjects}
                className="clay-button-primary flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-bold transition"
              >
                Explore My Work <ArrowDown className="h-5 w-5" />
              </button>

              <a
                href="https://drive.google.com/file/d/1vwtQeiYADHkS8BeuYCpsg54DeibWsQqq/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="clay-button-secondary flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-bold transition"
              >
                Download CV <Download className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Code2, emoji: "💻", title: "Build", desc: "Web apps, dashboards & digital tools" },
                { icon: PenTool, emoji: "✍️", title: "Write", desc: "Tech, automotive & human-centered copy" },
                { icon: BriefcaseBusiness, emoji: "📈", title: "Improve", desc: "Data, operations & continuous improvement" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="clay-card-soft rounded-[25px] p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff3c3] text-[#ef7d12] shadow-inner">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-2xl">{item.emoji}</span>
                    </div>
                    <h3 className="font-extrabold text-[#75400f]">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#956938]">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          <div className="clay-card relative rounded-[36px] p-6 md:p-7">
            <div className="absolute right-5 top-5 text-3xl animate-pulse-soft">🌟</div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#c36a14]">Quick Snapshot</p>
            <div className="mt-5 space-y-3">
              {[
                ["🎓", "Education", "Computer Engineering · ITS"],
                ["⛏️", "Industry Exposure", "Mining operations & digital improvement"],
                ["🌐", "Core Focus", "Web development, IoT & data-driven solutions"],
                ["📝", "Creative Side", "Copywriting & content writing"],
              ].map(([emoji, title, desc]) => (
                <div key={title} className="clay-inset flex gap-3 rounded-[22px] p-4">
                  <span className="text-2xl">{emoji}</span>
                  <div>
                    <p className="font-extrabold text-[#78430f]">{title}</p>
                    <p className="text-sm leading-6 text-[#96683a]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="clay-card rounded-[36px] p-6 md:p-7">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#c36a14]">Little Wins</p>
              <span className="text-2xl">🏆</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["3.40", "Current GPA", "🎓"],
                ["125", "IDN Times articles", "📝"],
                ["538K+", "IDN Times views", "👀"],
                ["5", "Awards & finals", "🏅"],
              ].map(([value, label, emoji]) => (
                <div key={label} className="clay-card-soft rounded-[24px] p-4 text-center">
                  <div className="mb-1 text-xl">{emoji}</div>
                  <div className="text-2xl font-black text-[#f07f12]">{value}</div>
                  <div className="mt-1 text-xs font-semibold text-[#916234]">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
