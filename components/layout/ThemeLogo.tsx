"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

type ThemeLogoProps = {
  className?: string;
  priority?: boolean;
};

export default function ThemeLogo({ className, priority = false }: ThemeLogoProps) {
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const logoSrc = mounted && resolvedTheme === "dark"
    ? "/logos/logo-white.svg"
    : "/logos/logo-black.svg";

  return (
    <Image
      src={logoSrc}
      alt="Neil Andrei Garcia logo"
      width={42}
      height={42}
      priority={priority}
      className={className}
    />
  );
}
