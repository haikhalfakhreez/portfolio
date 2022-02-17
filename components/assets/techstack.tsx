export default function TechStack({ list, className }: { list: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {list.map((item) => (
        <li className="rounded-md bg-gray-700 px-2 py-[2px] text-xs text-white" key={item}>
          {item}
        </li>
      ))}
    </ul>
  )
}
