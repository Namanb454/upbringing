import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SignupCard from '../components/SignupCard'
import '../signup.css'


function Signup() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className=' ' >
                <img className='lg:relative md:relative  lg:h-auto md:h-auto h-0 ' src='images/SignUpbg.png' alt='img' id='backgroundimg' />
                <div className='md:mx-auto'>
                <SignupCard />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Signup
