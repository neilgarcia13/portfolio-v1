import ScrollReveal from "@/components/effects/ScrollReveal";
import { education } from "@/data/portfolio";

const EducationSection = () => {
  return (
    <section id="education" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <ScrollReveal className="mx-auto max-w-6xl scroll-smooth">
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
            {education.map((e) => (
              <article
                key={`${e.period}-${e.program}`}
                className="grid gap-4 border-t border-border py-8 lg:grid-cols-12 lg:gap-8"
              >
                <p className="font-mono text-sm text-primary uppercase lg:col-span-3">
                  {e.period}
                </p>
                <div className="lg:col-span-9">
                  <h3 className="text-xl font-medium tracking-tight text-foreground">
                    {e.program}
                  </h3>
                  <p className="mt-1 text-sm">
                    {e.institution}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}

export default EducationSection;