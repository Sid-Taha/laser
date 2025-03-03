import React from 'react';
import Image from 'next/image';

import Link from 'next/link';


const images = [
  {
    src: '/h6.jpg',
    alt: 'Image 1',
    width: 500,
    height: 500,
  },
  // Add more image objects here following the same structure
];

const Gallery = () => {
  return (
    <>
    <div className="bg-[#23486A] ">
      <section className="  text-[#3E5879] body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full mb-20 text-center">
          <h1 className=" font-serif text-3xl font-bold bg-gradient-to-r from-[#2E5077] via-[#A1D6CB] to-yellow-500 bg-clip-text text-transparent mb-4">
  Create Your Dream World!
</h1>
         
            <p className=" font-serif lg:w-2/3 mx-auto leading-relaxed text-base bg-gradient-to-r from-[#2E5077] via-[#A1D6CB] to-yellow-500 bg-clip-text text-transparent">
              Explore our latest collection of premium images, curated to
              enhance your visual experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div
                key={image.src}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
              </div>
              
            ))}
          </div>
        
        </div>
      </section>

      <section className="bg-gray-900 text-white">
        <div className="container mx-auto px-5 py-32 text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Understand User Flow.
            <span className="block sm:inline"> Increase Conversion. </span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="mt-8 flex justify-center space-x-4">
          <Link
             href="/contact"
              className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-sm font-medium text-white hover:bg-transparent hover:border-blue-600 hover:text-blue-600 border transition duration-300"
            >
              Get Started
              </Link>
            <Link
              href="/viewpost"
              className="inline-block rounded-lg border border-blue-600 px-8 py-3 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Learn More
              </Link>
          </div>
        </div>
      </section>
     
    </div>
   
    
     </>
  );
};

export default Gallery;