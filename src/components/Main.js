import React, { useState } from 'react';
import '../Main.css'
import Explore from '../components/Explore'
import Explore1 from '../components/Explore1'
import { Link } from 'react-router-dom'

function Main() {
    const [ismoving, setIsmoving] = useState(false)
    function handleMouseEnter() {
        setIsmoving(true);
        let move = document.getElementById('train');
        move.style["margin-left"] = "0px";
        move.style["transition"] = "2s";
        let heading = document.getElementById('group5heading');
        heading.style["display"] = "none";
        let subheading = document.getElementById('group5subheading');
        subheading.style["display"] = "none";
        let carousel = document.getElementById("carousel");
        carousel.style["display"] = "flex";
    }
    const [ismoving1, setIsmoving1] = useState(false)
    function handleMouseEnter1() {
        setIsmoving1(true);
        let move = document.getElementById('train');
        move.style["margin-left"] = "20%";
        move.style["transition"] = "2s";
        let display = document.getElementById('group5heading');
        display.style["display"] = "none";
        let subheading = document.getElementById('group5subheading');
        subheading.style["display"] = "none";
        let carousel = document.getElementById("carousel");
        carousel.style["display"] = "flex";
    }

    const [ismoving2, setIsmoving2] = useState(false)
    function handleMouseEnter2() {
        setIsmoving2(true);
        let move = document.getElementById('train');
        move.style["margin-left"] = "45%";
        move.style["transition"] = "2s";
        let display = document.getElementById('group5heading');
        display.style["display"] = "none";
        let subheading = document.getElementById('group5subheading');
        subheading.style["display"] = "none";
        let carousel = document.getElementById("carousel");
        carousel.style["display"] = "flex";
    }

    const [ismoving3, setIsmoving3] = useState(false)
    function handleMouseEnter3() {
        setIsmoving3(true);
        let move = document.getElementById('train');
        move.style["margin-left"] = "70%";
        move.style["transition"] = "2s";
        let display = document.getElementById('group5heading');
        display.style["display"] = "none";
        let subheading = document.getElementById('group5subheading');
        subheading.style["display"] = "none";
        let carousel = document.getElementById("carousel");
        carousel.style["display"] = "flex";
    }

    return (
        <div className='container mx-auto' id='main' >


            <section className="container mx-auto text-gray-600 body-font">
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
                            <img className="w-[100%] object-cover object-center rounded-lg md:mt-0" src="images/Group2.png" alt="step" />
                        </div>
                    </div>
                </div>



                {/* How we help kids  */}

                <div className="container  lg:mx-auto flex lg:mt-10 md:mt-10 lg:py-0 md:py-0 py-10 md:mx-auto flex-col items-center" >
                    <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-center md:text-center lg:mb-10 md:mb-10 items-center text-center" id='main1'>

                        <h1 className="title-font lg:text-8xl md:text-7xl lg:mx-auto text-5xl lg:mb-0 md:mb-0 mb-10 font-medium text-gray-900" id='about2heading'>How we help kIds
                        </h1>
                    </div>
                </div>
                <div className='container mx-auto'>
                    <Explore />
                </div>


                {/* Engage Your Child's Imagination and  */}
                <div id='group3' className='relative lg:h-auto md:h-96 h-96 text-center rounded-t-3xl lg:mx-10 md:mx-5' >

                    <img className="lg:w- md:w- object-cover lg:h-full h-full object-center rounded-lg md:mt-0 mt-" src="images/Group3.png" alt="step" />
                    <div className='absolute lg:top-16 md:top-10 top-10 lg:text-7xl md:text-5xl mx-auto text-2xl text-white w-[100%]' id='group3heading'>Engage Your Child's Imagination and <br /> Learning with Our Toy Subscription Box!</div>
                    <p className="absolute w- lg:top-64 md:top-40 top-36 lg:text-xl md:text-lg text-sm text-white text-center font-normal lg:mx-40" id='group3text'>Our carefully curated selection of toys, delivered every 2 months, is designed to not only spark your child's imagination but also provide a fun and engaging way for them to learn and explore. And as a parent, you can track your child's progress, connect with other like-minded parents in our community, and learn
                        valuable parenting skills through a fun and interactive gamified approach.</p>

                    <div className='absolute lg:bottom-12 md:bottom-0 bottom-4 w-[100%]'>
                        <button className="mx-5 bg-white text-black py-1 px-6 focus:outline-none hover:bg-black hover:text-white m-auto rounded-lg text-base my-5 md:mt-0" id='button2'>Know More
                        </button>
                        <Link to='/signup' className="mx-5 bg-red-500 text-white  py-1 px-2 focus:outline-none hover:bg-white hover:text-red-400 m-auto rounded-lg text-base my-5  md:mt-0" id='button1'>Choose Your Plan
                        </Link>

                    </div>
                </div>



                {/* We help parents at child’s every step */}




                <div className="container w-[100%] mx-auto  my-10 flex ">
                    <div className="lg:flex-grow w-[100%] lg:pr- md:pr- flex flex-col  mb-16 md:mb-0 text-center">
                        <div id='' className='relative lg:h-auto h-96 text-center' >

                            <img className="lg:w-[100%] md:w-[100%] object-cover lg:h-auto h-full object-center md:mt-0 mt-" src="images/Group5.png" alt="step" />


                            {/* carousel */}
                            <div onChange="handleMouseEnter; handleMouseEnter1; handleMouseEnter2; handleMouseEnter3" className="absolute carousel hidden lg:w-[60%] md:w-[70%] lg:h-52 md:h-32 h-36 lg:mx-auto md:mx-auto lg:top-10 md:top-0 top-0 lg:left-[20%] md:left-[15%] bg-[#FFEDD6]" id='carousel'>

                                <div id="item1" className="lg:flex md:flex carousel-item w-[100%]">

                                    <div className='lg:w-3/4 md:w-[100%] flex mx-auto lg:my-auto md:my-auto my-auto'>

                                        <img src="/images/childstep1.png" className="relative lg:w-[25%] md:w-[15%] w-[25%] lg:-left-[5%]" alt='img' />

                                        <p className='w-[80%] ml-auto text-black my-auto lg:text-base md:text-base text-sm lg:text-left md:text-left text-center  lg:leading-8 md:leading-6 leading-4' id='about2' >Here you start with us, and at this stage our primary focus revolves around motor & cognitive development of a child, by providing personalized & interesting toys to develop the same.02</p>

                                    </div>
                                </div>
                                <div id="item2" className="lg:flex md:flex carousel-item w-[100%]">

                                    <div className='lg:w-3/4 md:w-[100%] flex mx-auto lg:my-auto md:my-auto my-auto'>

                                        <img src="/images/childstep2.png" className="relative lg:w-[25%] md:w-[15%] w-[25%] lg:-left-[5%]" alt='img' />

                                        <p className='w-[80%] ml-auto text-black my-auto lg:text-base md:text-base text-sm lg:text-left md:text-left text-center lg:leading-8 md:leading-6 leading-4' id='about2' >At this time we delve more deeper by focusing on the basics of STEM (Science, Technology, Engineering, and Mathematics) education by providing educational toys, resources & gamified platforms to learn</p>

                                    </div>
                                </div>
                                <div id="item3" className="lg:flex md:flex carousel-item w-[100%]">

                                    <div className='lg:w-3/4 md:w-[100%] flex mx-auto lg:my-auto md:my-auto my-auto'>

                                        <img src="/images/childstep3.png" className="relative lg:w-[25%] md:w-[15%] w-[25%] lg:-left-[5%]" alt='img' />

                                        <p className='w-[80%] ml-auto text-black my-auto lg:text-base md:text-base text-sm lg:text-left md:text-left text-center lg:leading-8 md:leading-6 leading-4' id='about2' >This age block is crucial for us as we try to  identify one niche, based on a kid’s interest & takes a stem further in that + focusing on STEM as a Major here.</p>

                                    </div>
                                </div>
                                <div id="item4" className="lg:flex md:flex carousel-item w-[100%]">

                                    <div className='lg:w-3/4 md:w-[100%] flex mx-auto lg:my-auto md:my-auto my-auto'>

                                        <img src="/images/childstep4.png" className="relative lg:w-[25%] md:w-[15%] w-[25%] lg:-left-[5%]" alt='img' />

                                        <p className='w-[80%] ml-auto text-black my-auto lg:text-base md:text-base text-xs lg:text-left md:text-left text-center lg:leading-6 md:leading-6 leading-0' id='about2' >At this stage we give parents a choice to select a niche based on the kid's interest and develop their mind, thinking, and knowledge around it, so that they can reach the zenith point faster than anyone else.& we do all this with minimal to Zero Screen exposure, and also no matter at what stage your kid is we always take your kid on a growth cycle by helping them learn, achieve, and create amazing things.</p>

                                    </div>
                                </div>
                            </div>


                            {/* Click on the button to know how  */}

                            <div className='absolute lg:top-20 md:top-5 top-10 lg:text-7xl md:text-5xl mx-auto text-3xl text w-[100%]' id='group5heading'>We help parents at child’s every step</div>
                            <p className="absolute w-[100%] lg:top-44 md:top-20 top-[30%] lg:text-xl text-sm mx-auto text-black text-center font-normal leading-" id='group5subheading'>Click on the button to know how</p>

                            <div className='absolute lg:flex-0 flex lg:bottom-96 md:bottom-52 bottom-44 w-[100%]'>
                                <a href='#item1' className="lg:mx-auto md:mx-auto lg:h-11 md:h-10 h-10 bg-red-500 text-white lg:py-3 md:py-2 py-2 px-1 focus:outline-none hover:bg-white hover:text-red-400 m-auto rounded-lg text-base my-5 md:my-0 md:mt-0" onClick={handleMouseEnter} id='button1'>Infant-2year
                                </a>
                                <a href='#item2' className="lg:mx-auto md:mx-auto lg:h-11 md:h-10 h-10 bg-red-500 text-white  lg:py-3 md:py-2 py-2 px-1 focus:outline-none hover:bg-white hover:text-red-400 m-auto rounded-lg text-base my-5 md:my-0  md:mt-0" onClick={handleMouseEnter1} id='button1'>02-05
                                </a>
                                <a href='#item3' className="lg:mx-auto md:mx-auto lg:h-11 md:h-10 h-10 bg-red-500 text-white  lg:py-3 md:py-2 py-2 px-1 focus:outline-none hover:bg-white hover:text-red-400 m-auto rounded-lg text-base my-5 md:my-0  md:mt-0" onClick={handleMouseEnter2} id='button1'>05-08
                                </a>
                                <a href='#item4' className="lg:mx-auto md:mx-auto lg:h-11 md:h-10 h-10 bg-red-500 text-white  lg:py-3 md:py-2 py-2 px-1 focus:outline-none hover:bg-white hover:text-red-400 m-auto rounded-lg text-base my-5 md:my-0  md:mt-0" onClick={handleMouseEnter3} id='button1'>08+
                                </a>
                            </div>
                            <div className='absolute lg:flex-0 flex lg:bottom-[34%] md:bottom-[32.5%] bottom-[34%] w-[100%]'>
                                <img className="lg:w-64 md:w-48 w-28"
                                    src='images/Group5Train.png' alt='img' id='train' />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container lg:mx-auto flex lg:mt-20 lg:py-0 md:py-10 py-10 md:mx-auto flex-col items-center" >
                    <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-center md:text-center lg:mb-10 md:mb-10 items-center text-center" id='main1'>

                        <h1 className="title-font lg:text-8xl md:text-7xl lg:mx-auto text-5xl lg:mb-0 md:mb-10 mb-10 font-medium text-gray-900" id='about2heading'>How we help Parents
                        </h1>
                    </div>
                </div>
                <div className='container mx-auto'>
                <Explore1 />
                </div>

                {/* Be first in the queue to experience the future of parenting */}

                <div className='flex w-fit lg:mx-auto lg:h-96 md:h-80 h-80 mb-20 pb-10' id='group6'>
                    <div className='w- lg:mx-auton md:ml-10 '>
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
