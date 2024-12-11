import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import HomePage from './Pages/HomePage.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import DefaultLayout from './Layout/DefaultLayout.jsx'
import NotFound from './Pages/NotFound.jsx'
import BlankLayout from './Layout/BlankLayout.jsx'
import Index from './Pages/SecondPages/PostList.jsx'
import Show from './Pages/SecondPages/PostPage.jsx'

import GlobalContext from './context/PostsContext.js'

function App() {

  const [characters, setCharacters] = useState()

  return (
    <GlobalContext.Provider value={{ characters, setCharacters }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/characters">
              <Route path='' element={<Index />}></Route>
              <Route path=':id' element={<Show />}></Route>
            </Route>
          </Route>
          <Route element={<BlankLayout />}>
            <Route path='*' Component={NotFound}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider >
  )
}

export default App
