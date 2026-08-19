import ScrollReveal from "../effects/ScrollReveal";
import { RoughNotation } from "react-rough-notation";
import { experiences } from "@/data/portfolio";

const ExperienceSection = () => {
  return (
    <section className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <ScrollReveal className="mx-auto max-w-6xl scroll-smooth">
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
            {experiences.map((experience) => (
              <article
                key={`${experience.period}-${experience.role}`}
                className="grid gap-4 border-t border-border py-8 lg:grid-cols-12 lg:gap-8"
              >
                <p className="font-mono text-sm text-primary uppercase lg:col-span-3">
                  {experience.period}
                </p>
                <div className="lg:col-span-9">
                  <h3 className="text-xl font-medium tracking-tight text-foreground">
                    {experience.role}
                  </h3>
                  <p className="mt-1 text-sm">
                    {experience.organization}
                  </p>

                  <ul className="mt-4 list-disc space-y-4 pl-5 text-justify">
                    {experience.responsibilities?.map((responsibility) => {
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
      </ScrollReveal>
    </section>
  )
}

export default ExperienceSection;