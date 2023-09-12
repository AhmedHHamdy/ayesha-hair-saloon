import { useState } from 'react'
import './App.css'
import HomePage from '../src/pages/HomePage'
import Booking from '../src/pages/Booking'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/booking' element={<Booking />} />
    </Routes>
  </BrowserRouter>

  )
}

export default App
