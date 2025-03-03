// src\app\shop\[shop]\page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import Link from "next/link";

const ShopProducts = () => {
  const [product, setProduct] = useState<any>(null);
  const { shop } = useParams();

  useEffect(() => {
    if (!shop) {
      console.error("Shop parameter is missing or undefined");
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await client.fetch(`
          *[_type == 'product'] {
            _id,
           "image": image.asset->url,
            description,
            price,
            name,
            category,
            discountPercentage,
            isFeaturedProduct,
            stockLevel
          }
        `);
        const currentProduct = response.find((item: any) => item._id === shop);
        setProduct(currentProduct || null);
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      }
    };

    fetchProduct();
  }, [shop]);

  const handleAddToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (!favorites.some((fav: any) => fav._id === product._id)) {
      favorites.push(product);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <section className="mt-24 py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="">
          <div className="product-card lg:flex sm:flex-cols-2 lg:flex-row lg:gap-8 xl:gap-16">
            <Image
              className="w-full "
              src={product.image || "/placeholder-image.jpg"}
              alt={product.name || "Product"}
              width={500}
              height={500}
            />
            <div className="mt-8 sm:mt-8 lg:mt-0">
              <h1 className=" mt-8 text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                {product.name}
              </h1>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                  PKR{product.price}
                </p>
              </div>
              <div className="mt-8 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                <Link
                  href={`/wish?name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}&description=${encodeURIComponent(product.description)}`}
                >
                  <Button
                    variant="outline"
                    className="mr-4 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:from-gray-400 hover:via-gray-500 hover:to-gray-600 text-gray-900 font-semibold py-2 rounded-md"
                    onClick={handleAddToFavorites}
                  >
                    Add to favorites
                  </Button>
                </Link>

                <Link
                  href={`/cart?name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}&description=${encodeURIComponent(product.description)}`}
                >
                  <Button
                    variant="default"
                    className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:from-gray-400 hover:via-gray-500 hover:to-gray-600 text-gray-900 font-semibold py-2 rounded-md"
                  >
                    Add to cart
                  </Button>
                </Link>
              </div>
              <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
              <p className="mb-6 text-gray-500 dark:text-gray-400">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopProducts;
