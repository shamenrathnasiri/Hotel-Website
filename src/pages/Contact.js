import React from 'react';
import bgimage from '../contactusImg/contactus.jpg';

function About() {
  return (
    <>
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          className="object-cover w-full h-full sm:h-[50vh] md:h-[75vh] lg:h-screen brightness-100"
          src={bgimage}
          alt="Background"
        />
      </div>

      {/* Text Container - Aligned to the left */}
      <div className="absolute top-28 left-10 w-[90%] sm:w-[80%] md:w-[400px] lg:w-[450px] bg-white md:h-[300px] sm:h-auto rounded-xl p-4 sm:p-6 md:p-8">
        <p className="mt-2 md:ml-32 sm:mt-4 md:mt-2 text-[18px] sm:text-[20px] md:text-[25px] font-bold text-gray-800 leading-relaxed text-center sm:text-left">
          CONTACT
        </p>
        <p className="text-[18px] md:ml-28 sm:text-[20px] md:text-[25px] font-bold text-gray-800 leading-relaxed text-center sm:text-left mt-2 sm:mt-4">
          +94 72 45 ### <br /> +94 28 569 ###
        </p>
        <p className="mt-4 sm:mt-6 md:ml-36  md:mt-4 text-[18px] sm:text-[20px] md:text-[25px] font-bold text-gray-800 leading-relaxed text-center sm:text-left">
          MAIL
        </p>
        <p className="text-[18px] md:ml-16 sm:text-[20px] md:text-[25px] font-bold text-gray-800 leading-relaxed text-center sm:text-left mt-2">
          hotelbutterfly@mail.com
        </p>
      </div>
    </>
  );
}

export default About;
