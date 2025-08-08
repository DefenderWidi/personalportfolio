// src/Experience.tsx
import { motion } from "framer-motion";
import GradientText from "./components/GradientText";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  details: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Front-end Developer",
    company: "PT Teknologi Kartu Indonesia",
    period: "Jul 2025 – Present",
    type: "Internship",
    details: [
      "Revamped the company’s Learning Management System (LMS) interface based on new UI/UX designs to improve user accessibility and engagement.",
      "Initiated additional intuitive visual elements and interactive effects beyond the original design through collaboration with the product manager, enhancing the overall user experience.",
    ],
  },
  {
    role: "Laravel Web Developer",
    company: "PT Winnicode Garuda Teknologi",
    period: "Mar 2025 – Present",
    type: "Internship",
    details: [
      "Designed and developed a full-stack job portal using Laravel, starting from UI/UX planning in Figma to full implementation.",
    ],
  },
  {
    role: "Wordpress Web Developer",
    company: "PT Damases Sejahtera",
    period: "Mar 2025 – Present",
    type: "Internship",
    details: [
      "Redesigned key page layouts with modern design principles, resulting in a fresher and more professional brand presentation.",
      "Ensured consistency in typography, color scheme, and responsive layout across various devices and screen sizes.",
    ],
  },
  {
    role: "Copywriter",
    company: "Tim Media Teknik Komputer ITS",
    period: "Feb 2025 – Present",
    type: "Contract",
    details: [
      "Responsible for all copywriting needs within the Computer Engineering department, including event news articles, social media captions, announcement broadcasts, and brochures.",
      "Crafted compelling and engaging content to enhance departmental communication and public outreach.",
    ],
  },
  {
    role: "Content Writer",
    company: "Mojok.co",
    period: "Aug 2024 – Present",
    type: "Freelance",
    details: [
      "Wrote engaging automotive articles, covering vehicle reviews and consumer insights.",
      "One of my articles ranked in the Top 5 most-read weekly articles, later featured in Mojok.co’s Reels, gaining 260,000+ views.",
      "Applied SEO best practices, optimizing content for higher search rankings and audience engagement.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Dinas Kominfo Kab. Semarang",
    period: "Jan 2025 – Feb 2025",
    type: "Internship",
    details: [
      'Collaborated on the "Komdigi Executive Dashboard" within one month.',
      "Engineered ERD and Activity Diagram for workflow definition.",
      "Designed intuitive UI/UX with positive feedback from the Application Informatics Division.",
      "Built performant front-end using SSR.",
      "Wrote comprehensive technical documentation.",
    ],
  },
  {
    role: "Content Writer",
    company: "IDN Times",
    period: "May 2019 – Mar 2023",
    type: "Freelance",
    details: [
      "Wrote and published 125 articles on tech and automotive.",
      "Achieved 538,000+ views and ranked 487 of 98,593 writers.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-24 px-6 text-white relative z-10" id="experience">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GradientText
            className="text-5xl md:text-6xl font-extrabold tracking-tight"
            colors={["#ff6600", "#ff8800", "#ffc107", "#fff8e1"]}
            animationSpeed={6}
          >
            My Experience
          </GradientText>
        </motion.h2>

        <div className="space-y-10">
          {experiences.map((exp, idx) => {
            const direction = idx % 2 === 0 ? -100 : 100;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: direction }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              className="relative rounded-2xl border border-white/10 p-6 shadow-xl hover:shadow-[0_0_30px_0_rgba(255,221,51,0.4)] transition-all duration-300 group bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl backdrop-saturate-200 overflow-hidden"

              >
                {/* pseudo reflection */}
                <span className="absolute inset-0 rounded-2xl bg-white/10 blur-[8px] opacity-10 pointer-events-none" />

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 relative z-10">
                  <h3 className="text-xl font-semibold text-orange-200">
                    {exp.role}{" "}
                    <span className="text-white/70">| {exp.company}</span>
                  </h3>
                  <p className="text-sm text-white/50">
                    {exp.period} · {exp.type}
                  </p>
                </div>
                <ul className="list-disc list-inside text-sm text-white/80 space-y-1 mt-2 relative z-10">
                  {exp.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
