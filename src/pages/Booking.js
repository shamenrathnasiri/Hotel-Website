import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from '../BookingImages/slider1.jpg';
import slider2 from '../BookingImages/slider2.jpg';
import slider3 from '../BookingImages/slider3.jpg';
import slider4 from '../BookingImages/slider4.jpg';
import slider5 from '../BookingImages/slider5.jpg';

function Booking() {
  const [dropdownOpenRoom1, setDropdownOpenRoom1] = useState(false);
  const [dropdownOpenRoom2, setDropdownOpenRoom2] = useState(false);
  const [dropdownOpenNationalityhall, setDropdownOpenNationalityhall] = useState(false);
  const [dropdownOpenNationalityroom, setDropdownOpenNationalityroom] = useState(false);



  
  const toggleDropdownRoom1 = () => {
    setDropdownOpenRoom1(!dropdownOpenRoom1);
    setDropdownOpenNationalityhall(false); // Close other dropdown
    setDropdownOpenNationalityroom(false);
    setDropdownOpenRoom2(false);
  };

  const toggleDropdownRoom2 = () => {
    setDropdownOpenRoom2(!dropdownOpenRoom2);
    setDropdownOpenNationalityhall(false); // Close other dropdown
    setDropdownOpenNationalityroom(false);
    setDropdownOpenRoom1(false);
  };
  const toggleDropdownNationalityroom = () => {
    setDropdownOpenNationalityroom(!dropdownOpenNationalityroom);
    setDropdownOpenRoom1(false); // Close other dropdown
    setDropdownOpenRoom2(false);
    setDropdownOpenNationalityhall(false);
    
  };
  const toggleDropdownNationalityhall = () => {
    setDropdownOpenNationalityhall(!dropdownOpenNationalityhall);
    setDropdownOpenRoom1(false); // Close other dropdown
    setDropdownOpenRoom2(false);
    setDropdownOpenNationalityroom(false);
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute left-0 z-10 p-2 transform -translate-y-1/2 rounded-full top-1/2 bg-white/30 hover:bg-white/50 focus:ring-4 focus:ring-white"
        onClick={onClick}
        style={{ display: 'block' }}
      >
        <svg
          className="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute right-0 z-10 p-2 transform -translate-y-1/2 rounded-full top-1/2 bg-white/30 hover:bg-white/50 focus:ring-4 focus:ring-white"
        onClick={onClick}
        style={{ display: 'block' }}
      >
        <svg
          className="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <>
      <div className="relative mx-auto w-[90%] mt-10">
        <Slider {...settings}>
          <div>
            <img
              src={slider1}
              className="block object-cover w-full lg:h-[700px] sm:h-[400px] md:h-[500px] rounded-lg"
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              src={slider2}
              className="block object-cover w-full lg:h-[700px] sm:h-[400px] md:h-[500px] rounded-lg"
              alt="Slide 2"
            />
          </div>
          <div>
            <img
              src={slider3}
              className="block object-cover w-full lg:h-[700px] sm:h-[400px] md:h-[500px] rounded-lg"
              alt="Slide 3"
            />
          </div>
          <div>
            <img
              src={slider4}
              className="block object-cover w-full lg:h-[700px] sm:h-[400px] md:h-[500px] rounded-lg"
              alt="Slide 4"
            />
          </div>
          <div>
            <img
              src={slider5}
              className="block object-cover w-full lg:h-[700px] sm:h-[400px] md:h-[500px] rounded-lg"
              alt="Slide 5"
            />
          </div>
        </Slider>
      </div>

      <div className="mt-8 text-center">
        <p className="font-bold text-[40px]">For Room Booking</p>
      </div>

      <div className="w-[1400px] bg-gray-300 h-[200px]  mt-8 rounded-xl mx-auto justify-center">
        <div className="grid grid-cols-8 gap-8 ml-4 font-bold">
          <div className="mt-8">
            <p>Select One</p>
          </div>
          <div className="mt-8">
            <p>Quantity</p>
          </div>
          <div className="mt-8">
            <p>Check-in date (dd:mm:year)</p>
          </div>
          <div className="mt-8">
            <p>Checkout date (dd:mm:year)</p>
          </div>
          <div className="mt-8">
            <p>Nationality</p>
          </div>
          <div className="mt-8">
            <p>Your name</p>
          </div>
          <div className="mt-8">
            <p>Contact No</p>
          </div>
        </div>
        <div className="grid grid-cols-8 gap-8 ml-2 font-bold">
          
          {/* Dropdown for Room Type */}
          <div className="relative mt-4 h-[60%] text-center bg-white rounded-lg w-[80%]">
            <button
              onClick={toggleDropdownRoom1}
              className="flex items-center justify-center rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2"
              type="button"
              aria-expanded={dropdownOpenRoom1}
            >
              <span className="w-2 ml-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            {dropdownOpenRoom1 && (
              <ul className="absolute z-10 w-48 mt-2 bg-white rounded-lg shadow-lg">
                <li className="block px-4 py-2 text-sm text-neutral-700 hover:bg-zinc-200/60">Non A/C Room</li>
                <li className="block px-4 py-2 text-sm text-neutral-700 hover:bg-zinc-200/60">A/C Room</li>
              </ul>
            )}
          </div>

          {/* Quantity input */}
          <div>
            <input type="text" className="bg-gray-100 text-sm rounded-lg w-[70px] p-2.5 mt-4" />
          </div>

          {/* Check-in date input */}
          <div>
            <input type="text" className="bg-gray-100 text-sm rounded-lg w-[100px] p-2.5 mt-4" />
          </div>

          {/* Check-out date input */}
          <div>
            <input type="text" className="bg-gray-100 text-sm rounded-lg w-[100px] p-2.5 mt-4" />
          </div>

          {/* Dropdown for Nationality */}
          <div className="relative mt-4 h-[60%] text-center bg-white rounded-lg w-[80%]">
            <button
              onClick={toggleDropdownNationalityroom}
              className="flex items-center justify-center rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2"
              type="button"
              aria-expanded={dropdownOpenNationalityroom}
            >
              <span className="w-2 ml-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            {dropdownOpenNationalityroom && (
              <ul className="absolute z-10 w-48 mt-2 bg-white rounded-lg shadow-lg">
                <li className="block px-4 py-2 text-sm text-neutral-700 hover:bg-zinc-200/60">Sri Lankan</li>
                <li className="block px-4 py-2 text-sm text-neutral-700 hover:bg-zinc-200/60">Non Sri Lankan</li>
              </ul>
            )}
          </div>

          {/* Your name input */}
          <div>
            <input type="text" className="bg-gray-100 text-sm rounded-lg w-[100px] p-2.5 mt-4" />
          </div>

          {/* Contact number input */}
          <div>
            <input type="text" className="bg-gray-100 text-sm rounded-lg w-[100px] p-2.5 mt-4" />
          </div>

          {/* Submit button */}
          <div>
            <button
              type="button"
              className="text-white bg-yellow-600 hover:bg-yellow-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mb-2 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* for hall booking */}
      <div className="mt-8 text-center">
        <p className="font-bold text-[40px]">For Hall Booking</p>
      </div>
      <div className="w-[1400px] bg-gray-300 h-[200px] mt-8 rounded-xl mx-auto justify-center">
        <div className="grid grid-cols-8 gap-8 ml-4 font-bold">
          <div className="mt-8">
            <p>Select One</p>
          </div>
          <div className="mt-8">
            <p>Quantity</p>
          </div>
          <div className="mt-8">
            <p>Check-in date (dd:mm:year)</p>
          </div>
          <div className="mt-8">
            <p>Checkout date (dd:mm:year)</p>
          </div>
          <div className="mt-8">
            <p>Nationality</p>
          </div>
          <div className="mt-8">
            <p>Your name</p>
          </div>
          <div className="mt-8">
            <p>Contact No</p>
          </div>
        </div>
        <div className="grid grid-cols-8 gap-8 ml-2 font-bold">
          {/* Dropdown for Room Type */}
          <div className="relative mt-4 h-[60%] text-center bg-white rounded-lg w-[80%]">
            <button
              onClick={toggleDropdownRoom2}
              className="flex items-center justify-center rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2"
              type="button"
              aria-expanded={dropdownOpenRoom2}
            >
              <span className="w-2 ml-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            {dropdownOpenRoom2 && (
              <ul className="absolute z-10 w-48 mt-2 bg-white rounded-lg shadow-lg">
                <li className="block px-4 py-2 text-sm text-neutral-700 hover:bg-zinc-200/60">Non A/C Room</li>
                <li className="block px-4 py-2 text-sm text-neutral-700 hover:bg-zinc-200/60">A/C Room</li>
              </ul>
            )}
          </div>

          {/* Quantity input */}
          <div>
            <input type="text" className="bg-gray-100 text-sm rounded-lg w-[70px] p-2.5 mt-4" />
          </div>

          {/* Check-in date input */}
          <div>
            <input type="text" className="bg-gray-100 text-sm rounded-lg w-[100px] p-2.5 mt-4" />
          </div>

          {/* Check-out date input */}
          <div>
            <input type="text" className="bg-gray-100 text-sm rounded-lg w-[100px] p-2.5 mt-4" />
          </div>

          {/* Dropdown for Nationality */}
          <div className="relative mt-4 h-[60%] text-center bg-white rounded-lg w-[80%]">
            <button
              onClick={toggleDropdownNationalityhall}
              className="flex items-center justify-center rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2"
              type="button"
              aria-expanded={dropdownOpenNationalityhall}
            >
              <span className="w-2 ml-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            {dropdownOpenNationalityhall && (
              <ul className="absolute z-10 w-48 mt-2 bg-white rounded-lg shadow-lg">
                <li className="block px-4 py-2 text-sm text-neutral-700 hover:bg-zinc-200/60">Sri Lankan</li>
                <li className="block px-4 py-2 text-sm text-neutral-700 hover:bg-zinc-200/60">Non Sri Lankan</li>
              </ul>
            )}
          </div>

          {/* Your name input */}
          <div>
            <input type="text" className="bg-gray-100 text-sm rounded-lg w-[100px] p-2.5 mt-4" />
          </div>

          {/* Contact number input */}
          <div>
            <input type="text" className="bg-gray-100 text-sm rounded-lg w-[100px] p-2.5 mt-4" />
          </div>

          {/* Submit button */}
          <div>
            <button
              type="button"
              className="text-white bg-yellow-600 hover:bg-yellow-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mb-2 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;
