import React from 'react'

import Skills from '../Component/Skills';
 import"./About.css";
 import dv from "./img/dv.jpg";

function About() {
  return (
    <>
    
    <div className='a'>
      <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
          <img src={dv}alt=''className='a-img'/>
        </div>
      </div>
      <div className='a-right'>
        <h1 className='a-title'>About Me</h1>
        <p className='a-sub'>
        Greeting! My name is Amir hamza. I am a Software Engineer, Frontend Web Developer, and web designer with 1+ years of experience in HTML, CSS Javascript,  Bootstrap, React, and other frameworks. My website development is 100% hand-coded, responsive, and cross-browser-compatible.

       <br/> I have built mid to large-scale responsive websites. If you want to see my previous work, then just ping me. Following are my front-end development skills:
        <br/>
       
        I am proficient in Data entry and Microsoft Excel/Word related assignments as well as entering budgets.
        </p>
       
      </div>

      </div>
      <Skills/>
      </>
      
        
      
    
  )
}

export default About
