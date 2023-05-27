import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import '../signupcard.css'

function Informationcard() {
    const carriers = [
        'Engineer', 'Enterpreneur', 'Scientist', 'Musician', 'Footballer'
    ]
    const [index, setIndex] = useState(0)
    useEffect(() => {
        if (index === carriers.length - 1) return
        setTimeout(() => {
            setIndex(index + 1)
        }, 1000);
    },)

    return (
        <div className='lg:absolute md:absolute lg:w-3/5 md:w-fit lg:top-0 md:top-0 top-0 md:mx-24 lg:mx-64' id='card1'>

            <div className='lg:h-[95vh] md:h-[50vh] h-[100vh] lg:w-3/4 mx-auto lg:my-4 mb-0 lg:py-0 md:py-0 lg:rounded-3xl' id='card2'>
                <div className="container mx-auto flex flex-wrap py-5 flex-col items-center">
                    <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-10 md:mb-0">
                        <img className='w-[100px] h-[55px]' src='images/Group1.png' alt='img' />
                    </Link>
                </div>
                <h2 className='lg:text-5xl text-4xl text-center lg:mx-20 mx-5 lg:mb-10 mb-20' id='signupHeading'>
                    We start the journey of
                    making your kid <span id='signupsubHeading'> <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            strings: [
                                'Engineer', 'Doctor', 'Enterpreneur', 'Scientist', 'Musician', 'Footballer', 'Teacher'
                            ],
                        }} /></span>
                </h2>
                <h2 className='mx-20 lg:mb-0 mb-5 text-black font-bold'>
                    Tell Us More About Your Kid
                </h2>
                <div className="flex w-cover mx-20 my-5 items-end">
                    <div className="relative w-full h-11 text-left">

                        <input type="name" id="name" placeholder="Kid's Name" name="name" className="w-full h-11 bg-opacity-50 rounded ring-1 focus:ring-2 focus:ring-black focus:bg-transparent border text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                    </div>
                </div>
                <div className="flex w-cover mx-20 items-end">
                    <div className="relative w-full h-11 bg-white text-left">

                        <select id="age" type="age" name="age" className=" w-full bg-opacity-50 h-11 rounded ring-1 focus:ring-2 focus:ring-black focus:bg-transparent border   text-base outline-none bg-transparent py-1 px-3 leading-8 transition- duration-200 ease-in-out">
                            <option selected>Kid's Age</option>
                            <option value="US">1</option>
                            <option value="CA">2</option>
                            <option value="FR">3</option>
                            <option value="DE">4</option>
                            <option value="DE">5</option>
                            <option value="DE">6</option>
                            <option value="DE">7</option>
                            <option value="DE">8</option>
                            <option value="DE">9</option>
                            <option value="DE">10</option>
                            <option value="DE">11</option>
                            <option value="DE">12</option>
                            <option value="DE">13</option>
                            <option value="DE">14</option>
                            <option value="DE">15</option>
                        </select>
                        {/* <input type="name" id="name" placeholder="Kid's Age" name="number" className="w-full bg-opacity-50 rounded ring-1 focus:ring-2 focus:ring-black focus:bg-transparent border border-gray-900  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required /> */}
                    </div>
                </div>
                <div className='w-fit my-5 mx-auto'>
                    <Link to="/" className=" font-sans bg-red-500 text-white border-0 py-1 px-5 focus:outline-none hover:bg-white hover:text-red-400 rounded-lg text-base my-5 md:mt-0" id='button1'>We're all set
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Informationcard
