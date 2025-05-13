export function Announcement() {
  return (
    <div className="py-1 md:py-2 px-3 rounded-sm bg-indigo-50 dark:bg-indigo-800 text-[10px] md:text-xs border border-indigo-200 dark:border-indigo-700 my-10">
      📢 <span className="font-semibold">Announcement</span>: I have recently released an update to
      my{' '}
      <a
        href="https://ktm-schedule.vercel.app/"
        className="text-indigo-600 dark:text-indigo-300 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        KTM Schedule
      </a>{' '}
      project. Check it out!
    </div>
  )
}
