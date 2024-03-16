import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/providers/theme-provider";
import { FloatingNav } from "@/components/navbar/floating-navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";

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
      <body className={`${myFont.className} animate-fade-in `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TracingBeam>{children}</TracingBeam>
          <SpeedInsights />
          <FloatingNav />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
