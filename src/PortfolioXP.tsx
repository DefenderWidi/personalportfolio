import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  BriefcaseBusiness,
  Bell,
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
  Recycle,
  RefreshCw,
  Search,
  Square,
  Trophy,
  UserRound,
  Volume2,
  VolumeX,
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
    title: "Tinggi Jenjang Tambang",
    desc: "Web-based mining bench-height monitoring application developed to support measurement and reporting during production-engineering work at BUMA.",
    tag: "Mining Tech · Web App · Monitoring",
    image: "/tinggijenjang.jpg",
    link: "https://tinggijenjang.vercel.app/",
  },
  {
    title: "PT Sawitri Company Profile",
    desc: "Responsive front-end company profile landing page for PT Sawitri Sukses Sejahtera, presenting company profile, services, credentials, and contact information.",
    tag: "Front-end · Company Profile · Responsive Web",
    image: "/sawitri.jpg",
    link: "https://sawitri.pranaya.my.id/",
  },
  {
    title: "Komdigi Executive Dashboard",
    desc: "Executive data dashboard for Kabupaten Semarang. Built with system architecture, ERD/activity diagrams, UI/UX, SSR-oriented front-end implementation, and technical documentation.",
    tag: "Dashboard · Full Stack · UI/UX",
    image: "/kominfo-dashboard.png",
    github: "https://github.com/DefenderWidi/dashboardkominfo.git",
  },
  {
    title: "Multimodal Q&A with Qwen + RAG",
    desc: "Final project: multimodal question answering on images and audio using the Qwen model with Retrieval-Augmented Generation (RAG).",
    tag: "AI · Qwen · RAG · Multimodal",
    image: "",
    document: "/Buku TA_Defender Artha.pdf",
    documentLabel: "Read Thesis",
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
    attachment: "/Presentation - BMS.pdf",
    attachmentLabel: "View BMS Presentation",
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
  | "contact"
  | "recycle"
  | "notepad"
  | "cmd"
  | "minesweeper"
  | "computer"
  | "pictureviewer"
  | "display"
;

type WindowState = {
  open: boolean;
  minimized: boolean;
  maximized: boolean;
  z: number;
};

type MineCell = {
  mine: boolean;
  revealed: boolean;
  flagged: boolean;
  adjacent: number;
};

type MineStatus = "playing" | "won" | "lost";

type ThemeId = "blue" | "olive" | "silver" | "defender";
type WallpaperId = "bliss" | "grid" | "sunset" | "midnight";
type DisplayTab = "themes" | "desktop" | "screensaver" | "appearance";
type ComputerPath = "root" | "c" | "pictures" | "education" | "competitions" | "organizations" | "internships" | "documents";

type GalleryItem = {
  id: string;
  album: Exclude<ComputerPath, "root" | "c" | "pictures" | "documents">;
  title: string;
  caption: string;
  src: string;
};

// Every item below points to a real image currently stored in /public/gallery.
// Keep the filename casing exactly the same because production hosts are case-sensitive.
const galleryItems: GalleryItem[] = [
  { id: "final-defense", album: "education", title: "Final Project Defense", caption: "Computer Engineering · Institut Teknologi Sepuluh Nopember · 2026", src: "/gallery/fotosidang.jpeg" },

  { id: "dig-in", album: "competitions", title: "DIG IN Business-IT Case Competition", caption: "Top 5 Finalist · Binus University · February 2024", src: "/gallery/DIGINCompetition.jpeg" },
  { id: "rise", album: "competitions", title: "RISE Business Case Competition", caption: "Finalist + Best Poster · ITS · October 2024", src: "/gallery/RISE.jpeg" },

  { id: "himatekkom", album: "organizations", title: "HIMATEKKOM ITS — Student Welfare", caption: "Head of Student Welfare · HIMATEKKOM ITS · March 2025 – February 2026", src: "/gallery/HIMATEKKOM.jpeg" },
  { id: "tdc-1", album: "organizations", title: "Technopreneurship Development Center — Activity 1", caption: "Member · Technopreneurship Development Center ITS · 2023–2024", src: "/gallery/TechnopreneurshipDevelopmentClub1.jpeg" },
  { id: "tdc-2", album: "organizations", title: "Technopreneurship Development Center — Activity 2", caption: "Entrepreneurship, technology, and collaborative program documentation.", src: "/gallery/TechnopreneurshipDevelopmentClub2.jpeg" },

  { id: "diskominfo", album: "internships", title: "Diskominfo Kabupaten Semarang", caption: "Full Stack Developer Internship · January – February 2025", src: "/gallery/magangdiskominfo.jpeg" },
  { id: "teknologi-kartu", album: "internships", title: "PT Teknologi Kartu Indonesia", caption: "Front-end Developer Internship · July – August 2025", src: "/gallery/magangPTTeknologiKartuIndonesia.jpeg" },
  { id: "javadwipa", album: "internships", title: "PT Javadwipa Duta Mandiri", caption: "IoT Engineer Internship · September – December 2025", src: "/gallery/magangPTJavadwipa.jpeg" },
  { id: "buma-1", album: "internships", title: "BUMA Internship — Site Documentation 1", caption: "Production Engineer Internship · mining operations & digital improvement · February – July 2026", src: "/gallery/magangPTBUMA1.jpeg" },
  { id: "buma-2", album: "internships", title: "BUMA Internship — Team Documentation", caption: "Production engineering team and operational-site experience.", src: "/gallery/magangPTBUMA2.jpeg" },
  { id: "buma-3", album: "internships", title: "BUMA Internship — Mining Site", caption: "Field documentation from the BUMA production-engineering internship.", src: "/gallery/magangPTBUMA3.jpeg" },

  { id: "kse-its-feature", album: "competitions", title: "ITS Home of Champions — KSE Business Plan Competition", caption: "ITS social-media recognition for 2nd Place at the KSE Business Plan Competition · Diponegoro University · March 2024", src: "/gallery/KSEDiponation.jpeg" },
];

const MINE_SIZE = 8;
const MINE_COUNT = 10;

function createMineBoard(): MineCell[] {
  const total = MINE_SIZE * MINE_SIZE;
  const mineIndexes = new Set<number>();
  while (mineIndexes.size < MINE_COUNT) {
    mineIndexes.add(Math.floor(Math.random() * total));
  }

  const board: MineCell[] = Array.from({ length: total }, (_, index) => ({
    mine: mineIndexes.has(index),
    revealed: false,
    flagged: false,
    adjacent: 0,
  }));

  const neighbors = (index: number) => {
    const row = Math.floor(index / MINE_SIZE);
    const col = index % MINE_SIZE;
    const result: number[] = [];
    for (let dr = -1; dr <= 1; dr += 1) {
      for (let dc = -1; dc <= 1; dc += 1) {
        if (dr === 0 && dc === 0) continue;
        const r = row + dr;
        const c = col + dc;
        if (r >= 0 && r < MINE_SIZE && c >= 0 && c < MINE_SIZE) result.push(r * MINE_SIZE + c);
      }
    }
    return result;
  };

  board.forEach((cell, index) => {
    if (!cell.mine) cell.adjacent = neighbors(index).filter((neighbor) => board[neighbor].mine).length;
  });

  return board;
}

function revealMineArea(board: MineCell[], start: number): MineCell[] {
  const next = board.map((cell) => ({ ...cell }));
  const queue = [start];
  const visited = new Set<number>();

  while (queue.length) {
    const index = queue.shift()!;
    if (visited.has(index)) continue;
    visited.add(index);
    const cell = next[index];
    if (cell.flagged || cell.mine) continue;
    cell.revealed = true;
    if (cell.adjacent !== 0) continue;

    const row = Math.floor(index / MINE_SIZE);
    const col = index % MINE_SIZE;
    for (let dr = -1; dr <= 1; dr += 1) {
      for (let dc = -1; dc <= 1; dc += 1) {
        if (dr === 0 && dc === 0) continue;
        const r = row + dr;
        const c = col + dc;
        if (r >= 0 && r < MINE_SIZE && c >= 0 && c < MINE_SIZE) queue.push(r * MINE_SIZE + c);
      }
    }
  }

  return next;
}

const appList = [
  { id: "profile" as AppId, label: "About Me", icon: UserRound, desktopLabel: "About Me" },
  { id: "computer" as AppId, label: "My Computer", icon: Monitor, desktopLabel: "My Computer" },
  { id: "projects" as AppId, label: "My Projects", icon: FolderOpen, desktopLabel: "My Projects" },
  { id: "experience" as AppId, label: "Experience", icon: BriefcaseBusiness, desktopLabel: "Experience" },
  { id: "skills" as AppId, label: "Tech Stack", icon: Cpu, desktopLabel: "Tech Stack" },
  { id: "resume" as AppId, label: "My Resume", icon: FileText, desktopLabel: "My Resume" },
  { id: "awards" as AppId, label: "Awards", icon: Trophy, desktopLabel: "Awards" },
  { id: "writing" as AppId, label: "Writing", icon: PenTool, desktopLabel: "Writing" },
  { id: "contact" as AppId, label: "Contact Me", icon: Mail, desktopLabel: "Contact Me" },
  { id: "recycle" as AppId, label: "Recycle Bin", icon: Recycle, desktopLabel: "Recycle Bin" },
  { id: "notepad" as AppId, label: "Notepad", icon: FileText, desktopLabel: "Notepad" },
  { id: "cmd" as AppId, label: "Command Prompt", icon: Code2, desktopLabel: "Command Prompt" },
  { id: "minesweeper" as AppId, label: "Minesweeper", icon: Square, desktopLabel: "Minesweeper" },
  { id: "display" as AppId, label: "Display Properties", icon: Monitor, desktopLabel: "Display Properties" },
  { id: "pictureviewer" as AppId, label: "Windows Picture and Fax Viewer", icon: Monitor, desktopLabel: "Picture Viewer" },
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
  recycle: { open: false, minimized: false, maximized: false, z: 1 },
  notepad: { open: false, minimized: false, maximized: false, z: 1 },
  cmd: { open: false, minimized: false, maximized: false, z: 1 },
  minesweeper: { open: false, minimized: false, maximized: false, z: 1 },
  computer: { open: false, minimized: false, maximized: false, z: 1 },
  pictureviewer: { open: false, minimized: false, maximized: false, z: 1 },
  display: { open: false, minimized: false, maximized: false, z: 1 },
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
  recycle: { x: "31%", y: "13%", w: "min(680px, 58vw)", h: "min(520px, 62vh)" },
  notepad: { x: "25%", y: "10%", w: "min(720px, 64vw)", h: "min(580px, 68vh)" },
  cmd: { x: "20%", y: "12%", w: "min(760px, 66vw)", h: "min(520px, 62vh)" },
  minesweeper: { x: "34%", y: "12%", w: "min(470px, 48vw)", h: "min(575px, 68vh)" },
  computer: { x: "12%", y: "6%", w: "min(900px, 76vw)", h: "min(680px, 78vh)" },
  pictureviewer: { x: "20%", y: "7%", w: "min(800px, 70vw)", h: "min(650px, 76vh)" },
  display: { x: "28%", y: "11%", w: "min(660px, 62vw)", h: "min(560px, 68vh)" },
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
  const [soundOn, setSoundOn] = useState(true);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);
  const [notification, setNotification] = useState<{ title: string; text: string } | null>(null);
  const [binEmptied, setBinEmptied] = useState(false);
  const [secretOpen, setSecretOpen] = useState(false);
  const [booting, setBooting] = useState(true);
  const [bsod, setBsod] = useState(false);
  const [screensaver, setScreensaver] = useState(false);
  const [noteFile, setNoteFile] = useState("PROFILE.txt");
  const [noteText, setNoteText] = useState(`DEFENDER PROFILE.txt

Computer Engineering graduate focused on software engineering, web applications, Artificial Intelligence, IoT, and digital systems.

Selected strengths:
- Full-stack and front-end development
- Multimodal AI with Qwen + RAG
- IoT and real-time monitoring
- System architecture and technical documentation

Explore My Projects, Experience, and My Computer for selected work and documentation.`);
  const [cmdInput, setCmdInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([
    "Microsoft Windows XP [Version 5.1.2600]",
    "(C) Copyright 1985-2001 Microsoft Corp.",
    "",
    "Defender XP Portfolio Terminal",
    'Type "help" for available commands.',
    "",
  ]);
  const [mineBoard, setMineBoard] = useState<MineCell[]>(() => createMineBoard());
  const [mineStatus, setMineStatus] = useState<MineStatus>("playing");
  const [computerPath, setComputerPath] = useState<ComputerPath>("root");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem>(galleryItems[0]);
  const [theme, setTheme] = useState<ThemeId>(() => {
    if (typeof window === "undefined") return "blue";
    return (window.localStorage.getItem("defender-xp-theme") as ThemeId) || "blue";
  });
  const [wallpaper, setWallpaper] = useState<WallpaperId>(() => {
    if (typeof window === "undefined") return "bliss";
    return (window.localStorage.getItem("defender-xp-wallpaper") as WallpaperId) || "bliss";
  });
  const [displayTab, setDisplayTab] = useState<DisplayTab>("themes");
  const [galleryWidgetIndex, setGalleryWidgetIndex] = useState(0);
  const zRef = useRef(20);

  const showNotification = (title: string, text: string) => {
    setNotification({ title, text });
    window.setTimeout(() => setNotification(null), 5200);
  };

  const playSound = (kind: "open" | "toggle" | "secret" = "open", force = false) => {
    if ((!soundOn && !force) || typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const frequencies = { open: 660, toggle: 520, secret: 880 };
      osc.type = "sine";
      osc.frequency.setValueAtTime(frequencies[kind], ctx.currentTime);
      gain.gain.setValueAtTime(0.035, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + (kind === "secret" ? 0.32 : 0.16));
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + (kind === "secret" ? 0.34 : 0.18));
      osc.onended = () => void ctx.close();
    } catch {
      // Audio feedback is optional; portfolio interactions should never fail because of it.
    }
  };

  const toggleSound = () => {
    setSoundOn((current) => {
      const next = !current;
      if (!current) window.setTimeout(() => playSound("toggle", true), 0);
      return next;
    });
    showNotification("Sound", soundOn ? "Windows sounds are now muted." : "Windows sounds are back on.");
  };

  const minimizeAll = () => {
    setWindows((prev) => Object.fromEntries(
      (Object.entries(prev) as [AppId, WindowState][]).map(([id, state]) => [id, { ...state, minimized: state.open ? true : state.minimized }]),
    ) as Record<AppId, WindowState>);
    setStartOpen(false);
    setContextMenu(null);
  };


  useEffect(() => {
    if (!booting) return;
    const timer = window.setTimeout(() => {
      setBooting(false);
      playSound("open");
    }, 1750);
    return () => window.clearTimeout(timer);
  }, [booting]);

  useEffect(() => {
    if (booting) return;
    const welcome = window.setTimeout(() => {
      setNotification({
        title: "Welcome to Defender's Desktop",
        text: "Tip: right-click the desktop, open Command Prompt, or inspect the Recycle Bin.",
      });
    }, 650);
    return () => window.clearTimeout(welcome);
  }, [booting]);

  useEffect(() => {
    if (!bsod && !screensaver) return;
    const handleKey = (event: KeyboardEvent) => {
      if (bsod && (event.key === "Escape" || event.key === "Enter")) {
        setBsod(false);
        setBooting(true);
      } else if (screensaver) {
        setScreensaver(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [bsod, screensaver]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("defender-xp-theme", theme);
    window.localStorage.setItem("defender-xp-wallpaper", wallpaper);
  }, [theme, wallpaper]);

  useEffect(() => {
    const timer = window.setInterval(() => setClock(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (booting || bsod || screensaver) return;
    const timer = window.setInterval(() => {
      setGalleryWidgetIndex((current) => (current + 1) % galleryItems.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [booting, bsod, screensaver]);

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
    setContextMenu(null);
    playSound("open");
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

  const resetMines = () => {
    setMineBoard(createMineBoard());
    setMineStatus("playing");
  };

  const revealMineCell = (index: number) => {
    if (mineStatus !== "playing" || mineBoard[index].revealed || mineBoard[index].flagged) return;
    if (mineBoard[index].mine) {
      setMineBoard(mineBoard.map((cell) => cell.mine ? { ...cell, revealed: true } : cell));
      setMineStatus("lost");
      playSound("toggle");
      return;
    }

    const next = revealMineArea(mineBoard, index);
    setMineBoard(next);
    const safeCells = next.filter((cell) => !cell.mine);
    if (safeCells.every((cell) => cell.revealed)) {
      setMineStatus("won");
      showNotification("Minesweeper", "You cleared the field. Very employable behavior.");
      playSound("secret");
    }
  };

  const flagMineCell = (event: { preventDefault: () => void }, index: number) => {
    event.preventDefault();
    if (mineStatus !== "playing" || mineBoard[index].revealed) return;
    setMineBoard((current) => current.map((cell, cellIndex) => cellIndex === index ? { ...cell, flagged: !cell.flagged } : cell));
  };

  const openNotepadDocument = (name: string) => {
    const docs: Record<string, string> = {
      "PROFILE.txt": `DEFENDER PROFILE.txt

Computer Engineering graduate from Institut Teknologi Sepuluh Nopember (ITS).

Focus areas:
- Software & web engineering
- Artificial Intelligence / RAG
- IoT & real-time monitoring
- Digital products and system design

Open My Projects and Experience for selected work.`,
      "SKILLS.txt": `TECHNICAL SKILLS.txt

Web: React, TypeScript, JavaScript, Tailwind CSS, Next.js, Laravel
Back-end: Node.js, Express, PostgreSQL, MySQL, MongoDB
AI: Qwen, Retrieval-Augmented Generation, Multimodal AI
IoT: Sensors, microcontrollers, real-time monitoring
Tools: Git/GitHub, Figma, Postman, technical documentation`,
      "CONTACT.txt": `CONTACT.txt

Email: ${profile.email}
LinkedIn: linkedin.com/in/defenderwidi
GitHub: github.com/DefenderWidi
Portfolio: builtbydefender.vercel.app`,
    };
    setNoteFile(name);
    setNoteText(docs[name] ?? "Untitled document");
  };

  const openPhoto = (item: GalleryItem) => {
    setSelectedPhoto(item);
    launchApp("pictureviewer");
  };

  const stepPhoto = (direction: -1 | 1) => {
    const albumItems = galleryItems.filter((item) => item.album === selectedPhoto.album);
    const currentIndex = albumItems.findIndex((item) => item.id === selectedPhoto.id);
    const nextIndex = (currentIndex + direction + albumItems.length) % albumItems.length;
    setSelectedPhoto(albumItems[nextIndex]);
  };

  const computerUp = () => {
    const parent: Record<ComputerPath, ComputerPath> = {
      root: "root", c: "root", pictures: "root", education: "pictures", competitions: "pictures", organizations: "pictures",
      internships: "pictures", documents: "root",
    };
    setComputerPath(parent[computerPath]);
  };


  const runCommand = () => {
    const raw = cmdInput.trim();
    if (!raw) return;
    const command = raw.toLowerCase();
    const prompt = `C:\\Documents and Settings\\Defender>${raw}`;
    let output: string[] = [];

    if (command === "cls" || command === "clear") {
      setCmdHistory([]);
      setCmdInput("");
      return;
    }
    if (command === "help") output = [
      "Available commands:",
      "  whoami       show profile summary",
      "  skills       list technical skills",
      "  projects     list selected projects",
      "  experience   show engineering/dev roles",
      "  contact      show contact info",
      "  dir          list this portfolio's apps",
      "  open <app>   open computer/projects/resume/notepad/minesweeper/display",
      "  pictures     open Defender's Pictures",
      "  theme        open Display Properties",
      "  screensaver  start the XP screensaver",
      "  date         show local date/time",
      "  ver          show Defender XP version",
      "  echo <text>  print text",
      "  cls          clear the terminal",
    ];
    else if (command === "whoami") output = [`${profile.name} — ${profile.title}`, profile.summary];
    else if (command === "skills") output = skills.map((group) => `${group.group}: ${group.items.join(", ")}`);
    else if (command === "projects") output = projects.map((project, index) => `${index + 1}. ${project.title} [${project.tag}]`);
    else if (command === "experience") output = experience.slice(0, 7).map((item) => `${item.role} @ ${item.company} — ${item.period}`);
    else if (command === "contact") output = [`Email: ${profile.email}`, "LinkedIn: linkedin.com/in/defenderwidi", "GitHub: github.com/DefenderWidi"];
    else if (command === "dir") output = ["MYCOMPUTER.EXE", "ABOUT.EXE", "PROJECTS.EXE", "EXPERIENCE.EXE", "RESUME.PDF", "NOTEPAD.EXE", "MINESWEEPER.EXE", "DISPLAY.CPL"];
    else if (command === "pictures") { setComputerPath("pictures"); launchApp("computer"); output = ["Opening Defender's Pictures..."]; }
    else if (command === "theme") { launchApp("display"); output = ["Opening Display Properties..."]; }
    else if (command === "date" || command === "time") output = [new Date().toString()];
    else if (command === "ver") output = ["Defender XP Professional [Portfolio Build 3.0.2026]"];
    else if (command.startsWith("echo ")) output = [raw.slice(5)];
    else if (command === "screensaver") { setScreensaver(true); output = ["Starting screensaver..."]; }
    else if (command === "bsod") { setBsod(true); output = ["This was a terrible idea."]; }
    else if (command === "exit") { closeApp("cmd"); output = []; }
    else if (command.startsWith("open ")) {
      const target = command.slice(5).trim();
      const map: Record<string, AppId> = {
        computer: "computer", projects: "projects", resume: "resume", notepad: "notepad", minesweeper: "minesweeper",
        skills: "skills", experience: "experience", contact: "contact",
        display: "display", theme: "display",
      };
      if (map[target]) { launchApp(map[target]); output = [`Opening ${target}...`]; }
      else output = [`'${target}' is not a recognized application.`];
    } else output = [`'${raw}' is not recognized as an internal or external command, operable program or batch file.`];

    setCmdHistory((current) => [...current, prompt, ...output, ""]);
    setCmdInput("");
  };

  const renderContent = (id: AppId) => {
    switch (id) {
      case "profile":
        return (
          <div className="xp-page xp-profile-page">
            <div className="xp-profile-hero">
              <div className="xp-avatar-xl xp-avatar-photo">
                <img src="/pasfoto.jpg" alt="Defender Artha Widiprasetyo" />
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
              <div className="xp-stat"><strong>{projects.length}</strong><span>Selected Tech Projects</span></div>
              <div className="xp-stat"><strong>6</strong><span>Technical Internship Experiences</span></div>
              <div className="xp-stat"><strong>4</strong><span>Core Domains: Web · AI · IoT · Systems</span></div>
              <div className="xp-stat"><strong>{awards.length}</strong><span>Awards & Finals</span></div>
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
                      {project.link && <XPButton href={project.link} primary><ExternalLink size={14} /> Live Site</XPButton>}
                      {"document" in project && project.document && (
                        <XPButton href={project.document}><FileText size={14} /> {project.documentLabel || "View Document"}</XPButton>
                      )}
                    </div>
                  </div>
                </article>
              ))}
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
                    {"attachment" in item && item.attachment && (
                      <div className="xp-job-actions">
                        <XPButton href={item.attachment}><FileText size={14} /> {item.attachmentLabel || "View Document"}</XPButton>
                      </div>
                    )}
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
              <div className="xp-avatar-xl xp-avatar-contact xp-avatar-photo"><img src="/pasfoto.jpg" alt="Defender Artha Widiprasetyo" /></div>
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

      case "computer":
        return (
          <div className="xp-page xp-computer-page">
            <div className="xp-explorer-toolbar">
              <button className="xp-toolbar-btn" onClick={computerUp} disabled={computerPath === "root"}>← Back / Up</button>
              <div className="xp-address-bar"><Monitor size={15} /> {({
                root: "My Computer", c: "C:\\Defender", pictures: "C:\\Defender\\My Pictures",
                education: "C:\\Defender\\My Pictures\\Education & Milestones", competitions: "C:\\Defender\\My Pictures\\Competitions",
                organizations: "C:\\Defender\\My Pictures\\Organizations", internships: "C:\\Defender\\My Pictures\\Internships",
                documents: "C:\\Defender\\Shared Documents",
              } as Record<ComputerPath, string>)[computerPath]}</div>
              <button className="xp-toolbar-btn" onClick={() => showNotification("My Computer", "Folder view refreshed.")}><RefreshCw size={14} /> Refresh</button>
            </div>

            <div className="xp-computer-layout">
              <aside className="xp-sidebar xp-computer-sidebar">
                <div className="xp-sidebar-box">
                  <div className="xp-sidebar-title">System Tasks</div>
                  <button onClick={() => launchApp("display")}><Monitor size={15} /> Change a setting</button>
                  <button onClick={() => { setComputerPath("pictures"); }}><FolderOpen size={15} /> View pictures</button>
                  <button onClick={() => launchApp("resume")}><FileText size={15} /> View resume</button>
                </div>
                <div className="xp-sidebar-box">
                  <div className="xp-sidebar-title">Details</div>
                  <p>Defender XP Portfolio Computer</p>
                  <p>Use this explorer as the evidence archive for projects, competitions, organizations, and career milestones.</p>
                </div>
              </aside>

              <div className="xp-computer-content">
                {computerPath === "root" && (
                  <>
                    <h3 className="xp-explorer-heading">Files Stored on This Computer</h3>
                    <div className="xp-computer-grid">
                      <button onClick={() => setComputerPath("c")}><span className="xp-drive-icon">C:</span><div><b>Local Disk (C:)</b><small>Projects, apps & career files</small></div></button>
                      <button onClick={() => setComputerPath("pictures")}><span className="xp-folder-big">▣</span><div><b>Defender's Pictures</b><small>Education, competitions & recognition, organizations, internships</small></div></button>
                      <button onClick={() => setComputerPath("documents")}><span className="xp-folder-big">▤</span><div><b>Shared Documents</b><small>Resume, profile & technical notes</small></div></button>
                    </div>
                  </>
                )}

                {computerPath === "c" && (
                  <>
                    <h3 className="xp-explorer-heading">C:\Defender</h3>
                    <div className="xp-file-list-large">
                      <button onClick={() => launchApp("projects")}><FolderOpen size={32} /><div><b>Projects</b><small>{projects.length} selected software, web, IoT & AI projects</small></div></button>
                      <button onClick={() => launchApp("experience")}><BriefcaseBusiness size={32} /><div><b>Experience</b><small>Engineering, software, and operations history</small></div></button>
                      <button onClick={() => launchApp("skills")}><Cpu size={32} /><div><b>System Skills</b><small>Web, back-end, AI, IoT & tools</small></div></button>
                      <button onClick={() => launchApp("resume")}><FileText size={32} /><div><b>Defender_Resume.pdf</b><small>Latest CV viewer</small></div></button>
                    </div>
                  </>
                )}

                {computerPath === "pictures" && (
                  <>
                    <h3 className="xp-explorer-heading">Defender's Pictures</h3>
                    <p className="xp-gallery-note">{galleryItems.length} selected photos documenting academic milestones, competitions and recognition, organizations, and professional experiences.</p>
                    <div className="xp-album-grid">
                      <button onClick={() => setComputerPath("education")}><span>🎓</span><b>Education & Milestones</b><small>{galleryItems.filter((x) => x.album === "education").length} photo(s)</small></button>
                      <button onClick={() => setComputerPath("competitions")}><span>🏆</span><b>Competitions</b><small>{galleryItems.filter((x) => x.album === "competitions").length} photo(s)</small></button>
                      <button onClick={() => setComputerPath("organizations")}><span>👥</span><b>Organizations</b><small>{galleryItems.filter((x) => x.album === "organizations").length} photo(s)</small></button>
                      <button onClick={() => setComputerPath("internships")}><span>💼</span><b>Internships</b><small>{galleryItems.filter((x) => x.album === "internships").length} photo(s)</small></button>
                    </div>
                  </>
                )}

                {["education", "competitions", "organizations", "internships"].includes(computerPath) && (
                  <>
                    <h3 className="xp-explorer-heading">{
                      computerPath === "education" ? "Education & Milestones" :
                      computerPath.charAt(0).toUpperCase() + computerPath.slice(1)
                    }</h3>
                    <div className="xp-thumbnail-grid">
                      {galleryItems.filter((item) => item.album === computerPath).map((item) => (
                        <button key={item.id} className="xp-thumb-card" onClick={() => openPhoto(item)}>
                          <div className="xp-thumb-preview">
                            <img src={item.src} alt={item.title} />
                          </div>
                          <b>{item.title}</b>
                          <small>{item.caption}</small>
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {computerPath === "documents" && (
                  <>
                    <h3 className="xp-explorer-heading">Shared Documents</h3>
                    <div className="xp-file-list-large">
                      <button onClick={() => launchApp("resume")}><FileText size={32} /><div><b>Defender_Artha_Widiprasetyo_CV.pdf</b><small>Latest professional resume</small></div></button>
                      <button onClick={() => { openNotepadDocument("PROFILE.txt"); launchApp("notepad"); }}><FileText size={32} /><div><b>PROFILE.txt</b><small>Professional profile summary</small></div></button>
                      <button onClick={() => { openNotepadDocument("SKILLS.txt"); launchApp("notepad"); }}><FileText size={32} /><div><b>TECHNICAL_SKILLS.txt</b><small>Selected technologies and engineering skills</small></div></button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        );

      case "pictureviewer":
        return (
          <div className="xp-page xp-picture-page">
            <div className="xp-picture-stage">
              <img src={selectedPhoto.src} alt={selectedPhoto.title} />
            </div>
            <div className="xp-picture-caption"><strong>{selectedPhoto.title}</strong><span>{selectedPhoto.caption}</span></div>
            <div className="xp-picture-controls">
              <button onClick={() => stepPhoto(-1)}>◀ Previous</button>
              <button onClick={() => { setComputerPath(selectedPhoto.album); launchApp("computer"); }}>Open Folder</button>
              <button onClick={() => stepPhoto(1)}>Next ▶</button>
            </div>
          </div>
        );

      case "display":
        return (
          <div className="xp-page xp-display-page">
            <div className="xp-display-tabs">
              {(["themes", "desktop", "screensaver", "appearance"] as DisplayTab[]).map((tab) => <button key={tab} className={displayTab === tab ? "active" : ""} onClick={() => setDisplayTab(tab)}>{tab === "screensaver" ? "Screen Saver" : tab.charAt(0).toUpperCase() + tab.slice(1)}</button>)}
            </div>
            <div className="xp-display-body">
              <div className={`xp-monitor-preview theme-${theme} wallpaper-${wallpaper}`}>
                <div className="xp-monitor-screen"><div className="xp-mini-window"><div /><span>Defender XP</span></div><div className="xp-mini-taskbar" /></div>
                <div className="xp-monitor-stand" />
              </div>

              {displayTab === "themes" && (
                <div className="xp-display-options"><h3>Theme</h3><p>Select a Windows color scheme for Defender XP.</p><select value={theme} onChange={(e) => { setTheme(e.target.value as ThemeId); playSound("toggle"); }}><option value="blue">Windows XP Blue</option><option value="olive">Windows XP Olive Green</option><option value="silver">Windows XP Silver</option><option value="defender">Defender XP</option></select><div className="xp-theme-swatches"><button className="blue" onClick={() => setTheme("blue")}>Blue</button><button className="olive" onClick={() => setTheme("olive")}>Olive</button><button className="silver" onClick={() => setTheme("silver")}>Silver</button><button className="defender" onClick={() => setTheme("defender")}>Defender</button></div></div>
              )}

              {displayTab === "desktop" && (
                <div className="xp-display-options"><h3>Background</h3><p>Choose a desktop wallpaper. Your selection is saved for your next visit.</p><div className="xp-wallpaper-list"><button className={wallpaper === "bliss" ? "active" : ""} onClick={() => setWallpaper("bliss")}>Bliss</button><button className={wallpaper === "grid" ? "active" : ""} onClick={() => setWallpaper("grid")}>Tech Grid</button><button className={wallpaper === "sunset" ? "active" : ""} onClick={() => setWallpaper("sunset")}>Sunset</button><button className={wallpaper === "midnight" ? "active" : ""} onClick={() => setWallpaper("midnight")}>Midnight</button></div></div>
              )}

              {displayTab === "screensaver" && (
                <div className="xp-display-options"><h3>Screen saver</h3><select defaultValue="defender"><option value="defender">Defender XP</option><option value="none">(None)</option></select><p>Preview the Defender XP screen saver.</p><button className="xp-action xp-action-primary" onClick={() => setScreensaver(true)}>Preview</button></div>
              )}

              {displayTab === "appearance" && (
                <div className="xp-display-options"><h3>Windows and buttons</h3><p>Current scheme: <b>{theme === "blue" ? "Windows XP Blue" : theme === "olive" ? "Windows XP Olive Green" : theme === "silver" ? "Windows XP Silver" : "Defender XP"}</b></p><div className="xp-appearance-sample"><div className="xp-sample-title">Active Window</div><div>Tahoma · compact XP controls · Defender XP</div></div></div>
              )}
            </div>
            <div className="xp-display-footer"><button className="xp-action" onClick={() => { setTheme("blue"); setWallpaper("bliss"); }}>Restore Defaults</button><button className="xp-action xp-action-primary" onClick={() => showNotification("Display Properties", "Display settings applied and saved.")}>Apply</button></div>
          </div>
        );

      case "notepad":
        return (
          <div className="xp-page xp-notepad-page">
            <div className="xp-notepad-toolbar">
              <button onClick={() => openNotepadDocument("PROFILE.txt")}>PROFILE.txt</button>
              <button onClick={() => openNotepadDocument("SKILLS.txt")}>SKILLS.txt</button>
              <button onClick={() => openNotepadDocument("CONTACT.txt")}>CONTACT.txt</button>
              <span />
              <button onClick={() => showNotification("Notepad", `${noteFile} saved in this session.`)}>Save</button>
            </div>
            <div className="xp-notepad-filename">{noteFile} - Notepad</div>
            <textarea value={noteText} onChange={(event) => setNoteText(event.target.value)} spellCheck={false} aria-label="Notepad text editor" />
          </div>
        );

      case "cmd":
        return (
          <div className="xp-page xp-cmd-page" onMouseDown={(event) => event.stopPropagation()}>
            <div className="xp-cmd-output">
              {cmdHistory.map((line, index) => <div key={`${index}-${line}`}>{line || " "}</div>)}
              <div className="xp-cmd-input-row">
                <span>C:\Documents and Settings\Defender&gt;</span>
                <input autoFocus value={cmdInput} onChange={(event) => setCmdInput(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") runCommand(); }} spellCheck={false} />
              </div>
            </div>
          </div>
        );

      case "minesweeper":
        return (
          <div className="xp-page xp-minesweeper-page">
            <div className="xp-mine-shell">
              <div className="xp-mine-status">
                <div className="xp-mine-counter">{String(Math.max(0, MINE_COUNT - mineBoard.filter((cell) => cell.flagged).length)).padStart(3, "0")}</div>
                <button className="xp-mine-face" onClick={resetMines}>{mineStatus === "lost" ? "X_X" : mineStatus === "won" ? "B-)" : ":-)"}</button>
                <div className="xp-mine-counter">{String(mineBoard.filter((cell) => cell.revealed).length).padStart(3, "0")}</div>
              </div>
              <div className="xp-mine-grid" style={{ gridTemplateColumns: `repeat(${MINE_SIZE}, 1fr)` }}>
                {mineBoard.map((cell, index) => (
                  <button
                    key={index}
                    className={`xp-mine-cell ${cell.revealed ? "revealed" : ""} n-${cell.adjacent} ${cell.mine && cell.revealed ? "mine" : ""}`}
                    onClick={() => revealMineCell(index)}
                    onContextMenu={(event) => flagMineCell(event, index)}
                    aria-label={`Minesweeper cell ${index + 1}`}
                  >
                    {cell.revealed ? (cell.mine ? "*" : cell.adjacent || "") : cell.flagged ? "!" : ""}
                  </button>
                ))}
              </div>
              <p className="xp-mine-help">Left click to reveal · Right click to flag · {mineStatus === "lost" ? "Boom. Click the face to restart." : mineStatus === "won" ? "Field cleared!" : "10 mines hidden."}</p>
            </div>
          </div>
        );

      case "recycle":
        return (
          <div className="xp-page xp-recycle-page">
            <div className="xp-toolbar xp-recycle-toolbar">
              <div className="xp-address-bar"><Recycle size={15} /> C:\Recycle Bin</div>
              <button className="xp-toolbar-btn" onClick={() => { setBinEmptied(true); showNotification("Recycle Bin", "The suspiciously generic files have been permanently deleted."); playSound("toggle"); }} disabled={binEmptied}><Recycle size={15} /> Empty Recycle Bin</button>
            </div>
            {!binEmptied ? (
              <div className="xp-bin-list">
                {[
                  ["generic_portfolio_template.zip", "Deleted after discovering personality."],
                  ["orange_clay_theme.css", "The previous portfolio theme. Rest in peace."],
                  ["computer_engineering_student.txt", "Outdated title — upgraded to Graduate."],
                ].map(([name, note]) => <div className="xp-bin-file" key={name}><FileText size={30} /><div><b>{name}</b><span>{note}</span></div></div>)}
                <button className="xp-bin-file xp-bin-secret" onClick={() => { setSecretOpen(true); playSound("secret"); }}><FileText size={30} /><div><b>DO_NOT_OPEN.txt</b><span>Seriously. Definitely nothing interesting here.</span></div></button>
              </div>
            ) : (
              <div className="xp-empty-bin"><Recycle size={58} /><h2>Recycle Bin is empty</h2><button className="xp-action" onClick={() => setBinEmptied(false)}>Undo suspiciously permanent deletion</button></div>
            )}
            {secretOpen && (
              <div className="xp-secret-dialog">
                <div className="xp-secret-title"><Bell size={16} /> Achievement unlocked</div>
                <div className="xp-secret-body"><strong>Certified Curious Recruiter™</strong><p>You checked the Recycle Bin. I respect that. Curiosity is usually how my projects start too.</p><div className="xp-secret-actions"><button className="xp-action xp-action-primary" onClick={() => setSecretOpen(false)}>Nice.</button><button className="xp-action" onClick={() => { setSecretOpen(false); setBsod(true); }}>Open hidden attachment</button></div></div>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div
      className={`xp-shell theme-${theme} wallpaper-${wallpaper}`}
      onMouseDown={() => { if (startOpen) setStartOpen(false); if (contextMenu) setContextMenu(null); }}
      onContextMenu={(e) => {
        e.preventDefault();
        const menuW = 190;
        const menuH = 250;
        setContextMenu({ x: Math.min(e.clientX, window.innerWidth - menuW - 8), y: Math.min(e.clientY, window.innerHeight - menuH - 48) });
      }}
    >
      <style>{styles}</style>

      <div className="xp-sky" />
      <div className="xp-cloud xp-cloud-one" />
      <div className="xp-cloud xp-cloud-two" />
      <div className="xp-hill xp-hill-back" />
      <div className="xp-hill xp-hill-front" />

      <div className="xp-desktop-grid" aria-label="Desktop shortcuts">
        {appList.filter((app) => !["recycle", "notepad", "cmd", "minesweeper", "display", "pictureviewer"].includes(app.id)).map((app) => {
          const Icon = app.icon;
          return (
            <button key={app.id} className="xp-desktop-icon" onDoubleClick={() => launchApp(app.id)} onClick={() => launchApp(app.id)}>
              <span className={`xp-desktop-icon-art app-${app.id}`}><Icon size={30} strokeWidth={1.8} /></span>
              <span>{app.desktopLabel}</span>
            </button>
          );
        })}
      </div>

      <div className="xp-desktop-specials">
        <button className="xp-desktop-icon" onClick={() => launchApp("recycle")} onDoubleClick={() => launchApp("recycle")}><span className="xp-desktop-icon-art app-recycle"><Recycle size={30} /></span><span>Recycle Bin</span></button>
      </div>

      <div className="xp-desktop-note">
        <span>PORTFOLIO.EXE</span>
        <strong>Defender’s Desktop</strong>
        <small>Open an icon or use Start to explore.</small>
      </div>

      <aside className="xp-gallery-widget" aria-label="Career photo highlights" onMouseDown={(e) => e.stopPropagation()}>
        <div className="xp-gallery-widget-head">
          <div><span>MY PICTURES</span><strong>Career Snapshots</strong></div>
          <button title="Open My Pictures" onClick={() => { setComputerPath("pictures"); launchApp("computer"); }}><FolderOpen size={15} /></button>
        </div>
        <div className="xp-gallery-widget-stage">
          <AnimatePresence mode="wait">
            <motion.button
              key={galleryItems[galleryWidgetIndex].id}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: .35 }}
              onClick={() => openPhoto(galleryItems[galleryWidgetIndex])}
              title="Open photo"
            >
              <img src={galleryItems[galleryWidgetIndex].src} alt={galleryItems[galleryWidgetIndex].title} />
            </motion.button>
          </AnimatePresence>
        </div>
        <div className="xp-gallery-widget-copy">
          <strong>{galleryItems[galleryWidgetIndex].title}</strong>
          <span>{galleryItems[galleryWidgetIndex].caption}</span>
        </div>
        <div className="xp-gallery-widget-nav">
          <button aria-label="Previous photo" onClick={() => setGalleryWidgetIndex((galleryWidgetIndex - 1 + galleryItems.length) % galleryItems.length)}>‹</button>
          <div>{galleryItems.map((item, index) => <button key={item.id} aria-label={`Show ${item.title}`} className={index === galleryWidgetIndex ? "active" : ""} onClick={() => setGalleryWidgetIndex(index)} />)}</div>
          <button aria-label="Next photo" onClick={() => setGalleryWidgetIndex((galleryWidgetIndex + 1) % galleryItems.length)}>›</button>
        </div>
      </aside>

      <aside className="xp-music-widget" aria-label="Currently listening" onMouseDown={(e) => e.stopPropagation()}>
        <div className="xp-music-top">
          <div className="xp-music-disc" aria-hidden="true">
            <span>♪</span>
          </div>
          <div className="xp-music-screen">
            <span className="xp-music-label">DEFENDER'S NOW PLAYING</span>
            <strong><span className="xp-song-marquee">Denny Caknan — Negoro Angin</span></strong>
            <div className="xp-winamp-eq" aria-hidden="true">
              {Array.from({ length: 11 }).map((_, index) => (
                <i key={index} style={{ animationDelay: `${index * -0.11}s` }} />
              ))}
            </div>
          </div>
        </div>
        <div className="xp-music-controls">
          <span>MP3</span>
          <span>128 kbps</span>
          <button
            type="button"
            title="Listen to Denny Caknan - Negoro Angin"
            onClick={() => window.open("https://www.youtube.com/results?search_query=Denny+Caknan+Negoro+Angin", "_blank", "noopener,noreferrer")}
          >
            ▶ listen
          </button>
        </div>
      </aside>

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
            onContextMenu={(e) => e.stopPropagation()}
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
            <div className="xp-start-head"><div className="xp-avatar-sm xp-avatar-photo"><img src="/pasfoto.jpg" alt="" /></div><div><strong>Defender Widi</strong><span>Computer Engineering Graduate</span></div></div>
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
                <button onClick={() => launchApp("computer")}><Monitor size={18} /> My Computer</button>
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
                {appList.slice(5).filter((app) => app.id !== "pictureviewer").map((app) => {
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

      <AnimatePresence>
        {contextMenu && (
          <motion.div className="xp-context-menu" style={{ left: contextMenu.x, top: contextMenu.y }} initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .97 }} onMouseDown={(e) => e.stopPropagation()} onContextMenu={(e) => e.preventDefault()}>
            <button onClick={() => { showNotification("Desktop", "Icons are already arranged the Defender way."); setContextMenu(null); }}>Arrange Icons By <ChevronRight size={13} /></button>
            <button onClick={() => { showNotification("Desktop refreshed", "Everything is still exactly where you left it."); setContextMenu(null); }}><RefreshCw size={13} /> Refresh</button>
            <div className="xp-context-sep" />
            <button className="disabled" disabled>Paste</button>
            <div className="xp-context-sep" />
            <button onClick={() => { launchApp("cmd"); setContextMenu(null); }}><Code2 size={13} /> Open Command Prompt</button>
            <button onClick={() => { setScreensaver(true); setContextMenu(null); }}><Monitor size={13} /> Start Screensaver</button>
            <div className="xp-context-sep" />
            <button onClick={() => { launchApp("display"); setContextMenu(null); }}><Monitor size={13} /> Properties</button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {notification && (
          <motion.div className="xp-balloon" initial={{ opacity: 0, y: 12, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: .96 }}>
            <button className="xp-balloon-close" onClick={() => setNotification(null)}><X size={12} /></button>
            <div className="xp-balloon-icon"><Bell size={18} /></div>
            <div><strong>{notification.title}</strong><p>{notification.text}</p></div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {screensaver && (
          <motion.div className="xp-screensaver" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={() => setScreensaver(false)}>
            <div className="xp-screensaver-logo"><span className="xp-windows-mark"><i /><i /><i /><i /></span><div><strong>Defender XP</strong><small>move along. I'm probably coding.</small></div></div>
            <div className="xp-screensaver-hint">Click anywhere or press any key to return</div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {bsod && (
          <motion.div className="xp-bsod" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={() => { setBsod(false); setBooting(true); }}>
            <div className="xp-bsod-copy">
              <div className="xp-bsod-title">Windows</div>
              <p>A problem has been detected and Windows has been shut down to prevent damage to your portfolio.</p>
              <p>PORTFOLIO_TOO_INTERESTING</p>
              <p>If this is the first time you've seen this Stop error screen, congratulations: you found the easter egg.</p>
              <p>Technical information:</p>
              <p>*** STOP: 0x000000DEF (0x57494449, 0x504F5254, 0x464F4C49, 0x4F000000)</p>
              <p className="xp-bsod-restart">Click anywhere, press Enter, or press Esc to reboot Defender XP.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {booting && (
          <motion.div className="xp-boot" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .28 }}>
            <div className="xp-boot-brand">
              <span className="xp-boot-microsoft">Defender</span>
              <div><strong>Windows</strong><em>xp</em></div>
              <small>Professional Portfolio</small>
            </div>
            <div className="xp-boot-loader"><i /><i /><i /></div>
            <div className="xp-boot-footer">Built by Defender · 2026</div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="xp-taskbar" onMouseDown={(e) => e.stopPropagation()} onContextMenu={(e) => e.stopPropagation()}>
        <button className={`xp-start-button ${startOpen ? "active" : ""}`} onClick={() => setStartOpen((v) => !v)}>
          <span className="xp-windows-mark"><i /><i /><i /><i /></span><strong>start</strong>
        </button>
        <div className="xp-task-divider" />
        <div className="xp-quick-launch">
          <button title="Command Prompt" onClick={() => launchApp("cmd")}><Code2 size={17} /></button>
          <button title="Show Desktop" onClick={minimizeAll}><Monitor size={17} /></button>
        </div>
        <div className="xp-task-divider" />
        <div className="xp-task-items">
          {appList.filter((app) => windows[app.id].open).map((app) => {
            const Icon = app.icon;
            const isActive = activeId === app.id && !windows[app.id].minimized;
            return <button key={app.id} className={isActive ? "active" : ""} onClick={() => toggleTaskbarApp(app.id)}><Icon size={15} /> <span>{app.label}</span></button>;
          })}
        </div>
        <div className="xp-tray"><Wifi size={15} /><button className="xp-tray-sound" onClick={toggleSound} title={soundOn ? "Mute" : "Unmute"}>{soundOn ? <Volume2 size={15} /> : <VolumeX size={15} />}</button><span>{clock.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span></div>
      </footer>
    </div>
  );
}

const startDescriptions: Record<AppId, string> = {
  profile: "Professional profile & highlights",
  projects: "Software, IoT, AI & web",
  experience: "Work history",
  skills: "Tools and technologies",
  resume: "CV overview",
  awards: "Honors and competitions",
  writing: "Articles and copywriting",
  contact: "Email and social links",
  recycle: "Deleted portfolio history",
  notepad: "Profile, skills & contact notes",
  cmd: "Interactive command line",
  minesweeper: "Classic Windows XP game",
  computer: "Career files & photo archive",
  pictureviewer: "Photo viewer",
  display: "Themes, wallpaper & saver",
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
  .app-recycle { background:linear-gradient(#f8fbff,#bed5e8); color:#3b698c; border-radius:4px; }
  .app-notepad { background:linear-gradient(#fff,#e9edf2); color:#2456a6; border-radius:3px; }
  .app-cmd { background:linear-gradient(#303030,#050505); color:#f2f2f2; border-radius:3px; }
  .app-minesweeper { background:linear-gradient(#d9d9d9,#9f9f9f); color:#222; border-radius:3px; }

  .xp-desktop-note { position:absolute; z-index:2; right:28px; top:28px; width:270px; color:white; text-shadow:0 2px 4px rgba(0,50,100,.65); text-align:right; pointer-events:none; }
  .xp-desktop-note span { display:block; font-size:10px; letter-spacing:.2em; opacity:.8; }
  .xp-desktop-note strong { display:block; font-size:26px; margin-top:4px; }
  .xp-desktop-note small { display:block; font-size:11px; margin-top:5px; opacity:.9; }


  .xp-gallery-widget { position:absolute; z-index:4; right:26px; top:112px; width:244px; overflow:hidden; color:#222; background:#ece9d8; border:2px solid #0b54db; border-radius:7px 7px 3px 3px; box-shadow:0 7px 18px rgba(0,0,0,.24), inset 0 0 0 1px #5d91ef; user-select:none; }
  .xp-gallery-widget-head { min-height:34px; display:flex; align-items:center; justify-content:space-between; gap:8px; padding:5px 6px 5px 8px; color:white; background:linear-gradient(180deg,#2b7bff 0%,#1260e7 48%,#0951d5 86%,#397cff 100%); text-shadow:1px 1px #0d3680; }
  .xp-gallery-widget-head span { display:block; font-size:7px; font-weight:800; letter-spacing:.13em; opacity:.82; }
  .xp-gallery-widget-head strong { display:block; margin-top:1px; font-size:11px; }
  .xp-gallery-widget-head > button { width:24px; height:23px; display:grid; place-items:center; padding:0; color:white; background:linear-gradient(#5e9bff,#1c63de); border:1px solid white; border-radius:3px; cursor:pointer; }
  .xp-gallery-widget-stage { height:132px; margin:7px 7px 0; overflow:hidden; background:#1c1c1c; border:1px solid #8e8e88; box-shadow:inset 1px 1px 2px rgba(0,0,0,.35); }
  .xp-gallery-widget-stage > button { width:100%; height:100%; display:block; padding:0; border:0; background:#1a1a1a; cursor:pointer; }
  .xp-gallery-widget-stage img { width:100%; height:100%; display:block; object-fit:cover; }
  .xp-gallery-widget-copy { min-height:63px; padding:7px 9px 5px; background:#fff; border-top:1px solid #c9c7bc; }
  .xp-gallery-widget-copy strong { display:block; overflow:hidden; color:#174a8e; font-size:10px; line-height:1.3; white-space:nowrap; text-overflow:ellipsis; }
  .xp-gallery-widget-copy span { display:-webkit-box; margin-top:3px; overflow:hidden; color:#666; font-size:8.5px; line-height:1.35; -webkit-line-clamp:2; -webkit-box-orient:vertical; }
  .xp-gallery-widget-nav { height:29px; display:grid; grid-template-columns:28px 1fr 28px; align-items:center; gap:4px; padding:3px 5px; background:#ece9d8; border-top:1px solid #c7c4b8; }
  .xp-gallery-widget-nav > button { height:21px; padding:0; border:1px solid #8d8d86; background:linear-gradient(#fff,#dfddd3); color:#1b3762; font-size:17px; line-height:17px; cursor:pointer; }
  .xp-gallery-widget-nav > div { display:flex; justify-content:center; gap:3px; overflow:hidden; }
  .xp-gallery-widget-nav > div button { width:5px; height:5px; flex:0 0 5px; padding:0; border:0; border-radius:50%; background:#a9a9a2; cursor:pointer; }
  .xp-gallery-widget-nav > div button.active { background:#1f65c7; box-shadow:0 0 0 1px #fff, 0 0 0 2px #5d83b7; }

  /* Compact Winamp-inspired now-playing widget */
  .xp-music-widget {
    position:absolute;
    z-index:4;
    right:26px;
    top:395px;
    width:244px;
    padding:5px;
    color:#161616;
    background:linear-gradient(#d8d8d8,#999 48%,#c9c9c9 49%,#858585);
    border:2px solid #4c4c4c;
    box-shadow:inset 1px 1px #fff, inset -1px -1px #4b4b4b, 0 5px 14px rgba(0,0,0,.25);
    user-select:none;
  }
  .xp-music-top { display:grid; grid-template-columns:42px 1fr; gap:5px; align-items:stretch; }
  .xp-music-disc {
    width:42px;
    height:42px;
    display:grid;
    place-items:center;
    align-self:center;
    border-radius:50%;
    color:#c9ff7b;
    background:
      radial-gradient(circle at center,#8da742 0 8%,#171717 9% 19%,#3c3c3c 20% 22%,#101010 23% 42%,#3d3d3d 43% 45%,#0b0b0b 46%);
    border:1px solid #1c1c1c;
    box-shadow:inset 0 0 0 2px #777, 0 1px 2px rgba(0,0,0,.5);
    animation:xpDiscSpin 4.8s linear infinite;
  }
  .xp-music-disc span { font-size:12px; transform:rotate(20deg); }
  @keyframes xpDiscSpin { to { transform:rotate(360deg); } }

  .xp-music-screen {
    min-width:0;
    height:49px;
    padding:4px 5px 3px;
    overflow:hidden;
    background:#071108;
    border:2px inset #555;
    color:#a9ee73;
    font-family:"Lucida Console","Courier New",monospace;
    text-shadow:0 0 4px rgba(137,255,88,.25);
  }
  .xp-music-label {
    display:block;
    color:#799b62;
    font-size:6px;
    line-height:1;
    letter-spacing:.08em;
  }
  .xp-music-screen strong {
    display:block;
    margin-top:3px;
    overflow:hidden;
    font-size:8.5px;
    line-height:1.1;
    white-space:nowrap;
  }
  .xp-song-marquee {
    display:inline-block;
    white-space:nowrap;
  }
  .xp-winamp-eq {
    height:18px;
    display:flex;
    align-items:flex-end;
    gap:2px;
    margin-top:2px;
    overflow:hidden;
  }
  .xp-winamp-eq i {
    width:3px;
    height:65%;
    display:block;
    background:linear-gradient(to top,#65c94e 0 48%,#d7dc46 49% 76%,#e7793b 77% 100%);
    transform-origin:bottom;
    animation:xpEqBounce .62s ease-in-out infinite alternate;
  }
  .xp-winamp-eq i:nth-child(2n) { animation-duration:.42s; }
  .xp-winamp-eq i:nth-child(3n) { animation-duration:.78s; }
  .xp-winamp-eq i:nth-child(4n) { animation-duration:.53s; }
  @keyframes xpEqBounce {
    0% { transform:scaleY(.18); opacity:.72; }
    45% { transform:scaleY(.95); opacity:1; }
    100% { transform:scaleY(.4); opacity:.86; }
  }

  @keyframes xpSongMarquee {
  0%, 5% {
    transform: translateX(0);
  }

  95%, 100% {
    transform: translateX(-100%);
  }
}

  .xp-music-controls {
    height:21px;
    display:flex;
    align-items:center;
    gap:5px;
    margin-top:4px;
    padding:0 3px;
    color:#252525;
    background:#b8b8b8;
    border:1px solid #686868;
    box-shadow:inset 1px 1px #e9e9e9;
    font:700 6.5px/1 Tahoma,sans-serif;
    text-transform:uppercase;
  }
  .xp-music-controls span:nth-child(2) { color:#555; }
  .xp-music-controls button {
    margin-left:auto;
    min-height:15px;
    padding:1px 6px;
    color:#1a1a1a;
    background:linear-gradient(#eee,#a9a9a9);
    border:1px solid #555;
    box-shadow:inset 1px 1px #fff;
    font:700 7px Tahoma,sans-serif;
    text-transform:uppercase;
    cursor:pointer;
  }
  .xp-music-controls button:active {
    box-shadow:inset 1px 1px #555;
    background:#aaa;
  }

  .xp-window { position:absolute; min-width:470px; min-height:330px; display:flex; flex-direction:column; background:#ece9d8; border:3px solid #0b54db; border-radius:8px 8px 3px 3px; box-shadow:0 10px 28px rgba(0,0,0,.38), inset 0 0 0 1px #4f8cff; overflow:hidden; }
  .xp-window-max { inset:0 0 40px 0 !important; width:auto !important; height:auto !important; border-radius:0; }
  .xp-titlebar { height:34px; flex:0 0 34px; display:flex; align-items:center; justify-content:space-between; padding:3px 5px 3px 6px; color:white; background:linear-gradient(180deg,#2b7bff 0%,#1260e7 45%,#0951d5 85%,#397cff 100%); box-shadow:inset 0 1px 0 #70a8ff, inset 0 -1px 0 #0a42b5; cursor:move; touch-action:none; }
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
  .xp-avatar-xl { width:82px; height:82px; display:grid; place-items:center; flex:0 0 82px; border-radius:9px; background:linear-gradient(145deg,#ffbf59,#ef691d); color:white; font-size:27px; font-weight:900; border:3px solid white; outline:1px solid #d2a15c; box-shadow:0 3px 8px rgba(0,0,0,.15); overflow:hidden; }
  .xp-avatar-photo img { width:100%; height:100%; object-fit:cover; object-position:center 24%; display:block; }
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
  .xp-job-actions { display:flex; flex-wrap:wrap; gap:6px; margin-top:9px; }
  .xp-job-actions .xp-action { min-height:25px; padding:4px 8px; font-size:9.5px; }

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
  .xp-avatar-sm { width:46px; height:46px; display:grid; place-items:center; border:2px solid #fff; border-radius:5px; background:linear-gradient(#ffb14d,#e75c1b); font-weight:900; overflow:hidden; }
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
  .xp-tray-sound, .xp-quick-launch button { border:0; background:transparent; color:white; padding:0; display:grid; place-items:center; cursor:pointer; }
  .xp-tray-sound:hover, .xp-quick-launch button:hover { filter:brightness(1.22); }
  .xp-quick-launch { display:flex; align-items:center; gap:3px; padding:0 5px; }
  .xp-quick-launch button { width:25px; height:30px; border:1px solid transparent; }
  .xp-quick-launch button:hover { border-color:rgba(255,255,255,.25); background:rgba(255,255,255,.08); }

  .xp-desktop-specials { position:absolute; z-index:3; right:17px; bottom:56px; display:grid; grid-template-columns:86px; gap:8px; }

  .xp-context-menu { position:fixed; z-index:20000; width:188px; padding:3px; background:#fff; border:1px solid #777; box-shadow:2px 2px 7px rgba(0,0,0,.32); font-size:11px; }
  .xp-context-menu button { width:100%; min-height:24px; display:flex; align-items:center; justify-content:flex-start; gap:7px; padding:3px 8px; border:0; background:#fff; text-align:left; cursor:pointer; }
  .xp-context-menu button svg:last-child { margin-left:auto; }
  .xp-context-menu button:hover:not(:disabled) { color:#fff; background:#316ac5; }
  .xp-context-menu button.disabled { color:#aaa; cursor:default; }
  .xp-context-sep { height:1px; margin:3px 2px; background:#d7d7d7; }

  .xp-balloon { position:absolute; z-index:15000; right:10px; bottom:48px; width:285px; min-height:76px; display:grid; grid-template-columns:34px 1fr; gap:8px; padding:12px 26px 11px 10px; color:#333; background:linear-gradient(#fffff5,#fff7bd); border:1px solid #6c8bb9; border-radius:7px; box-shadow:0 3px 10px rgba(0,0,0,.25); }
  .xp-balloon::after { content:""; position:absolute; right:25px; bottom:-10px; border-width:10px 9px 0; border-style:solid; border-color:#6c8bb9 transparent transparent; }
  .xp-balloon-icon { width:29px; height:29px; display:grid; place-items:center; color:white; background:#2f73c9; border-radius:50%; }
  .xp-balloon strong { color:#173f78; font-size:11px; }
  .xp-balloon p { margin:4px 0 0; color:#4b4b4b; font-size:10px; line-height:1.45; }
  .xp-balloon-close { position:absolute; right:5px; top:5px; width:17px; height:17px; display:grid; place-items:center; padding:0; border:1px solid #aaa; background:#f6f2dd; cursor:pointer; }


  .xp-recycle-page { position:relative; }
  .xp-recycle-toolbar { grid-template-columns:1fr auto; margin-bottom:15px; }
  .xp-recycle-toolbar .xp-toolbar-btn:disabled { opacity:.5; cursor:default; }
  .xp-bin-list { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:9px; }
  .xp-bin-file { min-height:76px; display:flex; align-items:center; gap:11px; padding:10px; color:#444; background:#fff; border:1px solid #ccc; text-align:left; }
  button.xp-bin-file { width:100%; font-family:inherit; cursor:pointer; }
  .xp-bin-file svg { color:#587ba8; flex:0 0 auto; }
  .xp-bin-file b { display:block; color:#1f4f8b; font-size:10px; }
  .xp-bin-file span { display:block; margin-top:4px; color:#777; font-size:9px; line-height:1.35; }
  .xp-bin-secret { border-style:dashed; background:#fffef0; }
  .xp-empty-bin { min-height:310px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; color:#6a6a6a; }
  .xp-empty-bin h2 { margin:0; color:#4b4b4b; font-size:16px; }
  .xp-secret-dialog { position:absolute; z-index:5; left:50%; top:50%; width:min(360px,calc(100% - 30px)); transform:translate(-50%,-50%); background:#ece9d8; border:2px solid #0b54db; box-shadow:0 9px 25px rgba(0,0,0,.35); }
  .xp-secret-title { height:28px; display:flex; align-items:center; gap:6px; padding:0 7px; color:white; background:linear-gradient(#2b7bff,#0951d5); font-size:11px; font-weight:700; }
  .xp-secret-body { padding:18px; text-align:center; }
  .xp-secret-body strong { color:#174d92; font-size:15px; }
  .xp-secret-body p { color:#555; font-size:10px; line-height:1.5; }
  .xp-secret-actions { display:flex; flex-wrap:wrap; justify-content:center; gap:7px; margin-top:12px; }

  .xp-notepad-page { height:100%; padding:0; display:flex; flex-direction:column; background:#fff; }
  .xp-notepad-toolbar { min-height:34px; display:flex; align-items:center; gap:5px; padding:4px 6px; background:#ece9d8; border-bottom:1px solid #aaa69a; }
  .xp-notepad-toolbar span { flex:1; }
  .xp-notepad-toolbar button { min-height:24px; padding:2px 7px; border:1px solid #aaa69a; background:linear-gradient(#fff,#e5e2d7); font-size:10px; cursor:pointer; }
  .xp-notepad-toolbar button:hover { background:#fff8d9; }
  .xp-notepad-filename { padding:4px 7px; color:#666; background:#f7f7f7; border-bottom:1px solid #ddd; font-size:9px; }
  .xp-notepad-page textarea { flex:1; width:100%; min-height:0; resize:none; padding:8px; border:0; outline:0; color:#111; background:#fff; font:13px/1.48 "Lucida Console","Courier New",monospace; user-select:text; white-space:pre-wrap; }

  .xp-cmd-page { height:100%; padding:0; background:#000; }
  .xp-cmd-output { height:100%; overflow:auto; padding:8px 9px 14px; color:#ddd; background:#000; font:12px/1.35 "Lucida Console","Courier New",monospace; user-select:text; }
  .xp-cmd-output > div { min-height:16px; white-space:pre-wrap; word-break:break-word; }
  .xp-cmd-input-row { display:flex; align-items:center; }
  .xp-cmd-input-row span { flex:0 0 auto; white-space:nowrap; }
  .xp-cmd-input-row input { min-width:0; flex:1; margin-left:4px; padding:0; color:#fff; background:transparent; border:0; outline:0; caret-color:#fff; font:inherit; }

  .xp-minesweeper-page { height:100%; display:grid; place-items:center; background:#c0c0c0; }
  .xp-mine-shell { width:min(360px,100%); padding:10px; background:#c0c0c0; border-top:3px solid #fff; border-left:3px solid #fff; border-right:3px solid #777; border-bottom:3px solid #777; }
  .xp-mine-status { height:58px; display:flex; align-items:center; justify-content:space-between; padding:7px; margin-bottom:9px; border-top:3px solid #777; border-left:3px solid #777; border-right:3px solid #fff; border-bottom:3px solid #fff; }
  .xp-mine-counter { min-width:70px; padding:4px 7px; color:#f33; background:#140000; border:2px inset #777; text-align:center; font:700 27px/1 "Courier New",monospace; letter-spacing:2px; }
  .xp-mine-face { width:42px; height:42px; padding:0; background:#c0c0c0; border-top:3px solid #fff; border-left:3px solid #fff; border-right:3px solid #777; border-bottom:3px solid #777; font:700 10px Tahoma,sans-serif; cursor:pointer; }
  .xp-mine-face:active { border-top-color:#777; border-left-color:#777; border-right-color:#fff; border-bottom-color:#fff; }
  .xp-mine-grid { display:grid; border-top:3px solid #777; border-left:3px solid #777; border-right:3px solid #fff; border-bottom:3px solid #fff; }
  .xp-mine-cell { aspect-ratio:1; min-width:0; padding:0; background:#c0c0c0; border-top:3px solid #fff; border-left:3px solid #fff; border-right:3px solid #777; border-bottom:3px solid #777; font:900 18px/1 Arial,sans-serif; cursor:default; }
  .xp-mine-cell.revealed { border:1px solid #888; background:#c7c7c7; }
  .xp-mine-cell.mine { color:#000; background:#f35; }
  .xp-mine-cell.n-1 { color:#0000d8; } .xp-mine-cell.n-2 { color:#087c08; } .xp-mine-cell.n-3 { color:#d00000; } .xp-mine-cell.n-4 { color:#000080; } .xp-mine-cell.n-5 { color:#800000; } .xp-mine-cell.n-6 { color:#008080; } .xp-mine-cell.n-7 { color:#000; } .xp-mine-cell.n-8 { color:#777; }
  .xp-mine-help { margin:8px 0 0; color:#555; font-size:9px; text-align:center; }

  .xp-screensaver { position:fixed; z-index:55000; inset:0; overflow:hidden; background:#050505; cursor:none; }
  .xp-screensaver-logo { position:absolute; left:10%; top:18%; display:flex; align-items:center; gap:12px; padding:12px 18px; color:white; border:1px solid #1c5ea2; background:linear-gradient(135deg,#07356c,#071326); box-shadow:0 0 30px rgba(35,139,255,.3); animation:xpSaverMove 11s linear infinite alternate; }
  .xp-screensaver-logo .xp-windows-mark { width:38px; height:38px; }
  .xp-screensaver-logo strong { display:block; font:italic 700 25px Tahoma,sans-serif; }
  .xp-screensaver-logo small { display:block; margin-top:2px; color:#9bc7f7; font-size:9px; }
  .xp-screensaver-hint { position:absolute; left:0; right:0; bottom:18px; color:#555; font-size:9px; text-align:center; }
  @keyframes xpSaverMove { 0% { left:6%; top:12%; transform:rotate(-1deg); } 25% { left:58%; top:18%; transform:rotate(1deg); } 50% { left:34%; top:68%; transform:rotate(-1deg); } 75% { left:72%; top:54%; transform:rotate(1deg); } 100% { left:12%; top:72%; transform:rotate(0deg); } }

  .xp-bsod { position:fixed; z-index:60000; inset:0; display:flex; align-items:flex-start; justify-content:center; padding:9vh 8vw; color:#fff; background:#0000aa; font:18px/1.42 "Lucida Console","Courier New",monospace; cursor:pointer; }
  .xp-bsod-copy { width:min(1000px,100%); }
  .xp-bsod-title { display:table; margin:0 auto 28px; padding:2px 9px; color:#0000aa; background:#fff; }
  .xp-bsod p { margin:0 0 20px; }
  .xp-bsod-restart { margin-top:40px !important; text-align:center; }

  .xp-boot { position:fixed; z-index:65000; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#fff; background:#050505; }
  .xp-boot-brand { width:310px; transform:translateY(-24px); }
  .xp-boot-microsoft { display:block; margin-left:4px; color:#bbb; font-size:12px; letter-spacing:.12em; text-transform:uppercase; }
  .xp-boot-brand > div { display:flex; align-items:flex-start; gap:5px; }
  .xp-boot-brand strong { font:500 48px/1 Arial,sans-serif; letter-spacing:-3px; }
  .xp-boot-brand em { color:#f17228; font:italic 700 27px/1 Arial,sans-serif; }
  .xp-boot-brand small { display:block; margin:4px 0 0 128px; color:#a7a7a7; font-size:9px; letter-spacing:.09em; text-transform:uppercase; }
  .xp-boot-loader { position:relative; width:154px; height:14px; margin-top:24px; overflow:hidden; border:2px solid #888; border-radius:3px; background:#111; }
  .xp-boot-loader i { position:absolute; top:2px; width:18px; height:6px; background:linear-gradient(#5ca4ff,#1e55c7); animation:xpBootLoad 1s linear infinite; }
  .xp-boot-loader i:nth-child(1) { left:-20px; } .xp-boot-loader i:nth-child(2) { left:-20px; animation-delay:.18s; } .xp-boot-loader i:nth-child(3) { left:-20px; animation-delay:.36s; }
  @keyframes xpBootLoad { from { transform:translateX(0); } to { transform:translateX(190px); } }
  .xp-boot-footer { position:absolute; bottom:24px; color:#777; font-size:9px; }


  /* === Defender XP: My Computer, Gallery & Display Properties === */
  .app-computer { background:linear-gradient(145deg,#e7f2ff,#7aa8e8); color:#164d9b; border-radius:5px; }
  .app-pictureviewer { background:linear-gradient(145deg,#fff,#bdd8ff); color:#205ca9; border-radius:4px; }
  .app-display { background:linear-gradient(145deg,#c9d6e8,#5c789d); border-radius:5px; }

  .xp-explorer-toolbar { display:grid; grid-template-columns:auto minmax(220px,1fr) auto; gap:7px; align-items:center; margin:-18px -18px 14px; padding:6px 8px; background:#f5f2e9; border-bottom:1px solid #bcb8aa; }
  .xp-computer-layout { display:grid; grid-template-columns:185px minmax(0,1fr); gap:14px; align-items:start; }
  .xp-computer-sidebar { display:grid; }
  .xp-computer-content { min-width:0; }
  .xp-explorer-heading { margin:0 0 12px; color:#174a92; font-size:15px; font-weight:800; border-bottom:1px solid #d4ddec; padding-bottom:6px; }
  .xp-computer-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:10px; }
  .xp-computer-grid > button, .xp-file-list-large > button { display:flex; align-items:center; gap:12px; padding:12px; text-align:left; border:1px solid transparent; background:transparent; cursor:pointer; }
  .xp-computer-grid > button:hover, .xp-file-list-large > button:hover { background:#e6efff; border-color:#9eb9df; }
  .xp-computer-grid b, .xp-file-list-large b { display:block; color:#214e8e; font-size:12px; }
  .xp-computer-grid small, .xp-file-list-large small { display:block; margin-top:3px; color:#666; font-size:9.5px; line-height:1.4; }
  .xp-drive-icon, .xp-folder-big { width:54px; height:45px; display:grid; place-items:center; flex:0 0 54px; font-weight:900; }
  .xp-drive-icon { color:#fff; background:linear-gradient(#a8c6e8,#416b9e); border:2px solid #dcecff; box-shadow:0 2px 5px rgba(0,0,0,.2); }
  .xp-folder-big { color:#8c6500; background:linear-gradient(#ffe275,#e9b41e); border:1px solid #c99614; font-size:25px; }
  .xp-file-list-large { display:grid; gap:4px; }
  .xp-file-list-large svg { color:#2b67ad; flex:0 0 auto; }
  .xp-gallery-note { margin:-3px 0 13px; padding:8px 10px; color:#5e5a32; background:#ffffdf; border:1px solid #ddd18a; font-size:10px; line-height:1.45; }
  .xp-album-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:10px; }
  .xp-album-grid button { min-height:110px; display:flex; flex-direction:column; align-items:flex-start; justify-content:center; padding:12px; border:1px solid #c9d4e2; background:linear-gradient(#fff,#f2f7ff); text-align:left; cursor:pointer; }
  .xp-album-grid button:hover { border-color:#799dce; background:#eaf3ff; }
  .xp-album-grid span { font-size:29px; }
  .xp-album-grid b { margin-top:7px; color:#1c4e91; font-size:11px; }
  .xp-album-grid small { margin-top:3px; color:#777; font-size:9px; }
  .xp-thumbnail-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:12px; }
  .xp-thumb-card { min-width:0; padding:7px; border:1px solid transparent; background:white; text-align:left; cursor:pointer; }
  .xp-thumb-card:hover { background:#e8f1ff; border-color:#88a8d6; }
  .xp-thumb-preview { height:125px; display:grid; place-items:center; background:#eee; border:1px solid #bbb; overflow:hidden; }
  .xp-thumb-preview img { width:100%; height:100%; object-fit:cover; }
  .xp-thumb-card b { display:block; margin-top:7px; color:#1e4d8b; font-size:10.5px; }
  .xp-thumb-card small { display:block; margin-top:3px; color:#666; font-size:8.8px; line-height:1.35; }
  .xp-thumb-card code { display:block; margin-top:5px; padding:3px; overflow:hidden; color:#795d18; background:#fffbdc; font-size:7.5px; text-overflow:ellipsis; white-space:nowrap; }

  .xp-picture-page { display:flex; flex-direction:column; gap:8px; padding:10px; background:#d8d8d8; }
  .xp-picture-stage { flex:1; min-height:280px; display:grid; place-items:center; overflow:hidden; background:#151515; border:1px inset #777; }
  .xp-picture-stage > img { max-width:100%; max-height:100%; object-fit:contain; }
  .xp-picture-missing svg { color:#80aef0; }
  .xp-picture-caption { display:flex; justify-content:space-between; gap:10px; padding:7px 9px; background:#f7f7f7; border:1px solid #bbb; }
  .xp-picture-caption strong { color:#1e4e8d; font-size:11px; }
  .xp-picture-caption span { color:#666; font-size:9px; text-align:right; }
  .xp-picture-controls { display:flex; justify-content:center; gap:6px; }
  .xp-picture-controls button { padding:5px 11px; border:1px solid #8c8c84; background:linear-gradient(#fff,#e7e5db); font-size:10px; cursor:pointer; }

  .xp-display-page { padding:12px; background:#ece9d8; }
  .xp-display-tabs { display:flex; align-items:flex-end; gap:2px; padding-left:5px; border-bottom:1px solid #777; }
  .xp-display-tabs button { position:relative; top:1px; padding:5px 10px; border:1px solid #999; border-bottom:0; background:#ddd9c9; border-radius:4px 4px 0 0; font-size:10px; cursor:pointer; }
  .xp-display-tabs button.active { z-index:2; background:#ece9d8; font-weight:700; padding-top:7px; }
  .xp-display-body { min-height:360px; display:grid; grid-template-columns:245px minmax(0,1fr); gap:18px; padding:18px 14px; border:1px solid #999; border-top:0; background:#ece9d8; }
  .xp-monitor-preview { align-self:start; padding:16px 16px 6px; background:#c6c6bd; border:1px solid #888; box-shadow:inset 2px 2px #fff, inset -2px -2px #777; }
  .xp-monitor-screen { height:150px; position:relative; overflow:hidden; background:linear-gradient(#1686e7,#7bc8ff 62%,#4dba2d 63%); border:5px solid #333; }
  .xp-mini-window { position:absolute; left:30px; top:25px; width:125px; height:78px; background:#fff; border:2px solid #0c55cf; }
  .xp-mini-window > div { height:15px; background:#1c65d9; }
  .xp-mini-window span { display:block; padding:8px; color:#17457e; font-size:8px; }
  .xp-mini-taskbar { position:absolute; left:0; right:0; bottom:0; height:13px; background:#1e64c7; }
  .xp-monitor-stand { width:70px; height:14px; margin:6px auto 0; background:#999; border:1px solid #777; }
  .xp-display-options h3 { margin:4px 0 5px; color:#174a8d; font-size:14px; }
  .xp-display-options p { color:#555; font-size:10px; line-height:1.5; }
  .xp-display-options select { min-width:230px; padding:4px; font-size:10px; }
  .xp-theme-swatches { display:grid; grid-template-columns:repeat(2,1fr); gap:7px; margin-top:12px; }
  .xp-theme-swatches button { min-height:54px; color:white; border:2px solid white; outline:1px solid #888; font-size:10px; font-weight:800; cursor:pointer; text-shadow:1px 1px rgba(0,0,0,.5); }
  .xp-theme-swatches .blue { background:linear-gradient(135deg,#2b7bff,#0951d5); } .xp-theme-swatches .olive { background:linear-gradient(135deg,#8a9a4e,#51662b); } .xp-theme-swatches .silver { background:linear-gradient(135deg,#cdd2df,#7e879b); } .xp-theme-swatches .defender { background:linear-gradient(135deg,#23295c,#673e99); }
  .xp-wallpaper-list { display:grid; grid-template-columns:repeat(2,1fr); gap:8px; }
  .xp-wallpaper-list button { min-height:64px; border:2px solid #fff; outline:1px solid #999; color:white; font-size:10px; font-weight:800; text-shadow:1px 1px #333; cursor:pointer; }
  .xp-wallpaper-list button:nth-child(1) { background:linear-gradient(#1686e7 0 55%,#50ad28 56%); } .xp-wallpaper-list button:nth-child(2) { background:repeating-linear-gradient(0deg,#11243f,#11243f 12px,#193050 12px,#193050 13px); } .xp-wallpaper-list button:nth-child(3) { background:linear-gradient(#f2965b,#ffd089 55%,#734c42 56%); } .xp-wallpaper-list button:nth-child(4) { background:linear-gradient(#030819,#102b54); }
  .xp-wallpaper-list button.active { outline:3px solid #2f6fcb; }
  .xp-appearance-sample { margin-top:14px; border:1px solid #777; background:#fff; font-size:10px; }
  .xp-sample-title { padding:5px; color:#fff; background:#1b65d7; font-weight:700; }
  .xp-appearance-sample > div:last-child { padding:12px; }
  .xp-display-footer { display:flex; justify-content:flex-end; gap:6px; margin-top:10px; }


  /* Persisted XP themes */
  .theme-olive .xp-titlebar, .theme-olive .xp-gallery-widget-head { background:linear-gradient(180deg,#9aaa54,#6f8138 48%,#4f642c 88%,#8d9f4e); box-shadow:inset 0 1px 0 #c4cf8b, inset 0 -1px 0 #405022; }
  .theme-olive .xp-window { border-color:#647630; box-shadow:0 10px 28px rgba(0,0,0,.38), inset 0 0 0 1px #91a653; }
  .theme-olive .xp-taskbar { background:linear-gradient(#82994c,#657d36 47%,#4b6229 53%,#6e873d); border-top-color:#aebc74; }
  .theme-olive .xp-start-head, .theme-olive .xp-start-footer { background:linear-gradient(#8ca34e,#5f762f); }
  .theme-olive .xp-tray { background:linear-gradient(#90a95e,#69833d); }

  .theme-silver .xp-titlebar, .theme-silver .xp-gallery-widget-head { color:#1f2634; text-shadow:none; background:linear-gradient(#e1e5ee,#b9c0cf 48%,#939dac 85%,#cfd5df); box-shadow:inset 0 1px #fff, inset 0 -1px #747d89; }
  .theme-silver .xp-window { border-color:#8d96a6; box-shadow:0 10px 28px rgba(0,0,0,.38), inset 0 0 0 1px #ccd2dd; }
  .theme-silver .xp-window-controls button { background:linear-gradient(#d6dbe4,#8995a7); }
  .theme-silver .xp-taskbar { background:linear-gradient(#d5d8df,#abb2c0 47%,#878f9e 53%,#b5bbc6); border-top-color:#f1f3f7; }
  .theme-silver .xp-start-head, .theme-silver .xp-start-footer { background:linear-gradient(#cdd2dc,#919aa9); }
  .theme-silver .xp-tray { background:linear-gradient(#bac1cd,#929ba8); }

  .theme-defender .xp-titlebar, .theme-defender .xp-gallery-widget-head { background:linear-gradient(180deg,#4b5ab9,#323d92 45%,#211f67 84%,#5a3e99); box-shadow:inset 0 1px #8793e6, inset 0 -1px #16154d; }
  .theme-defender .xp-window { border-color:#2a2b7c; box-shadow:0 10px 28px rgba(0,0,0,.42), inset 0 0 0 1px #6357b7; }
  .theme-defender .xp-taskbar { background:linear-gradient(#4757b4,#35449a 45%,#242a71 53%,#4a378c); border-top-color:#7785d9; }
  .theme-defender .xp-start-head, .theme-defender .xp-start-footer { background:linear-gradient(#5a6cc8,#333b8d); }
  .theme-defender .xp-tray { background:linear-gradient(#5a58b5,#3e3a8d); }

  /* Desktop wallpapers */
  .wallpaper-grid .xp-sky { background-color:#10253f; background-image:linear-gradient(rgba(72,140,205,.13) 1px,transparent 1px),linear-gradient(90deg,rgba(72,140,205,.13) 1px,transparent 1px),radial-gradient(circle at 70% 35%,rgba(43,141,242,.28),transparent 35%); background-size:28px 28px,28px 28px,100% 100%; }
  .wallpaper-grid .xp-cloud, .wallpaper-grid .xp-hill { display:none; }
  .wallpaper-sunset .xp-sky { background:linear-gradient(#d75a4c 0%,#f3a45d 45%,#ffd39a 72%); }
  .wallpaper-sunset .xp-cloud { opacity:.25; }
  .wallpaper-sunset .xp-hill-back { background:linear-gradient(130deg,#78594d,#4f403e 58%,#373236); }
  .wallpaper-sunset .xp-hill-front { background:linear-gradient(145deg,#8a6b4d,#58433b 60%,#362e32); }
  .wallpaper-midnight .xp-sky { background:radial-gradient(circle at 72% 22%,#244e7b,#071329 48%,#020612); }
  .wallpaper-midnight .xp-cloud { display:none; }
  .wallpaper-midnight .xp-hill-back { background:linear-gradient(130deg,#1b3a39,#0a2428 65%,#07181f); opacity:.8; }
  .wallpaper-midnight .xp-hill-front { background:linear-gradient(145deg,#214c43,#0c2b2c 60%,#06181d); }


  @media (prefers-reduced-motion: reduce) {
    .xp-song-marquee { animation:none !important; padding-left:0 !important; }
  }

  @media (max-width: 1120px) {
    .xp-gallery-widget { right:10px; top:96px; width:196px; }
    .xp-gallery-widget-stage { height:104px; }
    .xp-gallery-widget-copy { min-height:44px; padding:6px 7px 5px; }
    .xp-gallery-widget-copy strong { font-size:9px; }
    .xp-gallery-widget-copy span { font-size:7.8px; -webkit-line-clamp:1; }
    .xp-music-widget { right:10px; top:326px; width:196px; }
    .xp-music-screen strong { font-size:7.7px; }
  }

  @media (max-width: 820px) {
    .xp-desktop-note { display:none; }
    .xp-gallery-widget { right:6px; top:96px; width:154px; border-width:1px; }
    .xp-gallery-widget-head { min-height:28px; padding:4px 5px; }
    .xp-gallery-widget-head span { display:none; }
    .xp-gallery-widget-head strong { font-size:9px; margin:0; }
    .xp-gallery-widget-head > button { width:21px; height:20px; }
    .xp-gallery-widget-stage { height:82px; margin:5px 5px 0; }
    .xp-gallery-widget-copy { min-height:32px; padding:5px 6px; }
    .xp-gallery-widget-copy strong { font-size:8px; line-height:1.25; white-space:normal; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; }
    .xp-gallery-widget-copy span { display:none; }
    .xp-gallery-widget-nav { height:24px; grid-template-columns:24px 1fr 24px; padding:2px 4px; }
    .xp-gallery-widget-nav > button { height:18px; font-size:14px; }
    .xp-gallery-widget-nav > div button { width:4px; height:4px; flex-basis:4px; }
    .xp-music-widget { right:6px; top:284px; width:154px; padding:4px; border-width:1px; }
    .xp-music-top { grid-template-columns:32px 1fr; gap:4px; }
    .xp-music-disc { width:32px; height:32px; }
    .xp-music-screen { height:39px; padding:3px 4px; }
    .xp-music-label { display:none; }
    .xp-music-screen strong { margin-top:0; font-size:7px; overflow:hidden; }
    .xp-song-marquee {
      padding-left:10%;
      animation:xpSongMarquee 12s linear infinite;
    }
    .xp-winamp-eq { height:19px; gap:1px; margin-top:2px; }
    .xp-winamp-eq i { width:2px; }
    .xp-music-controls { height:18px; gap:3px; margin-top:3px; font-size:5.5px; }
    .xp-music-controls span:nth-child(2) { display:none; }
    .xp-music-controls button { min-height:13px; padding:0 4px; font-size:5.8px; }
    .xp-desktop-grid { left:10px; top:10px; grid-template-rows:repeat(4,80px); grid-auto-columns:78px; gap:5px; }
    .xp-desktop-icon { width:74px; min-height:73px; }
    .xp-desktop-icon-art { width:39px; height:39px; }
    .xp-desktop-icon > span:last-child { font-size:10px; line-height:12px; }
    /* Mobile windowed mode: leave visible desktop space so the window can be dragged. */
    .xp-window:not(.xp-window-max) {
      left:14px !important;
      right:auto !important;
      top:48px !important;
      bottom:auto !important;
      width:calc(100vw - 42px) !important;
      height:calc(100vh - 126px) !important;
      min-width:0;
      min-height:0;
      border-radius:6px;
    }

    /* Mobile maximized mode: genuinely fill the desktop above the taskbar. */
    .xp-window.xp-window-max {
      left:0 !important;
      right:0 !important;
      top:0 !important;
      bottom:40px !important;
      width:auto !important;
      height:auto !important;
      min-width:0;
      min-height:0;
      border-radius:0;
      transform:none !important;
    }
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
    .xp-quick-launch { display:none; }
    .xp-desktop-specials { right:6px; bottom:50px; grid-template-columns:72px; }
    .xp-bin-list { grid-template-columns:1fr; }
    .xp-balloon { right:6px; width:min(285px,calc(100vw - 12px)); }
    .xp-bsod { padding:7vh 5vw; font-size:12px; }
    .xp-bsod p { margin-bottom:13px; }
    .xp-boot-brand { width:260px; transform:translateY(-20px) scale(.9); }
    .xp-minesweeper-page { padding:8px; }
    .xp-mine-shell { width:min(330px,100%); }
    .xp-notepad-page textarea, .xp-cmd-output { font-size:11px; }
    .xp-computer-layout { grid-template-columns:1fr; }
    .xp-computer-sidebar { display:none; }
    .xp-computer-grid, .xp-album-grid, .xp-thumbnail-grid { grid-template-columns:1fr 1fr; }
    .xp-explorer-toolbar { grid-template-columns:auto 1fr; margin:-11px -11px 12px; }
    .xp-explorer-toolbar > button:last-child { display:none; }
    .xp-display-body { grid-template-columns:1fr; }
    .xp-monitor-preview { display:none; }
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
    .xp-computer-grid, .xp-album-grid, .xp-thumbnail-grid { grid-template-columns:1fr; }
    .xp-display-tabs { overflow-x:auto; }
    .xp-display-tabs button { white-space:nowrap; }
    .xp-picture-caption { flex-direction:column; }
    .xp-picture-caption span { text-align:left; }
  }
`;

export default PortfolioXP;
