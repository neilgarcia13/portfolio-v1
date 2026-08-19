import ScrollReveal from "@/components/effects/ScrollReveal";
import { RoughNotation } from "react-rough-notation";
import { Badge } from "../ui/badge";
import { skillGroups } from "@/data/portfolio";

const SkillsSection = () => {
  return (
    <section id="skills" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <ScrollReveal className="mx-auto max-w-6xl">
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
      </ScrollReveal>
    </section>
  );
}

export default SkillsSection;