import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Experiences from "./components/Experiences"
import PlanTrip from "./components/PlanTrip"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Experiences />
        <PlanTrip />
      </main>
      <Footer />
    </div>
  )
}

export default App
