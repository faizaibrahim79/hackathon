import React from 'react';
import Image from 'next/image';

const FoodItemsGrid = () => {
  return (
    <div className='bg-black text-white p-8'>
      {/* Centered Headings */}
      <div className="text-center mb-8">
        <h3 className='text-orange-500 text-2xl'>Food Category</h3>
        <h2 className='text-4xl font-bold'>
          <span className='text-orange-500'>Ch</span>oose Food Item
        </h2>
      </div>

      {/* Food Items Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Food Item with Centered Overlay */}
        <div className="relative">
          {/* Food Image */}
          <Image
            src="/images/item1.png" // Ensure the image path is correct
            alt="Delicious Food"
            width={400}
            height={200}
            className="rounded-lg shadow-md"
          />

          {/* Overlays Container */}
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
            {/* Save 30% */}
            <div className="bg-white text-orange-500 text-sm font-bold px-3 py-1 rounded-md shadow-lg">
              Save 30%
            </div>
            {/* Fast Food Dish */}
            <div className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-md shadow-lg">
              Fast Food Dish
            </div>
          </div>
        </div>

        {/* Placeholder for Other Items */}
        <div className="relative">
          <Image
            src="/images/item2.png"
            alt="Delicious Food"
            width={400}
            height={200}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="relative">
          <Image
            src="/images/item3.png"
            alt="Delicious Food"
            width={400}
            height={200}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="relative">
          <Image
            src="/images/item4.png"
            alt="Delicious Food"
            width={400}
            height={200}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default FoodItemsGrid;
