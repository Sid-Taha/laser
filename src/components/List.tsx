import React from 'react'

const List = () => {
  return (
    <section className="text-gray-600 dark:text-gray-300 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 dark:text-white mb-4">
            Laser Cutting Machines – Precision, Speed, and Efficiency
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Laser cutting machines are advanced tools used for precision cutting, engraving, and marking across a wide range of materials, including metal, wood, plastic, acrylic, and glass. These machines use high-powered laser beams to deliver clean, accurate, and intricate cuts with minimal material wastage.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {[
            'High Precision Cutting',
            'Fast and Efficient Processing',
            'Versatile Material Compatibility',
            'Minimal Material Wastage',
            'Non-Contact Cutting Technology',
            'Advanced Automation Features'
          ].map((item, index) => (
            <div key={index} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 dark:bg-gray-800 rounded flex p-4 h-full items-center">
                <span className="title-font font-medium">{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default List
