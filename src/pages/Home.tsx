import { Header } from './../components/Header'
import { Footer } from './../components/Footer'
import { Hero } from '../components/sections/Hero'
import { WhatIsIt } from '../components/sections/WhatIsIt'
import { Problems } from '../components/sections/Problems'
import { Solution } from '../components/sections/Solution'
import { Benefits } from '../components/sections/Benefits'
import { FinalSales } from '../components/sections/FinalSales'

function Home() {
    return (
        <div className="min-h-screen">
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

export default Home
