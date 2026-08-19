import ScrollReveal from "@/components/effects/ScrollReveal";
import { RoughNotation } from "react-rough-notation";
import { RiGithubLine, RiExternalLinkLine } from "@remixicon/react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/portfolio";

const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <ScrollReveal className="mx-auto max-w-6xl scroll-smooth">
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
            {projects.map((project, index) => (
              <article
                key={`${project.title}-${index}`}
                className="group grid gap-6 border-t border-border py-8 lg:grid-cols-12 lg:gap-8"
              >
                <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-card/60 lg:col-span-5 lg:aspect-4/3">
                  <Image
                    src={project.image}
                    alt={`${project.title} project mockup`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
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
      </ScrollReveal>
    </section>
  )
}


export default ProjectsSection;