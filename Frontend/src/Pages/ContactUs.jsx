import React from 'react'
import Contact from '../Components/ContactComponent/Contact'
import contact1 from "../assets/offersImgs/contact1.png";
import contact2 from "../assets/offersImgs/contact2.jpg";
import contact3 from "../assets/offersImgs/contact3.jpg";
function ContactUs() {
  return (
    <div className='contact'>
        <Contact imageurl={contact1} text={"Call us at"} text2={"+91-9876543210"}/>
        <Contact imageurl={contact2} text={"Email us at"} text2={"knowyourbus@gmail.com"}/>
        <Contact imageurl={contact3} text={"Reach us"} text2={"Noida sector 62,logix park, wing c."}/>
    </div>
 
  )
}

export default ContactUs