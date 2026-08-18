import Link from "next/link";

import {
  RiGithubLine,
  RiLinkedinBoxFill,
  RiMailLine,
} from "@remixicon/react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-border px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
              Connect with me
            </p>
            <h2 className="my-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Have an idea, a problem, or a project that needs building?
            </h2>
            <div>
              <Link href="mailto:neilgrande2002@gmail.com">
                <Button variant="link" className="cursor-pointer">
                  <RiMailLine aria-hidden="true" />
                  Email
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/neil-garcia-/">
                <Button variant="link" className="cursor-pointer">
                  <RiLinkedinBoxFill aria-hidden="true" />
                  LinkedIn
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/neil-garcia-/">
                <Button variant="link" className="cursor-pointer">
                  <RiGithubLine aria-hidden="true" />
                  GitHub
                </Button>
              </Link>
            </div>

          </div>

          <div className="lg:col-span-5 lg:border-l lg:border-border lg:pl-8">
            <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
              A principle I carry
            </p>
            <blockquote className="mt-4 text-2xl leading-tight font-medium tracking-tight text-foreground sm:text-3xl">
              &ldquo;Progress over <span className="text-primary">perfection.</span>&rdquo;
            </blockquote>
            <p className="mt-4 text-sm leading-6">
              Life is a continuous learning process. You can&apos;t convince me otherwise.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-border pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Neil Andrei Garcia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
