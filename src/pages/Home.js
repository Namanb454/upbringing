import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Footer from '../components/Footer'

function Home() {
  return (
    <>

      <div>
        <Navbar />
      </div>

      <div>
        <Main/>
      </div>

      <div>
        <Footer/>
      </div>
    </>
  )
}

export default Home
