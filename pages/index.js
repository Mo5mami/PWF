
import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Resume from '../components/Resume/Resume'
import Contact from '../components/Contact/Contact'
import Projects from '../components/Projects/Projects'
export default function Home() {
  return (

    <React.Fragment>

    <Header></Header>

    <Hero></Hero>
  
  <main id="main">

    <About></About>
    {/*<Resume></Resume>*/}
    <Projects></Projects>
    <Contact></Contact>
    
    
  </main>

  </React.Fragment>
  )
}
