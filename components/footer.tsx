import { SiteLink } from '@/components/site-link'

export function Footer() {
  return (
    <footer className="flex justify-between space-x-4 px-6 py-4 text-xs text-gray-400 dark:text-gray-500">
      <div>
        Last updated: <span className="font-semibold">July 2023</span>
      </div>
      <SiteLink
        as="a"
        href="https://github.com/haikhalfakhreez/portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source
      </SiteLink>
    </footer>
  )
}
