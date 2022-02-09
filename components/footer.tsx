import layoutStyles from '../styles/layout.module.scss'

export default function Footer() {
  return (
    <footer className="bg-gray-200 mt-4">
      <div className={`${layoutStyles.navContainer} relative p-4 text-center sm:p-0 sm:h-12`}>
        <p className="text-xs text-gray-500 sm:absolute sm:top-2/4 sm:left-2/4 sm:translate-x-[-50%] sm:translate-y-[-40%]">
          Made with ❤️ by Haikhal Fakhreez
        </p>
        <p className="text-xs text-gray-500 mt-1 sm:mt-0 sm:absolute sm:top-2/4 sm:right-4 sm:translate-y-[-40%]">
          Last Updated: January 2022
        </p>
      </div>
    </footer>
  )
}
