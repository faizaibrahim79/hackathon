import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import { PiClockClockwiseBold } from 'react-icons/pi';
export default function Footer() {
    return (
      <footer className="bg-black text-white py-12">
        <div className="container  px-4 mr-10 ml-10">
          {/* Top Section */}
          <div className="pb-8 flex flex-col md:flex-row items-center md:items-start md:justify-between ml-20">
            {/* Left Side: Heading and Paragraph */}
            <div className="mb-6 md:mb-0 md:w-1/2">
              <h2 className="text-2xl font-semibold text-orange-500">
                Still You Need Our Support?
              </h2>
              <p className="text-gray-400 mt-2">
                Don&#39;t wait, make a smart & logical quote here. It&#39;s pretty easy.
              </p>
            </div>
  
            {/* Right Side: Input Field and Button */}
            <div className="flex md:w-1/2 mr-20">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 px-4 py-2 rounded-l-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="px-6 py-2 bg-orange-500 rounded-r-md hover:bg-orange-600">
                Subscribe Now
              </button>
            </div>
          </div>
  
          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-orange-400 pt-8 mr-40 ml-40">
            {/* About Us */}
            <div>
              <h3 className="text-lg font-semibold">About Us</h3>
              <p className="text-gray-400 mt-4">
                Corporate clients and leisure travelers rely on Groundlink for
                dependable, safe, and professional chauffeured car service in
                major cities across the world.
              </p>
              <div className="mt-6 flex text-sm">
              <button className='bg-orange-500 px-4 py-1'><PiClockClockwiseBold className='text-xl'/></button>
                <div><h4 className="text-orange-500 font-semibold">Opening Hours</h4>
                <p className="text-gray-400 mt-2">Mon - Sat: 8.00 - 6.00</p>
                <p className="text-gray-400">Sunday: Closed</p></div>
              </div>
            </div>
  
            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-semibold">Useful Links</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-500">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-500">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-500">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-500">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Help Section */}
            <div>
              <h3 className="text-lg font-semibold">Help?</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-500">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-500">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-500">
                    Reporting
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-500">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-500">
                    Support Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-500">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
           {/* recent post  */}
            <div>
              <h3 className="text-lg font-semibold">Recent Post</h3>
               <ul><li className='flex'>
               <Image
                   src="/images/footer1.png"
                   alt="food"
                   width={80}
                   height={10}
                   />
                   <p className='text-sm'>Is fast food good<br/>for your body?
                   February 28,2002</p>
                   </li><br/>
                   <li className='flex'>
               <Image
                   src="/images/footer2.png"
                   alt="food"
                   width={140}
                   height={10}
                   />
                   <p className='text-sm'>change your food habit with organic food
                   February 28,2002</p>
                   </li><br/>
                   <li className='flex'>
               <Image
                   src="/images/footer3.png"
                   alt="food"
                   width={55}
                   height={10}
                   />
                   <p className='text-sm'>do you like fastfood<br/> for your life<br/>
                   February 28,2002</p>
                   </li>
                   </ul>
                
            </div>
  
  
          
          </div>
          </div>
     {/* Bottom Section */}
<div className="mt-12 bg-gray-500 border-gray-600 pt-4 pb-2 flex justify-around items-center text-sm text-gray-500 w-auto">
  {/* Left: Copyright */}
  <p className="text-white">
    Copyright © 2022 by Ayeman. All Rights Reserved.
  </p>

  {/* Right: Social Media Icons */}
  <div className="flex space-x-4">
    {/* Add padding and hover effects to icons */}
    <a
      href="#"
      className="p-2 rounded-full bg-gray-700 hover:bg-orange-500 text-white"
    >
      <FaFacebookF />
    </a>
    <a
      href="#"
      className="p-2 rounded-full bg-gray-700 hover:bg-orange-500 text-white"
    >
      <FaTwitter />
    </a>
    <a
      href="#"
      className="p-2 rounded-full bg-gray-700 hover:bg-orange-500 text-white"
    >
      <FaInstagram />
    </a>
    <a
      href="#"
      className="p-2 rounded-full bg-gray-700 hover:bg-orange-500 text-white"
    >
      <FaYoutube />
    </a>
    <a
      href="#"
      className="p-2 rounded-full bg-gray-700 hover:bg-orange-500 text-white"
    >
      <FaPinterest />
    </a>
  </div>
</div>

          
      </footer>
    );
  }
  