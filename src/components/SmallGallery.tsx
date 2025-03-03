import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const SmallGallery = () => {
  return (
    <section className="py-6 dark:bg-[#0B192C]">
      <div className="container flex flex-col justify-center p-4 mx-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
          {["/h2.jpg", "/h6.jpg", "/h3.jpg", "/h4.jpg"].map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <Image 
                className="object-cover w-full dark:bg-gray-500 aspect-square" 
                src={src} 
                alt={`Gallery Image ${index + 1}`} 
                width={300} 
                height={300} 
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* ✅ Button Centered with Shadow */}
      <div className="flex justify-center mt-6">
        <Link href={"/grills"}>
          <Button className="px-6 py-2 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 
            hover:from-gray-400 hover:via-gray-500 hover:to-gray-600 
            text-gray-900 font-semibold rounded-md shadow-lg transition-all duration-300 hover:scale-105">
            Order Detail
          </Button>
        </Link>
      </div>
      
    </section>
  );
};

export default SmallGallery;
