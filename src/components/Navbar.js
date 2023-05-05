import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='' id='nav'>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src='images/Group1.png' id='logoImage' alt='img'/>
          </Link>
          <nav className="md:ml-16 md:mr-auto flex flex-wrap items-center text-base text-black font-semibold justify-center">
            <Link to='/about' className="mr-10 hover:text-gray-900">About Us</Link>
            <Link to='/blogs' className="mr-10 hover:text-gray-900">Resources</Link>
            <Link to='/contact' className="mr-10 hover:text-gray-900">Contact Us</Link>
            
          </nav>
          <button className="inline-flex items-center bg-red-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-red-400 rounded-lg text-base mt-4 md:mt-0" id='navbarButton'>Choose Your Plan
          </button>
        </div>
      </header>
      <Outlet />
    </div>
  )
}
