import Image from 'next/image'
import layoutStyles from '../../styles/layout.module.scss'

const contacts = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/haikhalfakhreez/',
    description: "Let's connect on LinkedIn",
    icon: '/assets/linkedin.svg',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/haikhalfakhreez/',
    description: 'Follow for more open-source project',
    icon: '/assets/github.svg',
  },
]

export default function Contact() {
  return (
    <div>
      <section className={`${layoutStyles.container} pb-8`}>
        <div className="text-center">
          <h2 className="section-title pt-20 pb-14" id="contact">
            Contact
          </h2>
          <div className="m-auto grid max-w-lg gap-6">
            {contacts.map((item) => (
              <a href={item.url} target="_blank" rel="noopener noreferrer" key={item.name}>
                <div className="rounded-md bg-gray-200 px-8 py-5 hover:shadow hover:shadow-gray-300">
                  <div className="flex justify-center gap-3">
                    <Image src={item.icon} height={20} width={20} />
                    <h3 className="text-xl font-bold">{item.name}</h3>
                  </div>
                  <p className="pt-2">{item.description}</p>
                </div>
              </a>
            ))}
          </div>
          <p className="pt-10">
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
