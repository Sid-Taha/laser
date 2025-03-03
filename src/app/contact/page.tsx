// src\app\contact\page.tsx
import Contact from '@/components/Contact'
import SliderGallery from '@/components/SliderGallery'
import UiContact from '@/components/UiContact'
import React from 'react'

const page = () => {
  return (
    <div className='mt-24'>
      <SliderGallery/>
      <UiContact/>
      <Contact/>
    </div>
  )
}

export default page
