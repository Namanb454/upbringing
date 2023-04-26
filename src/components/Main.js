import React from 'react'
import '../Main.css'

function Main() {
    return (
        <div className='' id='main' >


            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px- py-10 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" id='main1'>
                        <h1 className="title-font sm:text-8xl mx-auto text-4xl mb-10 font-medium text-gray-900" id='heading'>We Bring out The best
                            <br />
                            <div className="lg:block">in You and Your kids</div>
                        </h1>
                        <p className="mb-8 text-black text-center font-normal leading-9" id='main1'>By offering subscription based <b> personalized and educational toys </b> that help nurture your child's <br /> curiosity, creativity, and passion for science, medicine, engineering, entrepreneurship, sports, and more.</p>

                        <button className="inline-flex items-center font-sans bg-red-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-white hover:text-red-400 m-auto rounded-lg text-base my-5  md:mt-0" id='button1'>Choose Your Plan
                        </button>
                        <div className='w-full'>
                            <img className="lg:w- md:w- object-cover object-center rounded-lg md:mt-0 mt-12" src="images/Group2.png" alt="step" />
                        </div>
                    </div>

                </div>

                <div className="container mx-auto flex px- py-10  md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr- md:pr- flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-8xl mx-auto text-5xl mb-10 font-medium text-gray-900" id='heading'>How we help kIds
                        </h1>

                        <div id='group3' className='relative sm:h-auto h-96 text-center rounded-t-3xl sm:mx-5' >

                            <img className="lg:w- md:w- object-cover sm:h-auto h-full object-center rounded-lg md:mt-0 mt-" src="images/Group3.png" alt="step" />
                            <div className='absolute sm:top-20 top-10 sm:text-6xl mx-auto text-3xl text-white w-full' id='group3heading'>Engage Your Child's Imagination and <br /> Learning with Our Toy Subscription Box!</div>
                            <p className="absolute w-full sm:top-72 top-32 sm:text-xl text-sm mx-auto text-white  text-center font-normal leading-" id='group3text'>Our carefully curated selection of toys, delivered every 2 months, is designed to not only spark your child'simagination but also provide a fun and engaging way for them to learn and explore. And as a parent, you can track your child's progress, connect with other like-minded parents in our community, and learn
                                valuable parenting skills through a fun and interactive gamified approach.</p>

                            <div className='absolute sm:bottom-16 bottom-4 w-full'>
                                <button className="mx-5 bg-black text-white py-1 px-7 focus:outline-none hover:bg-white hover:text-black m-auto rounded-lg text-base my-5 md:mt-0" id='button2'>Know More
                                </button>
                                <button className="mx-5 bg-red-500 text-white  py-1 px-3 focus:outline-none hover:bg-white hover:text-red-400 m-auto rounded-lg text-base my-5  md:mt-0" id='button1'>Choose Your Plan
                                </button>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Main
