"use client";
import Image from 'next/image';
import { FaFacebookF, FaPinterestP, FaTwitter } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import React, { useState } from "react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative  min-h-screen bg-cover  bg-center bg-opacity-30" style={{ backgroundImage: "url('/images/background.png')" }}>
      {/* Navbar */}
      <header className="w-full h-[50px] bg-black bg-opacity-70 text-white flex justify-center items-center px-4">
        <h2 className="text-[24px] font-bold">
          <span className="text-[#FF9F0D]">Food</span>tuck
        </h2>
      </header>
      <nav className=" text-white  bg-black bg-opacity-70 p-4 w-full overflow-hidden">
        <section className="flex items-center justify-between px-4 md:px-[135px]">
          {/* Logo */}
          <div className="md:hidden block text-2xl font-bold">
            <span className="text-orange-500">Food</span>tuck
          </div>

          {/* Hamburger Icon for Mobile */}
          <div
            className="text-orange-500 md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
          </div>

          {/* Links */}
          <ul
            className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent md:flex items-center space-y-4 md:space-y-0 md:space-x-6 text-sm transition-all duration-300 ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            {["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-orange-500 cursor-pointer px-4 md:px-0"
                onClick={() => setMenuOpen(false)} // Close the menu on click
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Search Box and Cart Icon */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-black border border-[#FF9F0D] rounded-full px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-orange-500"
              />
              <span className="absolute top-2.5 right-3">
                <CiSearch />
              </span>
            </div>
            <HiOutlineShoppingBag className="w-[28px] h-[24px]" />
          </div>
        </section>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-wrap items-center justify-between gap-6  bg-black bg-opacity-70 text-white p-8">
        {/* Vertical Line with Icons */}
        <div className="relative -mt-60">
          {/* Vertical Line */}
          <div className="border-l-2 border-gray-400 h-32 left-1/2 transform -translate-x-1/2 -mt-44"></div>

          {/* Icons Vertically Stack */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-1/4 space-y-6">
            <div className="flex justify-center items-center text-3xl">
              <FaFacebookF className='w-3' />
            </div>
            <div className="flex justify-center items-center text-3xl">
              <FaTwitter className='w-4 text-orange-500' />
            </div>
            <div className="flex justify-center items-center text-3xl">
              <FaPinterestP className='w-3' />
            </div>
            <div className="border-l-2 border-gray-400 h-32 ml-2 left-1/2 transform -translate-x-1/2"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="max-w-lg z-10">
          <h3 className="font-greatvibes text-lg text-orange-500 mb-2">It&apos;s Quick & amusing!</h3>
          <h1 className="text-4xl font-bold leading-tight">
            <span className="text-orange-500">The</span> Art of speed <br />
            food Quality
          </h1>
          <p className="text-gray-300 mt-4 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>
          <a
            href="#"
            className="inline-block bg-orange-500 text-white font-semibold py-3 px-8 rounded-r-3xl rounded-l-3xl hover:bg-orange-600"
          >
            See Menu
          </a>
        </div>

        {/* Image Section */}
        <div className="relative z-10">
          <Image
            src="/images/dish.png"
            alt="Delicious Food"
            width={400}
            height={200}
          />
        </div>
      </section>
    </div>
  );
}


