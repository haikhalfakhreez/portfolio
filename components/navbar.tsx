import layoutStyles from '../styles/layout.module.scss'

export const navItems = ['Home', 'Skill', 'Experience', 'Project', 'About', 'Contact']

export default function Navbar() {
  return (
    <header className="fixed z-50 h-14 w-full border-b border-gray-200 bg-white">
      <div className={`${layoutStyles.navContainer} flex h-full items-center justify-between`}>
        {/* Logo */}
        <a href="/" onClick={goToTop} className="ml-6">
          <h2 className="text-xl font-bold">Haikhal Fakhreez</h2>
        </a>

        <nav role="navigation">
          {/* <Burger /> */}

          {/* Nav */}
          <ul className="hidden gap-x-8 sm:flex">
            {/* <input type="checkbox" /> */}
            {navItems.map((item) =>
              item === 'Home' ? (
                <li className="text-xs" key={item}>
                  <a href="/" onClick={goToTop}>
                    {item}
                  </a>
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

function Burger() {
  return (
    <>
      <div id="menuToggle">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Info</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
          <a href="https://erikterwan.com/" target="_blank">
            <li>Show me more</li>
          </a>
        </ul>
      </div>

      <style jsx>{`
        .burger span {
          width: 25px;
          height: 2px;
          background-color: #000;
          margin: 6px 0;
          transition: 0.4s;
          display: block;
        }

        .burger.open span:first-child {
          -webkit-transform: rotate(-45deg) translate(-9px, 6px);
          transform: rotate(-45deg) translate(-4px, 4px);
        }

        .burger.open span:last-child {
          -webkit-transform: rotate(45deg) translate(-8px, -8px);
          transform: rotate(45deg) translate(-4px, -4px);
        }
      `}</style>
    </>
  )
}

function toggleBurger(e: React.MouseEvent<HTMLElement>): void {
  e.stopPropagation()
  e.currentTarget.classList.toggle('open')
}

export function goToTop(e: React.MouseEvent<HTMLElement>): void {
  e.preventDefault()
  window.history.replaceState({}, '', '/')
  window.scrollTo(0, 0)
}
