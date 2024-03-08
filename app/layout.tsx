import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingNav } from "@/components/navbar/floating-navbar";
import Header from "@/components/header/header";

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
      <body className={myFont.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <Header />
          {children}
          <FloatingNav
            navItems={[
              { name: "Home", link: "/" },
              { name: "About", link: "/about" },
              { name: "Projects", link: "/projects" },
              { name: "Contact", link: "/contact" },
            ]}
          />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
