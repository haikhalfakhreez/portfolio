import layoutStyles from '../styles/layout.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { navItems, goToTop } from './navbar'
import { contacts } from './home/contact'
import Newtab from './assets/newtab'

export default function Footer() {
  return (
    <footer className="bg-white pb-20">
      <div className="mb-20 flex justify-center">
        <div className="h-px w-[50px] shrink-0 bg-gray-200" role="separator"></div>
      </div>
      <div className={`${layoutStyles.navContainer} sm:flex`}>
        {/* Logo */}
        <div className="flex items-center sm:w-6/12 sm:flex-col sm:items-start">
          <Link href="/">
            <a onClick={goToTop} className="flex items-center justify-center">
              <Image src="/hf-logo.svg" height={35} width={35} alt="Haikhal Fakhreez Logo" />
            </a>
          </Link>
          <div className="ml-6 sm:ml-0">
            <p className="text-sm text-gray-500 sm:mt-4">
              Made with<span className="mx-1">❤️</span>by <span className="font-bold">Haikhal Fakhreez</span>
            </p>
            <p className="mt-1 text-xs text-gray-500">Last Updated: February 2022</p>
          </div>
        </div>

        <div className="mt-8 grid gap-y-8 sm:mt-0 sm:grow sm:grid-cols-2 sm:gap-y-0 sm:gap-x-3">
          {/* Nav */}
          <FooterList title="Website">
            <ul>
              {navItems.map((item: string) =>
                item === 'Home' ? (
                  <li className="pt-3 text-sm" key={item}>
                    <Link href="/">
                      <a onClick={goToTop} className="text-secondary link">
                        {item}
                      </a>
                    </Link>
                  </li>
                ) : (
                  <li className="pt-3 text-sm" key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-secondary link">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </FooterList>

          {/* Socials */}
          <FooterList title="Socials">
            <ul>
              {contacts.map((item) => (
                <li className="pt-3 text-sm" key={item.name}>
                  <a href={item.url} className="text-secondary link" target="_blank" rel="noopener noreferrer">
                    {item.name}
                    <Newtab size={10} color="#687076" className="ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </FooterList>
        </div>
      </div>
    </footer>
  )
}

interface FooterListType {
  children: React.ReactNode
  title: string
}

function FooterList({ children, title }: FooterListType) {
  return (
    <div>
      <h4 className="text-sm font-bold">{title}</h4>
      {children}
    </div>
  )
}
