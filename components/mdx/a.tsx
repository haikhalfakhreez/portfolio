import { SiteLink } from '@/components/site-link'

export function A({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <SiteLink as="a" href={href || ''} {...props} />
}
