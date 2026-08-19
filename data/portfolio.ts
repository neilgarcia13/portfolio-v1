import {
  RiHtml5Fill,
  RiCss3Fill,
  RiTailwindCssFill,
  RiCodeSSlashFill,
  RiFlashlightFill,
  RiJavaFill,
  RiNextjsLine,
  RiNodejsFill,
  RiBankCardLine,
  RiDatabase2Fill,
  RiExternalLinkLine,
  RiSupabaseFill,
  RiGithubFill,
  RiGithubLine,
  RiFileDownloadLine,
  RiGitBranchLine,
  RiVercelLine,
  RiJavascriptFill,
  RiOpenaiFill,
  RiLinksFill,
  RiMailLine,
  RiPhpFill,
  RiReactjsLine,
  RiRobot2Line,
  RiFigmaLine,
  RiSlackFill,
  RiArrowRightDoubleFill,
} from "@remixicon/react";

export const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: RiHtml5Fill },
      { name: "CSS3", icon: RiCss3Fill },
      { name: "TailwindCSS", icon: RiTailwindCssFill },
      { name: "JavaScript", icon: RiJavascriptFill },
      { name: "TypeScript", icon: RiCodeSSlashFill },
      { name: "React", icon: RiReactjsLine },
      { name: "NextJS", icon: RiNextjsLine },
      { name: "Vite", icon: RiFlashlightFill },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "PHP", icon: RiPhpFill },
      { name: "Laravel", icon: RiCodeSSlashFill },
      { name: "C#", icon: RiCodeSSlashFill },
      { name: "Java", icon: RiJavaFill },
      { name: "NodeJS", icon: RiNodejsFill },
      { name: "ExpressJS", icon: RiCodeSSlashFill },
      { name: "MSSQL", icon: RiDatabase2Fill },
      { name: "MySQL", icon: RiDatabase2Fill },
      { name: "PostgreSQL", icon: RiDatabase2Fill },
      { name: "MongoDB", icon: RiDatabase2Fill },
      { name: "Supabase", icon: RiSupabaseFill },
      { name: "JWT", icon: RiCodeSSlashFill },
      { name: "REST APIs", icon: RiLinksFill },
    ],
  },
  {
    title: "Automations & Integrations",
    skills: [
      { name: "Codex", icon: RiRobot2Line },
      { name: "OpenAI", icon: RiOpenaiFill },
      { name: "Claude Code", icon: RiRobot2Line },
      { name: "Playwright", icon: RiRobot2Line },
      { name: "Stripe", icon: RiBankCardLine },
      { name: "Webhooks", icon: RiLinksFill },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", icon: RiGitBranchLine },
      { name: "GitHub", icon: RiGithubFill },
      { name: "VS Code", icon: RiCodeSSlashFill },
      { name: "Vercel", icon: RiVercelLine },
      { name: "Figma", icon: RiFigmaLine },
      { name: "Slack", icon: RiSlackFill },
      { name: "Jira", icon: RiArrowRightDoubleFill },
    ],
  },
];

export const experiences = [
  {
    period: "December 2025 — Present",
    role: "Full-stack Web Developer",
    organization: "Ad-Vanced Digital Adtech Ltd.",
    responsibilities: [
      {
        id: 1,
        content: "Built and audited core DSP campaign infrastructure, covering unified cross-channel campaigns, creatives, campaign lines, bidding, pacing, frequency capping, supply-path optimization, reporting, feature access, and lifecycle management.",
        highlight: "Built and audited core DSP campaign infrastructure",
      },
      {
        id: 2,
        content: "Architected and rebuilt the Ad-Vanced UDI database, designing the PostgreSQL/Supabase schema, account hierarchy, RBAC, RLS, RPCs, reporting structures, and backend architecture for a multi-account DSP platform.",
        highlight: "Architected and rebuilt the Ad-Vanced UDI database",
      },
      {
        id: 3,
        content: "Developed and integrated Meta Ads workflows, including agency/client account relationships, campaign management, cross-account access, and Meta-connected campaign operations.",
        highlight: "Developed and integrated Meta Ads workflows",
      },
      {
        id: 4,
        content: "Led end-to-end product engineering and QA, using phased architecture reviews, automated testing, RBAC/security validation, responsive UX improvements, production audits, and regression testing to deliver reliable platform-wide features.",
        highlight: "Led end-to-end product engineering and QA",
      }
    ]
  },
  {
    period: "October 2024 — February 2025",
    role: "Technical Support",
    organization: "VXI Global Solutions",
    responsibilities: [
      {
        id: 1,
        content: "Gained hands-on experience in hardware and software troubleshooting.",
        highlight: "hardware and software troubleshooting",
      },
      {
        id: 2,
        content: "Resolved technical issues swiftly and proficiently.",
        highlight: "Resolved technical issues",
      },
      {
        id: 3,
        content: "Participated in team meetings and shared learnings that drove technical skill improvements.",
        highlight: "shared learnings",
      }
    ]
  },
];

export const projects = [
  {
    title: "Supreme Barbers",
    category: "Business solution",
    image: "/project-mockups/supreme-barbers.png",
    description: "A barber availability and reservation system built to help customers find available barbers and book reservations before visiting the shop. Deployment is a work-in-progress.",
    technologies: ["Laravel", "TypeScript", "React", "InertiaJS", "SQLite"],
    repositoryUrl: "https://github.com/neilgarcia13/supreme-barbers",
  },
  {
    title: "Pricely!",
    category: "Web application",
    image: "/project-mockups/pricely.png",
    description: "A selling price calculator application for a small food business where you can compute regular and discounted prices based on ingredients and other supplies costs.",
    technologies: ["JavaScript", "React", "Vite"],
    liveUrl: "https://pricely-biz.vercel.app/",
    repositoryUrl: "https://github.com/neilgarcia13/pricely",
  },
  {
    title: "Recipe Finder",
    category: "Web application",
    image: "/project-mockups/recipe-finder.png",
    description: "A simple recipe-finder app to fetch and show actual data dynamically from a public API.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    liveUrl: "https://neilgarcia13.github.io/recipe-finder-app/",
    repositoryUrl: "https://github.com/neilgarcia13/recipe-finder-app",
  },
];

export const education = [
  {
    period: "2021 — 2025",
    program: "Bachelor of Science in Information Technology",
    institution: "Quezon City University",
  },
];