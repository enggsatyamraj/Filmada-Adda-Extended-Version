import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import {BsFillCameraReelsFill} from 'react-icons/bs'
import '../App.css'

const NavBar = () => {
  return (
    <div className='w-full px-4 py-4 transparent'>
        <div className='max-w-[1280px] flex items-center justify-between'>
            <div className='flex gap-2'>
                <BsFillCameraReelsFill size={30} className='text-[#e50914]'/>
                <span className='font-bold text-3xl text-[#e50914]'>Filmada Adda.</span>
            </div>
            <div className='flex gap-5 items-center justify-center'>
                <Link to="/signup">
                    <button className='text-white bg-[#e50914] border-none px-3 py-1 rounded-lg font-semibold'>Sign Up</button>
                </Link>
                <Link to="/newuser">
                    <button className='font-semibold border-black border-[2px] px-3 py-1 rounded-lg'>New User</button>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default NavBar