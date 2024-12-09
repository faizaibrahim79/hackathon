import Image from 'next/image';
import { FaFacebookF, FaPinterestP, FaTwitter } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="relative flex flex-wrap items-center justify-between gap-6 bg-black text-white p-8">
      
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 bg-cover bg-center bg-opacity-30" style={{ backgroundImage: "url('/images/background.png')" }}></div>

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
  );
}
