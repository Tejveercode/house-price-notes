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
        <div className="foot__grid">
          <p>Written by Tejveer. BCA Data Mining, minor project.</p>
          <p>Set in Fraunces, Source Serif 4 and JetBrains Mono.</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
