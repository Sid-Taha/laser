import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const SmallGallery = () => {
  return (
    <section className="py-10 dark:bg-[#0B192C] text-white">
      {/* ✅ Centered Gradient Text & Shadow on h1 */}
      <div className="flex justify-center">
        <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-10 
          bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent 
          drop-shadow-lg leading-tight inline-block">
          Sign Boards Maker
        </h1>
      </div>

      <div className="container flex flex-col justify-center p-4 mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["/sign4.jpg", "/sign5.jpg", "/sign2.jpg", "/sign1.jpg"].map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <Image
                className="object-cover w-full rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 dark:bg-gray-500 aspect-square"
                src={src}
                alt={`Gallery Image ${index + 1}`}
                width={300}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* ✅ Gradient Button with Same Colors as h1 */}
      <div className="flex justify-center mt-8">
        <Link href="/board">
          <Button className="px-6 py-2 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 
            bg-clip-text text-transparent font-semibold rounded-md shadow-lg border-2 border-orange-400 
            transition-all duration-300 hover:scale-105">
            Order Detail
          </Button>
        </Link>
      </div>
      
    </section>
  );
};

export default SmallGallery;
