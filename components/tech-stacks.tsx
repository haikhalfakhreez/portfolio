import { Section } from '@/components/section'
import { SiteLink } from '@/components/site-link'

const techStacks = [
  {
    name: 'Next.js',
    url: 'https://nextjs.org/',
  },
  {
    name: 'React.js',
    url: 'https://react.dev/',
  },
  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Tailwind CSS',
    url: 'https://tailwindcss.com/',
  },
  {
    name: 'Node.js',
    url: 'https://nodejs.org/en',
  },
  {
    name: 'SWR',
    url: 'https://swr.vercel.app/',
  },
  {
    name: 'React Query',
    url: 'https://tanstack.com/query/latest/',
  },
  {
    name: 'Radix UI',
    url: 'https://radix-ui.com/',
  },
  {
    name: 'Headless UI',
    url: 'https://headlessui.com/',
  },
  {
    name: 'React Hook Form',
    url: 'https://react-hook-form.com/',
  },
  {
    name: 'Next-Auth',
    url: 'https://next-auth.js.org/',
  },
  {
    name: 'Storybook',
    url: 'https://storybook.js.org/',
  },
  {
    name: 'Vue.js',
    url: 'https://vuejs.org/',
  },
  {
    name: 'Laravel',
    url: 'https://laravel.com/',
  },
  {
    name: 'Prisma',
    url: 'https://www.prisma.io/',
  },
  {
    name: 'MySQL',
    url: 'https://www.mysql.com/',
  },
  {
    name: 'Express.js',
    url: 'https://expressjs.com/',
  },
  {
    name: 'Webpack',
    url: 'https://webpack.js.org/',
  },
  {
    name: 'Babel',
    url: 'https://babeljs.io/',
  },
  {
    name: 'Docker',
    url: 'https://www.docker.com/',
  },
  {
    name: 'Figma',
    url: 'https://www.figma.com/',
  },
  {
    name: 'Python',
    url: 'https://www.python.org/',
  },
] as const

export function TechStacks() {
  return (
    <Section title="Tech Stacks:">
      <ul className="grid grid-cols-2 gap-2 text-sm">
        {techStacks.map((item, index) => (
          <li key={index}>
            -{' '}
            <SiteLink href={item.url} as="a" target="_blank" rel="noopener noreferrer">
              {item.name}
            </SiteLink>
          </li>
        ))}
      </ul>
    </Section>
  )
}
