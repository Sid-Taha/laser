import React from 'react';
import Image from 'next/image';

const Gallery = () => {
  return (
    <div>
      <section className="py-6  dark:text-gray-900">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <Image
            src="/h1.jpg"
            alt="Gallery Image 1"
            width={500}
            height={500}
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <Image
            src="/h2.jpg"
            alt="Gallery Image 2"
            width={500}
            height={500}
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <Image
            src="/h3.jpg"
            alt="Gallery Image 3"
            width={500}
            height={500}
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <Image
            src="/h4.jpg"
            alt="Gallery Image 4"
            width={500}
            height={500}
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <Image
            src="/h5.jpg"
            alt="Gallery Image 5"
            width={500}
            height={500}
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <Image
            src="/h6.jpg"
            alt="Gallery Image 6"
            width={500}
            height={500}
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <Image
            src="/h7.jpg"
            alt="Gallery Image 7"
            width={500}
            height={500}
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <Image
          src="/h8.jpg"
            alt="Gallery Image 8"
            width={500}
            height={500}
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <Image
            src="/h9.jpg"
          alt="Gallery Image 9"
            width={500}
            height={500}
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <Image
            src="/h11.webp"
            alt="Gallery Image 10"
            width={500}
            height={500}
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
          />
        </div>
      </section>
    </div>
  );
};

export default Gallery;