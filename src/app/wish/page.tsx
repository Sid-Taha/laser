"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";


interface IData{
  _id: string,
  image: string,
  description: string,
  price : number,
  name : string,
  category : string,
  discountPercentage : number,
  isFeaturedProduct : boolean,
  stockLevel : number
}


const Favorites = () => {
  const [favorites, setFavorites] = useState<IData[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(storedFavorites);
  }, []);

  const handleRemoveFromFavorites = (productId: string) => {
    const updatedFavorites = favorites.filter((product: IData) => product._id !== productId);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <section className="mt-24 py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Your Favorites</h1>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorites.length === 0 ? (
            <p>No favorite products added.</p>
          ) : (
            favorites.map((product: IData) => (
              <div key={product._id} className="product-card">
                <Image
                  className="w-full "
                  src={product.image || "/placeholder-image.jpg"}
                  alt={product.name}
                  width={500}
                  height={500}
                />
                <div className="mt-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{product.name}</h2>
                  <p className="text-gray-500 dark:text-gray-400">{product.description}</p>
                  <p className="text-xl font-extrabold text-gray-900 dark:text-white">PKR{product.price}</p>
                  <Button
                    variant="outline"
                    className="mt-4 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:from-gray-400 hover:via-gray-500 hover:to-gray-600 text-gray-900 font-semibold py-2 rounded-md"
                    onClick={() => handleRemoveFromFavorites(product._id)}
                  >
                    Remove from Favorites
                  </Button>
                  <Link href={`/cart?name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}&description=${encodeURIComponent(product.description)}`}>
                    <Button variant="default" className="mt-4 ml-2 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:from-gray-400 hover:via-gray-500 hover:to-gray-600 text-gray-900 font-semibold py-2 rounded-md">
                      Add to Cart
                    </Button>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Favorites;