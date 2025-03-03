"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const images = ["/h1.jpg", "/h2.jpg", "/h3.jpg", "/h4.jpg"];
const images2 = ["/h5.jpg", "/h6.jpg", "/h7.jpg", "/h8.jpg"];

const ImageSliderCard = () => {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  // Auto-slide for first slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex1((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex1]);

  // Auto-slide for second slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex2((prevIndex) => (prevIndex + 1) % images2.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex2]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white dark:bg-gray-900 gap-8 flex-wrap">
      {/* First Slider */}
      <div className="relative w-[500px] h-[350px] overflow-hidden rounded-lg shadow-xl bg-white dark:bg-gray-800">
        <Image
          className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          src={images[currentIndex1]}
          width={500}
          height={350}
          alt="Slider Image 1"
          priority
        />
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/40 dark:bg-black/60 text-white p-2 rounded-full hover:bg-black/70"
          onClick={() =>
            setCurrentIndex1((prevIndex) =>
              prevIndex === 0 ? images.length - 1 : prevIndex - 1
            )
          }
        >
          ❮
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/40 dark:bg-black/60 text-white p-2 rounded-full hover:bg-black/70"
          onClick={() => setCurrentIndex1((prevIndex) => (prevIndex + 1) % images.length)}
        >
          ❯
        </button>
      </div>

      {/* Second Slider (Independent) */}
      <div className="relative w-[500px] h-[350px] overflow-hidden rounded-lg shadow-xl bg-white dark:bg-gray-800">
        <Image
          className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          src={images2[currentIndex2]}
          width={500}
          height={350}
          alt="Slider Image 2"
          priority
        />
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/40 dark:bg-black/60 text-white p-2 rounded-full hover:bg-black/70"
          onClick={() =>
            setCurrentIndex2((prevIndex) =>
              prevIndex === 0 ? images2.length - 1 : prevIndex - 1
            )
          }
        >
          ❮
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/40 dark:bg-black/60 text-white p-2 rounded-full hover:bg-black/70"
          onClick={() => setCurrentIndex2((prevIndex) => (prevIndex + 1) % images2.length)}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default ImageSliderCard;
