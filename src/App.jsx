import About from "./pages/About"
import Home from "./pages/Home"
import { ParallaxProvider } from "react-scroll-parallax"
import Projects from "./Projects"
import Contact from "./pages/Contact"

function App() {

  return (
    <>
      <ParallaxProvider>
        <Home />
      </ParallaxProvider>
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
