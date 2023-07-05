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
      <div className='bg-black w-[100%] md:h-[100vh] h-fit max-w-[1280px]'>
        <div className='text-white flex flex-col md:flex-row items-center justify-center w-[100%] md:h-[100%] h-fit px-6 py-[40px]'>
          <div className='flex-1 flex flex-col justify-center items-start'>
            <h1 className='text-center md:text-left font-bold text-4xl mb-[20px] md:text-5xl'>Enjoy on your <span className='text-[#e50914]'>TV</span></h1>
            <p className='text-center text-[1.2rem] md:text-left md:w-[90%]'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple Tv, Blu-ray players and more.
            </p>
          </div>
          <div className='flex items-center justify-center flex-1'>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" className='md:w-[80%] w-[90%]' alt="" />
          </div>
        </div>
      </div>
      <div className='w-full h-[10px] bg-gray-700'></div>
      <div className='bg-black w-[100%] md:h-[100vh] h-fit max-w-[1280px]'>
        <div className='text-white flex flex-col md:flex-row items-center justify-center w-[100%] md:h-[100%] h-fit px-6 py-[40px]'>
          <div className='flex flex-col items-center justify-center flex-1 relative'>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" className='md:w-[80%] w-[90%]' alt="" />
            <div className='flex items-center justify-between border-white border-[1px]
            min-w-[250px] md:w-[40%] w-[50%] py-2 px-[10px] rounded'>
              <div className='flex items-center justify-center gap-2'>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" className='w-[40px]' alt="" />
                <div>
                  <h1 className='font-bold text-[1rem]'>Stranger Things</h1>
                  <h3 className='text-[0.75rem]  text-[#0062cb] font-semibold cursor-pointer'>Downloading...</h3>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                
                <div>
                  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" className='w-[40px]'/>
                </div>
              </div>
            </div>

          </div>
          <div className='flex-1 mt-[40px] md:mt-0'>
            <h1 className='text-center md:text-left font-bold text-4xl mb-[20px] md:text-5xl'><span className='text-[#e50914]'>Download</span> your shows to watch offline</h1>
            <p className='text-center text-[1.2rem] md:text-left'>Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
      <div className='w-full h-[10px] bg-gray-700'></div>
      <div className='bg-black w-[100%] md:h-[100vh] h-fit max-w-[1280px]'>
        <div className='text-white flex flex-col md:flex-row items-center justify-center w-[100%] md:h-[100%] h-fit px-6 py-[40px]'>
          <div className='flex-1'>
            <h1 className='text-center md:text-left font-bold text-4xl mb-[20px] md:text-5xl'><span className='text-[#e50914]'>Watch </span>everywhere</h1>
            <p className='text-center text-[1.2rem] md:text-left'>
              Stream unlimited movies and TV shows on your <span className='text-[#e50914]'>Phone</span>, tablet, laptop, and TV.
            </p>
          </div>
          <div className='flex items-center justify-center flex-1'>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" className='md:w-[80%] w-[90%]' alt="" />
          </div>
        </div>
      </div>
      <div className='w-full h-[10px] bg-gray-700'></div>
      <div className='bg-black w-[100%] md:h-[100vh] h-fit max-w-[1280px]'>
        <div className='text-white flex md:flex-row items-center justify-center w-[100%] md:h-[100%] h-fit px-6 py-[40px]'>
        <div className='flex items-center justify-center flex-1'>
            <img src="https://occ-0-2087-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" className='md:w-[80%] w-[90%]' alt=""/>
          </div>
          <div className='flex-1'>
            <h1 className='text-center md:text-left font-bold text-4xl mb-[20px] md:text-5xl'>Create Profile for<span className='text-[#e50914]'> Kids </span></h1>
            <p className='text-center text-[1.2rem] md:text-left md:w-[80%]'>
            Send children on adventures with their favourite characters in a space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomePage