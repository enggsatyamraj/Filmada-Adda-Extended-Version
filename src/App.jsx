import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import SignUpPage from './Pages/SignUpPage'
import NewUserPage from './Pages/NewUserPage'
import MainPage from './Pages/MainPage'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/homepage" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/newuser" element={<NewUserPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App