import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='bg-white container mx-auto'>

      <div>
        <Navbar />
      </div>

      <div className=''>
        <Main />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
