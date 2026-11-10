import { post } from '../content'
import { useScrollProgress } from '../hooks'
import { ArrowUpRight } from './Arrow'

export function Header() {
  const progress = useScrollProgress()

  return (
    <header className="site-head">
      <div className="site-head__inner">
        <a href="#top" className="wordmark">
          {post.author.name}
          <span>Data Mining notes</span>
        </a>
        <nav className="site-head__nav" aria-label="Elsewhere">
          <a href={post.repo} target="_blank" rel="noreferrer">
            Repository
            <ArrowUpRight />
          </a>
        </nav>
      </div>
      <div className="progress" aria-hidden="true">
        <span ref={progress} />
      </div>
    </header>
  )
}
