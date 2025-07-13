export interface PortfolioItem {
  title: string;
  desc: string;
  tag: string;
  image: string;
  github?: string; // optional
  link?: string;   // optional
}

export const categories = ["IT Developer", "Copywriter", "Business"] as const;
export type Category = typeof categories[number]; // 'IT Developer' | 'Copywriter' | 'Business'

export const portfolioData: Record<Category, PortfolioItem[]> = {
  "IT Developer": [
    {
      title: "Dashboard Kominfo",
      desc: "Executive data dashboard for Kabupaten Semarang",
      tag: "Remix + React + Tailwind",
      image: "/kominfo-dashboard.png",
      github: "https://github.com/DefenderWidi/dashboardkominfo.git",
    },
    {
      title: "BeMySample App",
      desc: "Survey participation mobile app using Flutter",
      tag: "Flutter",
      image: "/bemysample-app.png",
      github: "github.com/BeMySample",
    },
    {
      title: "SoulTalk",
      desc: "Mental health support platform",
      tag: "React + Tailwind",
      image: "/soultalk.png",
      link: "https://soultalk-snowy.vercel.app/",
    },
    {
      title: "Dsternet Landing Page",
      desc: "Landing page for Dsternet Internet Cafe",
      tag: "React + Tailwind",
      image: "/dsternet.png",
      link: "https://dsternet.vercel.app/",
    },
    {
      title: "Classpace",
      desc: "Online learning platform for students and lecturers",
      tag: "PostgreSQL + Express + React + Tailwind",
      image: "/classpace.png",
      github: "https://github.com/Eeja07/course-webapp-project.git",
    },
    {
      title: "PalmCheck Website",
      desc: "A smart portable palm oil analyzer that visualizes real-time detection results via an interactive dashboard",
      tag: "React + Tailwind + Express + Flask",
      image: "/palmcheck.png",
      github: "https://github.com/DefenderWidi/palmcheck.git",
    },
     {
      title: "LokerLand",
      desc: "Job vacancy platform for students and fresh graduates (first front-end project)",
      tag: "React + Tailwind",
      image: "/lokerland.png",
      link: "https://defender.reactjssanbercode.my.id/",
    },
  ],

  Copywriter: [
    {
      title: "IDN Times",
      desc: "125+ articles on tech and automotive topics",
      tag: "Content Writing",
      image: "/idntimes.png",
      link: "https://www.idntimes.com/author/defender-artha-widiprasetyo-7bjpm",
    },
    {
      title: "Mojok.co",
      desc: "Automotive articles",
      tag: "Content Writing",
      image: "/mojok.png",
      link: "https://mojok.co/author/defender-artha-widiprasetyo/",
    },
     {
      title: "Computer Engineering-ITS News Platform",
      desc: "Articles and creative writing on Computer Engineering-ITS official news platform",
      tag: "Content Writing + Copywriting",
      image: "/copywriter.png",
      link: "https://www.its.ac.id/komputer/id/kuliahtamu-virtualisasi/",
    },
  ],

  Business: [
    {
      title: "Green Tape Business Plan",
      desc: "Business Plan for Empowering Traditional “Tapai Ketan” from Tukang",
      tag: "Business Plan + Strategy",
      image: "/greentape.png",
    },
    {
      title: "3S Strategy Pitch",
      desc: "An IT Protection Strategy to Prevent Future Hacking Incidents.",
      tag: "Business Case + Strategy",
      image: "/3sstrategy.png",
    },
  ],
};
