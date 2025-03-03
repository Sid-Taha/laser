import React from "react";
import Image from "next/image";
import Gfourpic from "@/components/Gfourpic";
// import FourPics from "@/components/FourPics";

const Page = () => {
  return (

    <>
    <Gfourpic/>
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Laser Edge Tech
          </h2>
          <p className="mb-4">
            We are strategists, designers, and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to deliver
            the scope you want at the pace you need. Payments will be scheduled based 
            on project milestones, ensuring timely completion and financial transparency.
          </p>
          <p>
            Our pricing is determined by the current material rates and labor wages, 
            ensuring cost-effective solutions without compromising quality. We are 
            strategists, designers, and developers. Innovators and problem solvers. 
            Small enough to be simple and quick.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg"
            src="/h1.jpg"
            alt="Office content 1"
            width={500} 
            height={400} 
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="/h2.jpg"
            alt="Office content 2"
            width={500} 
            height={400} 
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default Page;
