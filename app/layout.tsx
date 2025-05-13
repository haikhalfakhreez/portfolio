import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/providers";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: `Haikhal Fakhreez's portfolio`,
  description:
    "Haikhal Fakhreez - fullstack software engineer with 5+ years of working experience.",
  openGraph: {
    title: `Haikhal Fakhreez's portfolio`,
    description:
      "Haikhal Fakhreez - fullstack software engineer with 5+ years of working experience.",
    url: `https://haikhalfakhreez.com`,
    siteName: `Haikhal Fakhreez's portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    site: "@ekaliacid",
    creator: "@ekaliacid",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  metadataBase: new URL("https://haikhalfakhreez.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          "m-auto flex min-h-screen max-w-2xl flex-col border-gray-200 bg-white font-mono text-black antialiased dark:border-gray-600 dark:bg-[#1e1e1e] dark:text-gray-100",
          inter.variable,
          mono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex-1 p-6 pt-3 md:pt-6">
            <SiteHeader />
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
