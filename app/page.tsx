"use client";
import { RoughNotation } from "react-rough-notation";
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
import Image from "next/image";

import DotGrid from "@/components/DotGrid";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const sections = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "education", title: "Education" },
];

const skillGroups = [
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

const experienceEntries = [
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

const projectEntries = [
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

const educationEntries = [
  {
    period: "2021 — 2025",
    program: "Bachelor of Science in Information Technology",
    institution: "Quezon City University",
  },
];

export default function Home() {
  return (
    <main>
      <section
        id="top"
        className="relative isolate flex scroll-mt-20 items-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
      >
        <ScrollReveal
          animateOnMount
          className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-12 lg:items-end lg:gap-8"
        >
          <div className="lg:col-span-7">
            <p className="mb-4 font-medium">
              Hi there! I am
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Neil Andrei.👋
            </h1>
            <p className="mt-7 max-w-xl leading-8">
              I build scalable web applications and business solutions that make complex work feel simpler—solving one problem at a time.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-2">
              <Button nativeButton={false} size="lg" render={<a href="#projects" />}>
                <RiFileDownloadLine aria-hidden="true" />
                Download CV
              </Button>
              <Button
                nativeButton={false}
                variant="outline"
                size="lg"
                render={<a href="mailto:neilgrande2002@gmail.com" />}
              >
                <RiMailLine aria-hidden="true" />
                Email me
              </Button>
            </div>
          </div>

          <div className="relative isolate mx-auto h-98 w-full max-w-md overflow-hidden rounded-2xl border border-primary/25 bg-card/60 shadow-2xl shadow-primary/10 lg:col-span-5 lg:mb-3 lg:h-108">
            <div className="absolute inset-0 z-0 opacity-45" aria-hidden="true">
              <DotGrid
                dotSize={5}
                gap={26}
                baseColor="#1f3b22"
                activeColor="#a3e635"
                proximity={120}
                shockRadius={180}
                shockStrength={2}
              />
            </div>
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_35%,color-mix(in_oklch,var(--primary)_22%,transparent),transparent_58%)]" />
            <Image
              src="/profile1.png"
              alt="Neil Andrei Garcia"
              fill
              sizes="(max-width: 1024px) 90vw, 34vw"
              className="z-10 object-cover pt-5 drop-shadow-[0_24px_32px_rgba(0,0,0,0.5)] sm:px-8 sm:pt-8"
              priority
            />
          </div>
        </ScrollReveal>
      </section>

      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8"
        >
          <ScrollReveal className="mx-auto max-w-6xl scroll-smooth">
            {section.id === "about" ? (
              <div className="space-y-12">
                <div className="lg:col-span-4">
                  <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
                    A little about me
                  </p>
                  <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    About
                  </h2>
                </div>
                <div className="max-w-full space-y-6 text-base leading-8 lg:col-span-8 lg:text-lg text-justify">
                  <p>
                    I&apos;m Neil Andrei Garcia, a full-stack web developer
                    from the Philippines. I build web applications and
                    business solutions that are scalable, maintainable, and
                    efficient — because &quot;it works on my machine&quot; is not
                    usually considered a production strategy.
                  </p>
                  <p>
                    I also use AI-assisted tools to research, prototype,
                    automate repetitive work, and explore better solutions.
                    Recently, I&apos;ve been focusing more on AI and automation —
                    looking at how these technologies can optimize workflows,
                    improve user experiences, and help teams deliver smarter
                    solutions faster.
                  </p>
                  <p>
                    Personally, I strongly believe in {' '}
                    <strong className="text-foreground">
                      <RoughNotation
                        type="underline"
                        color="#226300"
                        strokeWidth={4}
                        padding={4}
                        show>
                        &ldquo;progress over perfection.&rdquo;
                      </RoughNotation>
                    </strong>
                    {' '}I care more about the journey than the destination, treating life as a continuous learning process that leads me toward a better version of myself and the life I truly want and deserve.
                  </p>
                </div>
              </div>
            ) : section.id === "skills" ? (
              <div className="space-y-12">
                <div>
                  <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
                    What I work with
                  </p>

                  <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    <RoughNotation
                      type="underline"
                      color="#226300"
                      strokeWidth={8}
                      padding={8}
                      show>
                      Skills
                    </RoughNotation>
                  </h2>
                </div>
                <div className="space-y-12">
                  {skillGroups.map((group) => (
                    <div
                      key={group.title}
                      className="grid gap-4 border-t border-border pt-6 lg:grid-cols-12 lg:gap-8"
                    >
                      <div className="lg:col-span-4">
                        <h3 className="text-xl font-medium tracking-tight text-foreground">
                          {group.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap content-start gap-2 lg:col-span-8">
                        {group.skills.map((skill) => {
                          const Icon = skill.icon;

                          return (
                            <Badge
                              key={skill.name}
                              variant="outline"
                              className="h-8 px-3 text-sm hover:bg-primary hover:text-primary-foreground"
                            >
                              <Icon aria-hidden="true" />
                              {skill.name}
                            </Badge>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : section.id === "experience" ? (
              <div className="space-y-12">
                <div>
                  <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
                    Where I&apos;ve worked
                  </p>
                  <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    <RoughNotation
                      type="underline"
                      color="#226300"
                      strokeWidth={8}
                      padding={8}
                      show>
                      Experience
                    </RoughNotation>
                  </h2>
                </div>
                <div className="space-y-0">
                  {experienceEntries.map((entry) => (
                    <article
                      key={`${entry.period}-${entry.role}`}
                      className="grid gap-4 border-t border-border py-8 lg:grid-cols-12 lg:gap-8"
                    >
                      <p className="font-mono text-sm text-primary uppercase lg:col-span-3">
                        {entry.period}
                      </p>
                      <div className="lg:col-span-9">
                        <h3 className="text-xl font-medium tracking-tight text-foreground">
                          {entry.role}
                        </h3>
                        <p className="mt-1 text-sm">
                          {entry.organization}
                        </p>

                        <ul className="mt-4 list-disc space-y-4 pl-5 text-justify">
                          {entry.responsibilities?.map((responsibility) => {
                            const [leading, trailing] = responsibility.content.split(
                              responsibility.highlight,
                            );

                            return (
                              <li key={responsibility.id} className="pl-1 leading-7">
                                {leading}
                                <strong className="font-semibold text-foreground">
                                  {responsibility.highlight}
                                </strong>
                                {trailing}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : section.id === "projects" ? (
              <div className="space-y-12">
                <div>
                  <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
                    Selected work
                  </p>
                  <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    <RoughNotation
                      type="underline"
                      color="#226300"
                      strokeWidth={8}
                      padding={8}
                      show>
                      Projects
                    </RoughNotation>
                  </h2>
                </div>
                <div className="space-y-6">
                  {projectEntries.map((project, index) => (
                    <article
                      key={`${project.title}-${index}`}
                      className="group grid gap-6 border-t border-border py-8 lg:grid-cols-12 lg:gap-8"
                    >
                      <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-card/60 lg:col-span-5 lg:aspect-4/3">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={`${project.title} project mockup`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 42vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                          />
                        ) : (
                          <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
                            <span className="font-mono text-xs tracking-[0.16em] text-primary uppercase">
                              Project mockup
                            </span>
                            <span className="text-sm">
                              Add an image path to this project&apos;s <code>image</code> field.
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="lg:col-span-7">
                        <p className="font-mono text-xs tracking-[0.12em] text-primary uppercase">
                          {project.category}
                        </p>
                        <h3 className="my-3 text-2xl font-medium tracking-tight text-foreground">
                          {project.title}
                        </h3>
                        <p className="max-w-2xl text-base leading-7 text-justify">
                          {project.description}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.technologies.map((technology) => (
                            <Badge key={technology} variant="outline">
                              {technology}
                            </Badge>
                          ))}
                        </div>
                        <div className="mt-6 flex flex-wrap gap-4 text-sm">
                          {project.liveUrl && (
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <Button className="cursor-pointer">
                                <RiExternalLinkLine aria-hidden="true" />
                                Live URL
                              </Button>
                            </Link>
                          )}

                          <Link href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="cursor-pointer">
                              <RiGithubLine aria-hidden="true" />
                              Open Repository
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : section.id === "education" ? (
              <div className="space-y-12">
                <div>
                  <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
                    Learning path
                  </p>
                  <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Education
                  </h2>
                </div>
                <div className="space-y-0">
                  {educationEntries.map((entry) => (
                    <article
                      key={`${entry.period}-${entry.program}`}
                      className="grid gap-4 border-t border-border py-8 lg:grid-cols-12 lg:gap-8"
                    >
                      <p className="font-mono text-sm text-primary uppercase lg:col-span-3">
                        {entry.period}
                      </p>
                      <div className="lg:col-span-9">
                        <h3 className="text-xl font-medium tracking-tight text-foreground">
                          {entry.program}
                        </h3>
                        <p className="mt-1 text-sm">
                          {entry.institution}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : (
              <h2 className="text-3xl font-semibold tracking-tight">
                {section.title}
              </h2>
            )}
          </ScrollReveal>
        </section>
      ))
      }
    </main >
  );
}
