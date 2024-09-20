import React from 'react'
import Topnav from './Partials/Topnav'
import { Link } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from "three"
import Scene from './Partials/Scene'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'


const Work = () => {

  return (
    <div className='p-10 bg-black'>

      <Topnav />
      <div className='flex overflow-hidden  justify-center'>

        <div className='xl:h-screen h-[35vh] xl:mt-[-15vh] mt-[-5vh]  xl:w-[50vw] w-[100vw]  flex justify-center  '>
          <Canvas flat camera={{ fov: 60 }} className='' >
            <OrbitControls />
            <ambientLight />
            <Scene />
            <EffectComposer>

              <Bloom
                minmapblur
                intensity={20.0}
              // luminanceThreshold={5}
              // luminanceSmoothing={5}

              />
              <ToneMapping />
            </EffectComposer>

          </Canvas>


        </div>
      </div>
      <div id='work' className='bg-gradient-to-b xl:mt-[10vh] from-black via-zinc-900 to-black flex flex-col items-center w-full min-h-screen'>
        <h4 className='xl:text-4xl decoration-stone-300 text-center text-xl text-zinc-400 font-semibold'>Work</h4>

        <div id="cont" className='w-full  flex flex-col items-center ' >


          <div className='rounded-[50px] h-[40vh] xl:rounded-[100px] px-2 relative group xl:w-[70%] w-[100%] '>
            <img className='absolute h-full group-hover:opacity-[100%] duration-300 pointer-events-none xl:scale-[90%] scale-[70%] xl:group-hover:left-[-10%] group-hover:left-[8%] z-[99] xl:left-[10%] left-[20%]  translate-x-[-50%] opacity-0' src="https://www.pngall.com/wp-content/uploads/14/Tanjiro-Transparent.png" alt="" />

            <div id="conts" className='px-5 group py-20 hover:border-b-0 overflow-hidden duration-300 rounded-[50px] xl:rounded-[100px] relative xl:gap-0 gap-5 full flex xl:flex-row flex-col items-center justify-between text-wite'>


              <div className='h-full top-0 group-hover:left-0 left-[-150%] rounded-[50px] xl:rounded-[100px] duration-500 w-full absolute bg-[#5BB99A] mix-blend-overlay'></div>
              <Link className='xl:text-[2.5vw] text-[6vw] xl:group-hover:ml-10 group-hover:text-white duration-300 text-zinc-500 group-hover:blur-sm font-medium'>Obys Agency</Link>

              <Link to={"https://final-project-kappa-orcin.vercel.app/"} className='absolute  border-2 px-4 py-1 text-lg rounded-full group-hover:opacity-[100%] duration-300 group-hover:scale-[90%] scale-[50%] translate-y-[-50%] top-1/2 left-1/2 translate-x-[-50%] opacity-0  gap-8 hover:gap-12 flex'>Visit <i class="ri-external-link-line"></i></Link>

              <div class="right flex">
                <p class='xl:w-[25vw] group-hover:blur-sm w-[70vw] text-center xl:text-start xl:group-hover:mr-10 group-hover:text-white duration-300 text-zinc-500 xl:text-xl text:xl'>I cloned Obys Agency with just HTML, CSS, and JavaScript—no magic wands involved!</p>

              </div>
            </div>
          </div>

          <div className='rounded-[50px] h-[40vh] xl:rounded-[100px] px-2 relative group xl:w-[70%] w-[100%] '>


            <img className=' xl:group-hover:right-[-20%] xl:right-[-10%] group-hover:right-[-25%] right-[-15%]  absolute h-full group-hover:opacity-[100%] duration-300 pointer-events-none xl:scale-[90%] scale-[70%]  z-[99] translate-x-[-50%] opacity-0' src="https://www.pngall.com/wp-content/uploads/14/Zenitsu-PNG-Free-Image.png" alt="" />
            <div id="conts" className='px-5 group py-20 hover:border-b-0 overflow-hidden duration-300 rounded-[50px] xl:rounded-[100px] relative xl:gap-0 gap-5 full flex xl:flex-row flex-col items-center justify-between text-wite'>


              <div className='bg-[#F5CB6A] h-full top-0 group-hover:left-0 left-[150%] rounded-[50px] xl:rounded-[100px] duration-500 w-full absolute  mix-blend-overlay'></div>
              <Link className='xl:text-[2.5vw] text-[6vw] xl:group-hover:ml-10 group-hover:text-white duration-300 text-zinc-500 group-hover:blur-sm font-medium'>Movie Website</Link>

              <Link to={"https://react-js-major-project.vercel.app/"} className='absolute  border-2 px-4 py-1 text-lg rounded-full group-hover:opacity-[100%] duration-300 group-hover:scale-[90%] scale-[50%] translate-y-[-50%] top-1/2 left-1/2 translate-x-[-50%] opacity-0  gap-8 hover:gap-12 flex'>Visit <i class="ri-external-link-line"></i></Link>

              <div class="right flex flex-col gap-6">
                <p class='xl:w-[25vw] group-hover:blur-sm w-[70vw] text-center xl:text-start xl:group-hover:mr-10 group-hover:text-white duration-300 text-zinc-500 xl:text-xl text:xl'>
                I built a movie website from scratch using ReactJS. It was a blast—like directing my own little film festival.</p>

              </div>
            </div>
          </div>

          <div className='rounded-[50px] h-[40vh] xl:rounded-[100px] px-2 relative group xl:w-[70%] w-[100%] '>
            <img className='absolute h-full group-hover:opacity-[100%] duration-300 pointer-events-none xl:scale-[90%] scale-[70%] xl:group-hover:left-[-10%] group-hover:left-[8%] z-[99] xl:left-[10%] left-[20%]  translate-x-[-50%] opacity-0' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/20a81d18-c41a-4353-a548-b72d0760ced9/dgz1qht-5a7ac4b7-3215-4474-a21d-45b8509943e5.png/v1/fill/w_542,h_642/all_engines_go_x_demon_slayer___inosuke_hashibira_by_up844tf22_production_dgz1qht-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQyIiwicGF0aCI6IlwvZlwvMjBhODFkMTgtYzQxYS00MzUzLWE1NDgtYjcyZDA3NjBjZWQ5XC9kZ3oxcWh0LTVhN2FjNGI3LTMyMTUtNDQ3NC1hMjFkLTQ1Yjg1MDk5NDNlNS5wbmciLCJ3aWR0aCI6Ijw9NTQyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.26hJ8dnI6grDmIvQDt07_JwIdmtEp9XMn53rBDHavIA" alt="" />
            <div id="conts" className='px-5 group py-20 hover:border-b-0 overflow-hidden duration-300 rounded-[50px] xl:rounded-[100px] relative xl:gap-0 gap-5 full flex xl:flex-row flex-col items-center justify-between text-wite'>


              <div className='bg-[#2D5899]  h-full top-0 group-hover:left-0 left-[-150%] rounded-[50px] xl:rounded-[100px] duration-500 w-full absolute  mix-blend-overlay'></div>
              <Link className='xl:text-[2.5vw] text-[6vw] xl:group-hover:ml-10 group-hover:text-white duration-300 text-zinc-500 group-hover:blur-sm font-medium'>ISRO</Link>

              <Link to={"https://code-crafters-reimagine-round2-isro.vercel.app/"} className='absolute  border-2 px-4 py-1 text-lg rounded-full group-hover:opacity-[100%] duration-300 group-hover:scale-[90%] scale-[50%] translate-y-[-50%] top-1/2 left-1/2 translate-x-[-50%] opacity-0  gap-8 hover:gap-12 flex'>Visit <i class="ri-external-link-line"></i></Link>

              <div class="right flex flex-col gap-6">
                <p class='xl:w-[25vw] group-hover:blur-sm w-[70vw] text-center xl:text-start xl:group-hover:mr-10 group-hover:text-white duration-300 text-zinc-500 xl:text-xl text:xl'>
                My team, the Code Crafters, revamped ISRO’s website—no rocket fuel needed!</p>

              </div>
            </div>
          </div>

          <div className='rounded-[50px] h-[40vh] xl:rounded-[100px] px-2 relative group xl:w-[70%] w-[100%] '>
            <img className=' xl:group-hover:right-[-50%] xl:right-[-40%] group-hover:right-[-80%] right-[-60%]  absolute xl:h-full  group-hover:opacity-[100%] duration-300 pointer-events-none xl:scale-[90%] scale-[80%]  z-[99] translate-x-[-50%] opacity-0' src="https://64.media.tumblr.com/be3fe1da648d5fcb1a251672b7a9ee43/9556d56231127935-0d/s640x960/fd0467d411a31ffb7dbe1d75130597b553325846.pnj" alt="" />
            <div id="conts" className='px-5 group py-20 hover:border-b-0 overflow-hidden duration-300 rounded-[50px] xl:rounded-[100px] relative xl:gap-0 gap-5 full flex xl:flex-row flex-col items-center justify-between text-wite'>


              <div className='bg-pink-500 mix-blend-multiply h-full top-0 group-hover:left-0 left-[150%] rounded-[50px] xl:rounded-[100px] duration-500 w-full absolute '></div>
              <Link className='xl:text-[2.5vw] text-[6vw] xl:group-hover:ml-10 group-hover:text-white duration-300 text-zinc-500 group-hover:blur-sm font-medium'>Mountain Dew</Link>

              <Link to={"https://code-crafters-reimagine-round1.vercel.app/"} className='absolute  border-2 px-4 py-1 text-lg rounded-full group-hover:opacity-[100%] duration-300 group-hover:scale-[90%] scale-[50%] translate-y-[-50%] top-1/2 left-1/2 translate-x-[-50%] opacity-0  gap-8 hover:gap-12 flex'>Visit <i class="ri-external-link-line"></i></Link>

              <div class="right flex flex-col gap-6">
                <p class='xl:w-[25vw] group-hover:blur-sm w-[70vw] text-center xl:text-start xl:group-hover:mr-10 group-hover:text-white duration-300 text-zinc-500 xl:text-xl text:xl'>
                Our team rebuilt the Mountain Dew website—because even code needs a refresh!</p>

              </div>
            </div>
          </div>

          <div className='rounded-[50px] h-[40vh] xl:rounded-[100px] px-2 relative group xl:w-[70%] w-[100%] '>
            <img className='absolute h-full group-hover:opacity-[100%] duration-300 pointer-events-none xl:scale-[90%] scale-[70%] xl:group-hover:left-[-10%] group-hover:left-[8%] z-[99] xl:left-[10%] left-[20%]  translate-x-[-50%] opacity-0' src="https://pnghq.com/wp-content/uploads/kanao-tsuyuri-png-no-background.png" alt="" />
            <div id="conts" className='px-5 group py-20 hover:border-b-0 overflow-hidden duration-300 rounded-[50px] xl:rounded-[100px] relative xl:gap-0 gap-5 full flex xl:flex-row flex-col items-center justify-between text-wite'>


              <div className=' bg-[#2D5899] mix-blend-multiply h-full top-0 group-hover:left-0 left-[-150%] rounded-[50px] xl:rounded-[100px] duration-500 w-full absolute '></div>
              <Link className='xl:text-[2.5vw] text-[6vw] xl:group-hover:ml-10 group-hover:text-white duration-300 text-zinc-500 group-hover:blur-sm font-medium'>Refokus</Link>

              <Link to={"https://code-crafters-reimagine-round2-isro.vercel.app/"} className='absolute  border-2 px-4 py-1 text-lg rounded-full group-hover:opacity-[100%] duration-300 group-hover:scale-[90%] scale-[50%] translate-y-[-50%] top-1/2 left-1/2 translate-x-[-50%] opacity-0  gap-8 hover:gap-12 flex'>visit <i class="ri-external-link-line"></i></Link>

              <div class="right flex flex-col gap-6">
                <p class='xl:w-[25vw] group-hover:blur-sm w-[70vw] text-center xl:text-start xl:group-hover:mr-10 group-hover:text-white duration-300 text-zinc-500 xl:text-xl text:xl'>I’m busy cloning the Refokus website—it's a work in progress, like my last DIY project!</p>

              </div>
            </div>
          </div>

          <div className='rounded-[50px] h-[40vh] xl:rounded-[100px] px-2 relative group xl:w-[70%] w-[100%] '>
            <img className=' xl:group-hover:right-[-25%] xl:right-[-10%] group-hover:right-[-45%] right-[-15%]  absolute h-full group-hover:opacity-[100%] duration-300 pointer-events-none xl:scale-[90%] scale-[70%]  z-[99] translate-x-[-50%] opacity-0' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8f674d57-69f2-4754-9dd5-152b5bcd77f1/dhgpfye-f4eb61a2-32d9-42d9-9a04-b0fd67524afc.png/v1/fill/w_692,h_1154/genya_shinazugawa_render_by_otaku_zonee_dhgpfye-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjA0OCIsInBhdGgiOiJcL2ZcLzhmNjc0ZDU3LTY5ZjItNDc1NC05ZGQ1LTE1MmI1YmNkNzdmMVwvZGhncGZ5ZS1mNGViNjFhMi0zMmQ5LTQyZDktOWEwNC1iMGZkNjc1MjRhZmMucG5nIiwid2lkdGgiOiI8PTEyMjkifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.1QJYFOBeC6zdJDSJlpx_o4RXADQqe6wFGV5hI6SvsmM" alt="" />
            <div id="conts" className='px-5 group py-20 hover:border-b-0 overflow-hidden duration-300 rounded-[50px] xl:rounded-[100px] relative xl:gap-0 gap-5 full flex xl:flex-row flex-col items-center justify-between text-wite'>


              <div className='bg-[#5C355F] h-full top-0 group-hover:left-0 left-[150%] rounded-[50px] xl:rounded-[100px] duration-500 w-full absolute  mix-blend-overlay'></div>
              <Link className='xl:text-[2.5vw] text-[6vw] xl:group-hover:ml-10 group-hover:text-white duration-300 text-zinc-500 group-hover:blur-sm font-medium'>Flight Booking System</Link>

              <Link to={"https://github.com/K-S11145T/FlightBooking"} className='absolute  border-2 px-4 py-1 text-lg rounded-full group-hover:opacity-[100%] duration-300 group-hover:scale-[90%] scale-[50%] translate-y-[-50%] top-1/2 left-1/2 translate-x-[-50%] opacity-0  gap-8 hover:gap-12 flex'>Visit <i class="ri-external-link-line"></i></Link>

              <div class="right flex flex-col gap-6">
                <p class='xl:w-[25vw] group-hover:blur-sm w-[70vw] text-center xl:text-start xl:group-hover:mr-10 group-hover:text-white duration-300 text-zinc-500 xl:text-xl text:xl'>
                I developed a flight booking system in Python—hopefully, it won't take off without me!</p>

              </div>
            </div>
          </div>

          <div className='rounded-[50px] h-[40vh] xl:rounded-[100px] px-2 relative group xl:w-[70%] w-[100%] '>
            <img className='absolute h-full group-hover:opacity-[100%] duration-300 pointer-events-none xl:scale-[90%] scale-[70%] xl:group-hover:left-[-10%] group-hover:left-[8%] z-[99] xl:left-[10%] left-[20%]  translate-x-[-50%] opacity-0' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8f674d57-69f2-4754-9dd5-152b5bcd77f1/dhgjhmj-3b445975-afec-4fe1-bc02-899c0f9c0462.png/v1/fill/w_400,h_357/aoi_kanzaki_render_by_otaku_zonee_dhgjhmj-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhmNjc0ZDU3LTY5ZjItNDc1NC05ZGQ1LTE1MmI1YmNkNzdmMVwvZGhnamhtai0zYjQ0NTk3NS1hZmVjLTRmZTEtYmMwMi04OTljMGY5YzA0NjIucG5nIiwiaGVpZ2h0IjoiPD0zNTciLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzhmNjc0ZDU3LTY5ZjItNDc1NC05ZGQ1LTE1MmI1YmNkNzdmMVwvb3Rha3Utem9uZWUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.P9yOdc8jpYW1DrPrXKziHqWFdsKFrerEJIAyujF-SdM" alt="" />
            <div id="conts" className='px-5 group py-20 hover:border-b-0 overflow-hidden duration-300 rounded-[50px] xl:rounded-[100px] relative xl:gap-0 gap-5 full flex xl:flex-row flex-col items-center justify-between text-wite'>


              <div className=' bg-zinc-200 mix-blend-overlay h-full top-0 group-hover:left-0 left-[-150%] rounded-[50px] xl:rounded-[100px] duration-500 w-full absolute '></div>
              <Link className='xl:text-[2.5vw] text-[6vw] xl:group-hover:ml-10 group-hover:text-white duration-300 text-zinc-500 group-hover:blur-sm font-medium'>Video Editing</Link>

              <Link to={"https://www.youtube.com/@K..S11107"} className='absolute  border-2 px-4 py-1 text-lg rounded-full group-hover:opacity-[100%] duration-300 group-hover:scale-[90%] scale-[50%] translate-y-[-50%] top-1/2 left-1/2 translate-x-[-50%] opacity-0  gap-8 hover:gap-12 flex'>Visit <i class="ri-external-link-line"></i></Link>

              <div class="right flex flex-col gap-6">
                <p class='xl:w-[25vw] group-hover:blur-sm w-[70vw] text-center xl:text-start xl:group-hover:mr-10 group-hover:text-white duration-300 text-zinc-500 xl:text-xl text:xl'>In my free time, I edit videos for YouTube—because who needs sleep, right? Check it out!</p>

              </div>
            </div>
          </div>

          <div className='py-20'>
            <Link className='border-2 rounded-full xl:p-4 p-2 xl:text-[1vw] text-[1.5vw] shadow-md hover:shadow-white shadow-transparent duration-300' to={"https://github.com/K-S11145T"}>For more of my coding shenanigans, check out my GitHub—it's a treasure hunt!</Link>
          </div>

        </div>
      </div>
    </div >
  )
}

export default Work
