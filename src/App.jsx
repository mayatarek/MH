import { useState } from 'react'
import './App.css'


//open terminal and run: npm install react-router-dom
import { BrowserRouter, Routes, Route} from 'react-router-dom'


//open terminal and run: npm install react-hook-form
import Login from './Login/Login.jsx'
import SignUp from './Login/SignUp.jsx'
import Navbar from './Common/navbar.jsx'
import Footer from './Common/Footer.jsx'
import Homepage from './Homepage/Homepage.jsx'
import ContactUs from './Contact Us/ContactUs.jsx'
import Rings from './ProductList/Rings/Rings.jsx'


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/rings" element={<Rings/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App
