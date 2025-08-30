import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import LiquidGlassNavbar from "@/components/liquid-glass-navbar";
import MobileNavigation from "@/components/mobile-navigation";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Portfolio - Modern Web Developer",
  description: "A modern portfolio showcasing web development skills with Next.js, TypeScript, and cutting-edge UI libraries",
  icons: {
    icon: "/Favicon.png", // This is the line you add
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} font-sans antialiased`}
        style={{ scrollBehavior: 'smooth' }}
      >
        <LiquidGlassNavbar />
        <MobileNavigation />
        {children}
      </body>
    </html>
  );
}
