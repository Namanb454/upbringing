import React from 'react'
import '../Main.css'
import { Link } from 'react-router-dom'

function Main() {
    return (
        <div className='' id='main' >


            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px- py-10 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center" id='main1'>
                        <h1 className="title-font lg:text-8xl md:text-7xl mx-auto text-4xl mb-10 font-medium text-gray-900" id='heading'>We Bring out The best
                            <br />
                            <div className="">in You and Your kids</div>
                        </h1>
                        <p className="mb-8 text-black text-center font-normal leading-9" id='main1'>By offering subscription based <b> personalized and educational toys </b> that help nurture your child's <br /> curiosity, creativity, and passion for science, medicine, engineering, entrepreneurship, sports, and more.</p>

                        <button className="inline-flex items-center font-sans bg-red-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-white hover:text-red-400 m-auto rounded-lg text-base my-5  md:mt-0" id='button1'>Choose Your Plan
                        </button>
                        <div className='w-full'>
                            <img className="object-cover object-center rounded-lg md:mt-0" src="images/Group2.png" alt="step" />
                        </div>
                    </div>

                </div>

                {/* How we help kids  */}

                <div className="container mx-auto flex px- py-10  flex-col items-center">
                    <div className="lg:flex-grow  lg:pr- md:pr- flex flex-col md:mb-0 items-center text-center">
                        <h1 className="title-font lg:text-8xl md:text-7xl mx-auto lg:my-0 text-5xl mb-10 font-medium text-gray-900" id='heading'>How we help kIds
                        </h1>
                        <div>


                            {/* <section class="flex  text-gray-600 body-font lg:py-16">
                                <div class="container mb-10 bg-red-500 lg:w-3/5 md:w-3/4 lg:h-72 flex lg:mx-auto lg:px-16 lg:py-44 md:py-5 md:flex items-center">
                                    <div className='flex'>
                                        <div class="lg:flex-grow  lg:pr- md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center lg:text-center text-left ">
                                            <h1 class="title-font flex lg:text-center lg:mt-0 mt-10 mr-auto mx-5 text-left lg:text-7xl text-6xl lg:mb-4 font-medium text-white" id='group2heading'>The Mind</h1>
                                            <p class="lg:mb-8 lg:text-start text-white  mx-5 leading-relaxed" id='group2text'>Brain develops fastest between the age of 2-8 years, and by providing the right Toys 7 resources that develops their creative & Critical thinking, and making them strong on STEM subjects, we shape their Mind.</p>
                                        </div>
                                        <img class="lg:w-48 w-20 lg:-mt-24 -mt-10 lg:h-80 h-40 object- object rounded" alt="hero" src="images/kid1.png" />
                                    </div>
                                </div>
                            </section> */}
                        </div>



                        <div id='group3' className='relative lg:h-auto md:h-96 h-96 text-center rounded-t-3xl lg:mx-10 md:mx-5' >

                            <img className="lg:w- md:w- object-cover lg:h-full h-full object-center rounded-lg md:mt-0 mt-" src="images/Group3.png" alt="step" />
                            <div className='absolute lg:top-16 md:top-10 top-10 lg:text-7xl md:text-5xl mx-auto text-xl text-white w-full' id='group3heading'>Engage Your Child's Imagination and <br /> Learning with Our Toy Subscription Box!</div>
                            <p className="absolute w- lg:top-64 md:top-40 top-36 lg:text-xl md:text-lg text-sm text-white text-center font-normal lg:mx-44" id='group3text'>Our carefully curated selection of toys, delivered every 2 months, is designed to not only spark your child'simagination but also provide a fun and engaging way for them to learn and explore. And as a parent, you can track your child's progress, connect with other like-minded parents in our community, and learn
                                valuable parenting skills through a fun and interactive gamified approach.</p>

                            <div className='absolute lg:bottom-12 md:bottom-0 bottom-4 w-full'>
                                <button className="mx-5 bg-black text-white py-1 px-6 focus:outline-none hover:bg-white hover:text-black m-auto rounded-lg text-base my-5 md:mt-0" id='button2'>Know More
                                </button>
                                <button className="mx-5 bg-red-500 text-white  py-1 px-2 focus:outline-none hover:bg-white hover:text-red-400 m-auto rounded-lg text-base my-5  md:mt-0" id='button1'>Choose Your Plan
                                </button>

                            </div>
                        </div>
                    </div>
                </div>


                {/* We help parents at child’s every step */}

                <div className="container mx-auto flex items-center">
                    <div className="lg:flex-grow w-full lg:pr- md:pr- flex flex-col  mb-16 md:mb-0 text-center">
                        <div id='' className='relative lg:h-auto h-96 text-center' >

                            <img className="lg:w- md:w-full object-cover lg:h-auto h-full object-center md:mt-0 mt-" src="images/Group5.png" alt="step" />
                            <div className='absolute lg:top-20 md:top-5 top-10 lg:text-7xl md:text-5xl mx-auto text-2xl text w-full' id='group5heading'>We help parents at child’s every step</div>
                            <p className="absolute w-full lg:top-44 md:top-20 top-20 lg:text-xl text-sm mx-auto text-black text-center font-normal leading-" id='group5subheading'>Click on the button to know how</p>

                            <div className='absolute lg:flex-0 flex lg:bottom-96 md:bottom-52 bottom-44 w-full'>

                                <button className="lg:mx-auto md:mx-auto lg:h-12 md:h-10 bg-red-500 text-white py-1 px-2 focus:outline-none hover:bg-white hover:text-red-400 m-auto rounded-lg text-base my-5 md:my-0 md:mt-0" id='button1'>Infant-2year
                                </button>
                                <button className="lg:mx-auto md:mx-auto lg:h-12 md:h-10 bg-red-500 text-white  py-1 px-2 focus:outline-none hover:bg-white hover:text-red-400 m-auto rounded-lg text-base my-5 md:my-0  md:mt-0" id='button1'>02-05
                                </button>
                                <button className="lg:mx-auto md:mx-auto lg:h-12 md:h-10 bg-red-500 text-white  py-1 px-2 focus:outline-none hover:bg-white hover:text-red-400 m-auto rounded-lg text-base my-5 md:my-0  md:mt-0" id='button1'>05-08
                                </button>
                                <button className="lg:mx-auto md:mx-auto lg:h-12 md:h-10 bg-red-500 text-white  py-1 px-2 focus:outline-none hover:bg-white hover:text-red-400 m-auto rounded-lg text-base my-5 md:my-0  md:mt-0" id='button1'>08+
                                </button>

                            </div>
                        </div>
                    </div>
                </div>


                {/* Be first in the queue to experience the future of parenting */}

                <div className='flex w-fit my-20 lg:mx-5 lg:h-96 md:h-80 h-80 pb-10' id='group6'>
                    <div className='w- lg:ml-20 md:ml-10 mx-5'>
                        <h2 className='lg:top-20 lg:pt-10 pt-10 lg:text-6xl md:text-4xl text-xl w-fit text-purple-500' id='group6heading'>Be first in the queue to experience the future of parenting</h2>
                        <p className="w- lg:text-xl md:text-base text-sm lg:mt-14 md:mt-10 mt-11 text-white text- font-normal leading-" id='group3text'>Join our website for parenting resources and guides for all stages. Get valuable information, tips, and advice on a wide range of topics.</p>

                        <div className='mx- w-fit lg:mt-16 md:mt-10 mt-7'>
                            <Link to='/signup' className="bg-white text-black py-1 px-6 focus:outline-none hover:bg-black hover:text-white m-auto text-base my-5 md:mt-0" id='button2'>Sign Up
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
