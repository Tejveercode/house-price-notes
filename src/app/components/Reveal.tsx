import type { ReactNode } from 'react'

import { useInView } from '../hooks'
import { cx } from '../lib/cx'

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { ref, seen } = useInView<HTMLDivElement>()
  return (
    <div ref={ref} className={cx('reveal', seen && 'is-in', className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
