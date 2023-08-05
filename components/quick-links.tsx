import { Section } from '@/components/section'
import { SiteLink } from '@/components/site-link'

const quickLinks = [
  {
    title: 'About',
    href: '/about',
    as: 'link',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/haikhalfakhreez',
    as: 'a',
  },
] as const

export function QuickLinks() {
  return (
    <Section title="Quick Links:">
      <ul className="text-sm space-y-1">
        {quickLinks.map((item, index) => (
          <li key={index}>
            -{' '}
            <SiteLink href={item.href} as={item.as}>
              {item.title}
            </SiteLink>
          </li>
        ))}
      </ul>
    </Section>
  )
}
