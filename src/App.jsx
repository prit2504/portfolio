import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Contect from './components/Contect'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'



const App = () => {
  return (
    <div className='bg-gradient-to-br from-blue-500 via-purple-500/80 to-yellow-200/70 min-h-screen text-white'>

    <Router>
      <Navbar/>
      <Routes>
        <Route path='/portfolio/' element={<Hero/>}/>
        <Route path='/portfolio/about' element={<About/>}/>
        <Route path='/portfolio/skills' element={<Skills/>}/>
        <Route path='/portfolio/projects' element={<Projects/>}/>
        <Route path='/portfolio/contact' element={<Contect/>}/>
      </Routes>
    </Router>


    </div>
  )
}

export default App