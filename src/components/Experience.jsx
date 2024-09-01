import React, { useEffect, useState } from 'react'
import Topnav from './Partials/Topnav'

const Experience = () => {


  return (
    <div id='bg' className='md:p-10 p-5 '>
      <Topnav />
      <div className='md:px-[10vw] h-[220vh] px-[7vw]'>
        <div className='relative w-[100%] md:h-[55vh] h-[50vh] group flex md:mt-[20vh] mt-[15vh] justify-center md:px-10 px-7'>

          {/* <div className='h-[25vh] w-[25vh] top-[20%] group-hover:top-[-15%] bg-gradient-to-r from-[#F7E227] to-[#FFFEE0] left-[13%] duration-500 group-hover:left-[8%] rotate-[45deg] border-[5px] border-white left-0 absolute bg-zinc-600'>
</div> */}
          <img className='h-[30%] top-[20%] md:scale-[160%] duration-300 md:group-hover:top-[-35%] group-hover:top-[-25%] rotate-[-10deg] group-hover:left-[10%] left-[15%] absolute' src="https://pngfre.com/wp-content/uploads/Kakashi-hatake-poster.png" alt="" />


          <div className='w-[100%] absolute hover:bg-gradient-to-r group from-[#EB6220] to-[#FE961D] justify-evenly md:justify-between flex md:flex-row flex-col-reverse md:px-20 items-center md:rounded-[120px] rounded-[60px] bg-zinc-900 h-full'>

            <div className='md:w-[70%] w-full md:text-start text-center flex md:group-hover:ml-10 relative duration-500 items-center flex-col justify-center h-full'>
              <h1 className=' w-[90%] absolute left-1/2 top-1/2 md:group-hover:top-[25%] group-hover:top-[20%] md:translate-y-[-50%] translate-y-[-80%]  translate-x-[-50%] md:text-4xl text-2xl tracking-tight font-black duration-500'>Coding Ninjas</h1>
              <h1 className='w-[90%] mt-20 group-hover:mt-10 duration-500 opacity-0 group-hover:opacity-[100%] text-base md:text-2xl tracking-tight md:leading-0 leading-[3vh]'>It was a webinar conducted by <strong>Coding Ninjas</strong> , we created a twitter clone using ReactJS. it was my first project in ReactJS.</h1>
            </div>
            <img className='md:w-[25vh] md:h-[25vh] w-[10vh] h-[10vh] md:group-hover:mt-[0%] group-hover:mt-[10%] shadow-xl md:group-hover:mr-10  duration-500 shadow-black rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcQ0tKfKF5cOCT387gBpF8uXNzRBuAHCyag&s" alt="" />
          </div>

        </div>

        <div className='relative w-[100%] md:h-[55vh] h-[50vh] group flex md:mt-[20vh] mt-[15vh] justify-center md:px-10 px-7'>

          {/* <div className='h-[25vh] w-[25vh] top-[20%] group-hover:top-[-15%] bg-gradient-to-r from-[#9BC5F0] to-[#FFFEE0] right-[0%] duration-500  rotate-[45deg] border-[5px] border-white left-0 absolute bg-zinc-600'>
</div> */}
          <img className=' scale-[150%] rotate-[-10deg] right-[15%] h-[30%] top-[20%] md:scale-[200%] duration-300 md:group-hover:top-[-35%] group-hover:top-[-25%]  absolute' src="https://cdn.inspireuplift.com/uploads/images/seller_products/31765/1702548380_GojoSatoru.png" alt="" />

          <div className=' from-[#171587] to-[#9BC5F0]  w-[100%] absolute hover:bg-gradient-to-r group from-justify-evenly md:justify-between flex md:flex-row flex-col-reverse md:px-20 items-center md:rounded-[120px] rounded-[60px] bg-zinc-900 h-full'>

            <div className='md:w-[70%] w-full md:text-start text-center flex md:group-hover:ml-10 relative duration-500 items-center flex-col justify-center h-full'>
              <h1 className=' w-[90%] absolute left-1/2 top-1/2 md:group-hover:top-[25%] group-hover:top-[20%] md:translate-y-[-50%] translate-y-[-80%]  translate-x-[-50%] md:text-4xl text-2xl tracking-tight font-black duration-500'>Code Alpha</h1>
              <h1 className='w-[90%] mt-20 group-hover:mt-10 duration-500 opacity-0 group-hover:opacity-[100%] text-base md:text-2xl tracking-tight md:leading-0 leading-[3vh]'>An internship program conducted by <strong>Code Alpha</strong> , we had to create 3 responsive websites as projects , which i've done it successfullly.</h1>
            </div>
            <img className='md:w-[25vh] md:h-[25vh] w-[10vh] h-[10vh] md:group-hover:mt-[0%] group-hover:mt-[10%] shadow-xl md:group-hover:mr-10  duration-500 shadow-black rounded-full' src="https://media.licdn.com/dms/image/C4D0BAQFVBPbc6-yxoA/company-logo_200_200/0/1677167041761?e=2147483647&v=beta&t=1SF4xgIVbgQPd1zF9CvaSVTlGr04rRXkc9F3WFKD4hc" alt="" />
          </div>

        </div>

        <div className='relative w-[100%] md:h-[55vh] h-[50vh] group flex md:mt-[20vh] mt-[15vh] justify-center md:px-10 px-7 '>

          {/* <div className='h-[25vh] w-[25vh] top-[20%] group-hover:top-[-15%] bg-gradient-to-r from-[#9BC5F0] to-[#FFFEE0] right-[0%] duration-500  rotate-[45deg] border-[5px] border-white left-0 absolute bg-zinc-600'>
</div> */}
          <img className='h-[30%] top-[20%] md:scale-[200%] scale-[130%] duration-300 md:group-hover:top-[-35%] group-hover:top-[-25%] rotate-[-10deg] group-hover:left-[10%] left-[15%] absolute' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07f58b8e-1cf1-4d91-9e30-69d2b5bc3b3b/dfbp0z9-b28670b4-1a86-41db-8ee3-04519fade98e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3ZjU4YjhlLTFjZjEtNGQ5MS05ZTMwLTY5ZDJiNWJjM2IzYlwvZGZicDB6OS1iMjg2NzBiNC0xYTg2LTQxZGItOGVlMy0wNDUxOWZhZGU5OGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WeGzc5oKLzbPnJGcg5Kj1d23rxusXDZtiuT0zWj_FBU" alt="" />

          <div className=' from-[#FFB92A] to-[#9BC5F0]  md:px-20  w-[100%] absolute hover:bg-gradient-to-r group  justify-evenly md:justify-between flex md:flex-row flex-col-reverse items-center md:rounded-[120px] rounded-[60px] bg-zinc-900 h-[100%]'>

            <div className='md:w-[70%] w-full md:text-start text-center flex md:group-hover:ml-10 relative duration-500 items-center flex-col justify-center h-full'>
              <h1 className=' w-[90%] absolute left-1/2 top-1/2 md:group-hover:top-[25%] group-hover:top-[20%] md:translate-y-[-50%] translate-y-[-80%]  translate-x-[-50%] md:text-4xl text-2xl tracking-tight font-black duration-500'>Re-Imagine</h1>
              <h1 className='w-[90%] mt-20 group-hover:mt-10 duration-500 opacity-0 group-hover:opacity-[100%] text-base md:text-2xl tracking-tight md:leading-0 leading-[3vh]'>Participated in Frontend Domination Hackathon Conducted By <strong>Sheryians Coding School</strong> with my 4 men squad team and created two websites for the hackathon. It was a hard task because we had to re-imagine and re-design an existing website. </h1>
            </div>
            <img className='md:w-[25vh] md:h-[25vh] w-[10vh] h-[10vh] md:group-hover:mt-[0%] group-hover:mt-[10%] shadow-xl md:group-hover:mr-10  duration-500 shadow-black rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--YX9-g5P0TPHMLLRi375nptFMBXkurT29w&s" alt="" />
          </div>

        </div>
      </div>



    </div>
  )
}

export default Experience
