import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bgimage1 from '../Home Page Img/Home1.jpg';
import rotate1 from '../Home Page Img/rotate1.jpg';
import rotate2 from '../Home Page Img/rotate2.jpg';
import rotate3 from '../Home Page Img/rotate3.jpg';
import rotate4 from '../Home Page Img/rotate4.jpg';
import rotate5 from '../Home Page Img/rotate5.jpg';
import bgimage2 from '../Home Page Img/descripimg.jpg';
import bar from '../Home Page Img/bar.jpg';
import spa from '../Home Page Img/spa.jpg'; 
import room from '../Home Page Img/room.jpg'; 
import weddinghall from '../Home Page Img/wedding hall.jpg';
import food from '../Home Page Img/food.jpg';
import galviharaya from'../Home Page Img/galviharaya.jpg';
import dambulla from '../Home Page Img/dabulla.jpg';
import samudraya from '../Home Page Img/parakrama.jpg';
import somawathiya from '../Home Page Img/somawathiya.jpg';
import sigiriya from '../Home Page Img/sigiriya.jpg';
import minneriya from '../Home Page Img/Minneriya.jpg';

function Home() {
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
    
    <><><><><><div>
      <div className="relative w-full h-screen overflow-hidden">
        <img
          className="object-cover lg:w-full md:h-full sm:w-full sm:h-1/2 brightness-100"
          src={bgimage1}
          alt="Background Image" />
        <div className="absolute inset-0 flex flex-col items-start justify-center p-4 -mt-48 text-white lg:-mt-60">
          <p className="text-black font-bold -mt-96 text-[20px] md:text-[35px] lg:text-[50px] sm:ml-4 md:ml-6 lg:ml-10 sm:-mt-32">
            HOTEL
          </p>
          <h1 className="text-black font-bold text-[50px]   md:text-[60px] lg:text-[80px] xl:text-[120px] sm:ml-4 lg:ml-8 md:-mt-8 md:ml-5  -mt-4 lg:-mt-16">
            BUTTERFLY
          </h1>
          <p className="text-black font-bold sm:text-[12px] md:text-[16px] lg:text-[20px] sm:mt-2 md:-mt-4 lg:-mt-8 sm:ml-4 md:ml-6 lg:ml-10">
            A charming retreat offering comfort,
            <br /> quality service, and a warm atmosphere for all guests.
          </p>
        </div>
      </div>
      
  {/*slider images*/}
    </div><div className="relative mx-auto w-[90%] mt-10">
        <Slider {...settings}>
          <div>
            <img
              src={rotate1}
              className="block object-cover w-full lg:h-[500px] sm:h-[200px] md:h-[300px] rounded-lg"
              alt="Slide 1" />
          </div>
          <div>
            <img
              src={rotate2}
              className="block object-cover w-full lg:h-[500px] sm:h-[200px] md:h-[300px] rounded-lg"
              alt="Slide 2" />
          </div>
          <div>
            <img
              src={rotate3}
              className="block object-cover w-full lg:h-[500px] sm:h-[200px] md:h-[300px] rounded-lg"
              alt="Slide 3" />
          </div>
          <div>
            <img
              src={rotate4}
              className="block object-cover w-full lg:h-[500px] sm:h-[200px] md:h-[300px] rounded-lg"
              alt="Slide 4" />
          </div>
          <div>
            <img
              src={rotate5}
              className="block object-cover w-full lg:h-[500px] sm:h-[200px] md:h-[300px] rounded-lg"
              alt="Slide 5" />
          </div>
        </Slider>
      </div><div className='mx-4 mt-8 sm:mx-8 md:mx-16 lg:mx-20'>
        <p className='font-bold text-center text-black text-[16px] sm:text-[18px]'>
          HOTEL BUTTERFLY is a cozy and inviting hotel that offers a comfortable stay with a perfect blend of modern amenities and warm hospitality. Located in a serene setting, it features well-appointed rooms, a variety of dining options, and excellent facilities including a fitness center, free Wi-Fi, and beautiful garden spaces. Whether you're here for business or leisure, HOTEL BUTTERFLY ensures a memorable and relaxing experience for all guests.
        </p>
      </div><div className='relative w-full h-screen mx-auto mt-8 overflow-hidden'>
        <img
          src={bgimage2}
          className="h-[60%] md:h-[70%] lg:h-[80%] w-full brightness-[100%] object-cover"
          alt="bgimage2" />
        <p className='text-center mx-auto mt-2 font-bold text-[30px] sm:text-[35px] md:text-[40px]'>FACILITIES</p>
      </div></>

      {/*Add bar, Spa, Rooms, Wedding hall images*/}
      <div className="flex flex-col items-center justify-center gap-8 mx-8 my-8 md:flex-row md:-mt-20">
  {/* Bar Image Section */}
  <div className="flex flex-col items-center max-w-[250px] text-center">
    <img
      src={bar}
      className="w-full h-[300px] brightness-[100%] object-cover rounded-md"
      alt="bar"
    />
    <p className="text-[20px] sm:text-[25px] md:text-[30px] font-bold mt-4">BAR</p>
    <p className="text-[16px] sm:text-[18px] md:text-[20px] mt-2 px-4">
      The bar offers a stylish and relaxing atmosphere with a wide selection of beverages, from signature cocktails to fine wines, perfect for unwinding after a long day.
    </p>
  </div>

  {/* Spa Image Section */}
  <div className="flex flex-col items-center max-w-[250px] text-center md:-mt-6">
    <img
      src={spa}
      className="w-full h-[300px] brightness-[100%] object-cover rounded-md"
      alt="spa"
    />
    <p className="text-[20px] sm:text-[25px] md:text-[30px] font-bold mt-4">SPA</p>
    <p className="text-[16px] sm:text-[18px] md:text-[20px] mt-2 px-4">
      Our spa offers a tranquil environment with a range of treatments designed to rejuvenate and relax. Enjoy massages, facials, and more in a serene setting.
    </p>
  </div>

  {/* Room Image Section */}
  <div className="flex flex-col items-center max-w-[250px] text-center mt-7 md:-mt-14">
    <img
      src={room}
      className="w-full h-[300px] brightness-[100%] object-cover rounded-md"
      alt="room"
    />
    <p className="text-[20px] sm:text-[25px] md:text-[30px] font-bold mt-4">ROOM</p>
    <p className="text-[16px] sm:text-[18px] md:text-[20px] mt-2 px-4">
      Our rooms are designed with comfort in mind, offering modern amenities and a cozy atmosphere for a restful stay.
    </p>
  </div>

  {/* Wedding Hall Image Section */}
  <div className="flex flex-col items-center max-w-[250px] text-center mt-7 md:-mt-6">
    <img
      src={weddinghall}
      className="w-full h-[300px] brightness-[100%] object-cover rounded-md"
      alt="wedding hall"
    />
    <p className="text-[20px] sm:text-[25px] md:text-[30px] font-bold mt-4">WEDDING HALL</p>
    <p className="text-[16px] sm:text-[18px] md:text-[20px] mt-2 px-4">
      Our wedding hall provides a beautiful setting for your special day, with elegant decor and comprehensive services to make your event unforgettable.
    </p>
  </div>
</div>
</>


      {/*add food image*/}
      <div className='relative w-full h-screen overflow-hidden'>
        <img
          src={food}
          className=' w-full h-[80%] brightness-[70%] object-cover '
          alt="food" />

        <p className='text-[25px] lack text font-bold  -mt-20 absolute text-white md:text-[40px]'>Breakfast / Lunch / Dinner</p>
        <p className='md:text-[50px] text-[30px] text-black font-bold text-center justify-center'>Convenient Location</p>
      </div></><>


        {/*add Convenient image*/}
        <div className='flex justify-center my-12 -mt-28'>
        </div><div className='flex justify-center gap-8 mx-8 my-8'>
          <div className='flex flex-col items-center'> {/* Gal Viharaya Image */}
            <img
              src={galviharaya}
              className='w-[350px] h-[500px]  object-cover rounded-md'
              alt="Gal Viharaya" />
            <p className='md:text-[25px] sm:text-[10] font-bold text-center -mt-16 text-white'>GAL VIHARAYA</p>
          </div>

          <div className='flex flex-col items-center'> {/* somawathiya Image */}
            <img
              src={somawathiya}
              className='w-[350px] h-[500px] object-cover rounded-md'
              alt="somawathiya" />
            <p className='md:text-[25px] sm:text-[10] font-bold text-center -mt-16 text-white'>SOMAWATHIYA</p>
          </div>

          <div className='relative flex flex-col items-center'>
            <img
              src={samudraya}
              className='w-[350px] h-[500px] object-cover rounded-md brightness-[70%]'
              alt="Samudraya" />
            <p className='absolute bottom-4 md:text-[25px] sm:text-[10] font-bold text-center text-white -mt-12'>SAMUDRAYA</p>
          </div>
        </div></></><>

        {/*convenient images second row*/}

        <div className='flex justify-center my-12 -mt-8'>
        </div><div className='flex justify-center gap-8 mx-8 my-8'>
          <div className='flex flex-col items-center'> {/* dabulla Viharaya Image */}
            <img
              src={dambulla}
              className='w-[350px] h-[500px] object-cover rounded-md'
              alt="Gal Viharaya" />
            <p className='md:text-[25px] sm:text-[10] font-bold text-center -mt-16 text-white'>DAMBULLA VIHARAYA</p>
          </div>

          <div className='relative flex flex-col items-center'> {/* Sigiriya Image */}
            <img
              src={sigiriya}
              className='w-[350px] h-[500px] object-cover rounded-md brightness-[70%]'
              alt="Sigiriya" />
            <p className='absolute bottom-4 md:text-[25px] sm:text-[10] font-bold text-center text-white'>SIGIRIYA</p>
          </div>
          <div className='relative flex flex-col items-center'> {/* Minneriya Image */}
            <img
              src={minneriya}
              className='w-[350px] h-[500px] object-cover rounded-md brightness-[70%]'
              alt="Minneriya" />
            <p className='absolute bottom-4 md:text-[25px] sm:text-[10] font-bold text-center text-white'>
              MINNERIYA
            </p>
          </div>
        </div><div className='items-center justify-center'>
          <p className='font-bold text-[40px] text-center'>Why you join with us ?</p>
          <p className='text-[20px] text-center'>Whether you're here for business or leisure, we ensure a welcoming and enjoyable experience.</p>
        </div>
      </></>
  );
  }

  export default Home;
    
