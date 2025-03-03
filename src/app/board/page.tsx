import React from 'react';
import Image from "next/image";

const Board = () => {
  return (
    <section className="text-gray-600 body-font dark:bg-gray-900 mt-24">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <Image
              alt="Company Signage"
              className="object-cover object-center h-full w-full"
              src="/sign2.jpg"
              width={1200} // Adjust width as needed
              height={600}  // Adjust height as needed
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              {/* <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div> */}
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg dark:text-gray-300">
                Laser Edge Tech
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                <p className="text-base dark:text-gray-400 ">

                We are strategists, designers, and developers. Innovators and problem
                solvers. Small enough to be simple and quick
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left dark:text-gray-400">
              <p className="leading-relaxed text-lg mb-4">
              We are strategists, designers, and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to deliver
            the scope you want at the pace you need. Payments will be scheduled based 
            on project milestones, ensuring timely completion and financial transparency.
            Our pricing is determined by the current material rates and labor wages, 
            ensuring cost-effective solutions without compromising quality. We are 
            strategists, designers, and developers. Innovators and problem solvers. 
            Small enough to be simple and quick.
              </p>
              {/* <a href="#" className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Board;
