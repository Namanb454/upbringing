import React from 'react'
import '../signupcard.css'
import { FcGoogle } from 'react-icons/fc';

function SignupCard() {
    return (
        <div className='sm:absolute sm:w-auto w-full sm:top-40 top-60 my- sm:mx-40' id='card1'>
            <div className=' sm:w-3/4 mx-auto sm:my-10 sm:mb-10 pt-16 sm:rounded-3xl' id='card2'>
                <h2 className='sm:text-5xl text-4xl text-center sm:mx-32 mx-5 sm:mb-20 mb-10' id='signupHeading'>
                    We start the journey of
                    making your kid <span id='signupsubHeading'> ENGINEER</span>
                </h2>
                <h2 className='mx-20 sm:mb-5 mb-2 font-bold'>
                    Create an account
                </h2>
                <div class="flex w-cover mx-20 items-end">
                    <div class="relative w-full text-left">
                        <label for="hero-field" class="leading-7 text-xs text-gray-500" >Email Address</label>
                        <input type="email" id="email" placeholder='we saved a place for your email' name="email" class="w-full bg-opacity-50 rounded ring-1 focus:ring-2 focus:ring-black focus:bg-transparent border border-gray-900  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className='w-full py-5'>
                    <h2 className='text-center'>or</h2>
                </div>
                <div className='text-center sm:mx-40 mx-20 pb-5'>

                    <div className='flex  py-2 bg-white rounded-full'>
                        <button className='w-fit mx-auto' id='google'>
                            <FcGoogle className='mx-2 w-5 h-5' id='googlelogo' />
                            <span>Continue with Google</span>
                        </button>
                    </div>
                </div>
                <div class=" items-center pb-5 sm:mx-40 mx-20">
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Help Us Improve the service by <b> giving us your few minutes on a call</b> </label>
                </div>
                <div className='w-full'>
                    <button className="sm:mx-72 mx-44 font-sans bg-red-500 text-white border-0 py-1 px-5 focus:outline-none hover:bg-white hover:text-red-400 rounded-lg text-base my-5 mb-16 md:mt-0" id='button1'>Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignupCard
