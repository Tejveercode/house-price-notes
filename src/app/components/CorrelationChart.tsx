import type { CSSProperties } from 'react'

import { features } from '../content'
import { useInView } from '../hooks'

const SCALE = 0.75

export function CorrelationChart() {
  const { ref, seen } = useInView<HTMLDivElement>()

  return (
    <div ref={ref} className={`chart${seen ? ' is-in' : ''}`}>
      {features.map((feature, index) => {
        const negative = feature.value < 0
        const width = (Math.abs(feature.value) / SCALE) * 50
        return (
          <div className="chart__row" key={feature.label}>
            <span className="chart__label">{feature.label}</span>
            <div className="chart__track">
              <span
                className={`chart__bar${negative ? ' chart__bar--neg' : ''}`}
                style={{ '--w': width, '--i': index } as CSSProperties}
              />
            </div>
            <span className={`chart__value${negative ? ' chart__value--neg' : ''}`}>
              {negative ? '−' : '+'}
              {Math.abs(feature.value).toFixed(3)}
            </span>
          </div>
        )
      })}
      <div className="chart__axis" aria-hidden="true">
        <div>
          <span>against price</span>
          <span>0</span>
          <span>with price</span>
        </div>
      </div>
    </div>
  )
}
