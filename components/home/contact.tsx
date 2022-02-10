import Image from 'next/image'
import layoutStyles from '../../styles/layout.module.scss'

export const contacts = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/haikhalfakhreez/',
    description: "Learn more about me on LinkedIn. Let's connect and discover new opportunities.",
    icon: '/assets/brands/linkedin.svg',
  },
  {
    name: 'Discord',
    url: 'https://discord.com/users/766662647680335882',
    description: 'Ask me anything on Discord, or share your thoughts.',
    icon: '/assets/brands/discord.svg',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/haikhalfakhreez/',
    description: "Follow for more open-source project. I'm always looking for new contributions.",
    icon: '/assets/brands/github.svg',
  },
]

export default function Contact() {
  return (
    <div>
      <section className="pb-8">
        <div className={`${layoutStyles.container} text-center`}>
          <h2 className="section-title pt-20 pb-14" id="contact">
            Contact
          </h2>
        </div>

        <div className="mx-auto px-1 sm:max-w-3xl sm:px-0">
          <div className="grid gap-4 sm:grid-cols-3">
            {contacts.map((item) => (
              <ContactCard
                key={item.name}
                href={item.url}
                name={item.name}
                icon={item.icon}
                description={item.description}
              />
            ))}
          </div>
          <p className="pt-20 pb-16 text-center">
            Or contact me through my email at{' '}
            <a
              href="mailto:haikhalfakhreez@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link text-blue-600"
            >
              haikhalfakhreez@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}

interface ContactCardType {
  name: string
  href: string
  description: string
  icon: string
}

function ContactCard({ href, name, icon, description }: ContactCardType) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" key={name} className="flex">
      <div className="grow rounded-md p-5 transition-transform hover:translate-y-[-2px] hover:shadow hover:shadow-gray-300">
        <Image src={icon} height={30} width={30} />
        <h3 className="mt-4 text-xl font-bold">{name}</h3>
        <p className="text-secondary mt-2">{description}</p>
      </div>
    </a>
  )
}
