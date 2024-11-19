import Footer from "./components/footer/Footer.JSX"
import Header from "./components/header/Header"
import Social from "./components/social/Social"
import Start from "./components/start/Start"
import About from "./components/about/About"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {


  return (
    <>
    <Router>
    <Header/>
    <Routes>
    <Route path="/" element={<Start />} />
    <Route path="/about" element={<About />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
     <Social/>
     <Footer/>
    </Router>
    </>
  )
}

export default App
