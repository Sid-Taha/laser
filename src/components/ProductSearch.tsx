"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}

function ProductSearch({ products }: { products: Product[] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-24 w-full px-4 py-4">
      {/* Search Bar */}
      <div className="mx-auto max-w-2xl mt-8">
        <input
          type="text"
          placeholder="Search products by name..."
          className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredProducts.map((item) => (
          <Link
            key={item._id}
            href={`/shop/${item._id}?name=${encodeURIComponent(item.name)}&image=${encodeURIComponent(item.image)}&price=${item.price}`}
          >
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-transform duration-300">
              <div className="w-full h-[250px] rounded-lg overflow-hidden relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="hover:scale-105 transition duration-300 object-cover"
                  fill
                />
              </div>
              <div className="text-gray-700 text-lg font-semibold mt-4">
                {item.name}
              </div>
              <div className="text-xl font-bold text-gray-900 mt-2">
                Rs. {item.price}.00
              </div>
              <Button
                asChild
                className="w-full mt-4 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:from-gray-400 hover:via-gray-500 hover:to-gray-600 text-gray-900 font-semibold py-2 rounded-md"
              >
                <p>Read more</p>
              </Button>
            </div>
          </Link>
        ))}
      </div>

      {/* Show message when no products found */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No products found matching your search.
        </div>
      )}

      {/* Rest of your existing UI */}
      {/* Pagination */}
      <div className="flex justify-center space-x-2 mt-16">
        {/* ... existing pagination code ... */}
      </div>

      {/* Features Section */}
      <div className="py-16 mt-20">
        {/* ... existing features code ... */}
      </div>
    </div>
  );
}

export default ProductSearch;