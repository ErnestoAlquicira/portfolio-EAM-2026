import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Freelance from "./pages/Freelance"
import Photography from "./pages/Photography"
import Webdesign from "./pages/Webdesign"
import Postproduction from "./pages/Postproduction"
import Contact from "./pages/Contact"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/freelance" element={<Freelance />} />
        <Route path="/webdesign" element={<Webdesign />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/postproduction" element={<Postproduction />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
