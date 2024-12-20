import { useState } from 'react'
import './App.css'


//open terminal and run: npm install react-router-dom
import { BrowserRouter, Routes, Route} from 'react-router-dom'


//open terminal and run: npm install react-hook-form
import Login from './Login/Login.jsx'
import SignUp from './Login/SignUp.jsx'
import Navbar from './Common/Navbar.jsx'
import Footer from './Common/Footer.jsx'
import Homepage from './Homepage/Homepage.jsx'


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/homepage" element={<Homepage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App
