import Link from 'next/link'
import { Github } from '@/components/icons/Github'
import { Luffy } from '@/components/icons/Luffy'
import { ThemeToggle } from '@/components/theme-toggle'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export function SiteHeader() {
  return (
    <header className="flex mb-5 md:mb-10 items-center">
      <Link href="/">
        <h1 className="whitespace-nowrap font-bold flex flex-col text-xs leading-none md:text-base md:flex-row md:gap-x-1 hover:underline">
          <span>Haikhal</span>
          <span>Fakhreez</span>
          <span className="sr-only">Home</span>
        </h1>
      </Link>

      <nav className="text-xs flex-1 flex justify-end items-center space-x-4 md:space-x-6">
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <Link
              href="about"
              className="transition-colors hover:text-black text-gray-500 dark:text-gray-400 dark:hover:text-white"
            >
              <Luffy />
              <span className="sr-only">About</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="bottom">About</TooltipContent>
        </Tooltip>

        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <a
              href="https://github.com/haikhalfakhreez"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-black text-gray-500 dark:text-gray-400 dark:hover:text-white"
            >
              <Github />
              <span className="sr-only">GitHub</span>
            </a>
          </TooltipTrigger>
          <TooltipContent side="bottom">GitHub</TooltipContent>
        </Tooltip>

        <ThemeToggle />
      </nav>
    </header>
  )
}
