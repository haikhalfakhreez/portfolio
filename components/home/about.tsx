import { useEffect } from 'react'
import layoutStyles from '../../styles/layout.module.scss'
import markdownStyles from '../../styles/markdown.module.scss'
import ReactMarkdown from 'react-markdown'
import aboutPost from '../../lib/about'

export default function About() {
  // Add target and rel to link
  useEffect(() => {
    const markdownPostLinks = document.querySelectorAll('#aboutMarkdown a')
    markdownPostLinks.forEach((link) => {
      link.setAttribute('target', '_blank')
      link.setAttribute('rel', 'noopener noreferrer')
    })
  }, [])

  return (
    <div>
      <section className={`${layoutStyles.container} pb-8`}>
        <div className="text-center">
          <h2 className="section-title pt-20 pb-14" id="about">
            About
          </h2>
        </div>

        <p className="mb-8 text-center italic">
          I was recently featured on AdEasy&apos;s blog,{' '}
          <a
            href="https://blog.adeasy.co/how-i-learnt-to-code-in-3-months-and-got-hired"
            className="link text-blue-600"
          >
            read my story here
          </a>
          .
        </p>

        <div id="aboutMarkdown">
          <ReactMarkdown className={markdownStyles.markdown}>{aboutPost}</ReactMarkdown>
        </div>
      </section>
    </div>
  )
}
