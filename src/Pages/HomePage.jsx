import React from 'react'
import NavBar from '../components/NavBar'
import {MdKeyboardArrowRight} from 'react-icons/md'

const HomePage = () => {
  return (
    <div>
      <div className="w-full max-w-[1280px] object-cover bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/d282a426-b01a-424c-9b83-2c2445e4b61a/f7eb3bc2-2867-4c7e-94f8-e62ec11175cd/IN-en-20230626-popsignuptwoweeks-perspective_alpha_website_small.jpg')]">
        <div className='w-[100%] h-[100%]  bg-gradient-to-b from-[#232323] via-transparent to-[#232323]'>
          <NavBar/>
          <div className='w-100%  md:h-[100vh] px-1 md:px-2 pt-[60px] md:pt-0 pb-[60px] md:pb-0 h-fit  flex items-center justify-center flex-col'>
            <h1 className='text-white font-bold text-[2.1rem] md:text-5xl mb-[20px] text-center'>
              Unlimited movies, TV shows and more..
            </h1>
            <h2 className='text-white font-semibold mb-[25px] text-[1.1rem] md:text-3xl'>
              Watch anywhere. Cancel anytime.
            </h2>
            <h4 className='text-white text-[1.25rem] md:text-2xl mb-[30px] text-center w-[98%]'>
              Ready to watch? Enter your email to create or restart your membership.
            </h4>
            <div className='flex flex-col w-full items-center md:items-center gap-3 md:flex-row justify-center'>
              <input type="email" placeholder='Email address' className='w-[70%] text-white min-w-[200px] max-w-[500px]
               py-3 px-3 text-[1.2rem] rounded bg-transparent border-[1px] backdrop-blur-sm' />
              <button className='flex items-center text-[1.2rem]  bg-[#e50914] text-white py-3 px-5 gap-2 rounded cursor-pointer'>Get Started <MdKeyboardArrowRight size={30}/></button>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[10px] bg-gray-700'></div>
      <div className='bg-black w-[100%] h-[100vh] max-w-[1280px]'>
        <div className='text-white flex flex-col md:flex-row items-center justify-center w-[100%] h-[100%] px-6'>
          <div className='flex-1'>
            <h1 className='text-center md:text-left font-bold text-4xl mb-[20px] md:text-5xl'>Enjoy on your <span className='text-[#e50914]'>TV</span></h1>
            <p className='text-center text-[1.2rem] md:text-left'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple Tv, Blu-ray players and more.
            </p>
          </div>
          <div className='flex items-center justify-center flex-1'>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" className='md:w-[80%] w-[90%]' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage