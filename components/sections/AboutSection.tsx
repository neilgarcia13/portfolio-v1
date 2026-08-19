import ScrollReveal from "../effects/ScrollReveal";
import { RoughNotation } from "react-rough-notation";

const AboutSection = () => {
  return (
    <section className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <ScrollReveal className="mx-auto max-w-6xl">
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
      </ScrollReveal>
    </section>
  )      
}

export default AboutSection;