import React from 'react';
import Image from 'next/image';
import { PiHamburgerThin, PiWineLight } from 'react-icons/pi';
import { LuCookie } from 'react-icons/lu';

const WhyChooseUsSection = () => {
  return (
    <div className="bg-black text-white px-8 py-16 flex flex-col md:flex-row items-center gap-8">
      {/* Left Section: Image Grid */}
      <div className="grid grid-cols-2 gap-4 md:w-1/2">
        {/* Top Images */}
        <div className="col-span-2">
          <Image
            src="/images/choose1.png"
            alt="Tacos"
            width={400}
            height={200}
            className="rounded-lg"
          />
       
          <Image
            src="/images/choose2.png"
            alt="burger"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div>
          <Image
            src="/images/choose3.png"
            alt="chicken"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div>
          <Image
            src="/images/choose4.png"
            alt="cheese burger"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div>
          <Image
            src="/images/choose5.png"
            alt="burger with fries"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div>
          <Image
            src="/images/choose6.png"
            alt="fish"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Right Section: Text and Icons */}
      <div className="flex flex-col gap-6 md:w-1/2">
        <h3 className="font-greatvibes text-orange-500 text-2xl">Why Choose Us</h3>
        <h2 className="text-4xl font-bold">
          <span className="text-orange-500">Extra</span> ordinary Taste <br /> And Experienced
        </h2>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.
        </p>

        {/* Icons with Text */}
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-orange-500 p-4 rounded-full">
              <span className="text-2xl"><PiHamburgerThin /></span>
            </div>
            <p className="mt-2 text-white">Fast Food</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-orange-500 p-4 rounded-full">
              <span className="text-2xl"><LuCookie /></span>
            </div>

            <p className="mt-2 text-white">Lunch</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-orange-500 p-4 rounded-full">
              <span className="text-2xl"><PiWineLight /></span>
            </div>
            <p className="mt-2 text-white">Dinner</p>
          </div>
        </div>

        {/* Highlight Box */}
        <div className="bg-white text-black text-center py-4 px-6 rounded-lg shadow-md">
          <h3 className="text-4xl font-bold text-orange-500">30+</h3>
          <p className="font-semibold">Years of Experienced</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
