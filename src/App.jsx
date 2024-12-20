import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//open terminal and run: npm install react-router-dom
import { BrowserRouter, Routes, Route} from 'react-router-dom'


//open terminal and run: npm install react-hook-form
import Login from './Login/Login.jsx'
import SignUp from './Login/SignUp.jsx'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      
      </Routes>
    </BrowserRouter>

  )
}

export default App
