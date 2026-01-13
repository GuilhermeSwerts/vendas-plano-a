import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { WhatIsIt } from './sections/WhatIsIt'
import { Problems } from './sections/Problems'
import { Solution } from './sections/Solution'
import { Benefits } from './sections/Benefits'
import { FinalSales } from './sections/FinalSales'

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <WhatIsIt />
        <Problems />
        <Solution />
        <Benefits />
        <FinalSales />
      </main>
      <Footer />
    </div>
  )
}

export default App
