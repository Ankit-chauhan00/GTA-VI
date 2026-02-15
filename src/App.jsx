import React from 'react'
import Hero from './sections/Hero'
import NavBar from './sections/NavBar'
import FirstVedio from './sections/FirstVedio'
import Jason from './sections/Jason'
import SecondVedio from './sections/SecondVedio'
import Lucia from './sections/Lucia'

const App = () => {
  return (
    <main>
      <NavBar/>
      <Hero/>

      <FirstVedio/>
      {/* jason */}
      <Jason/>

      <SecondVedio/>
      {/* Lucia */}
      <Lucia/>
    </main>
  )
}

export default App