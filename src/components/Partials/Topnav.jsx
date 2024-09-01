import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Topnav = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Experience", link: "/experience" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ]
  let [open, setopen] = useState(false)
 
  return (
    <>
      <div className='p-16 text-white rounded-full bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.5)] duration-300 text-xl flex justify-between items-center h-[1vh]'>
        <div className='h-[70px] relative rounded flex items-center  hover:w-[14vw] duration-300 w-[70px] bg-zinc-700'>
          <div className='h-[70px] absolute z-[1] p-2 w-[70px] '>

            <img className='h-full w-full  rounded-full object-cover' src="https://m.media-amazon.com/images/I/61XaDy-DP+L._AC_UF1000,1000_QL80_.jpg" alt="" />
          </div>
          <Link id='click' to={"/projects"} className=' hover:opacity-[100%] left-1/2 translate-x-[-50%] top-1/2 tracking-tight text-base translate-y-[-50%] duration-300 hover:text-zinc-400 absolute'>Projects</Link>
        </div>

        <div role='navigation' className='flex gap-10 z-[9]'>

          <div onClick={() => { setopen(!open) }} className={`cursor-pointer duration-500  text-xl ${open && 'opacity-0'} text-2xl`}>
            <i class="ri-menu-4-line"></i>
          </div>
          <ul className={`md:flex absolute duration-500 p-10 right-0 ${open ? 'top-0 z-[2]' : 'opacity-0 z-[-2] top-[-100vh]'} justify-between  bg-[rgba(0,0,0,0.5)] h-[100vh]   w-[20vw]`} >
            <div className='flex flex-col gap-5'>
              {Links.map((item, index) => (
                <li key={index}>
                  <Link to={item.link} className='hover:text-zinc-300 text-base duration-300'>{item.name}</Link>
                </li>
              ))}

            </div>
            <div onClick={()=> {setopen(!open)}}>
              <i class="ri-close-large-line text-xl cursor-pointer hover:text-zinc-300 duration-300"></i>

            </div>
          </ul>

        </div>

      </div>
    </>
  )
}

export default Topnav
