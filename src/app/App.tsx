import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Post } from './components/Post'

export function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to the article
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Post />
      </main>
      <Footer />
    </>
  )
}
