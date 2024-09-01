import React, { useEffect, useState } from 'react'
import Topnav from './Partials/Topnav'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

const Home = () => {
  const [hover, sethover] = useState(false)
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    useEffect(() => {
      gsap.from("#img , #div  , #btn", {
        y: 150,
        duration: 1,
        opacity: 0,
        stagger: 0.2

      })

    })

  )
  return (
    <div className='p-10'>
      <Topnav />

      <div className='w-full relative md:h-[80vh] h-[60vh] flex-col items-center  flex  mt-10 '>

        <div id='img' className='md:h-[35vh] h-[20vh] w-[20vh] rounded-full shadow-lg shadow-black absolute top-[0] translate-y-[-30%] z-[2] overflow-hidden md:w-[35vh]'>
          <img className='h-full w-full object-cover' src="https://w0.peakpx.com/wallpaper/863/441/HD-wallpaper-kyojuro-rengoku.jpg" alt="" />
        </div>
        <div id='div' className='md:w-[90%] w-full group overflow-hidden shadow-2xl shadow-black flex relative justify-center items-end md:text-[23vh] text-[7vh] text-center md:h-[55vh] h-[40vh] md:rounded-[100px] rounded-[50px] bg-zinc-900'>

          <div id='overlay' className='w-full bg-sky-300 absolute duration-300 bottom-[-50%] group-hover:bottom-[0%] hover:bottom-0 mix-blend-multiply h-[30%] '>
          </div>
          <div className='md:leading-[20vh] leading-[6vh]  ' >

            <h1 className='select-none text-zinc-500 group-hover:text-white duration-500 font-semibold'>TANUSH SINGH</h1>
            <h1 className='md:text-xl text-lg text-zinc-400  group-hover:text-white duration-500 text-center py-5 font-black' >Web Designer , Frontend Developer , Video Editor</h1>
          </div>
        </div>
        <button id='btn' className='py-2 px-3 border-2 text-sky-200 flex items-center justify-center gap-2 shadow-zinc-700 shadow-2xl  hover:shadow-white hover:animate-pulse hover:shadow-md hover:text-zinc-200  rounded-full mt-7 '> <Link className='text-base' to={"TANUSH SINGH.pdf"} download> Download CV </Link> <i class="ri-arrow-right-s-line text-3xl"></i></button>


      </div>


    </div>
  )
}

export default Home
