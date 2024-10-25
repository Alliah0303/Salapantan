import About from "./pages/About"
import Home from "./pages/Home"
import { ParallaxProvider } from "react-scroll-parallax"
import Projects from "./Projects"
import Contact from "./pages/Contact"
import { useState, useEffect } from "react";
import PulseLoader from "react-spinners/SyncLoader";
import "./App.css"

function App() {
  const[loading , setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },4500)

  },[])

return (
    
    <div className='parent'>
    {
      loading?
      <PulseLoader className="loader"
        color={"#A020F0"}
        loading={loading}
        size={50}
      />
      :
      <div>
        <ParallaxProvider>
        <Home />
      </ParallaxProvider>
      <About />
      <Projects />
      <Contact />
      </div>
    }    
    </div>
  );
}

export default App;