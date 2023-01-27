import React from 'react'
import"./Skills.css";

function Skills() {
  return (
    <>
      <div className='skills'>
        <div className='heading'>
          <h2>Skills</h2>
        </div>
        <div className='skills-container'>
          <div className='bars'>
            <div className='bars-box'>
              <h3>HTML</h3>
              <span>95%</span>
              <div className='light-bar'></div>
              <div className='percent-bar html-bar'></div>
            </div>
            <div className='bars-box'>
              <h3>Css</h3>
              <span>80%</span>
              <div className='light-bar'></div>
              <div className='percent-bar css-bar'></div>
            </div>
            <div className='bars-box'>
              <h3>Javascript</h3>
              <span>70%</span>
              <div className='light-bar'></div>
              <div className='percent-bar js-bar'></div>
            </div>
            <div className='bars-box'>
              <h3>React</h3>
              <span>75%</span>
              <div className='light-bar'></div>
              <div className='percent-bar react-bar'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
