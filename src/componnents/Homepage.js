import React from 'react'
import Home1 from '../Pages/Homepage/Home1'
import Home2 from '../Pages/Homepage/Home2'
import Home3 from '../Pages/Homepage/Home3'
import Home4 from '../Pages/Homepage/Home4'
import Home5 from '../Pages/Homepage/Home5'
import Home6 from '../Pages/Homepage/Home6'
import Header from '../Commoncomponents/Header/Header'
import Quotepage from '../Commoncomponents/Quote/Quotepage'
import Footer from '../Commoncomponents/Footer/Footer'

function Homepage() {
  return (
    <div>
      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
      <Home6 />
      <Quotepage/>
      <Footer/>
    </div>
  )
}

export default Homepage