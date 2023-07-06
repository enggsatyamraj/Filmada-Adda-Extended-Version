import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillCameraReelsFill} from 'react-icons/bs'

const MainPage = () => {
  return (
    <div className=' px-4 py-4 flex items-center transparent'>
        <div className=' flex w-[100%] text-white mx-auto gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-[1280px] items-center'>
            <div className='flex gap-2 items-center'>
                <div>
                <BsFillCameraReelsFill className='text-[#fff]  text-xl md:text-2xl'/>
                </div>
                <span className='font-bold text-[1.25rem] md:text-3xl text-[#fff] mt-[5px]'>Filmada
                 <span className='text-[#e50914]'> Adda.</span> </span>
            </div>
            <div className='flex items-center gap-2 text-[0.85rem] font-semibold md:text-[1rem]'>
              <li className='list-none cursor-pointer'>Home</li>
              <li className='list-none cursor-pointer'>TV Shows</li>
              <li className='list-none cursor-pointer'>Movies</li>
            </div>
        </div>

    </div>
  )
}

export default MainPage