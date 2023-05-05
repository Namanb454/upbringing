import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../Blogs.css'
import Cards from '../components/Cards'

function Blogs() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='' id='blog'>
                <div className="container mx-auto flex px- py-10 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center" id='blog1'>
                        <h1 className="title-font lg:text-8xl md:text-7xl mx-auto text-4xl mb-10 font-medium text-gray-900" id='blogHeading'>Blogs
                        </h1>
                        <p className="mb-8 text-black text-center font-normal leading-9" id='blog1'>Millions of designers and agencies around the world showcase their portfolio <br /> work on Dribbble - the home to the world’s best design and creative professionals.</p>
                    </div>

                </div>
            </div>
                    <Cards />

            {/* <div> */}
            {/* </div> */}
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Blogs
