import './globals.css'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from '@/components/providers'
import { SiteHeader } from '@/components/site-header'
import { Footer } from '@/components/footer'
import { cn } from '@/lib/utils'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: `Haikhal Fakhreez's portfolio`,
  description:
    'Haikhal Fakhreez is a software engineer, primarily working on front-end development.',
  openGraph: {
    title: `Haikhal Fakhreez's portfolio`,
    description:
      'Haikhal Fakhreez is a software engineer, primarily working on front-end development.',
    url: `https://haikhalfakhreez.com`,
    siteName: `Haikhal Fakhreez's portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ekaliacid',
    creator: '@ekaliacid',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  metadataBase: new URL('https://haikhalfakhreez.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          'font-mono antialiased bg-white dark:bg-[#1e1e1e] text-black border-gray-200 dark:border-gray-600 dark:text-gray-100 max-w-2xl m-auto min-h-screen flex flex-col',
          inter.variable,
          mono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="p-6 pt-3 md:pt-6 flex-1">
            <SiteHeader />
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
