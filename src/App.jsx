import React from 'react'
import style from "./App.module.css"
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Register from "./components/userpage/Register.jsx"
import Admin from "./components/adminpage/Admin.jsx"
import Adminlogin from "./components/adminpage/Adminlogin.jsx"
import Adminmanage from './components/adminpage/Adminmanage.jsx'

import Userlogin from "./components/userpage/Userlogin.jsx"
import Quiz from "./components/userpage/Quiz.jsx"
import Questionspaper from './components/questionspage/Questionspaper.jsx'





const App = () => {
  return (
    <div className={style.Main_body}>
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Register /> }/>
{/* Admin site */}
        <Route path="/admin" element={<Admin /> }/>
        <Route path="/adminlogin" element={<Adminlogin /> }/>
        <Route path="/adminmanage" element={<Adminmanage /> }/>

{/* User login site & Quiz site */}
        <Route path="/userlogin" element={<Userlogin /> }/>
        <Route path="/quiz" element={<Quiz /> }/>
        <Route path="/questionspaper" element={<Questionspaper /> }/>
        
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App