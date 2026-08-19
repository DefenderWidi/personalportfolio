import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BriefcaseBusiness, Users, Sparkles } from "lucide-react";

type WorkItem = {
  role: string;
  company: string;
  period: string;
  type: string;
  emoji: string;
  tone: string;
  highlights: string[];
};

type OrgItem = {
  role: string;
  organization: string;
  period: string;
  emoji: string;
  highlights: string[];
};

const workExperiences: WorkItem[] = [
  {
    role: "Production Engineer",
    company: "PT Bukit Makmur Mandiri Utama (BUMA)",
    period: "Feb 2026 – Jul 2026",
    type: "Internship",
    emoji: "⛏️",
    tone: "Mining + Digital Improvement",
    highlights: [
      "Analyzed production performance metrics such as utilization and payload to support operational decision-making.",
      "Supported root cause analysis and improvement initiatives to identify and close operational performance gaps.",
      "Developed a web-based bench height monitoring system to automate measurement and reporting for more efficient monitoring.",
      "Integrated digital solutions into mining workflows to support data-driven decisions.",
    ],
  },
  {
    role: "Copywriter",
    company: "Tim Media Teknik Komputer ITS",
    period: "Feb 2025 – Feb 2026",
    type: "Contract",
    emoji: "✍️",
    tone: "Communication + Creative Writing",
    highlights: [
      "Handled copywriting for event news, social media captions, announcement broadcasts, and brochures.",
      "Improved the quality and consistency of written communication across Computer Engineering media channels.",
    ],
  },
  {
    role: "IoT Engineer",
    company: "PT Javadwipa Duta Mandiri",
    period: "Sep 2025 – Dec 2025",
    type: "Internship",
    emoji: "⚡",
    tone: "IoT + Energy Monitoring",
    highlights: [
      "Developed an IoT-based energy monitoring system that transmitted real-time electricity consumption data to a centralized dashboard.",
      "Worked on sensor integration, microcontroller programming, and efficient network-based data communication.",
    ],
  },
  {
    role: "Front-end Developer",
    company: "PT Teknologi Kartu Indonesia",
    period: "Jul 2025 – Aug 2025",
    type: "Internship",
    emoji: "🎨",
    tone: "Frontend + Product Collaboration",
    highlights: [
      "Revamped the company LMS based on new UI/UX designs to improve accessibility and engagement.",
      "Collaborated with the Product Manager and initiated additional interactive elements beyond the original design.",
    ],
  },
  {
    role: "Laravel Web Developer",
    company: "PT Winnicode Garuda Teknologi",
    period: "Mar 2025 – Aug 2025",
    type: "Internship",
    emoji: "🧩",
    tone: "Full-stack + Laravel",
    highlights: [
      "Designed and developed a full-stack job portal using Laravel, from UI/UX planning in Figma to complete implementation.",
    ],
  },
  {
    role: "WordPress Web Developer",
    company: "PT Damases Sejahtera",
    period: "Mar 2025 – Jul 2025",
    type: "Internship",
    emoji: "🖥️",
    tone: "Web Design + Responsive UI",
    highlights: [
      "Redesigned key website layouts to create a fresher and more professional brand presentation.",
      "Maintained typography, color, and responsive-layout consistency across multiple devices.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Dinas Komunikasi dan Informatika Kab. Semarang",
    period: "Jan 2025 – Feb 2025",
    type: "Internship",
    emoji: "🏛️",
    tone: "Dashboard + System Architecture",
    highlights: [
      "Co-developed the Komdigi Executive Dashboard within one month.",
      "Designed ERD and activity diagrams, UI/UX, and front-end implementation while preparing technical documentation for future maintenance.",
      "Received positive feedback for usability and fast front-end performance using server-side rendering.",
    ],
  },
  {
    role: "Content Writer",
    company: "Mojok.co",
    period: "Aug 2024 – Apr 2025",
    type: "Freelance",
    emoji: "🚗",
    tone: "Automotive + SEO Writing",
    highlights: [
      "Wrote automotive reviews and consumer-insight articles using SEO best practices.",
      "One article became a Top 5 most-read weekly article and was featured on Mojok.co Reels, generating 260,000+ views.",
    ],
  },
  {
    role: "Content Writer",
    company: "IDN Times",
    period: "May 2019 – Mar 2023",
    type: "Freelance",
    emoji: "📰",
    tone: "Tech + Automotive Writing",
    highlights: [
      "Published 125 articles covering product reviews, buying guides, gadgets, and automotive topics.",
      "Generated 538,000+ total views and ranked 487th out of 98,593 writers on the platform.",
    ],
  },
];

const organizations: OrgItem[] = [
  {
    role: "Head of Student Welfare",
    organization: "HIMATEKKOM ITS",
    period: "Mar 2025 – Feb 2026",
    emoji: "🤝",
    highlights: [
      "Led a team and coordinated student welfare initiatives covering academic support, mental well-being, and inclusive campus engagement.",
    ],
  },
  {
    role: "Staff of Student Welfare",
    organization: "HIMATEKKOM ITS",
    period: "Mar 2024 – Feb 2025",
    emoji: "💛",
    highlights: [
      "Supported academic, mental-health, and social welfare initiatives.",
      "Managed the Computer Engineering Question Bank program and achieved 100% KPI.",
    ],
  },
  {
    role: "Member",
    organization: "Technopreneurship Development Center (TDC) ITS",
    period: "Sep 2023 – Sep 2024",
    emoji: "💡",
    highlights: [
      "Participated in business and entrepreneurship programs focused on startup development, market strategy, and technology-driven innovation.",
    ],
  },
];

const Experience = () => {
  const [tab, setTab] = useState<"work" | "leadership">("work");

  return (
    <section id="experience" className="relative overflow-hidden px-4 py-24 md:px-6">
      <div className="pointer-events-none absolute -left-16 top-24 h-52 w-52 rounded-full bg-[#ffd563]/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-20 h-56 w-56 rounded-full bg-[#ffad54]/38 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="clay-pill mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-[#8c531c]">
            <Sparkles className="h-4 w-4 text-[#ff8c17]" />
            Experience Playground ✨
          </div>
          <h2 className="orange-gradient-text text-4xl font-black md:text-6xl">My Experience</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#916337] md:text-lg">
            A mix of engineering, digital products, writing, operations, and people leadership — because I like learning by doing. 🚀
          </p>
        </motion.div>

        <div className="mb-10 flex justify-center gap-3">
          <button
            onClick={() => setTab("work")}
            className={`${tab === "work" ? "clay-button-primary text-white" : "clay-button-secondary"} flex items-center gap-2 rounded-2xl px-5 py-3 font-extrabold transition`}
          >
            <BriefcaseBusiness className="h-4 w-4" /> Work Experience
          </button>
          <button
            onClick={() => setTab("leadership")}
            className={`${tab === "leadership" ? "clay-button-primary text-white" : "clay-button-secondary"} flex items-center gap-2 rounded-2xl px-5 py-3 font-extrabold transition`}
          >
            <Users className="h-4 w-4" /> Leadership
          </button>
        </div>

        <AnimatePresence mode="wait">
          {tab === "work" ? (
            <motion.div
              key="work"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="grid gap-6 lg:grid-cols-2"
            >
              {workExperiences.map((exp, idx) => (
                <motion.article
                  key={`${exp.company}-${exp.role}`}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.035 }}
                  whileHover={{ y: -6, rotate: idx % 2 === 0 ? -0.3 : 0.3 }}
                  className="clay-card group relative overflow-hidden rounded-[32px] p-6"
                >
                  <div className="absolute -right-5 -top-6 text-6xl opacity-[0.11] transition group-hover:scale-110 group-hover:rotate-6">{exp.emoji}</div>

                  <div className="relative z-10 flex items-start gap-4">
                    <div className="sticker flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] bg-[#ffe590] text-3xl">
                      {exp.emoji}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-black leading-tight text-[#74400f]">{exp.role}</h3>
                      <p className="mt-1 font-bold text-[#a26120]">{exp.company}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="clay-pill rounded-full px-3 py-1 text-xs font-bold text-[#86511e]">{exp.period}</span>
                        <span className="clay-pill rounded-full px-3 py-1 text-xs font-bold text-[#86511e]">{exp.type}</span>
                        <span className="rounded-full bg-[#ff9b1b] px-3 py-1 text-xs font-bold text-white shadow-sm">{exp.tone}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="relative z-10 mt-5 space-y-3">
                    {exp.highlights.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-6 text-[#865b32]">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff9018] shadow-[0_0_0_4px_rgba(255,184,69,.22)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="leadership"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3"
            >
              {organizations.map((item, idx) => (
                <motion.article
                  key={`${item.organization}-${item.role}`}
                  whileHover={{ y: -7, rotate: idx === 1 ? 0.5 : -0.5 }}
                  className="clay-card relative overflow-hidden rounded-[30px] p-6"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="sticker flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#ffdf7b] text-3xl">{item.emoji}</div>
                    <span className="text-3xl opacity-50">✨</span>
                  </div>
                  <h3 className="text-xl font-black text-[#74400f]">{item.role}</h3>
                  <p className="mt-1 font-bold text-[#a26120]">{item.organization}</p>
                  <p className="mt-3 text-xs font-extrabold uppercase tracking-wider text-[#c47422]">{item.period}</p>
                  <ul className="mt-5 space-y-3">
                    {item.highlights.map((point) => (
                      <li key={point} className="text-sm leading-6 text-[#865b32]">• {point}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experience;
