import Link from "next/link";
import React from "react";

const Insta = () => {
  return (
    <div>
      {/* Background Section */}
      <div
        className="h-[60vh] sm:h-[50vh] md:h-[60vh] lg:h-[60vh] w-full bg-cover bg-center bg-no-repeat rounded-lg transition-all duration-300 
        bg-[#E2E0C8] dark:bg-[#243642]"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        {/* Content Section */}
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-gray-800 dark:text-gray-200 text-4xl sm:text-7xl font-bold mb-4 font-serif">
            Our Instagram
          </h1>
          <p className="text-gray-800 dark:text-gray-400 text-lg mb-6 font-serif">
            Follow us on Instagram for the latest updates and stunning laser cutting inspirations
          </p>
          <Link href="https://www.instagram.com/huzaifaahmed27?igsh=ZnJ3N21jYmV5M3Ux">
            <button className=" font-serif px-8 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-white rounded-full shadow-lg 
            shadow-gray-500 dark:shadow-gray-900 hover:shadow-gray-700 dark:hover:shadow-gray-600 transition duration-300">
              Click Here
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Insta;
