import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillCameraReelsFill} from 'react-icons/bs'

const NewNavbar = () => {
  return (
    <div className=' px-4 py-4 flex items-center z-20 '>
        <div className=' flex w-[100%] text-white mx-auto gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-[1280px] items-center'>
            <div className='flex gap-2 items-center'>
                <div>
                <BsFillCameraReelsFill className='text-[#fff]  text-xl md:text-2xl'/>
                </div>
                <span className='font-bold cursor-pointer text-[1.25rem] md:text-3xl text-[#fff] mt-[5px]'>
                    <Link to="/">Filmada
                <span className='text-[#e50914]'> Adda.</span></Link> </span>
            </div>
            <div className='flex items-center gap-2 md:gap-4 text-[0.85rem] mt-2 font-semibold md:text-[1rem]'>
              <Link to="/main"><li className='list-none cursor-pointer'>Home</li></Link>
              <Link to="/tvshows"><li className='list-none cursor-pointer'>TV Shows</li></Link>
              <Link to="/movies"><li className='list-none cursor-pointer'>Movies</li></Link>
            </div>
        </div>

    </div>
  )
}

export default NewNavbar

// fixed top-0 right-0 left-0 backdrop-filter backdrop-blur-[10px] bg-transparent