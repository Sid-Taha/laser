"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const firstImages = ["/pro1.jpg", "/pro14.jpg", "/pro17.jpg", "/pro18.jpg", "/pro23.jpg"];
const secondImages = ["/h1.jpg", "/h2.jpg", "/h3.jpg", "/h4.jpg", "/h5.jpg"];

const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(nextSlide, 3000);
    return () => clearTimeout(timer);
  }, [currentIndex, nextSlide]);

  return (
    <div className="relative w-full max-w-5xl mx-auto my-8 border rounded-lg shadow-lg overflow-hidden">
      <div className="flex w-full h-[300px] sm:h-[400px] md:h-[500px]">
        {images.map((src, index) => (
          <div
            key={index}
            className={`w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "block opacity-100" : "hidden opacity-0"
            }`}
          >
            <Image
              src={src}
              width={1000}
              height={600}
              className="w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-1/2 left-2 transform -translate-y-1/2 p-3 bg-black/50 text-white rounded-full"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-2 transform -translate-y-1/2 p-3 bg-black/50 text-white rounded-full"
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
};

const SliderGallery = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="w-full px-4">
        <h2 className="text-xl font-semibold mb-4 text-center">Our products are our identity</h2>
        <ImageSlider images={firstImages} />
      </div>

      <div className="w-full px-4">
        <h2 className="text-xl font-semibold mb-4 text-center">Our products are our signature</h2>
        <ImageSlider images={secondImages} />
      </div>
    </div>
  );
};

export default SliderGallery;
