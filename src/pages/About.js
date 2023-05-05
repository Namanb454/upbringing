import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../About.css'
import { values } from '../aboutcontent';

function About() {


  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div id='bgcolor'>
        <div className="container lg:mx-auto flex lg:py-10 md:py-10 md:mx-auto flex-col items-center" >
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-center md:text-center lg:mb-10 md:mb-10 items-center text-center" id='main1'>
            <h2 className=' lg:text-xl md:text-xl lg:mx-auto text-xl lg:mb-5 md:mb-5' id='about1heading'>OUR STORY</h2>
            <h1 className="title-font lg:text-8xl md:text-7xl lg:mx-auto text-4xl lg:mb-10 md:mb-10 font-medium text-gray-900" id='about2heading'>Tales Enrich

              <br />
              <div className="">our Innovation</div>
            </h1>
            <p className="w-fit text-black text-center lg:text-lg lg:mx-44 md:mx-14 font-normal lg:leading-9" id='about1'>At Up-bringing, we believe that every child deserves the opportunity to grow up happy, healthy, and confident. We understand that being a parent can be a challenging and overwhelming experience, and we want to make it easier for parents to provide their children with the best possible start in life.</p>
            <div className='w-full'>
              <img className="object-cover object-center lg:mx-auto rounded-lg md:mt-0" src="images/Group8.png" alt="img" />
            </div>
          </div>
        </div>

        {/* carousel */}
        <div className="carousel w-fit lg:h-96">
          <div id="item1" className="flex carousel-item  w-full">
            <img src="/images/about1.png" className="w-1/2" alt='img' />
            <p className='w-1/2 lg:px-28 md:px-10 lg:my-auto md:my-auto lg:leading-8 md:leading-6' id='about2'>We were inspired to start Up-bringing after watching the founder's sister struggle to find the right resources to support her child's growth and development. She realized that there was a need for a comprehensive, all-in-one solution that would not only provide parents with high-quality toys and resources, but also become a part of the journey by providing support and guidance parents need to raise happy, healthy, intelligent children.</p>
          </div>
          <div id="item2" className="flex carousel-item w-full">
            <img src="/images/about1.png" className="w-1/2" alt='img' />
            <p>naman</p>
          </div>
          <div id="item3" className="flex carousel-item w-full">
            <img src="/images/about1.png" className="w-1/2" alt='img' />
            <p>naman</p>
          </div>
          <div id="item4" className="flex carousel-item w-full">
            <img src="/images/about1.png" className="w-1/2" alt='img' />
            <p>naman</p>
          </div>
        </div>
        <div className="flex justify-center w-full lg:py-2 md:py-2 gap-2">
          <a href="#item1" className="btn btn-xs">1</a>
          <a href="#item2" className="btn btn-xs">2</a>
          <a href="#item3" className="btn btn-xs">3</a>
          <a href="#item4" className="btn btn-xs">4</a>
        </div>
      </div>



      <div className="container lg:mx-auto md:mx-auto flex lg:py-10 md:py-10 flex-col items-center" id='bgcolor'>
        <div className="lg:flex-grow md:w-1/2 lg:my-20 md:my-20 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center" id='main1'>
          <h2 className=' lg:text-xl md:text-xl mx-auto text-xl lg:mb-5 md:mb-5' id='about1heading'>OUR VALUES</h2>
          <h1 className="title-font lg:text-8xl md:text-7xl mx-auto text-4xl mb-10 font-medium text-gray-900" id='about2heading'>We believe that children

            <br />
            <div className=""> learn best through play</div>
          </h1>
          <p className="w-fit text-black text-center lg:text-lg lg:mx-60 md:mx-20 font-normal leading-9" id='about1'>These values guide everything we do at up-bringing, and we're committed to upholding them in all aspects of our business."</p>
          <div className='w-full'>
          </div>
        </div>
      </div>



      <div className="lg:grid md:grid lg:grid-cols-2 md:grid-cols-2 -gap-80 items-center lg:px-10" id='bgcolor'>
        {values.map((data) =>
          <div className='lg:mx-5 md:mx-5 text-start border-black hover:text-white mb-10 ' >
            <div className=" lg:h-screen md:h-96 group lg:py-16 md:py-16 transition transform hover:-translate-y-10 motion-reduce:transition-none motion-reduce:hover:transform-none  hover:bg-blue-950" id='ourValues' key={data.id} >
              <div className='flex border-black'>

                <h2 className=' lg:text-5xl md:text-2xl ml-10 font-bold lg:mb-40 md:mb-20' >{data.title}</h2>
                <div className="relative w-40 h-full">
                  <div className="w-full h-32">
                    <div className="transition-all transform translate-y-8 w-full h-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0">

                      <p className="text-sm  text-white">
                        <img className="absolute inset-0 object-cover mx-auto w-32 h-32 group-hover:opacity-"
                          src="images/Group2.png" alt="" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className='w-2/3 ml-10 lg:text-xl md:text-base mb-0 leading-8'>{data.content}</p>
            </div>
          </div>

        )}
      </div>




      <div>
        <Footer />
      </div>
    </div>
  )
}

export default About
