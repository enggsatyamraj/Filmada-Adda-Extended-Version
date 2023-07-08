import React, { useEffect, useState } from 'react'
import request from '../Request';
import '../App.css'
import {BsFillPlayFill} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom';
import {AiOutlineHeart,AiOutlineSave} from 'react-icons/ai'

const MainPage = () => {

  
  
  // const img_url = "https://image.tmdb.org/t/p/"

  const [movies, setMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying ,setNowPlaying] = useState([]);
  const [upComing, setUpComing] = useState([]);

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

  const fetchTopRated = async () => {
    try{
      const response = await fetch(request.requestTopRated);
      const data = await response.json();
      setTopRated(data?.results);
    }
    catch(e){
      console.log(e)
    }
  }

  const fetchNowPlaying = async () => {
    try{
      const response = await fetch(request.requestNowPlaying);
      const data = await response.json();
      setNowPlaying(data?.results);
    }
    catch(e){
      console.log(e)
    }
  }

  const fetchUpComing = async () => {
    try{
      const response = await fetch(request.requestUpcoming);
      const data = await response.json();
      setUpComing(data?.results);
    }
    catch(e){
      console.log(e)
    }
  }





  

  useEffect(()=>{
    fetchPopularMovies();
    fetchTopRated();
    fetchNowPlaying();
    fetchUpComing();
  },[])

  console.log(movie)

  const para = (str, num) => {
    if(str?.length > num){
      return str.slice(0,num)+"...";
    }
    else{
      return str
    }
  }

  console.log(movies)

  return (
    <div className='w-full bg-black'>
      <Link to={`/popularmovies/${movie?.id}`}>
      <div className='max-w-[1280px] w-[100%] md:h-[100vh] h-[50%] mx-auto relative cursor-pointer'>
      
      <img src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} alt={movie?.title} 
        className='w-[100%] h-[100%] object-cover'/>
      
      <div className='absolute right-0 top-0 bottom-0 left-0 bg-gradient-to-r from-black to-transparent'></div>
      <div className='px-2 absolute md:top-[50%] top-[44%]'>
        <p className='text-white font-bold w-[80%] text-3xl md:w-[40%]  mb-3'>{movie?.title}</p>
        <div className='flex sm-[30px] items-center gap-2'>
          <button className='bg-white flex items-center px-4 py-1 rounded gap-1 cursor-pointer'>
            <BsFillPlayFill/>
            Play</button>
          <button className='bg-gray-800 flex items-center px-4 py-1 rounded text-white gap-1 cursor-pointer'>
            <AiOutlinePlus/>
            My List</button>
        </div>
        <p className='text-gray-500 text-[0.85rem] mt-[20px]'>{movie?.release_date}</p>
        <p className='text-white mt-6 md:mt-[20px]
        sm:w-[70%] md:w-[48%] '>{
          para(movie?.overview,150)
        }</p>
      </div>
      </div>
      </Link>
      
      <div className='px-2'>
        <h2 className='text-white font-bold md:text-3xl text-2xl py-3'>
          Popular Movies
        </h2>
        <div className='w-full flex gap-3 h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
  {
    movies.map((m) => (
      <Link to={`/popularmovies/${m.id}`} key={m.id}>
        <div className='h-auto w-[150px] relative rounded overflow-hidden'>
          <img src={`https://image.tmdb.org/t/p/original${m?.poster_path}`} alt="" className='h-full w-full object-cover' />
          <div className='absolute top-0 right-0 left-0 bottom-0 hover:bg-black opacity-0 hover:opacity-80'>
            <p className='text-white px-3 py-2 absolute bottom-0 font-bold'>{m.title}</p>
            <AiOutlineHeart size={25} className='text-white absolute top-3 left-2'/>
            <AiOutlineSave size={25} className='text-white absolute top-3 right-2'/>
          </div>
        </div>
      </Link>
    ))
  }
</div>

      </div>
      


      
      <div className='px-2'>
        <h2 className='text-white font-bold md:text-3xl text-2xl py-3'>
          Top Rated Movies
        </h2>
        <div className='w-full flex gap-3 h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
  {
    topRated.map((mt) => (
      <Link to={`/popularmovies/${mt?.id}`} key={mt?.id}>
        <div className='h-auto w-[150px] relative rounded overflow-hidden'>
          <img src={`https://image.tmdb.org/t/p/original${mt?.poster_path}`} alt="" className='h-full w-full object-cover' />
          <div className='absolute top-0 right-0 left-0 bottom-0 hover:bg-black opacity-0 hover:opacity-80'>
            <p className='text-white px-3 py-2 absolute bottom-0 font-bold'>{mt.title}</p>
            <AiOutlineHeart size={25} className='text-white absolute top-3 left-2'/>
            <AiOutlineSave size={25} className='text-white absolute top-3 right-2'/>
          </div>
        </div>
      </Link>
    ))
  }
</div>

      </div>
      


      
      <div className='px-2'>
        <h2 className='text-white font-bold md:text-3xl text-2xl py-3'>
          Now Playing
        </h2>
        <div className='w-full flex gap-3 h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
  {
    nowPlaying.map((m) => (
      <Link to={`/popularmovies/${m.id}`} key={m.id}>
        <div className='h-auto w-[150px] relative rounded overflow-hidden'>
          <img src={`https://image.tmdb.org/t/p/original${m?.poster_path}`} alt="" className='h-full w-full object-cover' />
          <div className='absolute top-0 right-0 left-0 bottom-0 hover:bg-black opacity-0 hover:opacity-80'>
            <p className='text-white px-3 py-2 absolute bottom-0 font-bold'>{m.title}</p>
            <AiOutlineHeart size={25} className='text-white absolute top-3 left-2'/>
            <AiOutlineSave size={25} className='text-white absolute top-3 right-2'/>
          </div>
        </div>
      </Link>
    ))
  }
</div>

      </div>
      


      
      <div className='px-2'>
        <h2 className='text-white font-bold md:text-3xl text-2xl py-3'>
          Upcoming Movies
        </h2>
        <div className='w-full flex gap-3 h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
  {
    upComing.map((m) => (
      <Link to={`/popularmovies/${m.id}`} key={m.id}>
        <div className='h-auto w-[150px] relative rounded overflow-hidden'>
          <img src={`https://image.tmdb.org/t/p/original${m?.poster_path}`} alt="" className='h-full w-full object-cover' />
          <div className='absolute top-0 right-0 left-0 bottom-0 hover:bg-black opacity-0 hover:opacity-80'>
            <p className='text-white px-3 py-2 absolute bottom-0 font-bold'>{m.title}</p>
            <AiOutlineHeart size={25} className='text-white absolute top-3 left-2'/>
            <AiOutlineSave size={25} className='text-white absolute top-3 right-2'/>
          </div>
        </div>
      </Link>
    ))
  }
</div>

      </div>
      


      {/* <Link to="/popularmovies">
      <div className='px-2'>
        <h2 className='text-white font-bold md:text-3xl text-2xl py-3'>
          Popular Movies
        </h2>
        <div className='w-full flex gap-3 h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
  {
    movies.map((m) => (
      <Link to={`/popularmovies/${m.id}`} key={m.id}>
        <div className='h-auto w-[150px] relative rounded overflow-hidden'>
          <img src={`https://image.tmdb.org/t/p/original${m?.poster_path}`} alt="" className='h-full w-full object-cover' />
          <div className='absolute top-0 right-0 left-0 bottom-0 hover:bg-black opacity-0 hover:opacity-80'>
            <p className='text-white px-3 py-2 absolute bottom-0 font-bold'>{m.title}</p>
            <AiOutlineHeart size={25} className='text-white absolute top-3 left-2'/>
            <AiOutlineSave size={25} className='text-white absolute top-3 right-2'/>
          </div>
        </div>
      </Link>
    ))
  }
</div>

      </div>
      </Link>

      <Link to="/popularmovies">
      <div className='px-2'>
        <h2 className='text-white font-bold md:text-3xl text-2xl py-3'>
          Popular Movies
        </h2>
        <div className='w-full flex gap-3 h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
  {
    movies.map((m) => (
      <Link to={`/popularmovies/${m.id}`} key={m.id}>
        <div className='h-auto w-[150px] relative rounded overflow-hidden'>
          <img src={`https://image.tmdb.org/t/p/original${m?.poster_path}`} alt="" className='h-full w-full object-cover' />
          <div className='absolute top-0 right-0 left-0 bottom-0 hover:bg-black opacity-0 hover:opacity-80'>
            <p className='text-white px-3 py-2 absolute bottom-0 font-bold'>{m.title}</p>
            <AiOutlineHeart size={25} className='text-white absolute top-3 left-2'/>
            <AiOutlineSave size={25} className='text-white absolute top-3 right-2'/>
          </div>
        </div>
      </Link>
    ))
  }
</div>

      </div>
      </Link>

      <Link to="/popularmovies">
      <div className='px-2'>
        <h2 className='text-white font-bold md:text-3xl text-2xl py-3'>
          Popular Movies
        </h2>
        <div className='w-full flex gap-3 h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
  {
    movies.map((m) => (
      <Link to={`/popularmovies/${m.id}`} key={m.id}>
        <div className='h-auto w-[150px] relative rounded overflow-hidden'>
          <img src={`https://image.tmdb.org/t/p/original${m?.poster_path}`} alt="" className='h-full w-full object-cover' />
          <div className='absolute top-0 right-0 left-0 bottom-0 hover:bg-black opacity-0 hover:opacity-80'>
            <p className='text-white px-3 py-2 absolute bottom-0 font-bold'>{m.title}</p>
            <AiOutlineHeart size={25} className='text-white absolute top-3 left-2'/>
            <AiOutlineSave size={25} className='text-white absolute top-3 right-2'/>
          </div>
        </div>
      </Link>
    ))
  }
</div>

      </div>
      </Link> */}

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