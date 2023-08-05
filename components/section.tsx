export function Section({
  title,
  children,
}: {
  title?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <section className="space-y-3 mt-10">
      {title && <h2 className="font-medium">{title}</h2>}
      {children}
    </section>
  )
}
