import React from 'react'
import './Contact.css'
function Contact(props) {
  return (
     <section>
        <div className='card-container'>
        <div className='image-container'>
            <img src={props.imageurl} alt="" />
        </div>
    </div>
    </section>
  )
}

export default Contact