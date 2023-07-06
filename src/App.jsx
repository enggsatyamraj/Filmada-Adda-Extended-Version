import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import MainPage from './Pages/MainPage'
import TvShow from './pages/TvShow'
import Movie from './pages/Movie'
import NewNavbar from './components/NewNavbar'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NewNavbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/tvshows" element={<TvShow/>}/>
        <Route path="/movies" element={<Movie/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App