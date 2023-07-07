import React, { useEffect, useState } from 'react'
import request from '../Request';
import '../App.css'

const MainPage = () => {
  
  // const img_url = "https://image.tmdb.org/t/p/"

  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  const fetchPopularMovies = async () => {
    try{
      const response = await fetch(request.requestPopular);
      const data = await response.json();
      setMovies(data?.results);
    }
    catch(e){
      console.log(e)
    }
  }

  useEffect(()=>{
    fetchPopularMovies();
  },[])

  console.log(movie)


  return (
    <div className='w-full bg-black'>
      <div className='max-w-[1280px] w-[100%] md:h-[100vh] h-[50%] mx-auto relative'>
      <img src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} alt={movie?.title} 
        className='w-[100%] h-[100%] object-cover'/>
      <div className='absolute md:top-[20%] top-[30%]'>
        <p className='text-white font-bold text-3xl'>{movie?.title}</p>
      </div>
      </div>

    </div>
  )
}

export default MainPage

// {
//   "adult": false,
//   "backdrop_path": "/wRxLAw4l17LqiFcPLkobriPTZAw.jpg",
//   "genre_ids": [
//       28,
//       53
//   ],
//   "id": 697843,
//   "original_language": "en",
//   "original_title": "Extraction 2",
//   "overview": "Tasked with extracting a family who is at the mercy of a Georgian gangster, Tyler Rake infiltrates one of the world's deadliest prisons in order to save them. But when the extraction gets hot, and the gangster dies in the heat of battle, his equally ruthless brother tracks down Rake and his team to Vienna, in order to get revenge.",
//   "popularity": 1422.453,
//   "poster_path": "/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
//   "release_date": "2023-06-09",
//   "title": "Extraction 2",
//   "video": false,
//   "vote_average": 7.6,
//   "vote_count": 1168
// }