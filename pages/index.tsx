import type { NextPage } from 'next'
import Head from 'next/head'
import Homepage from '../components/home'
import Skill from '../components/home/skill'
import Experience from '../components/home/experience'
import Project from '../components/home/project'
import About from '../components/home/about'
import Contact from '../components/home/contact'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const canonicalURL = useRouter()
  return (
    <>
      <Head>
        <title>Portfolio | Haikhal Fakhreez</title>
        <meta name="description" content="Haikhal Fakhreez's personal website" />
        <meta name="keywords" content="Portfolio, Haikhal Fakhreez, Web developer, Front-end" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.haikhalfakhreez.com/" />
        <meta property="og:title" content="Portfolio | Haikhal Fakhreez" />
        <meta property="og:description" content="Haikhal Fakhreez's personal website" />
        <meta property="og:image" content="/haikhal-portfolio.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio | Haikhal Fakhreez" />
        <meta name="twitter:description" content="Haikhal Fakhreez's personal website" />
        <meta name="twitter:site" content="@ekaliacid" />
        <meta name="twitter:creator" content="@ekaliacid" />
        <meta name="twitter:image" content="/haikhal-portfolio.png" />
        <meta name="twitter:alt" content="Portfolio | Haikhal Fakhreez" />

        <link rel="canonical" href="https://www.haikhalfakhreez.com/" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Homepage />
      <Skill />
      <Experience />
      <Project />
      <About />
      <Contact />
    </>
  )
}

export default Home
