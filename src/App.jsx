import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'


const App = () => {
  return (
    <div className='text-white main-sec'>
      <section className='sec'>
        <Hero />
      </section>

      <section id='about' className='sec'>
          <About/>
      </section>

      <section id='skills' className='sec'>
          <Skills/>
      </section>

      <section id='projects' className='sec'>
          <Projects/>
      </section>

      <section id='contact-me' className='sec'>
          Contact Me
      </section>


    </div>
  )
}

export default App