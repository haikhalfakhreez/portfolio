import layoutStyles from '../../styles/layout.module.scss'
import Newtab from '../assets/newtab'

const experiences = [
  {
    name: 'Involve Asia',
    url: 'https://app.involve.asia',
    period: 'Nov 2020 - Current',
    techStack: ['Vue', 'Laravel', 'jQuery', 'Bootstrap', 'SCSS', 'DataTable'],
    description:
      'Involve Asia is an affliate marketing platform based in Malaysia. My main role is to maintain current dashboard by migrating legacy code into newer formats and implement new features on top of existing one.',
  },
  {
    name: 'AdEasy',
    url: 'https://adeasy.co',
    period: 'Jan 2020 - Oct 2020',
    techStack: ['Vue', 'Laravel', 'jQuery', 'Bootstrap', 'SCSS', 'Google Map API', 'Hubspot'],
    description:
      'AdEasy is an online marketplace for buying ad space in Malaysia. As the only front-end developer, my main role is to revamp old pages based on designer’s mockup. Pages revamped include:',
    pages: [
      {
        name: 'Homepage',
        url: 'https://adeasy.co',
      },
      {
        name: 'Astro Power Hour',
        url: 'https://adeasy.co/promo/astro-power-hour-tv',
      },
      {
        name: 'Astro Radio',
        url: 'https://adeasy.co/promo/astro-radio',
      },
      {
        name: 'AdEasy Extend',
        url: 'https://adeasy.co/extend',
      },
      {
        name: 'AdEasy PLUS',
        url: 'https://adeasy.co/adeasy-plus',
      },
      {
        name: 'Billboard Value Packages',
        url: 'https://adeasy.co/promo/billboard-value-packages',
      },
      {
        name: 'Blog (Hubspot HubL)',
        url: 'https://blog.adeasy.co',
      },
    ],
  },
]

const bothExperiences: string[] = [
  `<strong>Translate</strong> UI/UX design wireframes (from Figma & Adobe XD) to code.`,
  `<strong>Revamp</strong> and <strong>improve</strong> current website using Vue and Laravel (MVC pattern).`,
  `<strong>Validate</strong> input before submitting to back-end.`,
  `<strong>Write</strong> reusable code and libraries.`,
  `<strong>Optimize</strong> application for maximum loading speed and accessibility (using Google Lighthouse).`,
  `<strong>Ensure</strong> website responsive to mobile devices.`,
  `<strong>Maintain</strong> brand consistency throughout the design.`,
  `<strong>Collaborate</strong> with Back-end Developers and Product Manager in Agile principles.`,
  `<strong>Handle</strong> some back-end logic, mainly on Controllers, Route, and Middleware.`,
  `<strong>Rewrite</strong> old codes to be more modular and dynamic.`,
]

export default function Experience() {
  return (
    <div>
      <section className={`${layoutStyles.container} pb-8`}>
        <div className="text-center">
          <h2 className="section-title pt-20 pb-14" id="experience">
            Experience
          </h2>
        </div>

        <div>
          {/* Work experience */}
          {experiences.map((item) => (
            <div className="mb-14" key={item.name}>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="link">
                <h3 className="text-xl font-bold">
                  <span>{item.name}</span> <Newtab size={14} />
                </h3>
              </a>
              <p className="text-sm text-gray-500">{item.period}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {item.techStack.map((tech) => (
                  <li className="rounded-md bg-gray-700 px-2 py-[2px] text-xs text-white" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
              <p className="mt-5">{item.description}</p>
              {item.pages && (
                <ul className="mt-4">
                  {item.pages.map((page) => (
                    <li className="py-1" key={page.name}>
                      <a href={page.url} target="_blank" rel="noopener noreferrer" className="link text-blue-600">
                        {page.name}{' '}
                        <Newtab
                          size={12}
                          color="rgb(37 99 235 / var(--tw-text-opacity))"
                          className="translate-y-[-1px]"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Both experience */}
          <h3 className="text-xl font-bold">Both my role as a Front-end Engineer includes:</h3>
          <ul className="mt-4 list-disc pl-4">
            {bothExperiences.map((item) => (
              <li key={item} className="leading-7" dangerouslySetInnerHTML={{ __html: item }}></li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
