// src/data/portfolioData.ts

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
  ],
  Copywriter: [
    {
      title: "Artikel IDN Times",
      desc: "125+ artikel lifestyle, teknologi, dan otomotif",
      tag: "SEO Writing",
      image: "/images/idntimes-articles.png",
      link: "https://www.idntimes.com/defenderwidi",
    },
    {
      title: "Mojok.co",
      desc: "Tulisan opini dan esai dengan gaya satir",
      tag: "Creative Writing",
      image: "/images/mojok-writing.png",
      link: "https://mojok.co/penulis/defenderwidi",
    },
  ],
  Business: [
    {
      title: "Green Tapai BMC",
      desc: "Sociopreneur business model untuk UMKM Tapai",
      tag: "Business Strategy",
      image: "/images/green-tapai.png",
      github: "https://github.com/defenderwidi/green-tapai-bmc",
    },
    {
      title: "3S Strategy Pitch",
      desc: "IT Security Strategy: Secure, Strengthen, Sustain",
      tag: "Consulting Deck",
      image: "/images/3s-strategy.png",
      link: "https://speakerdeck.com/defenderwidi/3s-it-strategy",
    },
  ],
};
