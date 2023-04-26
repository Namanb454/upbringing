import React from 'react'
import '../Main.css'

function Main() {
    return (
        <div className='' id='main' >


            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px- py-10 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr- md:pr- flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl mx-auto text-3xl mb-10 font-medium text-gray-900" id='mainText'>We Bring out The best
                            <br />
                            <div className="lg:block">in You and Your kids</div>
                        </h1>
                        <p className="mb-8 mx-72 text-black text-center font-normal leading-relaxed">By offering subscription based <b> personalized and educational toys </b> that help nurture your child's curiosity, creativity, and passion for science, medicine, engineering, entrepreneurship, sports, and more.</p>

                        <button class="inline-flex items-center bg-red-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-red-400 m-auto rounded-lg text-base my-5  md:mt-0">Choose Your Plan
                        </button>
                        <img class="lg:w- md:w- object-cover object-center rounded-lg md:mt-0 mt-12" src="images/Group2.png" alt="step" />
                    </div>

                </div>




                <div className="container mx-auto flex px- py-10  md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr- md:pr- flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl mx-auto text-3xl mb-20 font-medium text-gray-900" id='mainText'>How we help kIds

                        </h1>



                        <img class="lg:w- md:w- object-cover object-center rounded-lg md:mt-0 mt-12" src="images/Group2.png" alt="step" />
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Main
