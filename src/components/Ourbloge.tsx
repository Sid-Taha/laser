import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaTruck } from 'react-icons/fa'; // Ensure you have this library installed.
import { Button } from './ui/button';
import { SimpleBlogCard } from '@/lib/interface';


async function getData() {
  const query = `*[_type=='blogs']{
    title,
    smallDescription,
    "currentSlug": slug.current,
    alt,
    "titleImage": image.asset->url,
    _id,
    _createdAt,
    _updatedAt
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: SimpleBlogCard[] = await getData();

  return (
    <div>
      {/* Blog Header */}
      <div className="text-center mt-9">
        <Link href="/bloges">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100">
            Our Blogs
          </h1>
        </Link>
        <p className=" font-serif mt-5 text-sm lg:text-xl text-black">
          {data[0]?.smallDescription || "Discover the latest posts here."}
        </p>
      </div>

      {/* Blog Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-4 sm:px-6 lg:px-8 py-10 mx-auto">
          {/* Blog Cards */}
          <div className="flex flex-wrap -m-4">
            {data.map((item, index) => (
              <div key={index} className="p-4 sm:w-full md:w-1/2 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-75 rounded-lg overflow-hidden text-center shadow-lg">
                  {/* Image */}
                  <div className="overflow-hidden sm:h-60 md:h-64 lg:h-72 flex justify-center items-center">
                    <Image
                      src={item.titleImage}
                      alt={item.alt || "Blog Image"}
                      width={900}
                      height={900}
                      className="hover:scale-105 transition-transform duration-300 ease-in-out w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Paragraph */}
                    <p className=" font-serif text-sm text-gray-500 mb-3">{item.smallDescription}</p>
                    {/* Title */}
                    <h1 className="font-serif title-font sm:text-xl md:text-2xl font-medium text-gray-900 mb-3">
                      {item.title}
                    </h1>
                    {/* Icons */}
                    <div className="font-serif flex justify-center items-center space-x-4 text-gray-500">
                      {/* Time Icon */}
                      <div className=" font-serif flex items-center">
                        <FaClock className="mr-2" />
                      </div>
                      {/* Delivery Icon */}
                      <div className="flex items-center">
                        <FaTruck className="mr-2" />
                        <span>Delivery Available</span>
                      </div>
                    </div>
                    {/* Button */}
                    <div className="mt-5 flex justify-center">
                      <Button asChild className="w-full mt-4 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:from-gray-400 hover:via-gray-500 hover:to-gray-600 text-gray-900 font-semibold py-2 rounded-md font-serif">
                        <Link href={`/blog/${item.currentSlug}`}>Read more</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* View All Posts Section */}
      <div className="flex flex-col items-center justify-center mt-8">
        <h2 className="text-2xl lg:text-3xl text-black font-semibold mb-6 dark:text-gray-200">
          <Link href="/viewpost">
          <Button className="px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:from-gray-400 hover:via-gray-500 hover:to-gray-600 shadow-lg rounded-md transition-all duration-300">
  View More
</Button>

          </Link>
        </h2>
        <div className="h-[2px] w-16 bg-black mt-2 mb-10"></div>
      </div>
    </div>
  );
}
