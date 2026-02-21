import Container from "./components/Container"
import { Hero } from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="layout ">
      <Container>
        <Navbar/>
        <Hero />
      </Container>
      <div className="layout-lines-container">
        <div className="left-line" />
        <div className="right-line" />
      </div>
      <div className="hero-image-container">
        <div className="horizontal-line" />
        <img src="./hero-ui-v6.webp" className="hero-image"/>
      </div>
    </div>
  )
}

export default App
