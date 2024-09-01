import React from 'react'
import Topnav from './Partials/Topnav'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='p-10 overflow-hidden'>
      <Topnav />
      <div className='w-[100%] flex items-center justify-center mt-20 h-[55vh]'>
        <div className=' w-[80%] h-full group relative  rounded-[120px]'>
          <img className='absolute group-hover:top-[-50%] duration-300 top-[10%] scale-[70%] left-[30%] ' src="https://i.pinimg.com/originals/a1/25/33/a12533bc97f469bc93dcf1b17a518c2e.png" alt="" />
          <img className='absolute group-hover:left-[-20%] duration-300 group-hover:rotate-[-20deg] top-[10%] scale-[60%] left-0 ' src="https://i.pinimg.com/originals/a1/25/33/a12533bc97f469bc93dcf1b17a518c2e.png" alt="" />
          <img className='absolute group-hover:right-[-20%] duration-300 group-hover:rotate-[60deg] top-[10%] scale-[50%] right-0 ' src="https://i.pinimg.com/originals/a1/25/33/a12533bc97f469bc93dcf1b17a518c2e.png" alt="" />
          
          
          <div className='w-full h-[95%] flex flex-col shadow-xl shadow-black relative items-center overflow-hidden justify-end rounded-[120px] bg-zinc-900'>
          
          <div className='h-full w-full bg-blue-600 rounded-[120px] mix-blend-multiply absolute top-0 group-hover:left-0 duration-500 left-[-100%]'></div>
            <h1 className='font-semibold text-[20vh] group-hover:mb-28 text-zinc-600 group-hover:text-white duration-500'>GET IN TOUCH</h1>

            <div className='w-[100%] group-hover:bottom-5  bottom-[-100%] duration-500 flex justify-evenly items-center text-4xl absolute h-[10vh]'>

              <div className='h-[7vh] w-[7vh] translate-x-[-50%] rounded-xl absolute left-[20%] overflow-hidden cursor-pointer group/edit1 hover:w-[25vh] duration-300  font-medium bg-gradient-to-r from-[#BD0EED] to-[#FFC208]'>
                <i class="ri-instagram-line absolute top-1/2 left-0 translate-x-[15%] duration-500 translate-y-[-50%]  group-hover/edit1:rotate-[180deg]"></i>
                <Link to={"https://www.instagram.com/tanushhh4/?next=%2F"} className='text-base group-hover/edit1:opacity-[100%] duration-300 top-1/2 translate-y-[-50%]  left-0 group-hover/edit1:left-[7vh] hover:text-zinc-300 opacity-0 font-black absolute '>Instagram</Link>


              </div>
              <div className='h-[7vh] w-[7vh] translate-x-[-50%] rounded-xl absolute left-[40%] overflow-hidden cursor-pointer group/edit1 hover:w-[25vh] duration-300  font-medium bg-gradient-to-r from-[#0A78B5] to-[#7DB1DB]'>
                <i class="ri-linkedin-box-line absolute top-1/2 left-0 translate-x-[15%] duration-500 translate-y-[-50%]  group-hover/edit1:rotate-[180deg]"></i>
                <Link to={"https://www.linkedin.com/in/tanush-singh-/"} className='text-base group-hover/edit1:opacity-[100%] duration-300 top-1/2 translate-y-[-50%]  left-0 group-hover/edit1:left-[7vh] hover:text-zinc-300 opacity-0 font-black absolute '>LinkedIn</Link>

              </div>
              <div className='h-[7vh] w-[7vh] translate-x-[-50%] rounded-xl absolute left-[60%] overflow-hidden cursor-pointer group/edit1 hover:w-[25vh] duration-300  font-medium bg-gradient-to-r from-[#432776] to-[#171A21]'>
                <i class="ri-github-line absolute top-1/2 left-0 translate-x-[10%] duration-500 translate-y-[-50%]  group-hover/edit1:rotate-[180deg]"></i>
                <Link to={"https://github.com/K-S11145T"} className='text-base group-hover/edit1:opacity-[100%] duration-300 top-1/2 translate-y-[-50%]  left-0 group-hover/edit1:left-[7vh] hover:text-zinc-300 opacity-0 font-black absolute '>GitHub</Link>

              </div>

              <div className='h-[7vh] w-[7vh] rounded-xl absolute left-[80%] translate-x-[-50%] overflow-hidden cursor-pointer group/edit1 hover:w-[45vh] duration-300  font-medium bg-gradient-to-r from-[#FE0808] to-[#DE5445] '>
                <i class="ri-mail-line absolute top-1/2 left-0 translate-x-[10%] duration-500 translate-y-[-50%] group-hover/edit1:rotate-[180deg]"></i>
                <a href='mailto:tanushsingh843@gmail.com' className='text-base group-hover/edit1:opacity-[100%] duration-300 top-1/2 translate-y-[-50%] left-0 group-hover/edit1:left-[7vh] hover:text-zinc-300 opacity-0 font-black absolute '>tanushsingh843@gmail.com</a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
