import { post } from '../content'
import { ArrowUpRight } from './Arrow'

export function Footer() {
  return (
    <footer className="foot">
      <div className="page">
        <p className="foot__kicker">The code</p>
        <a className="foot__link" href={post.repo} target="_blank" rel="noreferrer">
          <span>
            Tejveercode
            <br />
            /House-Price-Analysis
          </span>
          <ArrowUpRight size={20} />
        </a>
        <div className="foot__row">
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
