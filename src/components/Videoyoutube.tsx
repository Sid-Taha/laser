import React from "react";

const Page = () => {
  // YouTube links array
  const youtubeLinks = [
    "https://youtu.be/vft2eTmmWc4?si=n8Kd_mfs5YHTO8zZ",
    "https://youtu.be/w7lPOqO2wss?si=aVLgqWp2SYmq6rEA",
    "https://youtu.be/GbXJGy3eE28?si=Ecem8r9LrB6Wiu1d",
  ];

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      <div className="container grid grid-cols-12 mx-auto">
        {/* Background Image Section */}
        <div
          className="flex flex-col justify-center col-span-12 align-middle bg-gray-200 bg-no-repeat bg-cover dark:bg-gray-700 lg:col-span-6 lg:h-auto"
          style={{
            backgroundImage: "url('/m9.jpg')",
            backgroundPosition: "center center",
            backgroundBlendMode: "multiply",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col items-center p-8 py-12 text-center">
            <h1 className="py-4 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-maroon-700 to-gray-500 dark:from-maroon-500 dark:to-gray-400">
              Laser Cutting Machines
            </h1>
            <p className="pb-6 text-lg bg-clip-text text-transparent bg-gradient-to-r from-maroon-600 to-gray-500 dark:from-maroon-400 dark:to-gray-300">
              Precision, Speed, and Efficiency
            </p>
          </div>
        </div>

        {/* Text Content Section */}
        <div className="flex flex-col col-span-12 p-6 divide-y divide-gray-300 dark:divide-gray-600 lg:col-span-6 lg:p-10 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
          {youtubeLinks.map((link, index) => (
            <div key={index} className="pt-6 pb-4 space-y-2">
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Works faster than traditional cutting methods, improving efficiency
              </h1>
              <p className="text-gray-700 dark:text-gray-400">
                Watch this amazing video and learn something new!
              </p>
              <a
                rel="noopener noreferrer"
                href={link}
                target="_blank"
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-yellow-400 rounded-lg shadow-md hover:from-orange-600 hover:to-yellow-500 transition-all"
              >
                <span>View More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ml-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
