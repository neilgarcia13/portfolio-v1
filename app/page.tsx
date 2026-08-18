import { RiFileDownloadLine, RiMailLine } from "@remixicon/react";
import Image from "next/image";

import DotGrid from "@/components/DotGrid";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "education", title: "Education" },
];

export default function Home() {
  return (
    <main>
      <section
        id="top"
        className="relative isolate flex scroll-mt-20 items-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8"
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
              className="z-10 object-contain object-bottom px-5 pt-5 drop-shadow-[0_24px_32px_rgba(0,0,0,0.5)] sm:px-8 sm:pt-8"
              priority
            />
          </div>
        </div>
      </section>

      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              {section.title}
            </h2>
          </div>
        </section>
      ))}
    </main>
  );
}
