import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export const SiteLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
    (
      | {
          as?: 'a'
          href: string
        }
      | (Omit<React.ComponentPropsWithoutRef<typeof Link>, 'as'> & {
          as: 'link'
          href: string | URL
        })
    )
>(({ className, as = 'a', ...props }, ref) => {
  return as === 'link' ? (
    <Link
      ref={ref}
      {...props}
      className={cn(
        'underline transition-colors hover:text-black text-gray-500 dark:text-gray-400 dark:hover:text-white',
        className
      )}
    />
  ) : (
    <a
      ref={ref}
      {...props}
      className={cn(
        'underline transition-colors hover:text-black text-gray-500 dark:text-gray-400 dark:hover:text-white',
        className
      )}
    />
  )
})
SiteLink.displayName = 'SiteLink'
