import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';
import styles from '../css/ContactUs.module.css';
import { useState } from 'react';

export const ContactUs = () => {
  const [bgColor,setBgColor]=useState("white");
  const [wordColor,setWordColor]=useState("black");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const form = useRef();


  const sendEmail = (e) => {

    e.preventDefault();

    if(!userName.trim()||!userEmail.trim()||!userMessage.trim){
      alert("All Fields are Required");
      return;
    }

    emailjs
      .sendForm('service_nh6cxed', 'template_rqwd1rg', form.current, {
        publicKey: 'WRIDcb3LS3bfRUkdv',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Thank you for the request! I will get back to you as soon as possible");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleMouseEnter = () => {
      setBgColor("rgb(143, 143, 143)");
      setWordColor("white");
  };

  const handleMouseLeave = () => {
    setBgColor("white");
    setWordColor("black");
  };

  return (
    <div className={styles.contactUs}>
        <form ref={form} onSubmit={sendEmail}>
        <div>
          <input type="text" name="user_name" placeholder='Full Name'  className={styles.typeBox}
            onChange={(e) => setUserName(e.target.value)}/>
        </div>
        <div>
          <input type="email" name="user_email" placeholder='Email Address' className={styles.typeBox} 
          onChange={(e) => setUserEmail(e.target.value)}/>
        </div>
        <div>
          <textarea name="message" placeholder='Type Message Here' className={styles.typeBox} style={{height:"20vh"}}
          onChange={(e) => setUserMessage(e.target.value)}/>
        </div>
        <div>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <input 
              type="submit" 
              value="Send" 
              style={{ width: "10rem", borderRadius: "10px", padding: "10px", margin: "20px", backgroundColor: bgColor, color:wordColor}} 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave} 
            />
          </div>
        </div>
        </form>
    </div>
  );
};