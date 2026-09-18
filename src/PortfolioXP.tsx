import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  CircuitBoard,
  Code2,
  Cpu,
  Database,
  Download,
  ExternalLink,
  FileText,
  FolderOpen,
  Github,
  Globe2,
  GraduationCap,
  Home,
  Linkedin,
  Mail,
  MapPin,
  Maximize2,
  Minimize2,
  Monitor,
  PenTool,
  Power,
  Search,
  Square,
  Trophy,
  UserRound,
  Volume2,
  Wifi,
  Wrench,
  X,
} from "lucide-react";

/**
 * PortfolioXP.tsx
 * -----------------------------------------------------------------------------
 * Self-contained Windows XP-inspired portfolio desktop for Defender Artha
 * Widiprasetyo. Drop this component into a React + TypeScript project that
 * already has `framer-motion` and `lucide-react` installed.
 *
 * Usage in main.tsx:
 *   import PortfolioXP from "./PortfolioXP";
 *   ...
 *   <PortfolioXP />
 *
 * CV button:
 *   Put your latest CV inside /public as `CV-Defender-Artha-Widiprasetyo.pdf`,
 *   or replace CV_URL below with your Google Drive / hosted PDF URL.
 */

const CV_URL = "/CV-Defender-Artha-Widiprasetyo.pdf";

const profile = {
  name: "Defender Artha Widiprasetyo",
  shortName: "Defender Widi",
  title: "Computer Engineering Graduate",
  location: "Surabaya, East Java",
  email: "defenderwidi17@gmail.com",
  linkedin: "https://www.linkedin.com/in/defenderwidi",
  portfolio: "https://builtbydefender.vercel.app",
  summary:
    "Computer Engineering graduate from Institut Teknologi Sepuluh Nopember (ITS) with hands-on experience in software development, web applications, IoT systems, and Artificial Intelligence. I enjoy building interactive, scalable systems and translating technical problems into useful digital products.",
  gpa: "3.40 / 4.00",
};

const projects = [
  {
    title: "Komdigi Executive Dashboard",
    desc: "Executive data dashboard for Kabupaten Semarang. Built with system architecture, ERD/activity diagrams, UI/UX, SSR-oriented front-end implementation, and technical documentation.",
    tag: "Dashboard · Full Stack · UI/UX",
    image: "/kominfo-dashboard.png",
    github: "https://github.com/DefenderWidi/dashboardkominfo.git",
  },
  {
    title: "BeMySample App",
    desc: "Mobile survey participation application built with Flutter.",
    tag: "Flutter · Mobile",
    image: "/bemysample-app.png",
    github: "https://github.com/BeMySample",
  },
  {
    title: "SoulTalk",
    desc: "Mental-health support platform with a clean, accessible web experience.",
    tag: "React · Tailwind",
    image: "/soultalk.png",
    link: "https://soultalk-snowy.vercel.app/",
  },
  {
    title: "Classpace",
    desc: "Online learning platform for students and lecturers with a PostgreSQL, Express, and React stack.",
    tag: "PostgreSQL · Express · React",
    image: "/classpace.png",
    github: "https://github.com/Eeja07/course-webapp-project.git",
    link: "http://classspace.eeja.site/",
  },
  {
    title: "PalmCheck",
    desc: "Portable palm-oil analysis concept with real-time detection results visualized through an interactive dashboard.",
    tag: "React · Express · Flask",
    image: "/palmcheck.png",
    github: "https://github.com/DefenderWidi/palmcheck.git",
  },
  {
    title: "Dsternet Landing Page",
    desc: "Responsive landing page for Dsternet Internet Cafe.",
    tag: "React · Tailwind",
    image: "/dsternet.png",
    link: "https://dsternet.vercel.app/",
  },
  {
    title: "LokerLand",
    desc: "Job-vacancy platform for students and fresh graduates; one of my first front-end projects.",
    tag: "React · Front-end",
    image: "/lokerland.png",
    link: "https://defender.reactjssanbercode.my.id/",
  },
  {
    title: "Multimodal Q&A with Qwen + RAG",
    desc: "Final project: multimodal question answering on images and audio using the Qwen model with Retrieval-Augmented Generation (RAG).",
    tag: "AI · Qwen · RAG · Multimodal",
    image: "",
  },
];

const experience = [
  {
    role: "Production Engineer",
    company: "PT Bukit Makmur Mandiri Utama (BUMA)",
    period: "Feb 2026 – Jul 2026",
    type: "Internship",
    bullets: [
      "Analyzed production performance metrics including utilization and payload to support operational decision-making.",
      "Supported root cause analysis and operational improvement initiatives.",
      "Developed a web-based bench height monitoring system to automate measurement and reporting.",
      "Integrated digital solutions into mining workflows to support data-driven decisions.",
    ],
  },
  {
    role: "IoT Engineer",
    company: "PT Javadwipa Duta Mandiri",
    period: "Sep 2025 – Dec 2025",
    type: "Internship",
    bullets: [
      "Developed an IoT energy-monitoring system that transmitted real-time electricity consumption data to a centralized dashboard.",
      "Worked on sensor integration, microcontroller programming, and efficient network-based data communication.",
    ],
  },
  {
    role: "Front-end Developer",
    company: "PT Teknologi Kartu Indonesia",
    period: "Jul 2025 – Aug 2025",
    type: "Internship",
    bullets: [
      "Revamped the company LMS based on new UI/UX designs to improve accessibility and engagement.",
      "Initiated additional intuitive visual elements and interactive effects through product collaboration.",
    ],
  },
  {
    role: "Laravel Web Developer",
    company: "PT Winnicode Garuda Teknologi",
    period: "Mar 2025 – Aug 2025",
    type: "Internship",
    bullets: [
      "Designed and developed a full-stack job portal using Laravel, from Figma UI/UX planning through implementation.",
    ],
  },
  {
    role: "WordPress Web Developer",
    company: "PT Damases Sejahtera",
    period: "Mar 2025 – Jul 2025",
    type: "Internship",
    bullets: [
      "Redesigned key website layouts for a fresher and more professional brand presentation.",
      "Maintained typography, color, and responsive-layout consistency across devices.",
    ],
  },
  {
    role: "Copywriter",
    company: "Tim Media Teknik Komputer ITS",
    period: "Feb 2025 – Feb 2026",
    type: "Contract",
    bullets: [
      "Handled copywriting for event news, social media captions, announcement broadcasts, and brochures.",
      "Improved the quality and consistency of written communication across Computer Engineering media channels.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Dinas Komunikasi dan Informatika Kab. Semarang",
    period: "Jan 2025 – Feb 2025",
    type: "Internship",
    bullets: [
      "Co-developed the Komdigi Executive Dashboard within one month.",
      "Designed ERD, activity diagrams, UI/UX, front-end implementation, and technical documentation.",
      "Received positive feedback for usability and fast SSR-based front-end performance.",
    ],
  },
  {
    role: "Content Writer",
    company: "Mojok.co",
    period: "Aug 2024 – Apr 2025",
    type: "Freelance",
    bullets: [
      "Wrote automotive reviews and consumer-insight articles using SEO best practices.",
      "One article reached the weekly Top 5 and was later featured on Mojok.co Reels with 260,000+ views.",
    ],
  },
  {
    role: "Content Writer",
    company: "IDN Times",
    period: "May 2019 – Mar 2023",
    type: "Freelance",
    bullets: [
      "Published 125 articles covering product reviews, buying guides, gadgets, and automotive topics.",
      "Generated 538,000+ total views and ranked 487th out of 98,593 writers on the platform.",
    ],
  },
];

const education = [
  {
    school: "Institut Teknologi Sepuluh Nopember (ITS)",
    period: "2022 – 2026",
    detail: "Bachelor’s Degree in Computer Engineering · GPA 3.40/4.00",
    extra:
      "Final Project: Multimodal Question Answering on Images and Audio Based on Qwen Model Using Retrieval-Augmented Generation (RAG).",
  },
  {
    school: "SMA N 1 Salatiga",
    period: "2019 – 2022",
    detail: "Science Major (Natural Sciences & Mathematics)",
    extra:
      "Ranked 31st out of 300+ students and participated in the National Science Olympiad (Informatics) for two consecutive years.",
  },
];

const awards = [
  ["2nd Place", "KSE Business Plan Competition · Diponegoro University", "Mar 2024"],
  ["Top 5 Finalist", "DIG IN Business-IT Case Competition · Binus University", "Feb 2024"],
  ["Finalist + Best Poster", "RISE Business Case Competition · ITS", "Oct 2024"],
  ["Silver Medalist", "Diponegoro University Science Competition", "Oct 2024"],
  ["3rd Place", "National Science Olympiad in Informatics · City Level", "May 2020"],
];

const skills = [
  { group: "Web Development", items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Next.js", "Laravel", "WordPress"] },
  { group: "Back-end & Data", items: ["Node.js", "Express", "PostgreSQL", "MySQL", "MongoDB", "REST API"] },
  { group: "AI & Systems", items: ["Qwen", "Retrieval-Augmented Generation", "Multimodal AI", "System Architecture", "ERD"] },
  { group: "IoT", items: ["Sensor Integration", "Microcontroller Programming", "Real-time Monitoring", "Network Communication"] },
  { group: "Product & Tools", items: ["Figma", "Git/GitHub", "Postman", "Responsive UI", "Technical Documentation"] },
  { group: "Communication", items: ["Technical Writing", "Copywriting", "Content Writing", "SEO Writing", "Cross-functional Collaboration"] },
];

const writing = [
  {
    title: "IDN Times",
    stat: "125 articles · 538K+ views",
    desc: "Tech, gadget, buying-guide, and automotive content for a broad audience.",
    link: "https://www.idntimes.com/author/defender-artha-widiprasetyo-7bjpm",
  },
  {
    title: "Mojok.co",
    stat: "Top-5 weekly article · 260K+ Reels views",
    desc: "Automotive reviews and consumer-insight articles with SEO-oriented research.",
    link: "https://mojok.co/author/defender-artha-widiprasetyo/",
  },
  {
    title: "Computer Engineering ITS Media",
    stat: "Department copywriting",
    desc: "Event news, social captions, announcement broadcasts, and brochures.",
    link: "https://www.its.ac.id/komputer/id/kuliahtamu-virtualisasi/",
  },
];

type AppId =
  | "profile"
  | "projects"
  | "experience"
  | "skills"
  | "resume"
  | "awards"
  | "writing"
  | "contact";

type WindowState = {
  open: boolean;
  minimized: boolean;
  maximized: boolean;
  z: number;
};

const appList = [
  { id: "profile" as AppId, label: "About Me", icon: UserRound, desktopLabel: "About Me" },
  { id: "projects" as AppId, label: "My Projects", icon: FolderOpen, desktopLabel: "My Projects" },
  { id: "experience" as AppId, label: "Experience", icon: BriefcaseBusiness, desktopLabel: "Experience" },
  { id: "skills" as AppId, label: "Tech Stack", icon: Cpu, desktopLabel: "Tech Stack" },
  { id: "resume" as AppId, label: "My Resume", icon: FileText, desktopLabel: "My Resume" },
  { id: "awards" as AppId, label: "Awards", icon: Trophy, desktopLabel: "Awards" },
  { id: "writing" as AppId, label: "Writing", icon: PenTool, desktopLabel: "Writing" },
  { id: "contact" as AppId, label: "Contact Me", icon: Mail, desktopLabel: "Contact Me" },
];

const appMeta = Object.fromEntries(appList.map((app) => [app.id, app])) as Record<
  AppId,
  (typeof appList)[number]
>;

const initialWindows: Record<AppId, WindowState> = {
  profile: { open: true, minimized: false, maximized: false, z: 10 },
  projects: { open: false, minimized: false, maximized: false, z: 1 },
  experience: { open: false, minimized: false, maximized: false, z: 1 },
  skills: { open: false, minimized: false, maximized: false, z: 1 },
  resume: { open: false, minimized: false, maximized: false, z: 1 },
  awards: { open: false, minimized: false, maximized: false, z: 1 },
  writing: { open: false, minimized: false, maximized: false, z: 1 },
  contact: { open: false, minimized: false, maximized: false, z: 1 },
};

const windowPlacement: Record<AppId, { x: string; y: string; w: string; h: string }> = {
  profile: { x: "11%", y: "8%", w: "min(860px, 78vw)", h: "min(650px, 75vh)" },
  projects: { x: "18%", y: "6%", w: "min(980px, 76vw)", h: "min(700px, 79vh)" },
  experience: { x: "15%", y: "5%", w: "min(960px, 78vw)", h: "min(720px, 80vh)" },
  skills: { x: "23%", y: "9%", w: "min(840px, 70vw)", h: "min(650px, 74vh)" },
  resume: { x: "19%", y: "7%", w: "min(860px, 72vw)", h: "min(680px, 77vh)" },
  awards: { x: "26%", y: "10%", w: "min(760px, 64vw)", h: "min(590px, 68vh)" },
  writing: { x: "24%", y: "9%", w: "min(820px, 68vw)", h: "min(620px, 71vh)" },
  contact: { x: "29%", y: "16%", w: "min(660px, 58vw)", h: "min(520px, 62vh)" },
};

function XPButton({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: ReactNode;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      className={`xp-action ${primary ? "xp-action-primary" : ""}`}
    >
      {children}
    </a>
  );
}

function PortfolioXP() {
  const [windows, setWindows] = useState(initialWindows);
  const [startOpen, setStartOpen] = useState(false);
  const [allPrograms, setAllPrograms] = useState(false);
  const [clock, setClock] = useState(new Date());
  const [projectQuery, setProjectQuery] = useState("");
  const zRef = useRef(20);

  useEffect(() => {
    const timer = window.setInterval(() => setClock(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  const filteredProjects = useMemo(() => {
    const q = projectQuery.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter((project) =>
      `${project.title} ${project.desc} ${project.tag}`.toLowerCase().includes(q),
    );
  }, [projectQuery]);

  const activeId = useMemo(() => {
    const visible = (Object.entries(windows) as [AppId, WindowState][])
      .filter(([, state]) => state.open && !state.minimized)
      .sort((a, b) => b[1].z - a[1].z);
    return visible[0]?.[0] ?? null;
  }, [windows]);

  const launchApp = (id: AppId) => {
    zRef.current += 1;
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        open: true,
        minimized: false,
        z: zRef.current,
      },
    }));
    setStartOpen(false);
    setAllPrograms(false);
  };

  const focusApp = (id: AppId) => {
    zRef.current += 1;
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], minimized: false, z: zRef.current },
    }));
  };

  const closeApp = (id: AppId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], open: false, minimized: false, maximized: false },
    }));
  };

  const minimizeApp = (id: AppId) => {
    setWindows((prev) => ({ ...prev, [id]: { ...prev[id], minimized: true } }));
  };

  const toggleMaximize = (id: AppId) => {
    focusApp(id);
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], maximized: !prev[id].maximized },
    }));
  };

  const toggleTaskbarApp = (id: AppId) => {
    const state = windows[id];
    if (state.minimized) {
      focusApp(id);
      return;
    }
    if (activeId === id) {
      minimizeApp(id);
      return;
    }
    focusApp(id);
  };

  const renderContent = (id: AppId) => {
    switch (id) {
      case "profile":
        return (
          <div className="xp-page xp-profile-page">
            <div className="xp-profile-hero">
              <div className="xp-avatar-xl" aria-hidden="true">
                DW
              </div>
              <div>
                <div className="xp-kicker">WELCOME TO MY COMPUTER</div>
                <h1>{profile.name}</h1>
                <p className="xp-role">{profile.title}</p>
                <div className="xp-location">
                  <MapPin size={16} /> {profile.location}
                </div>
              </div>
            </div>

            <div className="xp-info-banner">
              <Monitor size={22} />
              <div>
                <strong>System message:</strong> I build software, web products, IoT systems, and AI-powered solutions — and I write about technology too.
              </div>
            </div>

            <div className="xp-two-col">
              <section className="xp-panel">
                <div className="xp-panel-head">About Defender</div>
                <div className="xp-panel-body xp-copy">
                  <p>{profile.summary}</p>
                  <p>
                    My recent work spans mining operations, web systems, IoT monitoring, front-end product development, and technical communication.
                  </p>
                </div>
              </section>

              <section className="xp-panel">
                <div className="xp-panel-head">Quick System Specs</div>
                <div className="xp-panel-body xp-spec-list">
                  <div><GraduationCap size={18} /><span><b>Education</b> B.Eng. Computer Engineering · ITS</span></div>
                  <div><Bot size={18} /><span><b>Final Project</b> Qwen + RAG multimodal question answering</span></div>
                  <div><Code2 size={18} /><span><b>Focus</b> Web, AI, IoT, digital solutions</span></div>
                  <div><PenTool size={18} /><span><b>Creative Side</b> Copywriting & content writing</span></div>
                </div>
              </section>
            </div>

            <div className="xp-stat-grid">
              <div className="xp-stat"><strong>3.40</strong><span>GPA / 4.00</span></div>
              <div className="xp-stat"><strong>125</strong><span>IDN Times Articles</span></div>
              <div className="xp-stat"><strong>538K+</strong><span>IDN Times Views</span></div>
              <div className="xp-stat"><strong>5</strong><span>Awards & Finals</span></div>
            </div>

            <div className="xp-link-row">
              <button className="xp-action xp-action-primary" onClick={() => launchApp("projects")}>
                <FolderOpen size={16} /> Explore Projects
              </button>
              <XPButton href={profile.linkedin}><Linkedin size={16} /> LinkedIn</XPButton>
              <XPButton href={CV_URL}><Download size={16} /> Latest CV</XPButton>
            </div>
          </div>
        );

      case "projects":
        return (
          <div className="xp-page">
            <div className="xp-toolbar">
              <button onClick={() => setProjectQuery("")} className="xp-toolbar-btn"><Home size={16} /> Home</button>
              <div className="xp-address-bar"><FolderOpen size={15} /> C:\Defender\Portfolio\Projects</div>
              <label className="xp-search"><Search size={15} /><input value={projectQuery} onChange={(e) => setProjectQuery(e.target.value)} placeholder="Search projects" /></label>
            </div>

            <div className="xp-folder-layout">
              <aside className="xp-sidebar">
                <div className="xp-sidebar-box">
                  <div className="xp-sidebar-title">Project Tasks</div>
                  <button onClick={() => setProjectQuery("AI")}><Bot size={15} /> Show AI work</button>
                  <button onClick={() => setProjectQuery("IoT")}><CircuitBoard size={15} /> Show IoT work</button>
                  <button onClick={() => setProjectQuery("React")}><Code2 size={15} /> Show web work</button>
                  <button onClick={() => setProjectQuery("")}><FolderOpen size={15} /> Show all projects</button>
                </div>
                <div className="xp-sidebar-box">
                  <div className="xp-sidebar-title">Details</div>
                  <p>{filteredProjects.length} item(s)</p>
                  <p>Selected software, web, mobile, IoT, and AI work.</p>
                </div>
              </aside>

              <div className="xp-project-grid">
                {filteredProjects.map((project) => (
                  <article className="xp-project-card" key={project.title}>
                    <div className="xp-project-preview">
                      {project.image ? (
                        <img src={project.image} alt={project.title} />
                      ) : (
                        <div className="xp-ai-preview"><Bot size={42} /><span>Qwen + RAG</span></div>
                      )}
                    </div>
                    <div className="xp-project-content">
                      <h3>{project.title}</h3>
                      <span className="xp-tag">{project.tag}</span>
                      <p>{project.desc}</p>
                      <div className="xp-project-actions">
                        {project.github && <XPButton href={project.github}><Github size={14} /> GitHub</XPButton>}
                        {project.link && <XPButton href={project.link} primary><ExternalLink size={14} /> Open</XPButton>}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        );

      case "experience":
        return (
          <div className="xp-page">
            <div className="xp-window-intro">
              <div className="xp-icon-tile orange"><BriefcaseBusiness size={30} /></div>
              <div><span className="xp-kicker">WORK HISTORY</span><h2>Experience Explorer</h2><p>A timeline of engineering, software, writing, and operations experience.</p></div>
            </div>
            <div className="xp-timeline">
              {experience.map((item) => (
                <article className="xp-timeline-item" key={`${item.role}-${item.company}`}>
                  <div className="xp-timeline-dot" />
                  <div className="xp-timeline-card">
                    <div className="xp-job-top">
                      <div><h3>{item.role}</h3><p>{item.company}</p></div>
                      <div className="xp-job-meta"><span>{item.period}</span><span>{item.type}</span></div>
                    </div>
                    <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        );

      case "skills":
        return (
          <div className="xp-page">
            <div className="xp-control-header">
              <div className="xp-icon-tile green"><Cpu size={32} /></div>
              <div><span className="xp-kicker">CONTROL PANEL</span><h2>Skills & Technologies</h2><p>Tools I use to turn ideas into working systems.</p></div>
            </div>
            <div className="xp-skill-grid">
              {skills.map((group, index) => {
                const icons = [Code2, Database, Bot, CircuitBoard, Wrench, PenTool];
                const Icon = icons[index] ?? Cpu;
                return (
                  <section className="xp-skill-group" key={group.group}>
                    <div className="xp-skill-group-title"><Icon size={23} /><h3>{group.group}</h3></div>
                    <div className="xp-chip-wrap">{group.items.map((item) => <span className="xp-chip" key={item}>{item}</span>)}</div>
                  </section>
                );
              })}
            </div>
          </div>
        );

      case "resume":
        return (
          <div className="xp-page xp-resume-page">
            <div className="xp-resume-toolbar">
              <div><FileText size={18} /> Defender_Artha_Widiprasetyo_CV.pdf</div>
              <XPButton href={CV_URL} primary><Download size={15} /> Download PDF</XPButton>
            </div>

            <article className="xp-paper">
              <header className="xp-paper-head">
                <div><h1>{profile.name}</h1><p>{profile.title}</p></div>
                <div className="xp-paper-contact">{profile.location}<br />{profile.email}<br />linkedin.com/in/defenderwidi</div>
              </header>
              <p className="xp-paper-summary">{profile.summary} Experienced in designing system architectures and implementing AI-based solutions, including a multimodal Q&A system using Qwen and Retrieval-Augmented Generation.</p>

              <h2>Education</h2>
              {education.map((item) => (
                <div className="xp-resume-row" key={item.school}>
                  <div><b>{item.school}</b><p>{item.detail}</p><small>{item.extra}</small></div>
                  <span>{item.period}</span>
                </div>
              ))}

              <h2>Selected Experience</h2>
              {experience.slice(0, 5).map((item) => (
                <div className="xp-resume-row" key={`${item.role}-${item.company}`}>
                  <div><b>{item.role} · {item.company}</b><p>{item.bullets[0]}</p></div>
                  <span>{item.period}</span>
                </div>
              ))}

              <h2>Highlights</h2>
              <div className="xp-paper-highlight-grid">
                <div><strong>AI</strong><span>Qwen · RAG · Multimodal systems</span></div>
                <div><strong>Software</strong><span>Web apps · Dashboards · System architecture</span></div>
                <div><strong>IoT</strong><span>Energy monitoring · Sensors · Microcontrollers</span></div>
                <div><strong>Writing</strong><span>125 IDN Times articles · 538K+ views</span></div>
              </div>
            </article>
          </div>
        );

      case "awards":
        return (
          <div className="xp-page">
            <div className="xp-window-intro">
              <div className="xp-icon-tile yellow"><Trophy size={32} /></div>
              <div><span className="xp-kicker">TROPHY CABINET</span><h2>Honors & Awards</h2><p>Competitions and academic milestones.</p></div>
            </div>
            <div className="xp-award-list">
              {awards.map(([place, event, date], index) => (
                <div className="xp-award" key={event}>
                  <div className="xp-medal">{index + 1}</div>
                  <div><strong>{place}</strong><p>{event}</p></div>
                  <span>{date}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case "writing":
        return (
          <div className="xp-page">
            <div className="xp-window-intro">
              <div className="xp-icon-tile purple"><PenTool size={31} /></div>
              <div><span className="xp-kicker">MY DOCUMENTS</span><h2>Writing Archive</h2><p>Technology, automotive, and institutional communication.</p></div>
            </div>
            <div className="xp-writing-grid">
              {writing.map((item) => (
                <article className="xp-writing-card" key={item.title}>
                  <div className="xp-doc-icon"><FileText size={30} /></div>
                  <h3>{item.title}</h3>
                  <strong>{item.stat}</strong>
                  <p>{item.desc}</p>
                  <XPButton href={item.link} primary><ExternalLink size={14} /> Read Work</XPButton>
                </article>
              ))}
            </div>
          </div>
        );

      case "contact":
        return (
          <div className="xp-page xp-contact-page">
            <div className="xp-contact-card">
              <div className="xp-avatar-xl xp-avatar-contact">DW</div>
              <span className="xp-kicker">USER ONLINE</span>
              <h2>Let’s build something useful.</h2>
              <p>I’m open to software engineering, front-end/full-stack, IoT, AI, digital product, and technical communication opportunities.</p>
              <div className="xp-contact-actions">
                <XPButton href={`mailto:${profile.email}`} primary><Mail size={16} /> {profile.email}</XPButton>
                <XPButton href={profile.linkedin}><Linkedin size={16} /> LinkedIn</XPButton>
                <XPButton href="https://github.com/DefenderWidi"><Github size={16} /> GitHub</XPButton>
                <XPButton href={profile.portfolio}><Globe2 size={16} /> Portfolio URL</XPButton>
              </div>
              <div className="xp-online-note"><CheckCircle2 size={17} /> Available for conversations about engineering and digital-product roles.</div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="xp-shell" onMouseDown={() => startOpen && setStartOpen(false)}>
      <style>{styles}</style>

      <div className="xp-sky" />
      <div className="xp-cloud xp-cloud-one" />
      <div className="xp-cloud xp-cloud-two" />
      <div className="xp-hill xp-hill-back" />
      <div className="xp-hill xp-hill-front" />

      <div className="xp-desktop-grid" aria-label="Desktop shortcuts">
        {appList.map((app) => {
          const Icon = app.icon;
          return (
            <button key={app.id} className="xp-desktop-icon" onDoubleClick={() => launchApp(app.id)} onClick={() => launchApp(app.id)}>
              <span className={`xp-desktop-icon-art app-${app.id}`}><Icon size={30} strokeWidth={1.8} /></span>
              <span>{app.desktopLabel}</span>
            </button>
          );
        })}
      </div>

      <div className="xp-desktop-note">
        <span>PORTFOLIO.EXE</span>
        <strong>Defender’s Desktop</strong>
        <small>Tip: open an icon, move the windows around, or use Start.</small>
      </div>

      {(Object.entries(windows) as [AppId, WindowState][]).map(([id, state]) => {
        if (!state.open || state.minimized) return null;
        const app = appMeta[id];
        const Icon = app.icon;
        const placement = windowPlacement[id];
        return (
          <motion.section
            key={id}
            drag={!state.maximized}
            dragMomentum={false}
            onMouseDown={(e) => { e.stopPropagation(); focusApp(id); }}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94 }}
            className={`xp-window ${state.maximized ? "xp-window-max" : ""}`}
            style={state.maximized ? { zIndex: state.z } : { left: placement.x, top: placement.y, width: placement.w, height: placement.h, zIndex: state.z }}
          >
            <header className="xp-titlebar">
              <div className="xp-title"><span className="xp-title-icon"><Icon size={16} /></span>{app.label}</div>
              <div className="xp-window-controls">
                <button aria-label="Minimize" onClick={(e) => { e.stopPropagation(); minimizeApp(id); }}><Minimize2 size={14} /></button>
                <button aria-label="Maximize" onClick={(e) => { e.stopPropagation(); toggleMaximize(id); }}>{state.maximized ? <Square size={12} /> : <Maximize2 size={13} />}</button>
                <button className="xp-close" aria-label="Close" onClick={(e) => { e.stopPropagation(); closeApp(id); }}><X size={15} /></button>
              </div>
            </header>
            <div className="xp-menu-strip"><span>File</span><span>Edit</span><span>View</span><span>Favorites</span><span>Tools</span><span>Help</span></div>
            <div className="xp-window-body">{renderContent(id)}</div>
          </motion.section>
        );
      })}

      <AnimatePresence>
        {startOpen && (
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            className="xp-start-menu"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="xp-start-head"><div className="xp-avatar-sm">DW</div><div><strong>Defender Widi</strong><span>Computer Engineering Graduate</span></div></div>
            <div className="xp-start-body">
              <div className="xp-start-left">
                {appList.slice(0, 5).map((app) => {
                  const Icon = app.icon;
                  return <button key={app.id} onClick={() => launchApp(app.id)}><span className={`xp-start-icon app-${app.id}`}><Icon size={20} /></span><div><strong>{app.label}</strong><small>{startDescriptions[app.id]}</small></div></button>;
                })}
                <div className="xp-start-separator" />
                <button className="xp-all-programs" onClick={() => setAllPrograms((v) => !v)}><strong>All Programs</strong><ChevronRight size={16} /></button>
              </div>
              <div className="xp-start-right">
                <button onClick={() => launchApp("resume")}><FileText size={18} /> My Resume</button>
                <button onClick={() => launchApp("projects")}><FolderOpen size={18} /> My Projects</button>
                <button onClick={() => launchApp("writing")}><PenTool size={18} /> My Documents</button>
                <div className="xp-start-separator blue" />
                <button onClick={() => launchApp("skills")}><Cpu size={18} /> Control Panel</button>
                <button onClick={() => launchApp("contact")}><Mail size={18} /> Contact Defender</button>
                <button onClick={() => window.open(profile.portfolio, "_blank")}><Globe2 size={18} /> Portfolio Online</button>
              </div>
            </div>
            {allPrograms && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="xp-programs-flyout">
                {appList.slice(5).map((app) => {
                  const Icon = app.icon;
                  return <button key={app.id} onClick={() => launchApp(app.id)}><Icon size={18} />{app.label}</button>;
                })}
                <button onClick={() => window.open("https://github.com/DefenderWidi", "_blank")}><Github size={18} />GitHub</button>
              </motion.div>
            )}
            <div className="xp-start-footer"><button onClick={() => setStartOpen(false)}><Power size={18} /> Close menu</button></div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="xp-taskbar" onMouseDown={(e) => e.stopPropagation()}>
        <button className={`xp-start-button ${startOpen ? "active" : ""}`} onClick={() => setStartOpen((v) => !v)}>
          <span className="xp-windows-mark"><i /><i /><i /><i /></span><strong>start</strong>
        </button>
        <div className="xp-task-divider" />
        <div className="xp-task-items">
          {appList.filter((app) => windows[app.id].open).map((app) => {
            const Icon = app.icon;
            const isActive = activeId === app.id && !windows[app.id].minimized;
            return <button key={app.id} className={isActive ? "active" : ""} onClick={() => toggleTaskbarApp(app.id)}><Icon size={15} /> <span>{app.label}</span></button>;
          })}
        </div>
        <div className="xp-tray"><Wifi size={15} /><Volume2 size={15} /><span>{clock.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span></div>
      </footer>
    </div>
  );
}

const startDescriptions: Record<AppId, string> = {
  profile: "Profile and quick stats",
  projects: "Software, IoT, AI & web",
  experience: "Work history",
  skills: "Tools and technologies",
  resume: "CV overview",
  awards: "Honors and competitions",
  writing: "Articles and copywriting",
  contact: "Email and social links",
};

const styles = String.raw`
  :root { font-family: Tahoma, Verdana, "Segoe UI", sans-serif; }
  * { box-sizing: border-box; }
  button, input { font: inherit; }
  button { color: inherit; }

  .xp-shell {
    position: fixed;
    inset: 0;
    overflow: hidden;
    background: linear-gradient(#2389e8 0%, #7bc7ff 56%, #d7efff 100%);
    color: #1f1f1f;
    font-family: Tahoma, Verdana, "Segoe UI", sans-serif;
    user-select: none;
  }

  .xp-sky { position:absolute; inset:0; background: linear-gradient(180deg,#1686e7 0%,#7bc8ff 62%,#bde7ff 100%); }
  .xp-cloud { position:absolute; width:220px; height:62px; background:rgba(255,255,255,.78); border-radius:999px; filter:blur(.2px); box-shadow:70px -25px 0 8px rgba(255,255,255,.78),135px 2px 0 2px rgba(255,255,255,.72); opacity:.8; }
  .xp-cloud-one { top:9%; left:32%; transform:scale(.65); }
  .xp-cloud-two { top:18%; right:13%; transform:scale(.48); opacity:.55; }
  .xp-hill { position:absolute; pointer-events:none; }
  .xp-hill-back { left:-12%; right:-18%; bottom:-18%; height:57%; background:linear-gradient(130deg,#78c52d,#3a9d1e 58%,#2d8218); border-radius:50% 60% 0 0 / 42% 55% 0 0; transform:rotate(1deg); box-shadow: inset 0 20px 35px rgba(255,255,255,.16); }
  .xp-hill-front { left:-18%; width:75%; bottom:-26%; height:54%; background:linear-gradient(145deg,#93d637,#3ba11f 60%,#237b16); border-radius:50% 50% 0 0 / 55% 55% 0 0; transform:rotate(-6deg); box-shadow: inset -30px 24px 45px rgba(255,255,255,.18); }

  .xp-desktop-grid { position:absolute; z-index:3; left:18px; top:18px; bottom:52px; display:grid; grid-auto-flow:column; grid-template-rows:repeat(5, 86px); grid-auto-columns:92px; gap:8px 10px; }
  .xp-desktop-icon { width:86px; min-height:78px; display:flex; flex-direction:column; align-items:center; justify-content:flex-start; gap:5px; padding:4px 3px; background:transparent; border:1px solid transparent; cursor:default; border-radius:2px; }
  .xp-desktop-icon:hover, .xp-desktop-icon:focus { background:rgba(19,75,155,.28); border-color:rgba(255,255,255,.46); outline:none; }
  .xp-desktop-icon > span:last-child { color:white; font-size:12px; line-height:14px; font-weight:600; text-align:center; text-shadow:1px 1px 2px #0a3e78, 0 1px 1px #0a3e78; max-width:84px; }
  .xp-desktop-icon-art { width:44px; height:44px; display:grid; place-items:center; color:white; border:2px solid rgba(255,255,255,.65); box-shadow:0 2px 6px rgba(0,0,0,.34), inset 1px 1px 1px rgba(255,255,255,.35); }
  .app-profile { background:linear-gradient(145deg,#ff9b3e,#ef651b); border-radius:50%; }
  .app-projects { background:linear-gradient(#ffd34f,#e9a917); color:#6b4c00; border-radius:4px; }
  .app-experience { background:linear-gradient(#95663b,#5f351b); border-radius:4px; }
  .app-skills { background:linear-gradient(#64bd5b,#238a36); border-radius:6px; }
  .app-resume { background:linear-gradient(#fff,#dce9ff); color:#1d58ae; border-radius:3px; }
  .app-awards { background:linear-gradient(#ffe765,#f0a20c); color:#8a5700; border-radius:50%; }
  .app-writing { background:linear-gradient(#b183e8,#6a42aa); border-radius:5px; }
  .app-contact { background:linear-gradient(#74b9ff,#2473c7); border-radius:6px; }

  .xp-desktop-note { position:absolute; z-index:2; right:28px; top:28px; width:270px; color:white; text-shadow:0 2px 4px rgba(0,50,100,.65); text-align:right; pointer-events:none; }
  .xp-desktop-note span { display:block; font-size:10px; letter-spacing:.2em; opacity:.8; }
  .xp-desktop-note strong { display:block; font-size:26px; margin-top:4px; }
  .xp-desktop-note small { display:block; font-size:11px; margin-top:5px; opacity:.9; }

  .xp-window { position:absolute; min-width:470px; min-height:330px; display:flex; flex-direction:column; background:#ece9d8; border:3px solid #0b54db; border-radius:8px 8px 3px 3px; box-shadow:0 10px 28px rgba(0,0,0,.38), inset 0 0 0 1px #4f8cff; overflow:hidden; }
  .xp-window-max { inset:0 0 40px 0 !important; width:auto !important; height:auto !important; border-radius:0; }
  .xp-titlebar { height:34px; flex:0 0 34px; display:flex; align-items:center; justify-content:space-between; padding:3px 5px 3px 6px; color:white; background:linear-gradient(180deg,#2b7bff 0%,#1260e7 45%,#0951d5 85%,#397cff 100%); box-shadow:inset 0 1px 0 #70a8ff, inset 0 -1px 0 #0a42b5; cursor:move; }
  .xp-title { display:flex; align-items:center; gap:6px; font-size:13px; font-weight:700; text-shadow:1px 1px #0d3680; white-space:nowrap; }
  .xp-title-icon { width:20px; height:20px; display:grid; place-items:center; background:rgba(255,255,255,.16); border-radius:3px; }
  .xp-window-controls { display:flex; gap:3px; }
  .xp-window-controls button { width:24px; height:24px; display:grid; place-items:center; border:1px solid #fff; border-radius:3px; color:white; background:linear-gradient(#5e9bff,#1c63de); box-shadow:inset 1px 1px 2px rgba(255,255,255,.65); cursor:pointer; padding:0; }
  .xp-window-controls button:hover { filter:brightness(1.12); }
  .xp-window-controls .xp-close { background:linear-gradient(#f28b71,#d84424 56%,#bd2a11); }
  .xp-menu-strip { height:24px; flex:0 0 24px; display:flex; align-items:center; gap:17px; padding:0 9px; font-size:11px; border-bottom:1px solid #c3c0b5; background:#f3f0e7; color:#262626; }
  .xp-menu-strip span::first-letter { text-decoration:underline; }
  .xp-window-body { flex:1; overflow:auto; background:#fff; user-select:text; }
  .xp-page { min-height:100%; padding:18px; background:linear-gradient(180deg,#fff,#fbfbfb); }

  .xp-kicker { color:#275aaa; font-size:10px; font-weight:800; letter-spacing:.14em; }
  .xp-profile-hero { display:flex; align-items:center; gap:20px; padding:14px 16px 19px; background:linear-gradient(135deg,#eef6ff,#fff); border:1px solid #c4d8ef; }
  .xp-profile-hero h1 { margin:4px 0 4px; color:#173e7a; font-size:32px; line-height:1; }
  .xp-role { margin:0; color:#555; font-size:15px; font-weight:700; }
  .xp-location { display:flex; align-items:center; gap:5px; margin-top:7px; color:#666; font-size:12px; }
  .xp-avatar-xl { width:82px; height:82px; display:grid; place-items:center; flex:0 0 82px; border-radius:9px; background:linear-gradient(145deg,#ffbf59,#ef691d); color:white; font-size:27px; font-weight:900; border:3px solid white; outline:1px solid #d2a15c; box-shadow:0 3px 8px rgba(0,0,0,.15); }
  .xp-info-banner { margin:14px 0; display:flex; align-items:flex-start; gap:10px; padding:10px 12px; background:#ffffe1; border:1px solid #e3d988; color:#4e4a25; font-size:12px; line-height:1.5; }
  .xp-two-col { display:grid; grid-template-columns:1.25fr .75fr; gap:14px; }
  .xp-panel { border:1px solid #9db9df; background:white; }
  .xp-panel-head { padding:7px 10px; background:linear-gradient(90deg,#e9f2ff,#f7fbff); color:#174a9b; font-size:12px; font-weight:800; border-bottom:1px solid #c6d6ec; }
  .xp-panel-body { padding:12px; }
  .xp-copy p { margin:0 0 10px; font-size:12px; line-height:1.65; color:#3c3c3c; }
  .xp-spec-list { display:grid; gap:11px; }
  .xp-spec-list > div { display:flex; align-items:flex-start; gap:9px; color:#555; font-size:11px; line-height:1.45; }
  .xp-spec-list svg { color:#3168b7; flex:0 0 auto; }
  .xp-spec-list b { display:block; color:#274875; margin-bottom:1px; }
  .xp-stat-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:9px; margin-top:14px; }
  .xp-stat { min-height:72px; padding:11px; display:flex; flex-direction:column; align-items:center; justify-content:center; background:linear-gradient(#fff,#eef5ff); border:1px solid #c9d9eb; }
  .xp-stat strong { font-size:21px; color:#1f5cad; }
  .xp-stat span { margin-top:3px; color:#666; font-size:10px; font-weight:700; text-align:center; }
  .xp-link-row { display:flex; flex-wrap:wrap; gap:7px; margin-top:13px; }

  .xp-action { min-height:28px; display:inline-flex; align-items:center; justify-content:center; gap:6px; padding:5px 10px; color:#1b3762; background:linear-gradient(#fff,#e8e8df); border:1px solid #8d8d86; border-radius:3px; box-shadow:inset 1px 1px white; font-size:11px; font-weight:700; text-decoration:none; cursor:pointer; }
  button.xp-action { font-family:inherit; }
  .xp-action:hover { background:linear-gradient(#fff,#f7efd2); border-color:#d2a022; }
  .xp-action-primary { color:#fff; background:linear-gradient(#5ea2ff,#2669d8); border-color:#174fae; text-shadow:1px 1px #174a8d; }
  .xp-action-primary:hover { background:linear-gradient(#7bb4ff,#2a72e4); border-color:#174fae; }

  .xp-toolbar { display:grid; grid-template-columns:auto minmax(180px,1fr) minmax(150px,230px); gap:7px; align-items:center; margin:-18px -18px 14px; padding:6px 8px; background:#f5f2e9; border-bottom:1px solid #bcb8aa; }
  .xp-toolbar-btn { display:flex; align-items:center; gap:5px; padding:5px 8px; border:1px solid #aaa69a; background:linear-gradient(#fff,#e5e2d7); border-radius:2px; font-size:11px; cursor:pointer; }
  .xp-address-bar { min-height:26px; display:flex; align-items:center; gap:6px; padding:3px 7px; background:white; border:1px inset #b9b9b2; color:#444; font-size:11px; overflow:hidden; white-space:nowrap; }
  .xp-search { min-height:26px; display:flex; align-items:center; gap:5px; padding:2px 6px; background:white; border:1px inset #b9b9b2; }
  .xp-search input { min-width:0; flex:1; border:0; outline:0; font-size:11px; }
  .xp-folder-layout { display:grid; grid-template-columns:180px 1fr; gap:13px; align-items:start; }
  .xp-sidebar { display:grid; gap:10px; }
  .xp-sidebar-box { border:1px solid #8fa7cc; border-radius:5px 5px 0 0; overflow:hidden; background:#f5f8ff; }
  .xp-sidebar-title { padding:7px 9px; background:linear-gradient(90deg,#fff,#dfeaff); color:#24529b; font-size:11px; font-weight:800; }
  .xp-sidebar-box button { width:100%; display:flex; align-items:center; gap:7px; padding:6px 9px; background:transparent; border:0; color:#2453a4; font-size:10px; text-align:left; cursor:pointer; }
  .xp-sidebar-box button:hover { text-decoration:underline; }
  .xp-sidebar-box p { margin:0; padding:7px 9px; color:#555; font-size:10px; line-height:1.4; }
  .xp-project-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px; }
  .xp-project-card { display:grid; grid-template-columns:116px 1fr; min-height:142px; border:1px solid #c7c7c7; background:#fff; box-shadow:1px 1px 2px rgba(0,0,0,.05); }
  .xp-project-preview { padding:6px; background:#f1f1f1; border-right:1px solid #d0d0d0; }
  .xp-project-preview img { width:100%; height:100%; min-height:126px; object-fit:cover; border:1px solid #bbb; }
  .xp-ai-preview { width:100%; height:100%; min-height:126px; display:flex; flex-direction:column; gap:8px; align-items:center; justify-content:center; color:white; background:linear-gradient(145deg,#172b68,#385fd2 58%,#7f9fff); font-size:11px; font-weight:800; border:1px solid #173b9c; }
  .xp-project-content { padding:10px; min-width:0; }
  .xp-project-content h3 { margin:0 0 5px; color:#1d4f99; font-size:13px; }
  .xp-project-content p { margin:7px 0; color:#555; font-size:10.5px; line-height:1.45; }
  .xp-tag { display:inline-block; max-width:100%; padding:2px 5px; background:#ffffdb; border:1px solid #e4d78c; color:#655d27; font-size:9px; font-weight:700; }
  .xp-project-actions { display:flex; flex-wrap:wrap; gap:5px; margin-top:8px; }
  .xp-project-actions .xp-action { padding:3px 7px; min-height:24px; font-size:10px; }

  .xp-window-intro, .xp-control-header { display:flex; align-items:center; gap:13px; padding-bottom:13px; margin-bottom:12px; border-bottom:1px solid #d8d8d8; }
  .xp-window-intro h2, .xp-control-header h2 { margin:2px 0 3px; color:#183f77; font-size:21px; }
  .xp-window-intro p, .xp-control-header p { margin:0; color:#6d6d6d; font-size:11px; }
  .xp-icon-tile { width:54px; height:54px; display:grid; place-items:center; color:white; border:2px solid white; outline:1px solid #aaa; box-shadow:0 2px 5px rgba(0,0,0,.15); }
  .xp-icon-tile.orange { background:linear-gradient(145deg,#bd8154,#73401f); }
  .xp-icon-tile.green { background:linear-gradient(145deg,#7ed67a,#2f8c42); }
  .xp-icon-tile.yellow { background:linear-gradient(145deg,#ffe875,#e6a313); color:#79500a; }
  .xp-icon-tile.purple { background:linear-gradient(145deg,#c29be9,#7548ae); }
  .xp-timeline { position:relative; padding-left:17px; }
  .xp-timeline::before { content:""; position:absolute; left:7px; top:3px; bottom:7px; width:2px; background:#8db0e2; }
  .xp-timeline-item { position:relative; padding:0 0 10px 13px; }
  .xp-timeline-dot { position:absolute; left:-15px; top:13px; width:9px; height:9px; border-radius:50%; background:#2b69c9; border:2px solid #fff; box-shadow:0 0 0 1px #2b69c9; }
  .xp-timeline-card { border:1px solid #cbd6e4; background:linear-gradient(#fff,#f9fbff); padding:10px 12px; }
  .xp-job-top { display:flex; justify-content:space-between; gap:15px; }
  .xp-job-top h3 { margin:0; color:#194d94; font-size:13px; }
  .xp-job-top p { margin:3px 0 0; color:#4d4d4d; font-size:11px; font-weight:700; }
  .xp-job-meta { display:flex; flex-direction:column; align-items:flex-end; gap:3px; flex:0 0 auto; }
  .xp-job-meta span { padding:2px 5px; color:#555; background:#efefef; border:1px solid #cecece; font-size:9px; }
  .xp-timeline-card ul { margin:8px 0 0; padding-left:17px; color:#565656; }
  .xp-timeline-card li { margin:4px 0; font-size:10.5px; line-height:1.45; }

  .xp-skill-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:11px; }
  .xp-skill-group { padding:12px; border:1px solid #becbda; background:linear-gradient(#fff,#f3f8ff); }
  .xp-skill-group-title { display:flex; align-items:center; gap:8px; color:#1f559c; }
  .xp-skill-group-title h3 { margin:0; font-size:13px; }
  .xp-chip-wrap { display:flex; flex-wrap:wrap; gap:6px; margin-top:10px; }
  .xp-chip { padding:4px 7px; background:#fff; border:1px solid #c5c5c5; box-shadow:inset 1px 1px white; color:#424242; font-size:10px; }

  .xp-resume-page { background:#c7c7c7; padding:0; }
  .xp-resume-toolbar { position:sticky; top:0; z-index:2; display:flex; align-items:center; justify-content:space-between; gap:10px; padding:7px 9px; background:#f2f0e7; border-bottom:1px solid #9b9b95; font-size:11px; }
  .xp-resume-toolbar > div { display:flex; align-items:center; gap:6px; font-weight:700; color:#3d3d3d; }
  .xp-paper { width:min(760px,calc(100% - 28px)); margin:18px auto 28px; padding:30px 34px 38px; background:white; box-shadow:0 3px 13px rgba(0,0,0,.26); color:#222; }
  .xp-paper-head { display:flex; justify-content:space-between; gap:18px; padding-bottom:13px; border-bottom:2px solid #1f4f8e; }
  .xp-paper-head h1 { margin:0; font-family:Arial,sans-serif; font-size:22px; color:#173b6d; }
  .xp-paper-head p { margin:4px 0 0; font-size:11px; font-weight:700; letter-spacing:.06em; }
  .xp-paper-contact { text-align:right; color:#555; font-size:9.5px; line-height:1.45; }
  .xp-paper-summary { font-size:10px; line-height:1.55; color:#444; }
  .xp-paper h2 { margin:15px 0 7px; padding-bottom:3px; border-bottom:1px solid #aaa; color:#173b6d; font-size:12px; text-transform:uppercase; letter-spacing:.08em; }
  .xp-resume-row { display:flex; justify-content:space-between; gap:15px; padding:5px 0; }
  .xp-resume-row > div { min-width:0; }
  .xp-resume-row b { font-size:10px; }
  .xp-resume-row p { margin:3px 0 0; color:#454545; font-size:9.5px; line-height:1.4; }
  .xp-resume-row small { display:block; margin-top:3px; color:#666; font-size:8.8px; line-height:1.4; }
  .xp-resume-row > span { flex:0 0 auto; font-size:9px; font-weight:700; color:#555; }
  .xp-paper-highlight-grid { display:grid; grid-template-columns:1fr 1fr; gap:6px; }
  .xp-paper-highlight-grid div { padding:7px; border:1px solid #d7d7d7; background:#fafafa; }
  .xp-paper-highlight-grid strong { display:block; color:#1c4f91; font-size:10px; }
  .xp-paper-highlight-grid span { font-size:8.8px; color:#555; }

  .xp-award-list { display:grid; gap:8px; }
  .xp-award { display:grid; grid-template-columns:45px 1fr auto; align-items:center; gap:10px; padding:10px; border:1px solid #d4c58b; background:linear-gradient(90deg,#fffdeb,#fff); }
  .xp-medal { width:35px; height:35px; display:grid; place-items:center; border-radius:50%; color:#805a00; background:linear-gradient(#ffe66c,#e9ad18); border:2px solid #fff4a5; outline:1px solid #c99515; font-weight:900; }
  .xp-award strong { color:#694b05; font-size:12px; }
  .xp-award p { margin:2px 0 0; color:#555; font-size:10px; }
  .xp-award > span { color:#777; font-size:9px; font-weight:700; }

  .xp-writing-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:11px; }
  .xp-writing-card { padding:13px; border:1px solid #cfcfcf; background:linear-gradient(#fff,#f7f7ff); }
  .xp-doc-icon { width:48px; height:48px; display:grid; place-items:center; color:#5d40a0; background:#ece4ff; border:1px solid #c5b7ea; }
  .xp-writing-card h3 { margin:9px 0 4px; color:#3f2a75; font-size:13px; }
  .xp-writing-card > strong { color:#795bae; font-size:10px; }
  .xp-writing-card p { min-height:55px; color:#555; font-size:10px; line-height:1.45; }

  .xp-contact-page { display:grid; place-items:center; background:linear-gradient(#edf5ff,#fff); }
  .xp-contact-card { width:min(560px,100%); padding:24px; text-align:center; border:1px solid #a9bedb; background:white; box-shadow:3px 3px 0 #dbe6f5; }
  .xp-avatar-contact { margin:0 auto 11px; }
  .xp-contact-card h2 { margin:4px 0 7px; color:#174a8e; font-size:23px; }
  .xp-contact-card > p { margin:0 auto; max-width:470px; color:#555; font-size:11px; line-height:1.6; }
  .xp-contact-actions { display:flex; flex-wrap:wrap; justify-content:center; gap:7px; margin-top:16px; }
  .xp-online-note { margin-top:15px; display:flex; align-items:center; justify-content:center; gap:6px; color:#397a36; font-size:10px; font-weight:700; }

  .xp-start-menu { position:absolute; z-index:9999; left:0; bottom:40px; width:420px; color:#222; border:2px solid #1553bd; border-bottom:0; border-radius:8px 8px 0 0; box-shadow:4px -5px 15px rgba(0,0,0,.3); overflow:visible; }
  .xp-start-head { height:64px; display:flex; align-items:center; gap:10px; padding:8px; color:white; background:linear-gradient(#2e86ff,#1e69d7); border-bottom:2px solid #fff; text-shadow:1px 1px #17478e; }
  .xp-avatar-sm { width:46px; height:46px; display:grid; place-items:center; border:2px solid #fff; border-radius:5px; background:linear-gradient(#ffb14d,#e75c1b); font-weight:900; }
  .xp-start-head strong { display:block; font-size:15px; }
  .xp-start-head span { display:block; margin-top:3px; font-size:9px; opacity:.9; }
  .xp-start-body { display:grid; grid-template-columns:55% 45%; min-height:322px; background:#fff; }
  .xp-start-left { padding:7px; background:white; }
  .xp-start-left > button { width:100%; display:flex; align-items:center; gap:8px; padding:5px; border:0; background:transparent; text-align:left; cursor:pointer; }
  .xp-start-left > button:hover { color:white; background:#316ac5; }
  .xp-start-left > button:hover small { color:#eaf2ff; }
  .xp-start-icon { width:34px; height:34px; display:grid; place-items:center; color:white; flex:0 0 34px; border:1px solid rgba(0,0,0,.15); }
  .xp-start-left strong { display:block; font-size:11px; }
  .xp-start-left small { display:block; margin-top:2px; color:#777; font-size:9px; }
  .xp-start-separator { height:1px; background:linear-gradient(90deg,transparent,#c7c7c7,transparent); margin:5px 3px; }
  .xp-start-separator.blue { background:linear-gradient(90deg,transparent,#9db7dd,transparent); width:calc(100% - 10px); }
  .xp-all-programs { justify-content:flex-end; }
  .xp-start-right { padding:9px 4px 8px 7px; background:#d3e5ff; border-left:1px solid #9cbbe6; }
  .xp-start-right button { width:100%; display:flex; align-items:center; gap:8px; padding:7px 7px; border:0; background:transparent; color:#23456f; font-size:10px; font-weight:700; text-align:left; cursor:pointer; }
  .xp-start-right button:hover { color:white; background:#316ac5; }
  .xp-programs-flyout { position:absolute; left:219px; bottom:46px; width:185px; padding:5px; background:white; border:2px solid #1553bd; box-shadow:3px 3px 9px rgba(0,0,0,.25); }
  .xp-programs-flyout button { width:100%; display:flex; align-items:center; gap:8px; padding:7px; border:0; background:white; font-size:10px; text-align:left; cursor:pointer; }
  .xp-programs-flyout button:hover { color:white; background:#316ac5; }
  .xp-start-footer { height:44px; display:flex; align-items:center; justify-content:flex-end; padding:5px 8px; color:white; background:linear-gradient(#2b77e0,#1b62c8); }
  .xp-start-footer button { display:flex; align-items:center; gap:5px; padding:5px 8px; color:white; border:0; background:transparent; font-size:10px; cursor:pointer; }
  .xp-start-footer button:hover { background:rgba(255,255,255,.14); }

  .xp-taskbar { position:absolute; z-index:10000; left:0; right:0; bottom:0; height:40px; display:flex; align-items:stretch; color:white; background:linear-gradient(#2f85ed 0%,#1f66d0 45%,#1554ba 52%,#1f6bd4 100%); border-top:1px solid #69a7ff; box-shadow:0 -1px 4px rgba(0,0,0,.28); }
  .xp-start-button { width:102px; flex:0 0 102px; display:flex; align-items:center; justify-content:center; gap:6px; margin:-1px 0 0 -5px; padding:0 9px 0 10px; color:white; background:linear-gradient(180deg,#64c758,#389f35 46%,#2a8128 58%,#4bad3f); border:0; border-right:2px solid #1d6b27; border-radius:0 14px 14px 0; box-shadow:inset 0 1px #a6ea91, inset -2px 0 3px rgba(0,0,0,.22); text-shadow:1px 1px #205f22; font-family:Tahoma,sans-serif; font-size:17px; font-style:italic; cursor:pointer; }
  .xp-start-button.active { filter:brightness(.87); }
  .xp-windows-mark { width:21px; height:21px; display:grid; grid-template-columns:1fr 1fr; grid-template-rows:1fr 1fr; gap:1px; transform:skewY(-6deg); }
  .xp-windows-mark i:nth-child(1) { background:#f4412f; } .xp-windows-mark i:nth-child(2) { background:#55ae2d; } .xp-windows-mark i:nth-child(3) { background:#2e79d5; } .xp-windows-mark i:nth-child(4) { background:#f1c727; }
  .xp-task-divider { width:7px; flex:0 0 7px; border-right:1px solid rgba(255,255,255,.17); }
  .xp-task-items { flex:1; min-width:0; display:flex; gap:3px; padding:4px 5px; overflow:hidden; }
  .xp-task-items button { min-width:110px; max-width:170px; flex:0 1 170px; display:flex; align-items:center; gap:5px; padding:0 8px; color:white; background:linear-gradient(#3984e6,#2668c8); border:1px solid #124da8; border-radius:3px; box-shadow:inset 1px 1px rgba(255,255,255,.18); font-size:10px; text-align:left; overflow:hidden; cursor:pointer; }
  .xp-task-items button.active { background:linear-gradient(#1c55a6,#2b63b6); box-shadow:inset 1px 1px 4px rgba(0,0,0,.35); }
  .xp-task-items button span { overflow:hidden; white-space:nowrap; text-overflow:ellipsis; }
  .xp-tray { flex:0 0 auto; min-width:112px; display:flex; align-items:center; justify-content:flex-end; gap:7px; padding:0 9px; background:linear-gradient(#22a5e8,#1685c7); border-left:1px solid #0c6dae; box-shadow:inset 1px 0 rgba(255,255,255,.22); font-size:10px; }

  @media (max-width: 820px) {
    .xp-desktop-note { display:none; }
    .xp-desktop-grid { left:10px; top:10px; grid-template-rows:repeat(4,80px); grid-auto-columns:78px; gap:5px; }
    .xp-desktop-icon { width:74px; min-height:73px; }
    .xp-desktop-icon-art { width:39px; height:39px; }
    .xp-desktop-icon > span:last-child { font-size:10px; line-height:12px; }
    .xp-window, .xp-window-max { left:4px !important; right:4px !important; top:6px !important; bottom:42px !important; width:auto !important; height:auto !important; min-width:0; min-height:0; border-radius:6px; }
    .xp-menu-strip { gap:11px; font-size:9px; overflow:hidden; }
    .xp-page { padding:11px; }
    .xp-two-col, .xp-folder-layout, .xp-skill-grid, .xp-writing-grid { grid-template-columns:1fr; }
    .xp-sidebar { display:none; }
    .xp-stat-grid { grid-template-columns:repeat(2,1fr); }
    .xp-project-grid { grid-template-columns:1fr; }
    .xp-project-card { grid-template-columns:98px 1fr; }
    .xp-project-preview img, .xp-ai-preview { min-height:110px; }
    .xp-profile-hero { align-items:flex-start; }
    .xp-profile-hero h1 { font-size:23px; }
    .xp-avatar-xl { width:62px; height:62px; flex-basis:62px; font-size:20px; }
    .xp-toolbar { grid-template-columns:auto 1fr; }
    .xp-search { grid-column:1 / -1; }
    .xp-job-top { flex-direction:column; gap:6px; }
    .xp-job-meta { align-items:flex-start; flex-direction:row; flex-wrap:wrap; }
    .xp-paper { width:calc(100% - 12px); margin:6px auto 14px; padding:18px 15px; }
    .xp-paper-head { flex-direction:column; }
    .xp-paper-contact { text-align:left; }
    .xp-paper-highlight-grid { grid-template-columns:1fr; }
    .xp-award { grid-template-columns:40px 1fr; }
    .xp-award > span { grid-column:2; }
    .xp-start-menu { width:min(420px, calc(100vw - 6px)); }
    .xp-start-body { grid-template-columns:58% 42%; }
    .xp-programs-flyout { left:40%; width:58%; }
    .xp-start-button { width:92px; flex-basis:92px; font-size:15px; }
    .xp-task-items button { min-width:42px; max-width:52px; flex-basis:52px; justify-content:center; padding:0 5px; }
    .xp-task-items button span { display:none; }
    .xp-tray { min-width:76px; gap:4px; padding:0 6px; }
    .xp-tray svg:first-child { display:none; }
  }

  @media (max-width: 500px) {
    .xp-start-right button { padding:7px 4px; font-size:9px; }
    .xp-start-left > button { padding:4px; }
    .xp-start-left small { display:none; }
    .xp-start-menu { bottom:40px; }
    .xp-title { font-size:11px; }
    .xp-window-controls button { width:22px; }
    .xp-project-card { grid-template-columns:1fr; }
    .xp-project-preview { border-right:0; border-bottom:1px solid #d0d0d0; }
    .xp-project-preview img, .xp-ai-preview { height:135px; min-height:135px; }
    .xp-resume-toolbar > div { max-width:58%; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; }
  }
`;

export default PortfolioXP;
