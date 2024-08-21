import React, { useEffect } from 'react'
import Topnav from './Partials/Topnav'
import { useGSAP } from '@gsap/react'

import gsap from 'gsap'

const About = () => {
  useGSAP(
    useEffect(() => {

      gsap.from('.group', { duration: 1, x: -100, stagger: 0.1 })
    }, [])

  )

  return (
    <div className=' p-10'>

      <Topnav />



      <div className='w-[100%] h-[70vh] px-[10vw] mb-20 relative flex mt-28 justify-center'>
        <div className=' group w-full h-full'>
          {/* <div className='h-[25vh] w-[25vh] top-[15%] group-hover:top-[-15%] bg-gradient-to-r from-[#162362] to-[#FFFEE0] left-[14%] duration-500 rotate-[35deg] border-[5px] border-white left-0 absolute bg-zinc-600'>
          </div> */}
          <img className='h-[30%] scale-[200%] top-[20%] duration-300 group-hover:top-[-20%] left-[10%] absolute' src="https://pngimg.com/uploads/naruto/naruto_PNG30.png" alt="" />
          <div className='w-full flex shadow-lg overflow-hidden group relative bg-gradient-to-r from-[#18161E] to-[#284172] shadow-zinc-700 absolute rounded-[150px]  h-full'>
            <img className='w-[100vw] h-[110vh] top-1/2  translate-x-[-50%] translate-y-[-50%]  left-1/2 group-hover:w-[0] duration-[0.6s] object-cover  absolute' src="https://shots.codepen.io/username/pen/PoxQKoy-800.jpg?version=1689278358" alt="" />
            <h1 className='w-1/2 h-full text-6xl font-semibold flex justify-center  group-hover:opacity-[100%] duration-[1s] items-center p-10 leading-[8vh]'> Hi, I’m Tanush, a Web designer , front-end developer and a Video editor</h1>
            <h1 className='w-1/2 h-full  group-hover:opacity-[100%] duration-[0.6] text-4xl font-regular flex justify-center items-center p-10 leading-[6vh]'>With over a decade of experience in multiple disciplines, I work with companies to create intuitive and engaging digital experiences.</h1>
          </div>
        </div>


      </div>

    </div>
  )
}

export default About
