import React from 'react';
import oneImg from '../OfferImages/offer1stImage.jpg';
import spa from '../OfferImages/spa.jpg';
import food from '../OfferImages/food.jpg';
import tea from '../OfferImages/tea.jpg';
import room from '../OfferImages/bed-room.jpg';
import weddinghall from '../OfferImages/wedding.jpg';
import meeting from '../OfferImages/meeting.jpg'

function Offer() {
  return (
    <><><>
      {/* Main Image Container */}
      <div className="relative overflow-hidden brightness-[85%]">
        {/* Main Image */}
        <img
          src={oneImg}
          className="object-cover w-full h-[400px] sm:h-[600px] md:h-[400px] lg:h-full"
          alt="oneImg" />
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center justify-center px-4 lg:mt-56 md:px-0 sm:mt-40">
        <p className="font-bold text-[24px] md:text-[32px] lg:text-[40px] text-center -mt-20 md:-mt-28 lg:-mt-56">
          SPECIAL OFFER
        </p>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] text-center mt-2 md:mt-4 lg:mt-2 leading-relaxed">
          Enjoy exclusive offers with us. You can get Beautiful Experience with us. The Preeminent resort establishment Hotel Butterfly brings you an extensive array of <br />
          lucrative offers that come replete with a host of unique privileges and amazing discounts.
        </p>
      </div>
    </>

      <div className="flex flex-col items-center justify-center gap-8 mx-8 my-8 md:flex-row md:-mt-4">
        {/* Bar Image Section */}
        <div className="flex flex-col items-center max-w-[250px] text-center">
          <img
            src={spa}
            className="w-full h-[300px] brightness-[100%] object-cover rounded-md"
            alt="spa" />
          <p className="text-[20px] sm:text-[25px] md:text-[30px] font-bold mt-4">Enjoy a Rejuvenating Escape</p>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] mt-2 px-4">
            20% Discount on all welness services
          </p>
        </div>

        {/* Spa Image Section */}
        <div className="flex flex-col items-center max-w-[250px] text-center md:-mt-28">
          <img
            src={food}
            className="w-full h-[300px] brightness-[100%] object-cover rounded-md"
            alt="food" />
          <p className="text-[20px] sm:text-[25px] md:text-[30px] font-bold mt-4">Enjoy with our Food.</p>

        </div>

        {/* Room Image Section */}
        <div className="flex flex-col items-center max-w-[250px] text-center mt-7 md:-mt-16">
          <img
            src={tea}
            className="w-full h-[300px] brightness-[100%] object-cover rounded-md"
            alt="room" />
          <p className="text-[20px] sm:text-[25px] md:text-[30px] font-bold mt-4">Include in regal luxury with our High tea.</p>

        </div>
      </div></>
      
      <div className="flex flex-col items-center justify-center gap-8 mx-8 my-8 md:flex-row md:-mt-4">
        {/* Bar Image Section */}
        <div className="flex flex-col items-center max-w-[250px] text-center md:-mt-4">
          <img
            src={room}
            className="w-full h-[300px] brightness-[100%] object-cover rounded-md"
            alt="room" />
          <p className="text-[20px] sm:text-[25px] md:text-[30px] font-bold mt-4">30% Off</p>
          <p className="text-[16px] sm:text-[18px] md:text-[20px]  px-4">
            for booking.
          </p>
        </div>

        {/* Spa Image Section */}
        <div className="flex flex-col items-center max-w-[250px] text-center md:-mt-28">
          <img
            src={weddinghall}
            className="w-full h-[300px] brightness-[100%] object-cover rounded-md md:mt-32"
            alt="weddinghall" />
          <p className="text-[20px] sm:text-[25px] md:text-[30px] font-bold mt-4">20% Off</p>
          <p className="text-[20px] sm:text-[15px] md:text-[20px]  ">for booking our wedding hall.</p>

        </div>

        {/* Room Image Section */}
        <div className="flex flex-col items-center max-w-[250px] text-center mt-7 md:-mt-16">
          <img
            src={meeting}
            className="w-full h-[300px] brightness-[100%] object-cover rounded-md md:mt-24"
            alt="meeting" />
          <p className="text-[20px] sm:text-[25px] md:text-[30px] font-bold mt-4">Luxury Meeting Venue.</p>
          <p className="text-[20px] sm:text-[15px] md:text-[20px]  ">30% off.</p>

        </div>
      </div></>
  );
}

export default Offer;
