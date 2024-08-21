import React from 'react'
import Topnav from './Partials/Topnav'
import { Link } from 'react-router-dom'

const Work = () => {
  return (
    <div className='p-10'>
      <Topnav />
      <h1>My yt channel- <Link to={"https://www.youtube.com/@K..S11107"}><i class="ri-youtube-fill"></i></Link></h1>
      Work
    </div>
  )
}

export default Work
