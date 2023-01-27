import React from 'react'
import Navbar from '../Component/Navbar';
import Intro from '../Component/Intro';
import About from './About';
import Service from '../routes/Service';
import Contact from '../routes/Contact';

import Footer from '../Component/Footer';

function Home() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <About/>
      <Service/><br/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home;
