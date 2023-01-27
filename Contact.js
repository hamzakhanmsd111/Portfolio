
import"./Contact.css";

import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Footer from "../Component/Footer";





  
const Contact= () => { 
  const form = useRef();
  const click=()=>{
    alert("send successful")
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8f2bnud', 'template_t19jj9f', form.current, 's4RWKdYumRxcZzO7U')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    
   
    <form ref={form} onSubmit={sendEmail}>
      <h1>Contact ME</h1>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Subject</label>
      <input type="text" name="Subjct"/>
      <label>Message</label>
      <textarea name="message" />
      <button className="btn" onClick={click}>Send</button>
    </form>
    
    
    </>
  );
}
  
export default Contact;
  
