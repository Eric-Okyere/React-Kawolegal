import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Buy from './components/Buy'
import Home from './components/Home'
import MoreInfo from './components/MoreInfo'

import Nav from "./components/Nav"
import Sell from './components/Sell'

function AllinOne() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
   
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/buy' element={<Buy />} />
    <Route path='/sell' element={<Sell />} />
    <Route path='/sell:id' element={<MoreInfo />} />

   
    </Routes>
    </BrowserRouter>
  )
}

export default AllinOne