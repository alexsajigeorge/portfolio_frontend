import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/providers/theme-provider";
import { FloatingNav } from "@/components/navbar/floating-navbar";

const myFont = localFont({ src: "./fonts/GeistVariableVF.ttf" });

export const metadata: Metadata = {
  title: "fusionfolio",
  description:
    "Creative developer | Designer | Frontend developer | Freelancer | UX/UI Designer | MERN Stack developer | Next.js | React.js | Node.js | MongoDB | MySQL | Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myFont.className}  animate-fade-in px-4 lg:px-40`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <FloatingNav />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
