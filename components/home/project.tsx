import layoutStyles from '../../styles/layout.module.scss'
import Newtab from '../assets/newtab'
import Image from 'next/image'

const projects = [
  {
    name: 'Pokémon Library',
    image: '/assets/image/pokemon-library.png',
    codeUrl: 'https://github.com/haikhalfakhreez/pokemon-library',
    pageUrl: 'https://pokemon-library.vercel.app/',
    description:
      'Build with Remix 💿 (React) and Tailwind, this library of Pokémon is using the IntersectionObserver API for infinite scrolling. Data is retrieved from <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer" class="link-inverse">PokeAPI</a>.',
    techStack: ['Remix', 'Tailwind', 'TypeScript', 'IntersectionObserver API'],
  },
  {
    name: 'New Portfolio (Current)',
    image: '/assets/image/new-portfolio.png',
    codeUrl: 'https://github.com/haikhalfakhreez/portfolio',
    figmaUrl: 'https://www.figma.com/file/Cb6QhisBG7NYow0cHrZNrj/Portfolio?node-id=0%3A1',
    description:
      'This website is build using Next.js and styled using Tailwind. I designed this website from scratch using Figma and you can find the mock-up by clicking the link above.',
    techStack: ['Next.js', 'Tailwind', 'Figma', 'TypeScript'],
  },
  {
    name: 'Old Portfolio',
    image: '/assets/image/old-portfolio.png',
    codeUrl: 'https://github.com/haikhalfakhreez/old-portfolio',
    pageUrl: 'https://haikhalfakhreez.github.io/old-portfolio/',
    description:
      'This is the website I build for my first portfolio. Two months into learning web development, this simple website showcases all my projects. I used plain old HTML, CSS, and JavaScript. Last updated: 2020.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
  },
]

export default function Project() {
  return (
    <div>
      <section className={`${layoutStyles.container} pb-8`}>
        <div className="text-center">
          <h2 className="section-title pt-20 pb-14" id="project">
            Project
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 sm:gap-6">
          {projects.map((item) => (
            <div
              key={item.name}
              className="flex grow flex-col overflow-hidden rounded-md shadow-md transition-transform hover:translate-y-[-4px]"
            >
              {item.pageUrl ? (
                <a href={item.pageUrl} target="_blank" rel="noopener noreferrer">
                  <ProjectCardImage src={item.image} alt={item.name} />
                </a>
              ) : (
                <ProjectCardImage src={item.image} alt={item.name} />
              )}
              <div className="flex grow flex-col justify-between p-6">
                <div>
                  {/* Title */}
                  {item.pageUrl ? (
                    <a href={item.pageUrl} target="_blank" rel="noopener noreferrer" className="link">
                      <h3 className="text-xl font-bold">
                        {item.name} <Newtab size={14} />
                      </h3>
                    </a>
                  ) : (
                    <h3 className="text-xl font-bold">{item.name}</h3>
                  )}

                  {/* Button */}
                  <div className="mt-3 flex gap-3">
                    {item.codeUrl && <ProjectCardButton href={item.codeUrl} text="See Code" />}
                    {item.figmaUrl && <ProjectCardButton href={item.figmaUrl} text="See Figma" />}
                  </div>

                  {/* Description */}
                  <p className="text-secondary pt-6" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                </div>

                {/* Tech stack */}
                <ul className="mt-5 flex gap-2">
                  {item.techStack.map((tech) => (
                    <li className="text-xxs rounded-md bg-gray-700 px-2 py-[2px] text-white" key={tech}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-20 text-center">
          <a
            href="https://github.com/haikhalfakhreez/"
            target="_blank"
            rel="noopener noreferrer"
            className="link text-sm"
          >
            See other projects on GitHub <Newtab size={12} className="translate-y-[-1px]" />
          </a>
        </div>
      </section>
    </div>
  )
}

function ProjectCardImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="bg-grid inset-0 w-full border-b border-gray-200 p-8"
      style={{
        height: '270px',
      }}
    >
      <div
        style={{ height: '100%', width: '100%', position: 'relative' }}
        className="overflow-hidden rounded-md border border-gray-100 shadow-lg"
      >
        <Image src={src} alt={alt} layout="fill" objectFit="cover" />
      </div>
    </div>
  )
}

function ProjectCardButton({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded bg-blue-100 py-1 px-2 text-xs font-bold text-blue-800 hover:bg-blue-200"
    >
      {text}
    </a>
  )
}
