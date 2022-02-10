import layoutStyles from '../styles/layout.module.scss'
import Link from 'next/link'

export const navItems = ['Home', 'Skill', 'Experience', 'Project', 'About', 'Contact']

export default function Navbar() {
  return (
    <header className="fixed z-50 h-14 w-full border-b border-gray-200 bg-white">
      <div className={`${layoutStyles.navContainer} flex h-full items-center justify-between`}>
        {/* Logo */}
        <Link href="/">
          <a onClick={goToTop} className="">
            <h2 className="text-xl font-bold">Haikhal Fakhreez</h2>
          </a>
        </Link>

        <nav role="navigation">
          {/* Nav */}
          <ul className="hidden gap-x-8 sm:flex">
            {navItems.map((item) =>
              item === 'Home' ? (
                <li className="text-xs" key={item}>
                  <Link href="/">
                    <a onClick={goToTop}>{item}</a>
                  </Link>
                </li>
              ) : (
                <li className="text-xs" key={item}>
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export function goToTop(e: React.MouseEvent<HTMLElement>): void {
  e.preventDefault()
  window.history.replaceState({}, '', '/')
  window.scrollTo(0, 0)
}
