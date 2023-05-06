import React from 'react'
import { Outlet, Link } from "react-router-dom";
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
import SignupCard from '../components/SignupCard'
import '../signup.css'


function Signup() {
    return (
        <div>
            <div className='' id='nav'>
                <header className="text-gray-600 body-font">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <img src='images/Group1.png' id='logoImage' alt='img' />
                        </Link>
                    </div>
                </header>
                <Outlet />
            </div>
            <div className=' ' >
                <img className='lg:relative md:relative  lg:h-auto md:h-auto h-0 ' src='images/SignUpbg.png' alt='img' id='backgroundimg' />
                <div className='md:mx-auto'>
                    <SignupCard />
                </div>
            </div>

        </div>
    )
}

export default Signup
