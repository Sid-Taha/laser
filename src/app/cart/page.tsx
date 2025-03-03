"use client";

import Image from "next/image";
import { Heart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { clerkGetUser } from "../services/userApi";
import { urlFor } from "@/sanity/lib/image";

interface Product {
  name: string;
  price: string;
  description: string;
  image: string;
  quantity: number;
}

export default function ShoppingCart() {
  const router = useRouter();
  const searchParam = useSearchParams();
  const [cartItem, setCartItem] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    const updatedCart = cart ? JSON.parse(cart) : [];
    const name = searchParam.get("name");
    const price = searchParam.get("price");
    const description = searchParam.get("description");
    const image = searchParam.get("image");

    if (name && price && description && image) {
      const isDuplicate: boolean = updatedCart.some(
        (item: Product) => item.name === name
      );

      if (!isDuplicate) {
        updatedCart.push({ name, price, description, image, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItem(updatedCart);
      router.replace("/cart");
    } else {
      setCartItem(updatedCart);
    }
  }, [searchParam, router]);

  useEffect(() => {
    async function fetchUser() {
      await clerkGetUser();
    }
    fetchUser();
  }, []);

  const handleRemoveItem = (index: number) => {
    const updatedCart = [...cartItem];
    updatedCart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItem(updatedCart);
    setIsModalOpen(false);
  };

  const handleQuantity = (index: number, quantity: number) => {
    const updatedCart = [...cartItem];
    updatedCart[index].quantity = quantity;

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItem(updatedCart);
  };

  const totalPrice = cartItem.reduce(
    (total, item) => total + +item.price * item.quantity,
    0
  );

  const totalItems = cartItem.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <div className="flex mt-24">
        <div className="container mx-auto px-4 py-8 mt-[99px]">
         

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-2xl font-medium mb-6">Your Cart</h1>

              <div className="space-y-6">
                {cartItem.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <li key={index} className="p-4 border-b last:border-none flex space-x-4">
                          {item.image && (
                            <Image
                              src={urlFor(item.image).url()}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded"
                              width={96}
                              height={96}
                            />
                          )}
                        </li>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-sm text-gray-600">{item.description}</p>
                              <div className="mt-2 space-y-1">
                                <div className="flex gap-4">
                                  <p className="text-sm">Quantity:</p>
                                  <input
                                    type="number"
                                    min={1}
                                    className="bg-slate-200 pl-2 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:from-gray-400 hover:via-gray-500 hover:to-gray-600 text-gray-900 font-semibold rounded-md"
                                    value={item.quantity}
                                    onChange={(e) =>
                                      handleQuantity(index, +e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                            <p className="text-sm">MRP: ₹{+item.price * item.quantity}</p>
                          </div>
                          <div className="flex gap-4 mt-4">
                            <Link href={"/wish"}>
                              <Button variant="ghost" size="sm">
                                <Heart className="w-4 h-4" />
                              </Button>
                            </Link>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                setSelectedIndex(index);
                                setIsModalOpen(true);
                              }}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-100">
                Order Summary
              </h2>
              <div className="flex justify-between mb-2 text-gray-800 dark:text-gray-100">
                <span className="text-sm">Total Items:</span>
                <span className="text-sm">{totalItems}</span>
              </div>
              <div className="flex justify-between mb-4 text-gray-800 dark:text-gray-100">
                <span className="text-sm">Total Price:</span>
                <span className="text-sm">₹{totalPrice.toFixed(2)}</span>
              </div>
              <Link href={"/paymentform"}>
                <Button
                  variant="default"
                  size="lg"
                  className="w-full bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:from-gray-400 hover:via-gray-500 hover:to-gray-600 text-gray-900 font-semibold py-2 rounded-md"
                >
                  Proceed to Payment
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {isModalOpen && selectedIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-medium mb-4">
                Are you sure you want to delete this item?
              </h2>
              <div className="flex justify-end gap-4">
                <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => handleRemoveItem(selectedIndex)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
