import ScrollReveal from "../effects/ScrollReveal";
import { Button } from "../ui/button";
import { RiFileDownloadLine, RiMailLine } from "@remixicon/react";
import DotGrid from "../effects/DotGrid";

import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero" className="relative isolate flex scroll-mt-20 items-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
    >
      <ScrollReveal animateOnMount className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-12 lg:items-end lg:gap-8">
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
              <RiFileDownloadLine />
              Download CV
            </Button>
            <Button
              nativeButton={false}
              variant="outline"
              size="lg"
              render={<a href="mailto:neilgrande2002@gmail.com" />}
            >
              <RiMailLine />
              Email me
            </Button>
          </div>
        </div>

        <div className="relative isolate mx-auto h-98 w-full max-w-md overflow-hidden rounded-2xl border border-primary/25 bg-card/60 shadow-2xl shadow-primary/10 lg:col-span-5 lg:mb-3 lg:h-108">
          <div className="absolute inset-0 z-0 opacity-45">
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
  )
}

export default HeroSection;