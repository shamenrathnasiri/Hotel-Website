import React from 'react'

function footer() {
  return (
    <div>    
<footer class="bg-[#626161] dark:bg-gray-900 mt-20">
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid grid-cols-2 px-4 py-2 lg:py-8 md:grid-cols-4">
        <div>
          
        </div>
        <div>
        <ul class="text-white dark:text-white font-medium">
                <li class="mb-4">
                    <a>HOTEL BUTTERFLY</a>
                </li>
                <li class="mb-4">
                    <a >NO 123/45/2,  New Town,</a>
                </li>
                <li class="mb-4">
                    <a >Polonnaruwa, Sri Lanka</a>
                </li>
                <li className="mt-12 mb-4">
                    <a class="hover:underline mt-14">hotelbutterfly@mail.com</a>
                </li>
                <li className="mt-12 mb-4">
                    <a className="mt-20 hover:underline">+94 27 52 ###########</a>
                </li>
                <li class="mb-4">
                    <a class="hover:underline mt-14">+94 27 26 ###########</a>
                </li>
            </ul>
        </div>
        <div>
           
        </div>
        <div>
            <ul class="text-white dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="/" class="hover:underline">HOME</a>
                </li>
                <li class="mb-4">
                    <a href="/Offer" class="hover:underline">OFFER</a>
                </li>
                <li class="mb-4">
                    <a href="/Booking" class="hover:underline">BOOKING</a>
                </li>
                <li class="mb-4">
                    <a href="/About" class="hover:underline">ABOUT US</a>
                </li>
                <li class="mb-4">
                    <a href="Contact" class="hover:underline">CONTACT US</a>
                </li>
            </ul>
        </div>
    </div>
    </div>
</footer>

    </div>
  )
}

export default footer
