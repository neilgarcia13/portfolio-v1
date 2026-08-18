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
  RiSupabaseFill,
  RiGithubFill,
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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

export default function Home() {
  return (
    <main>
      <section
        id="top"
        className="relative isolate flex scroll-mt-20 items-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-7">
            <p className="mb-4 font-medium text-muted-foreground">
              Hi there! I&apos;m
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Neil Andrei.👋
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
              I, Neil Andrei S. Garcia, welcome you to my humble web
              portfolio to know more about myself, obviously.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-2">
              <Button size="lg" render={<a href="#projects" />}>
                <RiFileDownloadLine aria-hidden="true" />
                Download CV
              </Button>
              <Button
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
              src="/profile.png"
              alt="Neil Andrei Garcia"
              fill
              sizes="(max-width: 1024px) 90vw, 34vw"
              className="z-10 object-contain pt-5 drop-shadow-[0_24px_32px_rgba(0,0,0,0.5)] sm:px-8 sm:pt-8"
              priority
            />
          </div>
        </div>
      </section>

      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
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
                <div className="max-w-full space-y-6 text-base leading-8 text-muted-foreground lg:col-span-8 lg:text-lg text-justify">
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
                    Personally, I strongly believe in <strong className="text-foreground">&ldquo;progress over perfection.&rdquo;</strong> I care more about the journey than the destination, treating life as a continuous learning process that leads me toward a better version of myself and the life I truly want and deserve.
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
                    Skills
                  </h2>
                </div>
                <div className="space-y-10">
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
                              className="h-8 px-3 text-sm hover:bg-primary hover:text-black"
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
            ) : (
              <h2 className="text-3xl font-semibold tracking-tight">
                {section.title}
              </h2>
            )}
          </div>
        </section>
      ))}
    </main>
  );
}
