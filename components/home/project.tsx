import layoutStyles from '../../styles/layout.module.scss'
import Newtab from '../assets/newtab'
import Image from 'next/image'

const projects = [
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
                  <div className="mt-1 flex gap-3">
                    {item.codeUrl && (
                      <a
                        href={item.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-200 py-1 px-2 text-xs text-gray-500 hover:bg-gray-300"
                      >
                        See Code
                      </a>
                    )}
                    {item.figmaUrl && (
                      <a
                        href={item.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-200 py-1 px-2 text-xs text-gray-500 hover:bg-gray-300"
                      >
                        See Figma
                      </a>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-secondary pt-4">{item.description}</p>
                </div>

                {/* Tech stack */}
                <ul className="mt-4 flex gap-2">
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
