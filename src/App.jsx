import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Home from './components/Home'
import Project from './components/Project'
import Skills from './components/Skills'
import NavigationBar from './components/NavigationBar'
import './App.css'


function App() {
  
  return (
    <>
      <NavigationBar/>  
      <Experience/>
      <Project/>
      <Skills/>
      <Contact/>
      <Home/>
      <About/>
    </>
  )
}

export default App
