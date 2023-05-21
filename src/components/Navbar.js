import { React, useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className='w-[100%]' id='nav'>

      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex lg:w-fit md:w-full w-full items-center justify-between md:py-4 py-2">
            <Link to='/' className="flex title-font font-medium items-start text-gray-900 mb-4 md:mb-0">
              <img src='images/Group1.png' id='logoImage' alt='img' />
            </Link>
            <section className="MOBILE-MENU flex lg:hidden md:ml-auto">
              <div
                className="HAMBURGER-ICON space-y-2"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              </div>

              <div className={isNavOpen ? "showMenuNav rounded-b-3xl" : "hideMenuNav"}>
                <div
                  className="absolute top-0 right-0 md:px-10 px-5 py-12"
                  onClick={() => setIsNavOpen(false)}
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <Link to='/' className="pt-0 flex title-font font-medium items-start text-gray-900 mb-4 md:mb-0">
                  <img src='images/Group1.png' id='logoImage' alt='img' />
                </Link>

                <ul className="flex flex-col items-center justify-between text-base text-black font-semibold min-h-[200px]">
                  <li className="my-2 uppercase">
                    <Link to="/about">About Us</Link>
                  </li>
                  <li className="my-2 uppercase">
                    <Link to="/blogs">Resources</Link>
                  </li>
                  <li className="my-2 uppercase">
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <Link to='/signup' className="mx-5 bg-red-500 text-white  py-1 px-2 focus:outline-none hover:bg-white hover:text-red-400 m-auto rounded-lg text-base md:my-0 my-5  md:mt-10" id='button1'>Choose Your Plan
                  </Link>
                </ul>
              </div>
            </section>
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 40vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
          </div>
          <nav className="md:ml-16 md:mr-auto lg:flex md:hidden hidden flex-wrap items-center text-base text-black font-semibold justify-center">
            <Link to='/about' className="mr-10 hover:text-gray-900">About Us</Link>
            <Link to='/blogs' className="mr-10 hover:text-gray-900">Resources</Link>
            <Link to='/contact' className="mr-10 hover:text-gray-900">Contact Us</Link>
          </nav>
          <Link to='/signup' className="mx-5 lg:flex md:hidden hidden bg-red-500 text-white  py-1 px-2 focus:outline-none hover:bg-white hover:text-red-400 m-auto rounded-lg text-base my-5  md:mt-0" id='button1'>Choose Your Plan
          </Link>
        </div>
      </header>
      <Outlet />



    </div>
  )
}
