import React from 'react'
import"./Services.css";


import a from "./img/a.jpg";
import de from "./img/de.jpg";
import h from "./img/h.jpg";
import ad from "./img/ad.jpg";
import Footer from '../Component/Footer';




function Service() {
  return (
    <>
    
    <h1 className='heading'>Service</h1>
    <div className="card-container ">
     
      <div className='image-container'>
  <img className="card-img-top" src={de} alt="Card image cap"/>
  </div>
  <div className='card-content'>
  <div className='card-title'>
    <h3> wed developer</h3> 
  </div>
  <div className="card-body">
    <p>A web developer is a programmer who develops World Wide Web applications using a client–server model. The applications typically use HTML, CSS, and JavaScript in the client, and any general-purpose programming language in the server. HTTP is used for communications between client and server.</p>
    </div>
    </div>
    <div className='btn'>
      <button>
        <a>
          Read more..
        </a>
      </button>

  
      </div>
   </div>
   <div className="card-container ">
     
     <div className='image-container'>
 <img className="card-img-top" src={a} alt="Card image cap"/>
 </div>
 <div className='card-content'>
 <div className='card-title'>
   <h3> Computerized Accounting</h3> 
 </div>
 <div className="card-body">
   <p>Computerized accounting is the process of using computers to record,store,and process financial transactions.which can automate many of the tasks involved in accounting,such as creating invoices,tracking payments,and preparing financial statements.
   (Quick book,tally,peachtree,advance excel)
   </p>
   </div>
   </div>
   <div className='btn'>
     <button>
       <a>
         Read more..
       </a>
     </button>

 
     </div>
  </div>
  <div className="card-container ">
     
     <div className='image-container'>
 <img className="card-img-top" src={h} alt="Card image cap"/>
 </div>
 <div className='card-content'>
 <div className='card-title'>
   <h3> Designer (ui/ux)</h3> 
 </div>
 <div className="card-body">
   <p>UX design is all about identifying and solving user problems ; <br/>  UI design is all about creating intuitive,aesthetically-pleasing, interactive interfaces.  UX design usually comes first in the product development process,followed by UI<br/>
   UI  UX Design Examples
Instagram As An   Example of Powerful Visuals...</p>
   </div>
   </div>
   <div className='btn'>
     <button>
       <a>
         Read more..
       </a>
     </button>

 
     </div>
  </div>
  <div className="card-container ">
     
     <div className='image-container'>
 <img className="card-img-top" src={ad} alt="Card image cap"/>
 </div>
 <div className='card-content'>
 <div className='card-title'>
   <h3> Adobe PhoteShop</h3> 
 </div>
 <div className="card-body">
   <p>
Adobe Photoshop is a critical tool for designers, web developers, graphic artists, photographers, and creative professionals. It is widely used for image editing, retouching, creating image compositions, website mockups,and adding affects.Digital or scanned images can be edited for use online or in-print.</p>
   </div>
   </div>
   <div className='btn'>
     <button>
       <a>
         Read more..
       </a>
     </button>

 
     </div>
  </div>
  <Footer/>
      
</>

    



  
     
   
  
  )
}

export default Service
