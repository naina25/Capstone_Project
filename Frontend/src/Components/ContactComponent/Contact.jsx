import React from 'react'
import './Contact.css'
function Contact(props) {
  return (
     <div className='card-container'>
        <div className='image-container'>
            <img src={props.imageurl} alt="" />
        </div>
        <div className='card-content'>
            <div className='card-title'>
                <h1>{props.text}</h1>
            </div>
            <div className='card-body'>
                <h3>{props.text2}</h3>
            </div>
        </div>
        
    </div>
  )
}

export default Contact