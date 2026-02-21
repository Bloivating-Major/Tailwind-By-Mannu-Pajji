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
    </div>
  )
}

export default App
