import React from 'react'
import"./Footer.css";
import { FaHome,FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa';


function Footer() {
  return (
    <>
    
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <div>
              <p style={{color:"#fff"}}>Gulshan-e-mamyar</p>
              <p style={{color:"#fff"}}>Karachi, Pakistan</p>
            </div>
          </div>

          <div className='phone'>
            <h4>  <FaPhone size={20}style={{color:"#fff",marginRight:"2rem"}}/>
            0303-9296636</h4>
           
          </div>
          <div className='Email'>
            <a href='hamzakhanmsd111@gmail.com ' target="Gmail">
            <h6>  <FaMailBulk size={20}style={{color:"#fff",marginRight:"2rem"}}/>
            hamzakhanmsd111@gmail.com</h6></a>
        </div>
      </div>
        <div className='right'>
          <h4>AboutMe</h4>
          <p>This is me Amir hamza.
            Iam fronted webdeveloper.
          </p>
          <div className='Social'>
            <a href='hamza_khan940@yahoo.com'>
            <FaFacebook size={30}style={{color:"blue",marginRight:"1rem"}}/></a>
            <a href='@hamzakhanmsd111' target="FaTwitter">
            <FaTwitter size={30}style={{color:"blue",marginRight:"1rem"}}/></a>
            <a href='www.linkedin.com/in/amir-hamza-5629a2255' target="FaLinkedin">
            <FaLinkedin size={30}style={{color:"#fff",marginRight:"1rem"}}/></a>
          </div>

        </div>
      </div>
       

      
    </div>
    </>
  )
}

export default Footer;
