import Image from 'next/image'
import layoutStyles from '../../styles/layout.module.scss'

export default function Index() {
  return (
    <section className={layoutStyles.container}>
      <div className="grid gap-y-6 py-16 text-center">
        {/* TODO: image */}
        <div className="flex justify-center">
          <div className="h-44 w-44 overflow-hidden rounded-full border border-gray-200">
            <Image src="/assets/image/portrait.png" height={176} width={176} alt="Haikhal Fakhreez Portrait" />
          </div>
        </div>
        <h1 className="section-title">Haikhal Fakhreez</h1>
        <p className="text-lg">Front-end Engineer. Based in Kuala Lumpur.</p>
        <div className="flex justify-center">
          <div className="flex gap-x-6 py-1">
            <SocialIcon
              href="https://www.linkedin.com/in/haikhalfakhreez/"
              src="/assets/brands/linkedin.svg"
              size={30}
              alt="LinkedIn"
            />
            <SocialIcon
              href="https://github.com/haikhalfakhreez/"
              src="/assets/brands/github.svg"
              size={30}
              alt="GitHub"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

interface SocialIconType {
  href: string
  src: string
  size: number
  alt: string
}

function SocialIcon({ href, src, size, alt }: SocialIconType) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
      <Image src={src} height={size} width={size} alt={alt} />
    </a>
  )
}
