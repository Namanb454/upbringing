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
                <img className='relative lg:h-auto h-0 ' src='images/signupbg.png' alt='img' id='backgroundimg' />
                {/* <div className=''> */}
                <SignupCard />
                {/* </div> */}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Signup
