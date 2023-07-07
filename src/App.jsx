import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import MainPage from './Pages/MainPage'
import Movie from './Pages/Movie'
import Tv from './Pages/Tv'
import NewNavbar from './components/NewNavbar'
import Details from './Pages/Details'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NewNavbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/tvshows" element={<Tv/>}/>
        <Route path="/movies" element={<Movie/>}/>
        <Route path="/popularmovies/:id" element={<Details/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App