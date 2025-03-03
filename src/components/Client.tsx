import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    text: "Laser Edge Tech.has completely transformed our production process...",
    name: "John",
    role: "Marketer",
    image: "/c2.jpg"
  },
  {
    id: 2,
    text: "We have been working with Laser Edge Tech.for several projects...",
    name: "Shalmit",
    role: "Marketer",
    image: "/c3.jpeg"
  },
  {
    id: 3,
    text: "Exceptional service from Laser Edge Tech. Their fiber laser cutting...",
    name: "David",
    role: "Marketer",
    image: "/c4.avif"
  },
  {
    id: 4,
    text: "Laser Edge Tech. has exceeded our expectations with their fiber...",
    name: "Alex",
    role: "Marketer",
    image: "/c1.jpeg"
  }
];

const Customers = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            What Our Clients Say
          </h2>
          <div className="mt-4 flex justify-center space-x-2">
            <span className="inline-block w-12 h-1 bg-blue-500 rounded-full" />
            <span className="inline-block w-6 h-1 bg-blue-500 rounded-full" />
            <span className="inline-block w-3 h-1 bg-blue-500 rounded-full" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <p className="text-gray-600 dark:text-gray-300 italic mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="relative h-12 w-12">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    layout="fill"
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;