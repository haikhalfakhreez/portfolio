import Image from 'next/image'
import { Section } from '@/components/section'
import { SiteLink } from '@/components/site-link'
import Portrait from '@/app/portrait.png'

export function Introduction() {
  return (
    <Section>
      <div className="flex items-start space-x-4">
        <Image
          src={Portrait}
          alt="Haikhal Fakhreez portrait"
          className="h-14 w-14 shrink-0 rounded-full"
        />
        <div>
          <p>Next.js (React.js) senior software engineer from Malaysia 🇲🇾</p>
          <SiteLink
            href="https://github.com/haikhalfakhreez?tab=repositories"
            className="text-sm"
            as="a"
            target="_blank"
            rel="noopener noreferrer"
          >
            See my projects on GitHub!
          </SiteLink>
        </div>
      </div>
    </Section>
  )
}
