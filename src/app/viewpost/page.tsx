import FourPics from '@/components/FourPics'
import Insta from '@/components/Insta'
import List from '@/components/List'

import Video1 from '@/components/Video1'
import Video2 from '@/components/Video2'
import Videoyoutube from '@/components/Videoyoutube'

import React from 'react'


const page = () => {
  return (
    <div className='mt-24'>
      <Insta/>
      <Video1/>
     <FourPics/>
      <Videoyoutube/>
      <List/>
      <Video2/>
    </div>
  )
}

export default page
