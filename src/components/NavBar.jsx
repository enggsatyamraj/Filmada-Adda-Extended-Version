import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import {BsFillCameraReelsFill} from 'react-icons/bs'
import '../App.css'

const NavBar = () => {
  return (
    <div className='w-full px-4 py-4 transparent'>
        <div className='max-w-[1280px] flex items-center justify-between'>
            <div className='flex gap-2 items-center'>
                <div>
                <BsFillCameraReelsFill className='text-[#fff]  text-xl md:text-2xl'/>
                </div>
                <span className='font-bold text-[1.25rem] md:text-3xl text-[#fff] mt-[5px]'>Filmada Adda.</span>
            </div>
            <div className='flex md:gap-5 gap-3 items-center justify-center'>
                <Link to="/signup">
                    <button className='text-white bg-[#e50914] border-none px-3 py-1 text-[0.75rem] md:text-[1rem] rounded-lg font-semibold'>Sign Up</button>
                </Link>
                <Link to="/newuser">
                    <button className='font-semibold border-White border-[2px] px-3 py-1 
                    md:text-[1rem] text-[0.75rem] rounded-lg text-white'>New User</button>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default NavBar