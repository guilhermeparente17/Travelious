import { useState } from "react"
import Header from "./components/Header/Header.component"
import HeroSection from "./components/HeroSection/HeroSection"
import SearchTravel from "./components/SerachTravel/SearchTravel"
import Sidebar from "./components/Sidebar/Sidebar"
import GlobalStyle from "./GlobalStyle"

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }
  return (
    <div>
      <GlobalStyle />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroSection />
      <SearchTravel />
    </div>
  )
}

export default App
