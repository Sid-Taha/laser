// src\app\about\page.tsx
import Client from '@/components/Client'
import HeroStyle from '@/components/HeroStyle'

import React from 'react'


const page = () => {
  return (
    <div className='mt-24'>
      <HeroStyle/>
      <Client/>
    </div>
  )
}

export default page
