"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"], // Use only the boldest weight available
});

const ImageSlider = () => {
  const [text] = useTypewriter({
    words: [
      "Fiber Laser Cutting",
      "Wood Laser Cutting",
      "Metal Laser Cutting",
      "Acrylic Laser Cutting",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const images = [
    "/pro3.jpg",
    "/pro23.jpg",
    "/pro17.jpg",
    "/pro14.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-[80%] mx-auto bg-white/5 rounded-[20px] flex justify-center items-center overflow-hidden">
      <div className="relative w-full h-[440px] overflow-hidden">
        {/* Image Slider */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100 z-0" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`banner-${index}`}
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              priority={index === 0} // Optimize first image load
            />
          </div>
        ))}

        {/* Centered Text with Dancing Script Font */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center z-10">
          <h1 className={`text-5xl font-extrabold mb-2 ${dancingScript.className}`}>
            {text}
            <Cursor cursorBlinking cursorStyle="|" cursorColor="#1A4870" />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
