export function Resume() {
  return (
    <div className="my-10 rounded-sm border border-indigo-200 bg-indigo-50 px-3 py-1 text-[10px] md:py-2 md:text-xs dark:border-indigo-700 dark:bg-indigo-800">
      <span className="font-semibold">Resume: </span>
      <a
        href="/resume-haikhalfakhreez-20250513.pdf"
        className="text-indigo-600 hover:underline dark:text-indigo-300"
        download
      >
        download (Updated: May 2025)
      </a>
    </div>
  );
}
