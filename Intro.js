import"./Intro.css";
import React from 'react'
import m from "./Image/m.jpg";



function Intro() {
  return (
    <>
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello,My name is</h2>
                <h1 className="i-name">Amir Hamza</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">ui/ux</div>
                        <div className="i-title-item">PhoteShop</div>
                        <div className="i-title-item">Computerized Accounting</div>
                      
                    </div>
                </div>
                <div className="desc">
                <p>Hello Good Day i am senior website developer i have done a lot of projects<br/> I have 2 years experience in this field <br/>
                I hope you if you are work with me you love my work style and fast delivery on time Thanks</p>
              
                </div>
               
                
            </div>
          
                      

        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={m} alt=""className="i-img"/>

        </div>
        
      
    </div>
    
    
    
    
 </>
  )
}

export default Intro;
