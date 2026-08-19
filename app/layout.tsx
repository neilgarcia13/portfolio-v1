import type { Metadata } from "next";
import { Space_Grotesk, Roboto, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const fontSans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Roboto({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Neil Andrei's Portfolio",
  description: "Neil Andrei Garcia. A full-stack web developer that builds scalable, maintainable, and efficient web applications and business solutions.",
  keywords: [
    "portfolio", 
    "full-stack", 
    "web-developer", 
    "react", 
    "javascript", 
    "typescript", 
    "nextjs", 
    "php", 
    "laravel", 
    "web-applications", 
    "business-solutions",
  ],
  authors: [{ name: "Neil Andrei Garcia"}],
  creator: "Neil Andrei Garcia",
  robots: { index: true, follow: true },
  referrer: 'origin-when-cross-origin',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
