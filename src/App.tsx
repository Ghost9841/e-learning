import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Services from "./components/Services"


const App = () => {
  return (
    <main className="overflow-x-hidden w-full min-h-screen mr-10 bg-white text-dark p-1">
      <Navbar/> 
      <HeroSection/>
      <Services/>
    </main>
  )
}

export default App
