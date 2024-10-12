import React from 'react';
import bgimage from '../aboutusImg/aboutus.jpg';

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
      <div className="absolute top-28 left-10 w-[90%] sm:w-[80%] md:w-[500px] bg-white md:h-[700px] sm:h-[300px] brightness-100
      rounded-xl p-4 sm:p-8 md:p-10">
        <p className="mt-8 text-[18px] sm:text-[20px] md:text-[25px] font-bold text-gray-800 leading-relaxed">
          Nestled in the heart of Polonnaruwa, Hotel Butterfly offers a perfect blend of luxury and comfort. Our boutique hotel is designed to provide a tranquil escape from the everyday, with elegant rooms, personalized service, and modern amenities that ensure a memorable stay. Whether you're here for business or leisure, Hotel Butterfly promises an experience that combines warmth, hospitality, and attention to detail.
        </p>
      </div>
    </>
  );
}

export default About;
