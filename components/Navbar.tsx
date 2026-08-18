"use client";

import { useState } from "react";
import { RiMailLine, RiMenuLine } from "@remixicon/react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAVIGATION_ITEMS = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
] as const;

const NAME = "Neil Andrei Garcia";
const EMAIL_HREF = "neilgrande2002@gmail.com";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur supports-backdrop-filter:bg-background/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-foreground"
        >
          {NAME}
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {NAVIGATION_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors border-b-2 hover:border-b-primary"
            >
              {item.label}
            </a>
          ))}

        </nav>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Open navigation menu" />
              }
            >
              <RiMenuLine aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(20rem,85vw)] border-border bg-background p-0">
              <SheetHeader className="border-b border-border px-6 py-5 text-left">
                <SheetTitle>{NAME}</SheetTitle>
                <SheetDescription>Navigate the portfolio.</SheetDescription>
              </SheetHeader>
              <nav aria-label="Mobile navigation" className="flex flex-col gap-1 p-4">
                {NAVIGATION_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-md px-3 py-3 text-sm text-muted-foreground transition-colors border-b-2 hover:border-b-primary"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
