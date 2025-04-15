import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Services from "./components/Services"


const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark p-[1rem]">
      <Navbar/> 
      <HeroSection/>
      <Services/>
    </main>
  )
}

export default App
