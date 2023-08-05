import { Introduction } from '@/components/introduction'
import { Announcement } from '@/components/annoucement'
import { TechStacks } from '@/components/tech-stacks'
import { QuickLinks } from '@/components/quick-links'

export default function Home() {
  return (
    <div>
      <Introduction />
      <Announcement />
      <TechStacks />
      <QuickLinks />
    </div>
  )
}
