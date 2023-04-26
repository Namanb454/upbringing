import React from 'react'

export default function Navbar() {
  return (
    <div className='' id='nav'>
      <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href='/' class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src='images/Group1.png' id='logoImage'/>
      {/* <span class="ml-3 text-xl">Tailblocks</span> */}
    </a>
    <nav class="md:ml-16 md:mr-auto flex flex-wrap items-center text-base text-black font-semibold justify-center">
      <a class="mr-10 hover:text-gray-900">About Us</a>
      <a class="mr-10 hover:text-gray-900">Contact Us</a>
      <a class="mr-10 hover:text-gray-900">Resources</a>
      {/* <a class="mr-5 hover:text-gray-900">Fourth Link</a> */}
    </nav>
    <button class="inline-flex items-center bg-red-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-red-400 rounded-lg text-base mt-4 md:mt-0">Choose Your Plan
    </button>
  </div>
</header>
    </div>
  )
}
