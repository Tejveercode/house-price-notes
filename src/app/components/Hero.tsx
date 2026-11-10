import { glance, post } from '../content'
import { ArrowUpRight } from './Arrow'

export function Hero() {
  return (
    <section className="hero" id="top">
      <p className="hero__kicker mono">
        <span className="sq" aria-hidden="true" />
        {post.kicker}
        <span className="sep" aria-hidden="true">
          /
        </span>
        {post.kickerNote}
      </p>

      <h1 className="hero__title">
        <span className="line">
          <span>What actually</span>
        </span>
        <span className="line">
          <span>moves a house</span>
        </span>
        <span className="line">
          <span>
            price<span className="q">?</span>
          </span>
        </span>
      </h1>

      <p className="hero__standfirst">{post.standfirst}</p>

      <div className="hero__foot">
        <dl className="hero__meta">
          <div>
            <dt>Written by</dt>
            <dd>
              <a href={post.author.github} target="_blank" rel="noreferrer">
                {post.author.name}
              </a>
            </dd>
          </div>
          <div>
            <dt>Project</dt>
            <dd>BCA Data Mining, minor project</dd>
          </div>
          <div>
            <dt>Code</dt>
            <dd>
              <a href={post.repo} target="_blank" rel="noreferrer">
                {post.author.handle}/House-Price-Analysis
              </a>
            </dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>
              {post.stack} · {post.readTime}
            </dd>
          </div>
        </dl>
        <p className="hero__deck">{post.deck}</p>
      </div>

      <dl className="glance">
        {glance.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export function RepoLink({ children }: { children?: string }) {
  return (
    <a className="repo-link" href={post.repo} target="_blank" rel="noreferrer">
      {children ?? 'House-Price-Analysis'}
      <ArrowUpRight />
    </a>
  )
}
