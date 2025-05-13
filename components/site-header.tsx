import Link from "next/link";
import { Github } from "@/components/icons/Github";
import { Luffy } from "@/components/icons/Luffy";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function SiteHeader() {
  return (
    <header className="mb-5 flex items-center md:mb-10">
      <Link href="/">
        <h1 className="flex flex-col text-xs leading-none font-bold whitespace-nowrap hover:underline md:flex-row md:gap-x-1 md:text-base">
          <span>Haikhal</span>
          <span>Fakhreez</span>
          <span className="sr-only">Home</span>
        </h1>
      </Link>

      <nav className="flex flex-1 items-center justify-end space-x-4 text-xs md:space-x-6">
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <Link
              href="/about"
              className="text-gray-500 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
              prefetch={true}
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
              className="text-gray-500 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
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
  );
}
