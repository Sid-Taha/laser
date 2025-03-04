"use client";

import React, { useState } from "react";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { HiOutlineHome } from "react-icons/hi";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "./cartContext";
// npm run devn// Import Cart Context

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart(); // Get Cart Count from Context

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 z-50 bg-black w-full">
      <nav className="flex items-center justify-between text-white px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8 h-16 md:h-20 lg:h-24 w-full dark:text-gray-100">
        {/* Logo Section */}
        <div className="hidden sm:block text-xl md:text-2xl lg:text-3xl font-bold">
          <Link href={"/"}>
            <Image
              src="/main_logo.png"
              alt="Gallery Image 1"
              width={130}
              height={70}
              className="rounded-md"
            />
          </Link>
        </div>

        {/* Links Section */}
        <ul
          className={`flex flex-col sm:flex-row justify-center sm:space-x-4 md:space-x-6 lg:space-x-8 text-sm md:text-base lg:text-lg ${
            isMobileMenuOpen ? "flex" : "hidden"
          } sm:flex`}
        >
          <li>
            <Link href="/">
              <HiOutlineHome className="text-3xl text-white hover:text-gray-400 transition duration-300" />
            </Link>
          </li>
          <li className="font-serif hover:text-gray-400 transition duration-300">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="font-serif hover:text-gray-400 transition duration-300">
            <Link href="/about">About</Link>
          </li>
          <li className="font-serif hover:text-gray-400 transition duration-300">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>








        {/* Mobile Menu Icon (Hamburger) */}
        <div className="sm:hidden flex items-center">
          <button className="text-3xl" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? "X" : "☰"}
          </button>
        </div>

        {/* Icons Section */}
        <div className="flex gap-5 md:gap-4 lg:gap-6 text-2xl md:text-3xl lg:text-4xl">
          <UserButton />
          
          {/* search */}
          {/* <Link href="/searchbar">
            <button className="hover:text-gray-400">
              <CiSearch title="Search" />
            </button>
          </Link> */}

            {/* Wish Icon */}
          <Link href="/wish">
            <button className="hover:text-gray-400">
              <CiHeart title="Wishes" />
            </button>
          </Link>

          {/* Cart Icon with Counter */}
          <div className="relative">
            <Link href="/cart">
              <button className="hover:text-gray-400">
                <CiShoppingCart title="Cart" />
              </button>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          <ModeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
