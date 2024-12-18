
import React from 'react'
import  './App.css'
import { Routes,Route,Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import NoPage from './pages/NoPage'
import EditorPage from './pages/EditorPage'

const App = () => {
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <div>
        
          <Routes>
            <Route path='/' element={isLoggedIn ? <HomePage/> : <Navigate to="/login"/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/editior/:projectID' element={isLoggedIn ? <EditorPage/>:<Navigate to="/login"/>}/>
            <Route path="*" element={isLoggedIn ? <NoPage />: <Navigate to="/login"/>} />
         
           
          </Routes>
    </div>
  )
}

export default App
