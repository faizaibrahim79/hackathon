import React from 'react';
import Image from 'next/image';
import { TiTick } from 'react-icons/ti';

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-black text-white">
      
      {/* Left Section */}
      <div className="flex flex-col items-center md:items-start space-y-6 md:w-1/2 ml-14">
        <h3 className="font-greatvibes text-orange-500 text-2xl">About Us</h3>
        <h2 className="text-3xl font-bold">
          <span className="text-orange-500">We</span> Create the Best <br /> Foody Product
        </h2>
        <p className="text-white text-center text-sm md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nam aliquid suscipit assumenda nulla illo dicta. Rem nam optio eum illum nobis, asperiores exercitationem harum quasi maiores. Molestiae.
          Maxime obcaecati vel et voluptatem odio ipsam similique optio accusantium tempora dolorum eveniet consectetur reiciendis voluptate tempore, aspernatur nesciunt dicta quod.
        </p>

        {/* List with Tick Icon */}
        <ul className="space-y-2 text-sm list-inside md:text-base">
          <li className="flex items-start space-x-2"><TiTick className="text-orange-500" /> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></li>
          <li className="flex items-start space-x-2"><TiTick className="text-orange-500" /> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></li>
          <li className="flex items-start space-x-2"><TiTick className="text-orange-500" /> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></li>
        </ul>
        <a
            href="#"
            className="inline-block bg-orange-500 text-white font-semibold py-3 px-8 rounded-r-3xl rounded-l-3xl hover:bg-orange-600"
          >
            Read More
          </a>
        
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center md:items-start space-y-6 mr-14 ">
        {/* Top Image */}
        <div className="relative w-full max-w-xs">
          <Image
            src="/images/eggs.png"
            alt="Delicious Food"
            width={400}
            height={200}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Bottom Images (Sandwiches) */}
        <div className="flex space-x-4 w-full justify-center md:justify-start">
          <div className="relative w-1/2">
            <Image
              src="/images/sandwitch1.png"
              alt="Sandwich 1"
              width={400}
              height={200}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="relative w-1/2">
            <Image
              src="/images/sandwitch2.png"
              alt="Sandwich 2"
              width={400}
              height={200}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default AboutSection;
