import { useState } from 'react'

import { commands, menu, metrics, priceStats } from '../content'
import { RepoLink } from './Hero'
import { CorrelationChart } from './CorrelationChart'
import { Reveal } from './Reveal'
import { Toc, TocInline } from './Toc'

function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <div className="section__head">
      <span className="section__num" aria-hidden="true">
        {num}
      </span>
      <h2 className="section__title">{title}</h2>
    </div>
  )
}

function MenuPanel() {
  return (
    <figure className="figure">
      <figcaption className="figure__cap">
        <em>The menu</em>
        <span>{menu.length} options</span>
      </figcaption>
      <div className="menu">
        <div className="menu__top">
          <span>main.py</span>
          <span>menu</span>
        </div>
        <ol className="menu__rows">
          {menu.map((item, index) => (
            <li key={item} className={`menu__row${index === menu.length - 1 ? ' menu__row--all' : ''}`}>
              <span className="menu__n">{index + 1}</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  )
}

function SplitPanel() {
  return (
    <figure className="figure">
      <figcaption className="figure__cap">
        <em>Train and test split</em>
        <code>random_state = 42</code>
      </figcaption>
      <div className="split">
        <div className="split__part split__part--train">
          <strong>331</strong>
          <span>rows to train on</span>
        </div>
        <div className="split__part split__part--test">
          <strong>83</strong>
          <span>rows to test</span>
        </div>
      </div>
    </figure>
  )
}

function CommandBlock({ label, lines }: { label: string; lines: string[] }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(lines.join('\n'))
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard access can be blocked; the commands stay selectable by hand.
    }
  }

  return (
    <div className="cmd">
      <div className="cmd__bar">
        <span className="cmd__label">{label}</span>
        <button type="button" className="cmd__copy" onClick={copy} aria-label={`Copy the ${label} commands`}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre>
        <code>{lines.join('\n')}</code>
      </pre>
    </div>
  )
}

export function Post() {
  return (
    <article className="article">
      <Toc />
      <div className="article__body">
        <TocInline />

        <section className="section" id="data">
          <SectionHead num="01" title="The data" />
          <div className="prose">
            <p>
              I used the Real Estate Valuation dataset from the UCI Machine Learning Repository. It has 414 records from the New Taipei City area in
              Taiwan. Each row gives the transaction date, the age of the house, the distance to the nearest MRT (metro) station in metres, the number
              of convenience stores nearby, the latitude and longitude, and the price.
            </p>
            <p>
              Price is in units of 10,000 New Taiwan Dollars per ping, and a ping is about 3.3 square metres. It is not rupees, so please don’t read
              the numbers as INR. If <code>dataset/housing.csv</code> is missing, <code>main.py</code> downloads it from the UCI server by itself.
            </p>
          </div>
        </section>

        <section className="section" id="program">
          <SectionHead num="02" title="How the program works" />
          <div className="prose">
            <p>
              Running <code>main.py</code> shows a menu. You can load and clean the data, see price statistics, look at how each feature relates to
              price, run the correlation analysis, save graphs, train and evaluate the model, or type in the details of a house and get a predicted
              price. Option 8 runs everything in one go, which is what I use for demos.
            </p>
          </div>
          <Reveal>
            <MenuPanel />
          </Reveal>
          <div className="prose">
            <p>
              Cleaning is basic: remove duplicates, deal with missing values, and drop the id column because it says nothing about price. After that I
              split the data 80/20, which gives 331 rows for training and 83 for testing. <code>random_state</code> is set to 42, so you get the same
              numbers I did.
            </p>
          </div>
          <Reveal>
            <SplitPanel />
          </Reveal>
        </section>

        <section className="section" id="findings">
          <SectionHead num="03" title="What the data showed" />
          <div className="prose">
            <p>Prices average 37.98. The cheapest house is 7.60 and the most expensive is 117.50. Here is how strongly each feature moves with price:</p>
          </div>

          <dl className="stats">
            {priceStats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>

          <Reveal>
            <figure className="figure">
              <figcaption className="figure__cap">
                <em>Correlation with price</em>
                <span>six features</span>
              </figcaption>
              <CorrelationChart />
            </figure>
          </Reveal>

          <div className="prose">
            <p>
              Distance to the nearest MRT station has the strongest link at -0.674. The closer the house is to the metro, the higher the price.
              Convenience stores come next at +0.571. Latitude and longitude (+0.546 and +0.523) mostly tell us that location counts. House age is a
              weaker factor than you might guess at -0.211, and the transaction date barely matters at +0.088.
            </p>
          </div>
        </section>

        <section className="section" id="model">
          <SectionHead num="04" title="The prediction model" />
          <div className="prose">
            <p>
              I used Linear Regression from Scikit-learn because it is simple and easy to explain in a viva. On the 83 test houses it scored:
            </p>
          </div>

          <Reveal>
            <figure className="figure">
              <figcaption className="figure__cap">
                <em>Test set scores</em>
                <span>83 houses</span>
              </figcaption>
              <dl className="metrics">
                {metrics.map((metric) => (
                  <div key={metric.key}>
                    <dt>
                      {metric.key}
                      {metric.sup && <sup>{metric.sup}</sup>}
                    </dt>
                    <dd>
                      {metric.value}
                      <span className="metrics__note">{metric.note}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </figure>
          </Reveal>

          <div className="prose">
            <p>
              For plain Linear Regression on 414 rows, that is a decent result. I would not use it to price a real house, though.
            </p>
          </div>
        </section>

        <section className="section" id="limits">
          <SectionHead num="05" title="What it can’t tell you" />
          <div className="prose">
            <p>
              The dataset is small and comes from one place, so these patterns may not hold in other cities. Linear Regression only fits straight-line
              relationships, and about 32% of the variation in price is still unexplained. The data has no floor area, building condition or
              neighbourhood details, and those matter a lot in practice. I also used a single train/test split, so the scores depend a little on which
              rows ended up in the test set. If I continue this, I would try a Random Forest and cross-validation.
            </p>
          </div>
        </section>

        <section className="section" id="run">
          <SectionHead num="06" title="Run it yourself" />
          <div className="prose">
            <p>
              You need Python 3.10 or newer. On Windows, tick “Add python.exe to PATH” while installing. Then open Command Prompt in the project
              folder:
            </p>
          </div>
          <div className="commands">
            {commands.map((command) => (
              <CommandBlock key={command.label} label={command.label} lines={command.lines} />
            ))}
          </div>
          <div className="prose">
            <p>
              On Linux or macOS use <code>python3</code> and <code>source venv/bin/activate</code>. The libraries are Pandas, NumPy, Matplotlib and
              Scikit-learn. No other framework is involved.
            </p>
          </div>
        </section>

        <section className="section" id="summing-up">
          <SectionHead num="07" title="Summing up" />
          <div className="closing">
            <p className="closing__lead">
              In this dataset, being close to the metro and to shops matters more than how new the building is, and a basic Linear Regression model can
              account for about two thirds of the price differences.
            </p>
            <div className="prose">
              <p>
                The code, a sample console output and the project report are all in the repository: <RepoLink />
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}
