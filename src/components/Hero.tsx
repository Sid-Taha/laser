"use client";

import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import Link from "next/link";
import { Dancing_Script } from "next/font/google"; // Importing Google Font
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"], // Adding different weights for better styling
});

export default function ImagesSliderDemo() {
  const images = [
    "hero-images/1.jpg",
    "hero-images/2.jpg",
    "hero-images/3.jpg",
    "hero-images/4.jpg",
    "hero-images/5.jpg",
    "hero-images/6.png",
  ];

  return (
    <>
      <div className="w-[80%] mx-auto bg-white/5 rounded-[20px] flex justify-center items-center overflow-hidden">
      <ImagesSlider
        className="h-[25rem] sm:h-[35rem] w-[100%]"
        images={images}
      >
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="z-50 flex flex-col justify-center items-center px-4 sm:px-2"
        >
        </motion.div>
      </ImagesSlider>
      </div>

      {/* Improved Main Headings */}
      <div className="space-y-2 sm:space-y-4 mt-14 mb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`${playfair.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center 
            bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#CFB53B] to-[#B8860B]
            tracking-tight leading-tight`}
        >
          Laser Edge Tech
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`${playfair.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center
            text-gray-200 font-medium tracking-wide
            relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2
            before:w-24 before:h-1 before:bg-gradient-to-r before:from-[#D4AF37] before:to-[#B8860B]`}
        >
          Fiber Laser Cutting
        </motion.h2>
      </div>
    </>
  );
}
