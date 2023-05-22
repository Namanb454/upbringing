import React, { useState } from 'react';
import '../Main.css'
import Explore from '../components/Explore'
import Explore1 from '../components/Explore1'
import { Link } from 'react-router-dom'

function Main() {
    const [ismoving, setIsmoving] = useState(false)
    function handleMouseEnter() {
        setIsmoving(true);
    }
    return (
        <div className='w-[100%]' id='main' >


            <section className="w-[100%] text-gray-600 body-font">
                <div className="container mx-auto flex px- py-10 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center" id='main1'>
                        <div className='flex mx-auto'>
                            <div className='lg:pr-10 h-0 lg:mt-32 md:mt-32 mt-24'>
                                <img className='lg:w-14 md:w-14 w-10' data-aos="fade-up" data-aos-delay="200" src='images/icon2.png' alt='img' />
                            </div>
                            <div className='lg:pr-5 md:-ml-10 -ml-10 h-0 mt-10'>
                                <img className='lg:w-20 md:w-20 w-10' data-aos="fade-down" data-aos-delay="200" src='images/icon1.png' alt='img' />
                            </div>
                            <h1 className="title-font lg:text-8xl md:text-7xl text-[40px] mx-auto mb-10 font-medium text-gray-900" data-aos="fade-zoom-in" data-aos-delay="400" id='heading'>We Bring out The best
                                <br />
                                <div className="">in You and Your kids</div>
                            </h1>
                            <div className='lg:pr-5 md:-mr-10 -mr-10 h-0 lg:mt-28 md:mt-28 mt-24'>
                                <img className='lg:w-20 md:w-20 w-10' data-aos="fade-up" data-aos-delay="200" src='images/icon4.png' alt='img' />
                            </div>
                            <div className='lg:pl-10 h-0 mt-0'>
                                <img className='lg:w-14 md:w-14 w-10' data-aos="fade-down" data-aos-delay="200" src='images/icon3.png' alt='img' />
                            </div>
                        </div>
                        <p className="mb-8 text-black text-center font-bold leading-9" id='main1'>By offering subscription based <b> personalized and educational toys </b> that help nurture your child's <br /> curiosity, creativity, and passion for science, medicine, engineering, entrepreneurship, sports, and more.</p>

                        <Link to='/signup' className="inline-flex items-center font-sans bg-red-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-white hover:text-red-400 m-auto rounded-lg text-base my-5  md:mt-0" id='button1'>Choose Your Plan
                        </Link>
                        <div className='w-[100%]'>
                            <img className="w-full object-cover object-center rounded-lg md:mt-0" src="images/Group2.png" alt="step" />
                        </div>
                    </div>
                </div>



                {/* How we help kids  */}

                <div className="container lg:mx-auto flex lg:mt-10 md:mt-10 lg:py-0 md:py-0 py-10 md:mx-auto flex-col items-center" >
                    <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-center md:text-center lg:mb-10 md:mb-10 items-center text-center" id='main1'>
                        <h2 className=' lg:text-xl md:text-xl lg:mx-auto text-xl lg:mb-5 md:mb-5 mb-5' id='about1heading'>THE KIDS</h2>
                        <h1 className="title-font lg:text-8xl md:text-7xl lg:mx-auto text-5xl lg:mb-0 md:mb-0 mb-10 font-medium text-gray-900" id='about2heading'>How we help kIds
                        </h1>
                    </div>
                </div>
                <div>
                    <Explore />
                </div>



                <div id='group3' className='relative lg:h-auto md:h-96 h-96 text-center rounded-t-3xl lg:mx-10 md:mx-5' >

                    <img className="lg:w- md:w- object-cover lg:h-full h-full object-center rounded-lg md:mt-0 mt-" src="images/Group3.png" alt="step" />
                    <div className='absolute lg:top-16 md:top-10 top-10 lg:text-7xl md:text-5xl mx-auto text-2xl text-white w-full' id='group3heading'>Engage Your Child's Imagination and <br /> Learning with Our Toy Subscription Box!</div>
                    <p className="absolute w- lg:top-64 md:top-40 top-36 lg:text-xl md:text-lg text-sm text-white text-center font-normal lg:mx-40" id='group3text'>Our carefully curated selection of toys, delivered every 2 months, is designed to not only spark your child'simagination but also provide a fun and engaging way for them to learn and explore. And as a parent, you can track your child's progress, connect with other like-minded parents in our community, and learn
                        valuable parenting skills through a fun and interactive gamified approach.</p>

                    <div className='absolute lg:bottom-12 md:bottom-0 bottom-4 w-full'>
                        <button className="mx-5 bg-black text-white py-1 px-6 focus:outline-none hover:bg-white hover:text-black m-auto rounded-lg text-base my-5 md:mt-0" id='button2'>Know More
                        </button>
                        <Link to='/signup' className="mx-5 bg-red-500 text-white  py-1 px-2 focus:outline-none hover:bg-white hover:text-red-400 m-auto rounded-lg text-base my-5  md:mt-0" id='button1'>Choose Your Plan
                        </Link>

                    </div>
                </div>



                {/* We help parents at child’s every step */}

                <div className="container mx-auto flex items-center">
                    <div className="lg:flex-grow w-[100%] lg:pr- md:pr- flex flex-col  mb-16 md:mb-0 text-center">
                        <div id='' className='relative lg:h-auto h-96 text-center' >

                            <img className="lg:w- md:w-[100%] object-cover lg:h-auto h-full object-center md:mt-0 mt-" src="images/Group5.png" alt="step" />
                            <div className='absolute lg:top-20 md:top-5 top-10 lg:text-7xl md:text-5xl mx-auto text-3xl text w-[100%]' id='group5heading'>We help parents at child’s every step</div>
                            <p className="absolute w-[100%] lg:top-44 md:top-20 top-[30%] lg:text-xl text-sm mx-auto text-black text-center font-normal leading-" id='group5subheading'>Click on the button to know how</p>

                            <div className='absolute lg:flex-0 flex lg:bottom-96 md:bottom-52 bottom-44 w-[100%]'>
                                <button className="lg:mx-auto md:mx-auto lg:h-12 md:h-10 bg-red-500 text-white py-1 px-1 focus:outline-none hover:bg-white hover:text-red-400 m-auto rounded-lg text-base my-5 md:my-0 md:mt-0" onClick={handleMouseEnter} id='button1'>Infant-2year
                                </button>
                                <button className="lg:mx-auto md:mx-auto lg:h-12 md:h-10 bg-red-500 text-white  py-1 px-1 focus:outline-none hover:bg-white hover:text-red-400 m-auto rounded-lg text-base my-5 md:my-0  md:mt-0" id='button1'>02-05
                                </button>
                                <button className="lg:mx-auto md:mx-auto lg:h-12 md:h-10 bg-red-500 text-white  py-1 px-1 focus:outline-none hover:bg-white hover:text-red-400 m-auto rounded-lg text-base my-5 md:my-0  md:mt-0" id='button1'>05-08
                                </button>
                                <button className="lg:mx-auto md:mx-auto lg:h-12 md:h-10 bg-red-500 text-white  py-1 px-1 focus:outline-none hover:bg-white hover:text-red-400 m-auto rounded-lg text-base my-5 md:my-0  md:mt-0" id='button1'>08+
                                </button>
                            </div>
                            <div className='absolute lg:flex-0 flex lg:bottom-60 md:bottom-32 bottom-[132px] w-[100%]'>
                                <img className={`lg:w-64 md:w-48 w-32 ${ismoving ? "ml-[100px]" : "mx-0"}`} src='images/Group5Train.png' alt='img' />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container lg:mx-auto flex lg:mt-20 lg:py-0 md:py-10 py-10 md:mx-auto flex-col items-center" >
                    <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-center md:text-center lg:mb-10 md:mb-10 items-center text-center" id='main1'>
                        <h2 className=' lg:text-xl md:text-xl lg:mx-auto text-xl lg:mb-5 md:mb-5 mb-5' id='about1heading'>THE PARENTS</h2>
                        <h1 className="title-font lg:text-8xl md:text-7xl lg:mx-auto text-5xl lg:mb-0 md:mb-10 mb-10 font-medium text-gray-900" id='about2heading'>How we help Parents
                        </h1>
                    </div>
                </div>
                <Explore1 />

                {/* Be first in the queue to experience the future of parenting */}

                <div className='flex w-fit lg:mx- lg:h-96 md:h-80 h-80 pb-10' id='group6'>
                    <div className='w- lg:ml-20 md:ml-10 mx-5'>
                        <h2 className='lg:top-20 lg:pt-20 pt-10 lg:text-6xl md:text-5xl text-xl w-fit text-purple-500' id='group6heading'>Be first in the queue to experience the future of parenting</h2>
                        <p className="w- lg:text-xl md:text-base text-sm lg:mt-5 md:mt-5 mt-11 text-white text- font-normal leading-" id='group3text'>Join our website for parenting resources and guides for all stages. Get valuable information, tips, and advice on a wide range of topics.</p>

                        <div className='mx- w-fit lg:mt-5 md:mt-5 mt-4'>
                            <Link to='/signup' className="bg-white text-black py-1 px-4 focus:outline-none hover:bg-black hover:text-white m-auto text-base my-5 md:mt-0" id='button2'>Sign Up
                            </Link>
                        </div>
                    </div>
                    <div className='my-auto ml-auto'>
                        <img src='images/Group7.png' alt='img' />
                    </div>
                </div>


            </section>
        </div>
    )
}

export default Main
