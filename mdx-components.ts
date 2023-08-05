import type { MDXComponents } from 'mdx/types'
import { H1 as h1 } from '@/components/mdx/h1'
import { A as a } from '@/components/mdx/a'
import { P as p } from '@/components/mdx/p'
import { Strong as strong } from '@/components/mdx/strong'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1,
    a,
    p,
    strong,
  }
}
