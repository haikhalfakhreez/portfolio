import type { NextPage } from 'next'
import Head from 'next/head'
import Homepage from '../components/home'
import Skill from '../components/home/skill'
import Experience from '../components/home/experience'
import Project from '../components/home/project'
import About from '../components/home/about'
import Contact from '../components/home/contact'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Haikhal Fakhreez</title>
        <meta name="description" content="Haikhal Fakhreez's personal portfolio" />
        <link rel="icon" href="/hf-logo.svg" />
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
