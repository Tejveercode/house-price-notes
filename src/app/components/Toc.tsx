import { sectionIds, toc } from '../content'
import { useActiveSection } from '../hooks'

export function Toc() {
  const active = useActiveSection(sectionIds)

  return (
    <nav className="rail" aria-label="Contents">
      <p className="rail__title">Contents</p>
      <ol>
        {toc.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} aria-current={active === item.id ? 'true' : undefined}>
              <span>{item.num || '—'}</span>
              {item.title}
            </a>
          </li>
        ))}
      </ol>
      <a className="rail__top" href="#top">
        Back to top ↑
      </a>
    </nav>
  )
}

export function TocInline() {
  return (
    <details className="toc-inline">
      <summary>Contents</summary>
      <ol>
        {toc.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>
              <span>{item.num || '—'}</span>
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </details>
  )
}
